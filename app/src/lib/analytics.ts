/**
 * Umami analytics — cookieless, self-hosted, off unless configured.
 *
 * ── WHY UMAMI ──────────────────────────────────────────────────────────
 *
 * It is cookieless, so the site needs no consent banner. That matters more
 * than it sounds: a meaningful share of this site's audience is government
 * departments and development organisations, and a cookie dialogue opens a
 * data-handling conversation at the worst possible moment — first contact.
 *
 * It is also self-hosted and open source, which means the answer to "where
 * does our traffic data live" is "our own infrastructure" rather than a
 * third party's. That is the answer a procurement question wants.
 *
 * ── OFF BY DEFAULT, AND THAT IS DELIBERATE ─────────────────────────────
 *
 * Both variables must be set before anything loads. An unconfigured
 * deployment — a preview build, a local dev server, a fork — collects
 * nothing and injects no third-party script. Nobody has to remember to
 * disable it; it was never on.
 *
 * ── NO PERSONAL DATA, EVER ─────────────────────────────────────────────
 *
 * Event properties here carry what was clicked and where, never who did it.
 * `track()` deliberately takes a small, flat property bag rather than an
 * arbitrary object, so it stays awkward to pass a form value or an email
 * address into it by accident.
 */

const SCRIPT_URL = import.meta.env.VITE_UMAMI_SCRIPT_URL as string | undefined;
const WEBSITE_ID = import.meta.env.VITE_UMAMI_WEBSITE_ID as string | undefined;

/** The id Umami's own script attaches to, so we never inject it twice. */
const SCRIPT_ELEMENT_ID = 'umami-analytics';

/**
 * The events this site records.
 *
 * A closed set rather than free strings: an event name that only exists at
 * one call site is invisible in a dashboard six months later, and a typo
 * silently creates a second metric that looks like a drop in the first.
 */
export type AnalyticsEvent =
  /** Any primary or secondary call-to-action. */
  | 'cta_click'
  /** The contact form was accepted. THE conversion. */
  | 'contact_submitted'
  /** The contact form failed — separate, because a broken funnel and an empty one look identical in a pageview chart. */
  | 'contact_failed'
  /** Someone left for one of the live HAOS applications. */
  | 'application_launch'
  /** A document was downloaded. */
  | 'document_download'
  /** Navigation was used, and how. */
  | 'nav_use';

/** Flat, primitive, and small — see this file's docblock. */
export type AnalyticsProps = Record<string, string | number | boolean>;

declare global {
  interface Window {
    umami?: {
      track: (event: string, data?: AnalyticsProps) => void;
    };
  }
}

export function analyticsIsConfigured(): boolean {
  return Boolean(SCRIPT_URL && WEBSITE_ID);
}

/**
 * Injects the Umami script, once.
 *
 * Called from main.tsx rather than written into index.html because the
 * decision to load it at all depends on configuration, and a hardcoded
 * script tag cannot make that decision.
 *
 * Umami tracks SPA route changes itself by listening to the History API, so
 * there is nothing here for React Router to notify — and nothing that has
 * to be remembered when routes are added.
 */
export function initAnalytics(): void {
  if (!analyticsIsConfigured()) {
    return;
  }

  if (typeof document === 'undefined' || document.getElementById(SCRIPT_ELEMENT_ID)) {
    return;
  }

  const script = document.createElement('script');
  script.id = SCRIPT_ELEMENT_ID;
  script.async = true;
  script.defer = true;
  script.src = SCRIPT_URL as string;
  script.setAttribute('data-website-id', WEBSITE_ID as string);

  document.head.appendChild(script);
}

/**
 * Records an event.
 *
 * SAFE TO CALL UNCONDITIONALLY. When analytics is unconfigured, when the
 * script has not loaded yet, or when a blocker has removed it, this is a
 * no-op — so no call site needs to guard, and analytics can never be the
 * reason a button stops working.
 */
export function track(event: AnalyticsEvent, props?: AnalyticsProps): void {
  try {
    window.umami?.track(event, props);
  } catch {
    /*
     * Swallowed on purpose. Measuring an action must never be able to
     * break the action — a failed analytics call is a lost data point,
     * not a lost enquiry.
     */
  }
}
