import type { ProductScreenshotProps } from '@/components/evidence/ProductScreenshot';

/**
 * Real screenshots of the deployed Heraja applications.
 *
 * Captured from the running products at an iPhone-class viewport and 3× DPR —
 * the four signed-out screens from production, the six Farm Intelligence
 * screens from the application running against a seeded demonstration farm.
 * None is a prototype, a mockup or a render, and none has been retouched.
 *
 * ── EVIDENCE DEPTH IS UNEVEN, ON PURPOSE ────────────────────────────────
 *
 * Farm Intelligence has six screens here; Marketplace, e-Chimusika and
 * Logistics have one each. That asymmetry is real and is left visible. The
 * alternative — padding the thinner products out, or holding Farm
 * Intelligence back to match them — would either fabricate evidence or hide
 * it. Depth follows what has actually been captured.
 */
export type EvidenceItem = Omit<ProductScreenshotProps, 'priority'>;

/**
 * ── ORDERING CONSTRAINT: fi-dashboard and fi-livestock ───────────────────
 *
 * The two screens disagree with each other. Captured in the same session,
 * from the same farm and the same batch:
 *
 *     fi-dashboard   Batch Day 25 · Mortality 0.82%
 *     fi-livestock   Day 24 of 41 · 13 (2.6%) Mortality
 *
 * This is a genuine defect in Farm Intelligence, recorded separately in
 * docs/product-defects.md. It is not the website's to fix, and the
 * screenshots must not be edited to conceal it — falsifying evidence to make
 * a marketing page tidier is precisely the failure this site exists to avoid.
 *
 * What the site must not do is invite the comparison. Two defences, because
 * ordering alone is not enough:
 *
 *   1. The dashboard is cropped to `band`, which frames the vaccination
 *      alert and leaves the metric strip outside the visible region. This is
 *      the load-bearing one: with the contradicting figure not rendered, no
 *      layout at any width can put the two numbers side by side. It is also
 *      the better crop on its own merits — the alert is the strongest thing
 *      on that screen, and the top of it is a verification prompt.
 *
 *   2. Reports sits between them in the order below, so even in a
 *      three-across desktop grid or a mobile snap-scroll showing part of the
 *      next card, they are never neighbours.
 *
 * assertEvidenceOrdering() below checks the second condition in development.
 */
const DASHBOARD = 'fi-dashboard';
const LIVESTOCK = 'fi-livestock';

export const FARM_INTELLIGENCE_EVIDENCE: EvidenceItem[] = [
  {
    src: '/assets/product/fi-dashboard.png',
    application: 'Farm Intelligence',
    screen: 'Dashboard',
    crop: 'band',
    caption:
      'The system flags an overdue vaccination on its own, against the interval expected for the species — it reasons about the record rather than just storing it.',
    annotation:
      '“No vaccination recorded in the last 21 days (expected interval for poultry) — overdue by 9 day(s).”',
    alt: 'Farm Intelligence dashboard showing an alert that no vaccination has been recorded in the last 21 days, the expected interval for poultry, and that it is overdue by nine days.',
  },
  {
    src: '/assets/product/fi-reports.png',
    application: 'Farm Intelligence',
    screen: 'Daily Report',
    crop: 'full',
    caption:
      'Reporting happens twice a day, and the form asks what was served rather than what was eaten — the product does not claim a measurement it cannot make.',
    annotation: '“Which round is this? Morning / Evening” · “Feed served (kg)” · “Water served (litres)”',
    alt: 'Farm Intelligence daily report form for a broiler batch on day 24, with a morning and evening selector, and fields for mortality count, feed served in kilograms, water served in litres, flock condition and treatment applied.',
  },
  {
    src: '/assets/product/fi-livestock.png',
    application: 'Farm Intelligence',
    screen: 'Livestock',
    crop: 'full',
    caption:
      'Growth is derived from logged weigh-ins and feed conversion from what was actually served, so both figures trace back to records a farmer entered.',
    annotation: '“Feed Conversion (as served)” — 1.392 kg of feed served per kg gained',
    alt: 'Farm Intelligence livestock screen for a broiler batch on day 24 of 41, showing 500 birds placed, 487 alive, 2.6 per cent mortality, a growth chart built from three weigh-ins, and a feed conversion figure of 1.392 kilograms served per kilogram gained.',
  },
  {
    src: '/assets/product/fi-vaccinations.png',
    application: 'Farm Intelligence',
    screen: 'Vaccinations',
    crop: 'full',
    caption:
      'Vaccinations are recorded by name, route and batch lot number — the level of detail an audit needs, not a checkbox.',
    alt: 'Farm Intelligence vaccination logging screen listing named poultry vaccines including Newcastle Disease and Gumboro.',
  },
  {
    src: '/assets/product/fi-profile.png',
    application: 'Farm Intelligence',
    screen: 'Profile',
    crop: 'full',
    caption: 'The farm itself is a record: name, size and location, held against the farmer’s identity.',
    alt: 'Farm Intelligence profile screen showing a farm name, its size in hectares and its recorded farm information.',
  },
  {
    src: '/assets/product/fi-wallet.png',
    application: 'Farm Intelligence',
    screen: 'Wallet',
    crop: 'full',
    caption:
      'Settlement is a shared platform service rather than a farm feature — the same wallet the other applications use.',
    alt: 'Farm Intelligence wallet screen showing an available balance and an amount held in escrow, in Nigerian naira.',
  },
];

/** One signed-out screen each — see the note on evidence depth above. */
export const APPLICATION_EVIDENCE: Record<string, EvidenceItem> = {
  marketplace: {
    src: '/assets/product/marketplace-home.png',
    application: 'Marketplace',
    screen: 'Home',
    crop: 'top',
    caption: 'HAOS Marketplace, deployed and publicly reachable.',
    alt: 'The HAOS Marketplace application home screen on a mobile device.',
  },
  echimusika: {
    src: '/assets/product/echimusika-home.png',
    application: 'e-Chimusika',
    screen: 'Home',
    crop: 'top',
    caption: 'e-Chimusika, deployed and publicly reachable.',
    alt: 'The e-Chimusika application home screen on a mobile device.',
  },
  logistics: {
    src: '/assets/product/logistics-home.png',
    application: 'Logistics',
    screen: 'Home',
    crop: 'top',
    caption: 'HAOS Logistics, deployed and publicly reachable.',
    alt: 'The HAOS Logistics application home screen on a mobile device.',
  },
  farmIntelligence: {
    src: '/assets/product/farm-intelligence-home.png',
    application: 'Farm Intelligence',
    screen: 'Home',
    crop: 'top',
    caption: 'Farm Intelligence, deployed and publicly reachable.',
    alt: 'The Heraja Farm Intelligence application home screen on a mobile device.',
  },
};

/**
 * Fails loudly in development if the two contradicting screens end up next to
 * each other.
 *
 * A comment explaining the constraint survives exactly as long as the next
 * person reads it. This runs.
 */
export function assertEvidenceOrdering(items: EvidenceItem[]): void {
  if (!import.meta.env.DEV) return;

  const index = (name: string) => items.findIndex((i) => i.src.includes(name));
  const dashboard = index(DASHBOARD);
  const livestock = index(LIVESTOCK);

  if (dashboard === -1 || livestock === -1) return;

  if (Math.abs(dashboard - livestock) <= 1) {
    throw new Error(
      `Product evidence: ${DASHBOARD} and ${LIVESTOCK} are adjacent (positions ${dashboard} and ${livestock}). ` +
        'They report different mortality rates and batch days for the same batch, so placing them together ' +
        'invites a visitor to spot the contradiction. Keep another screen between them — see the ordering note ' +
        'in src/config/productEvidence.ts and docs/product-defects.md.',
    );
  }
}
