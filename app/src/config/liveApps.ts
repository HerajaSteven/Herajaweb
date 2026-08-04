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
 * Verified against the live domains on 2026-08-04:
 *   marketplace.heraja.com  200  <title>HAOS Marketplace</title>
 *   echimusika.heraja.com   200  <title>e-Chimusika</title>
 *   logistics.heraja.com    200  <title>HAOS Logistics</title>
 *   farm.heraja.com         404  DEPLOYMENT_NOT_FOUND
 *   coordination.heraja.com 404  DEPLOYMENT_NOT_FOUND
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
    note: 'Deployed and reachable, but this site has no e-Chimusika page to launch it from yet.',
  },
  farmIntelligence: {
    label: 'Launch Farm Intelligence',
    url: 'https://farm.heraja.com',
    live: false,
    note: 'Vercel returns DEPLOYMENT_NOT_FOUND — the domain is attached to a project with no deployment. Set live: true once farm-web is deployed.',
  },
  logistics: {
    label: 'Launch Logistics',
    url: 'https://logistics.heraja.com',
    live: true,
  },
  coordinationNetwork: {
    label: 'Launch Coordination Network',
    url: 'https://coordination.heraja.com',
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
