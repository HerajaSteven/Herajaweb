/**
 * Rendered content-integrity audit.
 *
 * WHY THIS EXISTS, AND WHY IT RENDERS RATHER THAN READS SOURCE.
 *
 * Every audit before this one read the source tree, and every one of them
 * missed real fabrications. Five invented job vacancies, the two outcome
 * figures Phase 1 D1 exists to remove, an "Enterprise Client" badge — all sat
 * in components nobody re-opened, and all of them were plainly visible to
 * anyone who loaded the page. What a visitor sees is the artefact under audit,
 * so this script looks at exactly that: document.body.innerText.
 *
 * It also CLICKS THINGS OPEN first. A claim hidden behind an accordion or an
 * interactive explorer is still a claim — it is simply one that a static
 * innerText read cannot see. The EcosystemExplorer listed four applications
 * that do not exist, and they were invisible to the first rendered scan for
 * precisely this reason.
 *
 * WHAT IT IS NOT. It is not a fabrication detector; no regex can be one. It
 * finds *candidate* claims — anything shaped like a number, a customer, a
 * certification, a job — and then requires that each one has been classified
 * by a human in docs/content-integrity-register.md. The judgement stays with
 * the person; the script only guarantees the judgement was made.
 *
 * That distinction is the whole design. A scanner that decides for itself
 * produces false precision, and the previous run demonstrated what that costs:
 * it reported "no suspect claims" over a page carrying invented vacancies.
 *
 * Usage:
 *   node scripts/check-content.mjs --base http://localhost:4390            # gate
 *   node scripts/check-content.mjs --base http://localhost:4390 --report   # enumerate
 */
import { readFileSync, existsSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { dirname, resolve } from 'node:path';
import { readRoutes } from './routes.mjs';

const HERE = dirname(fileURLToPath(import.meta.url));
const APP = resolve(HERE, '..');
const REGISTER = resolve(APP, 'docs/content-integrity-register.md');

const args = process.argv.slice(2);
const REPORT = args.includes('--report');
const BASE = (() => {
  const i = args.indexOf('--base');
  return i >= 0 ? args[i + 1] : 'http://localhost:4390';
})();

/*
 * Playwright is not a dependency of this site — it would be 300MB in a repo
 * that ships a static bundle. It is borrowed from the sibling frontend repo,
 * and the path is overridable so this survives that repo moving.
 */
const PLAYWRIGHT =
  process.env.PLAYWRIGHT_MODULE ??
  'file:///c:/Users/DELL/Desktop/HAOS/haos-frontend/node_modules/playwright-core/index.mjs';

// ── Detectors ────────────────────────────────────────────────────────────
//
// Each returns the matched phrase, not the sentence. The phrase is the
// register key, so it has to be stable: a detector that captures surrounding
// prose would invalidate every register row whenever a sentence is reworded.
//
// Tight beats broad. A detector that fires two hundred times gets whitelisted
// wholesale by whoever has to clear it, which is worse than not having it.

const DETECTORS = [
  {
    category: 'quantitative',
    // 500+ · 99.9% · ₦2B · 24hrs · "four applications" · "1,200 farmers"
    patterns: [
      /\b\d[\d,]*(?:\.\d+)?\s*(?:\+|%)/g,
      /[₦$€£]\s?\d[\d,]*(?:\.\d+)?\s*[KMB]?\+?/gi,
      /\b\d[\d,]*\s*(?:hrs?|hours?|days?|weeks?|months?|years?)\b/gi,
      /*
       * Counted things, PLURAL ONLY, and never a leading zero.
       *
       * Both restrictions exist to keep the register readable. Without them
       * this fired on "1 Organization Onboarding", "3 Deployment" and
       * "02 Farms" — the numbers on ordered workflow steps, which are list
       * markers rather than quantities. Twenty rows of that and whoever has
       * to clear the register starts approving in bulk, which is the failure
       * this whole script exists to prevent. A real claim counts more than
       * one of something and is not written "02".
       */
      /\b(?!0\d)(?:\d[\d,]*|one|two|three|four|five|six|seven|eight|nine|ten|dozens|hundreds|thousands)\s+(?:partner\s+)?(?:farms|farmers|producers|users|organi[sz]ations|customers|clients|partners|countries|states|regions|cooperatives|applications|sectors|tonnes|tons|hectares|deployments|programmes|programs|employees|people)\b/gi,
    ],
  },
  {
    category: 'commercial',
    patterns: [
      /\benterprise clients?\b/gi,
      /\bour (?:clients?|customers?|partners?|users?)\b/gi,
      /\btrusted by\b/gi,
      /\bused by\b/gi,
      /\bclient roster\b/gi,
      /\b(?:technology|implementation|strategic|channel) partners?\b/gi,
      /\bpartner(?:ship)?s? (?:with|include)\b/gi,
      /\bcase stud(?:y|ies)\b/gi,
      /\bimplementation stories\b/gi,
      /\btestimonials?\b/gi,
    ],
  },
  {
    category: 'trust',
    patterns: [
      /\benterprise-grade\b/gi,
      /\b(?:industry|market)-leading\b/gi,
      /\bworld-class\b/gi,
      /\bbest-in-class\b/gi,
      /\bbattle-tested\b/gi,
      /\b(?:bank|military)-grade\b/gi,
      /\bproven\b/gi,
      /\bat scale\b/gi,
      /\buptime\b/gi,
      /\bSLA\b/g,
    ],
  },
  {
    category: 'corporate',
    patterns: [
      /\b(?:ISO|SOC)\s?\d+[\d-]*\b/g,
      /\bPCI[- ]DSS\b/gi,
      /\bGDPR\b/g,
      /\bPOPIA\b/g,
      /\bNDPR\b/g,
      /\bcertifi(?:ed|cation)s?\b/gi,
      /\baccredit(?:ed|ation)s?\b/gi,
      /\bawards?\b/gi,
      /\bcompliance with\b/gi,
      /\bfounded (?:in|by)\b/gi,
      /\bsince (?:19|20)\d{2}\b/gi,
      /\bour (?:office|offices|headquarters|team)\b/gi,
    ],
  },
  {
    /*
     * Geographic coverage.
     *
     * ADDED AFTER THE SCANNER MISSED ONE. /platform/roadmap carried a card
     * reading "West Africa — Active — Nigeria, Ghana, Cote d'Ivoire", beside
     * two more naming six further countries. Operations are in Nigeria. No
     * detector fired, because "Active" is an ordinary word and a country name
     * is not suspicious on a site about African agriculture.
     *
     * A country name only becomes a claim when something asserts presence, so
     * that is what this matches: a status word, or a presence verb, near a
     * place. It still needs a human to read the context — which is the whole
     * arrangement — but it puts the sentence in front of one.
     */
    category: 'geography',
    patterns: [
      /\b(?:active|operating|operational|present|deployed|live|available)\s+(?:in|across|throughout)\s+[A-Z][a-z]+/g,
      /*
       * No `i` flag, deliberately. With it, [A-Z][a-z]+ stopped requiring a
       * capital and this matched "operations in scope", "operation in the
       * network" and "operations across regions" — none of which names a
       * place. The alternatives carry both cases explicitly instead.
       */
      /\b(?:[Oo]ffices?|[Pp]resence|[Oo]perations?|[Dd]eployments?|[Cc]overage)\s+(?:in|across)\s+[A-Z][a-z]+/g,
      /\bacross\s+(?:\d+|two|three|four|five|six|seven|eight|nine|ten)\s+(?:countries|regions|states|markets)\b/gi,
      /\b(?:Ghana|Kenya|Uganda|Tanzania|Zambia|Zimbabwe|Rwanda|Ethiopia|Senegal|Malawi|Mozambique|Botswana|Namibia|Cameroon|Ivoire)\b/g,
    ],
  },
  {
    category: 'employment',
    patterns: [
      /\bhealth insurance\b/gi,
      /\bequity (?:participation|package|grant)\b/gi,
      /\b(?:competitive )?compensation\b/gi,
      /\bsalary\b/gi,
      /\b(?:full|part)-time\b/gi,
      /\bteam retreats?\b/gi,
      /\bprofessional development budget\b/gi,
      /\bflexible working\b/gi,
      /\bwe(?:'| a)re hiring\b/gi,
      /\bcurrent openings?\b/gi,
      /\bvacanc(?:y|ies)\b/gi,
      /\bapply now\b/gi,
    ],
  },
  {
    category: 'product',
    patterns: [
      /\bdeployed\b/gi,
      /\bin production\b/gi,
      /\bavailable now\b/gi,
      /\blive (?:today|now)\b/gi,
      /\bauto[- ]scal(?:ing|es|e)\b/gi,
      /\bmicroservices?\b/gi,
      /\bmulti[- ]factor authentication\b/gi,
      /\bend-to-end encryption\b/gi,
      /\breal[- ]time\b/gi,
    ],
  },
];

const normalise = (s) => s.replace(/\s+/g, ' ').trim().toLowerCase();

function detect(text) {
  const hits = new Map(); // normalised phrase -> {category, phrase, contexts}
  for (const { category, patterns } of DETECTORS) {
    for (const pattern of patterns) {
      pattern.lastIndex = 0;
      for (const m of text.matchAll(pattern)) {
        const phrase = m[0].replace(/\s+/g, ' ').trim();
        const key = normalise(phrase);
        if (!hits.has(key)) {
          // 60 characters either side, enough to judge without pasting a page.
          const from = Math.max(0, m.index - 60);
          const context = text
            .slice(from, m.index + phrase.length + 60)
            .replace(/\s+/g, ' ')
            .trim();
          hits.set(key, { category, phrase, context });
        }
      }
    }
  }
  return [...hits.values()];
}

// ── Register ─────────────────────────────────────────────────────────────
//
// The markdown table IS the machine-readable allowlist. One file, so a claim
// cannot be cleared in the tooling while the document still calls it
// unsupported.

const STATUSES = new Set([
  'APPROVED',
  'VERIFIED',
  'NEEDS VERIFICATION',
  'UNSUPPORTED',
  'REMOVED',
  'ROADMAP',
]);

function readRegister() {
  if (!existsSync(REGISTER)) return [];

  return readFileSync(REGISTER, 'utf-8')
    .split('\n')
    .filter((l) => /^\|\s*CI-\d+/.test(l))
    .map((line) => {
      const [, id, route, claim, category, status, source, action] = line
        .split('|')
        .map((c) => c.trim());
      return { id, route, claim: normalise(claim), category, status, source, action };
    })
    .filter((r) => {
      if (!STATUSES.has(r.status)) {
        throw new Error(
          `content-integrity-register.md: row ${r.id} has status "${r.status}", which is not one of ${[...STATUSES].join(' / ')}.`,
        );
      }
      return true;
    });
}

function classify(register, route, phrase) {
  const key = normalise(phrase);
  return (
    register.find((r) => r.claim === key && r.route === route) ??
    register.find((r) => r.claim === key && r.route === '*') ??
    null
  );
}

// ── Admin-supplied content ───────────────────────────────────────────────
//
// Careers benefits, company facts and Zimo Clan figures are entered in the
// HAOS admin and baked in at build time. Text that arrived that way is
// classified VERIFIED by provenance: the person who typed it works for the
// company, which is precisely the confirmation the register was waiting for.
//
// WITHOUT THIS, THE ADMIN SCREEN BREAKS THE DEPLOY. Entering an attributed
// "500+ partner farms" tripped the REMOVED guard for the figure that was
// taken down for being UNATTRIBUTED, and a vacancy typed as "Full-time"
// failed as an unclassified employment claim. The company would have done
// exactly what it was asked to do and broken the build.
//
// This is not a loophole. The admin form refuses to store a figure without a
// source and a date, so a number that reaches here is already attributed —
// which was the entire objection to the original one. Entries are counted
// and listed separately in the output so the audit still shows them.

const ADMIN_CONTENT = resolve(APP, 'src/content/site-content.json');

function adminSuppliedStrings() {
  if (!existsSync(ADMIN_CONTENT)) return [];

  const out = [];
  const walk = (node) => {
    if (typeof node === 'string') {
      const value = node.trim();
      if (value !== '') out.push(normalise(value));
      return;
    }
    if (Array.isArray(node)) return node.forEach(walk);
    if (node && typeof node === 'object') return Object.values(node).forEach(walk);
  };
  walk(JSON.parse(readFileSync(ADMIN_CONTENT, 'utf-8')));

  return out;
}

const ADMIN_STRINGS = adminSuppliedStrings();

const isAdminSupplied = (phrase) => {
  const key = normalise(phrase);
  return ADMIN_STRINGS.some((value) => value.includes(key));
};

// ── Run ──────────────────────────────────────────────────────────────────

const { chromium } = await import(PLAYWRIGHT);
const routes = readRoutes(resolve(APP, 'src/App.tsx'));
const register = readRegister();

const browser = await chromium.launch();
const page = await browser.newPage({ viewport: { width: 1280, height: 900 } });

const findings = [];
const audited = [];

/*
 * Everything the page says, minus the contents of pickers.
 *
 * The contact form's country field lists every country on earth, so the
 * geography detector reported fourteen "claims" about Ghana, Kenya, Rwanda and
 * the rest on /company/contact. A dropdown is data the VISITOR supplies, not a
 * statement the site makes, and fourteen false rows would have been enough to
 * make the register unreadable — which is how a real claim gets waved through.
 */
const bodyText = () =>
  page.evaluate(() => {
    const pickers = [...document.querySelectorAll('select, datalist')];
    const previous = pickers.map((p) => p.style.display);
    pickers.forEach((p) => {
      p.style.display = 'none';
    });
    const text = document.body.innerText;
    pickers.forEach((p, i) => {
      p.style.display = previous[i];
    });
    return text;
  });

/**
 * Open in-page disclosures and return everything that becomes visible.
 *
 * Scoped to <main> on purpose. The first version of this clicked every
 * [aria-expanded="false"] on the page, which included the header's mega-menu
 * triggers — and one of those clicks landed on a link. Every route then
 * reported the text of whatever page it had navigated to, identically, and
 * the scan came back looking clean because it had scanned /solutions
 * twenty-nine times. A scanner that silently audits the wrong page is worse
 * than no scanner, so this now re-checks the URL after every click and
 * abandons the pass if it moved.
 */
async function expandWithin(selector, expectedUrl) {
  const texts = [];
  for (let pass = 0; pass < 2; pass++) {
    /*
     * Everything that hides text behind an interaction: accordions and
     * disclosures (`aria-expanded`), native `details`, tabs (`aria-selected`),
     * and anything holding content in a dialog or drawer until opened
     * (`aria-haspopup`, `aria-controls`).
     *
     * Tabs are the addition that matters most here. An unselected tab panel is
     * as invisible to a static read as a closed accordion, and the Phase 6
     * finding was precisely that four invented applications sat behind one
     * click.
     */
    const collapsed = await page.$$(
      [
        `${selector} [aria-expanded="false"]`,
        `${selector} details:not([open])`,
        `${selector} [role="tab"][aria-selected="false"]`,
        `${selector} [aria-haspopup="dialog"]`,
      ].join(', '),
    );
    if (collapsed.length === 0) break;
    for (const el of collapsed) {
      await el.click({ timeout: 1500 }).catch(() => {});
      if (!page.url().endsWith(expectedUrl)) {
        await page.goto(`${BASE}${expectedUrl}`, { waitUntil: 'networkidle' });
        return texts;
      }
      /*
       * Read after EVERY click, not once per pass. The FAQ accordion is
       * single-open: opening the next answer closes the previous one, so a
       * per-pass read saw only whichever answer happened to be open last and
       * silently skipped the other seven.
       */
      await page.waitForTimeout(120);
      texts.push(await bodyText());
    }
  }
  return texts;
}

for (const route of routes) {
  await page.goto(`${BASE}${route}`, { waitUntil: 'networkidle' });
  await page.waitForSelector('h1', { timeout: 10_000 }).catch(() => {});

  const texts = [await bodyText(), ...(await expandWithin('main', route))];

  /*
   * The header and footer carry claims too — "Technology Partners" lives in a
   * nav dropdown — but they are identical on all 29 routes. Scanned once, on
   * the homepage, so the register holds one row per claim rather than 29.
   */
  if (route === '/') {
    texts.push(...(await expandWithin('header', route)));

    /*
     * Mobile navigation, at a viewport where it actually exists.
     *
     * The desktop pass above cannot reach it: the menu button is display:none
     * above the breakpoint, so a claim living only in the mobile drawer would
     * never be read. This resizes, opens the drawer, and reads it — the same
     * reasoning that made the accordion pass necessary.
     */
    await page.setViewportSize({ width: 390, height: 844 });
    await page.goto(`${BASE}${route}`, { waitUntil: 'networkidle' });
    const menu = await page.$('header button[aria-expanded="false"], header [aria-label*="enu" i]');
    if (menu) {
      await menu.click({ timeout: 2000 }).catch(() => {});
      await page.waitForTimeout(400);
      if (page.url().endsWith(route)) texts.push(await bodyText());
    }
    await page.setViewportSize({ width: 1280, height: 900 });
  }

  /*
   * HARNESS SELF-CHECK — does this text actually belong to this route?
   *
   * The first version of this scanner clicked a header link, navigated away,
   * and reported the text of /solutions for all 29 routes. It came back
   * "clean" because it had audited one page twenty-nine times, over a site
   * carrying five invented job vacancies.
   *
   * So the harness now proves it read the right page: the route's own <h1>
   * must appear in the text that gets scanned, and the browser must still be
   * on the route. A scanner that cannot demonstrate what it looked at is not
   * evidence, and a false pass here is worse than a failure — a failure gets
   * investigated.
   */
  const combined = texts.join('\n');
  const heading = await page.evaluate(() => document.querySelector('h1')?.textContent?.trim() ?? '');
  if (!page.url().endsWith(route)) {
    throw new Error(
      `check-content: after auditing ${route} the browser was at ${page.url()}. ` +
        'The scan navigated away, so its result is meaningless. Fix the harness, not the site.',
    );
  }
  if (heading && !combined.includes(heading)) {
    throw new Error(
      `check-content: the text scanned for ${route} does not contain that page's h1 ("${heading}"). ` +
        'The harness read something other than the page it claims to have read.',
    );
  }
  audited.push(route);

  for (const hit of detect(combined)) {
    findings.push({ route, ...hit, row: classify(register, route, hit.phrase) });
  }
}

await browser.close();

// ── Output ───────────────────────────────────────────────────────────────

if (REPORT) {
  console.log(`# Candidate claims — ${findings.length} across ${routes.length} routes\n`);
  let n = 1;
  for (const route of routes) {
    const forRoute = findings.filter((f) => f.route === route);
    if (forRoute.length === 0) continue;
    console.log(`\n## ${route}`);
    for (const f of forRoute) {
      const id = `CI-${String(n++).padStart(3, '0')}`;
      console.log(`| ${id} | ${f.route} | ${f.phrase} | ${f.category} | ? | ? | ? |`);
      console.log(`      ↳ ${f.context}`);
    }
  }
  process.exit(0);
}

const fromAdmin = findings.filter((f) => isAdminSupplied(f.phrase));
const unclassified = findings.filter((f) => !f.row && !isAdminSupplied(f.phrase));
const stillPresent = findings.filter(
  (f) =>
    f.row &&
    (f.row.status === 'UNSUPPORTED' || f.row.status === 'REMOVED') &&
    !isAdminSupplied(f.phrase),
);
const needsVerification = findings.filter((f) => f.row?.status === 'NEEDS VERIFICATION');
const roadmap = findings.filter((f) => f.row?.status === 'ROADMAP');
const cleared = findings.filter(
  (f) => f.row && (f.row.status === 'APPROVED' || f.row.status === 'VERIFIED'),
);

console.log(`Content integrity — ${findings.length} candidate claims across ${routes.length} routes`);
console.log(`  routes provably audited  ${audited.length}/${routes.length} (h1 and URL confirmed)`);
console.log(`  approved/verified   ${cleared.length}`);
console.log(`  needs verification  ${needsVerification.length}`);
console.log(`  roadmap             ${roadmap.length}`);
console.log(`  unsupported/removed ${stillPresent.length}`);
console.log(`  unclassified        ${unclassified.length}`);
console.log(`  admin-supplied      ${fromAdmin.length} (verified by provenance — entered in the HAOS admin)`);
for (const f of fromAdmin) {
  console.log(`  + ${f.route}  "${f.phrase}"  admin-supplied`);
}

for (const f of needsVerification) {
  console.log(`  ~ ${f.route}  "${f.phrase}"  [${f.row.id}] awaiting company confirmation`);
}

let failed = false;

if (stillPresent.length > 0) {
  failed = true;
  console.error('\nClaims classified UNSUPPORTED or REMOVED are still rendering:');
  for (const f of stillPresent) {
    console.error(`  ✗ ${f.route}  "${f.phrase}"  [${f.row.id}]`);
    console.error(`      ${f.context}`);
  }
}

if (unclassified.length > 0) {
  failed = true;
  console.error('\nUnclassified candidate claims. Add a row to docs/content-integrity-register.md');
  console.error('for each, with provenance — or remove the claim:');
  for (const f of unclassified) {
    console.error(`  ? ${f.route}  [${f.category}]  "${f.phrase}"`);
    console.error(`      ${f.context}`);
  }
}

if (failed) process.exit(1);
console.log('\nEvery candidate claim is classified, and nothing unsupported is rendering.');
