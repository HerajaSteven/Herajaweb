import raw from '@/content/site-content.json';

/**
 * Content managed in the HAOS admin, baked in at build time.
 *
 * See scripts/fetch-site-content.mjs for how it gets here and why it is not
 * fetched in the browser. Everything below is a plain read of a committed
 * JSON file — there is no network, no loading state, and no failure mode at
 * runtime.
 *
 * ── THE RULE THIS MODULE ENFORCES ───────────────────────────────────────
 *
 * Absent content hides its section; it never renders an empty one. That is
 * the same rule the site already applies to undeployed applications
 * (liveApps.ts) and to the missing brochure (documents.ts), and it exists
 * because a heading with nothing under it reads as neglect to exactly the
 * reader this site is trying to convince.
 */

export interface Leader {
  name: string;
  role: string;
  bio: string;
  photo_url: string;
  linkedin_url: string;
}

export interface SiteContent {
  leadership: Leader[];
  social: Partial<Record<'linkedin' | 'twitter' | 'facebook' | 'instagram' | 'youtube', string>>;
  brochure: { available: boolean; url: string; size_label: string; updated_at: string };
  contact: {
    email: string;
    phone: string;
    office: string;
    hours: string;
    response_expectation: string;
  };
}

const content = raw as SiteContent;

/** Named people, in admin order. Empty until someone is added in the admin. */
export const leadership: Leader[] = content.leadership ?? [];

/**
 * Whether the leadership page may be published.
 *
 * Read by the page itself, by the navigation, and by the sitemap generator,
 * so all three agree by construction rather than by somebody remembering to
 * update each of them.
 */
export const hasLeadership = leadership.length > 0;

/**
 * Social profiles that actually exist. Only networks with a URL are present,
 * so a caller can render every entry without re-checking for blanks.
 */
export const socialLinks = Object.entries(content.social ?? {}).filter(
  ([, url]) => typeof url === 'string' && url.trim() !== '',
) as [keyof SiteContent['social'], string][];

/** The corporate brochure, or undefined when no file has been supplied. */
export function brochureDownload(): { href: string; size?: string } | undefined {
  const b = content.brochure;

  return b?.available && b.url ? { href: b.url, size: b.size_label || undefined } : undefined;
}

/**
 * How to reach the company, as entered in the admin.
 *
 * Every field can be an empty string, and empty means "do not show this row"
 * rather than "show a blank". The contact page renders only what is set — a
 * label with nothing beside it reads as neglect, and inventing a plausible
 * phone number or office address on a site whose argument is that it does not
 * overclaim would be worse than showing neither.
 */
export const contactDetails = {
  email: content.contact?.email ?? '',
  phone: content.contact?.phone ?? '',
  office: content.contact?.office ?? '',
  hours: content.contact?.hours ?? '',
};

/**
 * The address the contact form offers when it cannot deliver.
 *
 * Deliberately the same value the page displays: one address means the shown
 * one and the fallback one can never drift apart, which is how a site ends up
 * quietly posting failed enquiries somewhere nobody reads.
 *
 * Empty string when none is configured, and callers must treat that as "there
 * is no fallback" rather than substituting one.
 */
export const fallbackEnquiryEmail: string = content.contact?.email ?? '';

/** Optional, e.g. "We reply within two working days". Never invent one. */
export const responseExpectation: string = content.contact?.response_expectation ?? '';
