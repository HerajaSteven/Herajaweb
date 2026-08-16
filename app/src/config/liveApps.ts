/**
 * The real HAOS apps this marketing site links out to.
 *
 * WHY THIS FILE EXISTS. The "Launch Farm Intelligence" button on
 * /platform/farm-intelligence pointed at https://farm.heraja.com, which
 * answers 404 (Vercel: DEPLOYMENT_NOT_FOUND — the domain is attached to a
 * project that has no deployment). The link was written when the app was
 * expected to be live and simply outlived that expectation, with nothing
 * anywhere recording that the two facts were connected.
 *
 * So "is this app actually deployed?" is now a field rather than something
 * you find out from a visitor. `live: false` hides the launch button and
 * leaves the rest of the page exactly as it was; flipping it back to true
 * is the whole re-enable.
 *
 * Verified against the live domains on 2026-08-16:
 *   marketplace.heraja.com      200  <title>HAOS Marketplace</title>
 *   echimusika.heraja.com       200  <title>e-Chimusika</title>
 *   logistics.heraja.com        200  <title>HAOS Logistics</title>
 *   farm-web.heraja.com         200  <title>Heraja Farm Intelligence</title>
 *   coordination-web.heraja.com 404  not deployed
 *
 * The 2026-08-04 pass recorded Farm Intelligence as unavailable. It was
 * not: the URL checked was `farm.heraja.com`, and the application lives at
 * `farm-web.heraja.com`. A wrong hostname and an undeployed app are
 * indistinguishable from a 404, which is why the checked URL is recorded
 * above rather than only its result.
 */
export interface LiveApp {
  /** Button text, e.g. "Launch Marketplace". */
  label: string
  url: string
  /**
   * False when the domain does not currently serve the app. The launch
   * button is omitted rather than shipped broken — a CTA that 404s costs
   * more than a missing one.
   */
  live: boolean
  /** Why it is not live, so the next person does not have to re-diagnose it. */
  note?: string
}

export const LIVE_APPS = {
  marketplace: {
    label: 'Launch Marketplace',
    url: 'https://marketplace.heraja.com',
    live: true,
  },
  echimusika: {
    label: 'Launch e-Chimusika',
    url: 'https://echimusika.heraja.com',
    live: true,
  },
  farmIntelligence: {
    label: 'Launch Farm Intelligence',
    /*
     * `farm-web.heraja.com`, NOT `farm.heraja.com`.
     *
     * The original entry pointed at `farm.heraja.com`, which does answer
     * 404 — but the application was never there. It is deployed at
     * `farm-web.heraja.com` and has been all along, so the gating logic
     * below did exactly what it was designed to do, against a hostname
     * that was simply wrong.
     *
     * The cost of that was a live product with its launch button hidden on
     * the page describing it. Worth remembering when adding an app here:
     * this file's `live` flag is only as truthful as the URL beside it, so
     * verify the URL answers before trusting the flag.
     */
    url: 'https://farm-web.heraja.com',
    live: true,
  },
  logistics: {
    label: 'Launch Logistics',
    url: 'https://logistics.heraja.com',
    live: true,
  },
  coordinationNetwork: {
    label: 'Launch Coordination Network',
    // The `-web` hostname, matching the pattern the other apps use.
    // Confirmed 404 on 2026-08-16 — genuinely not deployed, unlike Farm
    // Intelligence above, which only looked that way.
    url: 'https://coordination-web.heraja.com',
    live: false,
    note: 'Same as Farm Intelligence: domain attached, no deployment. coordination-web exists in haos-frontend.',
  },
} as const satisfies Record<string, LiveApp>

export type LiveAppKey = keyof typeof LIVE_APPS

/**
 * The launch button for an app, or undefined when it is not deployed.
 *
 * Returning undefined is deliberate: PlatformTemplate already treats a
 * missing launchCta as "no launch button, promote heroCta back to
 * primary", so an undeployed app degrades to exactly the page that
 * existed before any of this was wired up.
 */
export function launchCtaFor(key: LiveAppKey): { label: string; href: string } | undefined {
  const app = LIVE_APPS[key]

  return app.live ? { label: app.label, href: app.url } : undefined
}
