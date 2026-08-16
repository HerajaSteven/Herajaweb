/**
 * The boundary between this site and wherever enquiries actually go.
 *
 * Today that is a configurable webhook, and if it is unset the page falls
 * back to an email address. Eventually it is a HAOS enquiries endpoint
 * feeding the admin dashboard. Both of those are transport details, and
 * keeping them here means swapping one for the other does not touch the
 * Contact page — the page asks this module to send an enquiry and renders
 * whatever result it gets back.
 *
 * ── A LIMIT WORTH BEING EXPLICIT ABOUT ──────────────────────────────────
 *
 * This is a static single-page app. Anything it can read, a visitor can read:
 * VITE_* variables are inlined into the published bundle at build time, so
 * CONTACT_ENDPOINT is public by construction. There is no server here to keep
 * a secret in.
 *
 * That is a constraint on what the endpoint may be, not a bug to fix in this
 * file. Whatever HAOS exposes for this must be safe to call unauthenticated —
 * a dedicated enquiries endpoint with server-side rate limiting and spam
 * protection, accepting only these fields. It must NOT be an authenticated
 * API reached with a machine credential, because that credential would ship
 * to every visitor.
 *
 * If an authenticated call is required, the transport has to move to a server
 * — which is what the planned Next.js route handler provides, and is the one
 * piece of that migration this module is designed to make cheap.
 */

import { fallbackEnquiryEmail } from '@/config/siteContent';

/** Where enquiries are sent. Public by construction — see above. */
const CONTACT_ENDPOINT = import.meta.env.VITE_CONTACT_WEBHOOK_URL as string | undefined;

/**
 * The address shown when the form cannot deliver.
 *
 * Managed in the HAOS admin (Site Content → Contact fallback) and baked in at
 * build time, so changing it does not need a code edit.
 *
 * It can be an empty string, and callers must treat that as "there is no
 * fallback" rather than substituting something plausible. An invented address
 * on a failure screen sends real enquiries into nothing, which is strictly
 * worse than telling the visitor the form is down.
 */
export const FALLBACK_ENQUIRY_EMAIL = fallbackEnquiryEmail;

/** Whether a fallback exists at all. The UI branches on this. */
export const HAS_FALLBACK_EMAIL = fallbackEnquiryEmail.trim() !== '';

/**
 * Enquiry types, per the Phase 1 contact specification. The value routes the
 * enquiry to the responsible person and is the single property attached to
 * the `contact_submitted` analytics event — it is safe to send because it
 * describes the enquiry, not the person.
 */
export const ENQUIRY_TYPES = [
  { value: 'government', label: 'Government' },
  { value: 'financial-institution', label: 'Financial institution' },
  { value: 'cooperative', label: 'Cooperative' },
  { value: 'agribusiness', label: 'Agribusiness' },
  { value: 'development-organization', label: 'Development organization' },
  { value: 'technology-partner', label: 'Technology partner' },
  { value: 'careers', label: 'Careers' },
  { value: 'other', label: 'Other' },
] as const;

export type EnquiryType = (typeof ENQUIRY_TYPES)[number]['value'];

export interface Enquiry {
  firstName: string;
  lastName: string;
  email: string;
  organization: string;
  enquiryType: EnquiryType;
  /** ISO 3166-1 alpha-2. Empty string until chosen. */
  country: string;
  message: string;
}

export type SendResult =
  /** Delivered. */
  | { ok: true }
  /** No endpoint configured — a deployment gap, not a visitor error. */
  | { ok: false; reason: 'not_configured' }
  /** Endpoint exists and refused or was unreachable. Retrying may work. */
  | { ok: false; reason: 'request_failed' };

/**
 * Whether a submission can currently be delivered at all.
 *
 * The page uses this to decide what to show *before* anyone fills the form
 * in. Letting someone type a message and only then telling them it cannot be
 * sent is a worse failure than saying so up front.
 */
export function contactIsConfigured(): boolean {
  return Boolean(CONTACT_ENDPOINT);
}

/**
 * A mailto: carrying the enquiry the visitor already typed, so the fallback
 * costs them a click rather than retyping everything into their mail client.
 */
export function fallbackMailto(enquiry?: Partial<Enquiry>): string {
  const subject = enquiry?.enquiryType
    ? `Enquiry — ${ENQUIRY_TYPES.find((t) => t.value === enquiry.enquiryType)?.label ?? 'General'}`
    : 'Enquiry via heraja.com';

  const body = [
    enquiry?.organization && `Organisation: ${enquiry.organization}`,
    enquiry?.country && `Country: ${enquiry.country}`,
    enquiry?.message && `\n${enquiry.message}`,
  ]
    .filter(Boolean)
    .join('\n');

  const params = new URLSearchParams({ subject });
  if (body) params.set('body', body);

  return `mailto:${FALLBACK_ENQUIRY_EMAIL}?${params.toString()}`;
}

/**
 * Send an enquiry.
 *
 * Never throws — the page renders a state for each outcome, and an exception
 * escaping here would leave the form stuck on "Sending…" with no explanation.
 */
export async function sendEnquiry(enquiry: Enquiry): Promise<SendResult> {
  if (!CONTACT_ENDPOINT) return { ok: false, reason: 'not_configured' };

  try {
    const res = await fetch(CONTACT_ENDPOINT, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        first_name: enquiry.firstName,
        last_name: enquiry.lastName,
        email: enquiry.email,
        organization: enquiry.organization,
        enquiry_type: enquiry.enquiryType,
        country: enquiry.country,
        message: enquiry.message,
        source: 'website_contact_form',
        page_url: window.location.href,
        submitted_at: new Date().toISOString(),
      }),
    });

    if (!res.ok) return { ok: false, reason: 'request_failed' };
    return { ok: true };
  } catch {
    return { ok: false, reason: 'request_failed' };
  }
}
