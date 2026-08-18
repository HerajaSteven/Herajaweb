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

export interface Vacancy {
  title: string;
  location: string;
  type: string;
  url: string;
}

/**
 * A Zimo Clan operating figure.
 *
 * `source` and `as_of` are not optional. The backend drops any row missing
 * either, so a value that reaches here is always attributable — which is what
 * lets the page write "as reported by X, March 2026" instead of stating a bare
 * number. Zimo Clan is a Heraja subsidiary, so an unattributed figure about it
 * is Heraja quoting itself.
 */
export interface ZimoMetric {
  label: string;
  value: string;
  source: string;
  as_of: string;
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
  careers: { benefits: string[]; vacancies: Vacancy[] };
  company: {
    registered_name: string;
    founded_location: string;
    founded_year: string;
    headquarters: string;
  };
  zimo_metrics: ZimoMetric[];
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

/*
 * ── PHASE 7: CONTENT THAT USED TO NEED A DEVELOPER ──────────────────────
 *
 * Careers benefits, company facts and Zimo Clan figures were hardcoded in
 * this repository, which meant confirming any of them required an edit and a
 * deploy. They are the company's facts, so they now belong to whoever owns
 * the facts.
 *
 * That move also settles a verification problem rather than just a workflow
 * one. These claims sat in the content register as NEEDS VERIFICATION because
 * nobody at the company had supplied them — someone else had written them.
 * When the entry is made in the HAOS admin, the person typing works for the
 * company, so the entry IS the confirmation. Provenance comes from the act.
 *
 * Every accessor below keeps the rule this module already enforces: absent
 * content hides its section, and never renders an empty one.
 */

/** Employment terms, as entered in the admin. Empty until someone confirms them. */
export const careerBenefits: string[] = content.careers?.benefits ?? [];

/** Open roles. Empty means the page says nothing about vacancies either way. */
export const vacancies: Vacancy[] = content.careers?.vacancies ?? [];

/**
 * Whether the site may state where the company was founded.
 *
 * Deliberately separate from headquarters and registered name: "founded in
 * Lagos, Nigeria" conflated four claims that a diligence reader checks
 * against four different sources, and the admin form splits them for exactly
 * that reason.
 */
export const companyFacts = content.company ?? {
  registered_name: '',
  founded_location: '',
  founded_year: '',
  headquarters: '',
};

/**
 * Where the company was founded, as one phrase, or an empty string.
 *
 * Year is appended only when both are known — "founded in Lagos, Nigeria in
 * 2023" is a stronger claim than either half, and half of it is not worth
 * implying.
 */
export const foundedPhrase: string = (() => {
  const place = companyFacts.founded_location.trim();
  const year = companyFacts.founded_year.trim();
  if (place === '' && year === '') return '';
  if (place === '') return `founded in ${year}`;
  if (year === '') return `founded in ${place}`;
  return `founded in ${place} in ${year}`;
})();

/** Attributable Zimo Clan figures. Anything unattributed never reaches here. */
export const zimoMetrics: ZimoMetric[] = content.zimo_metrics ?? [];
