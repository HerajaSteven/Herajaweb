import { writeFileSync, readFileSync, existsSync, mkdirSync } from 'fs';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

/*
 * Pulls admin-managed content from HAOS at BUILD time.
 *
 * Four things the site needs and cannot own — the leadership team, social
 * profile links, the corporate brochure, and the contact fallback address —
 * are edited in the HAOS admin. This fetches them once per build and writes
 * src/content/site-content.json, which the app imports like any other module.
 *
 * ── WHY BUILD TIME AND NOT THE BROWSER ──────────────────────────────────
 *
 *   · The site keeps working when HAOS does not. A backend outage cannot
 *     take the corporate website down, which matters because the website is
 *     what a stranger checks when deciding whether the company is real.
 *   · The content ends up in the served HTML, so it is indexable. Leadership
 *     names are a credibility signal that has to survive a crawler.
 *   · No runtime request means no loading state, no layout shift, and no
 *     third-party origin on the critical path.
 *
 * The cost is that an edit goes live on the next deploy rather than instantly.
 * Nothing here changes hourly, so that is the right trade — and a deploy hook
 * on the admin save closes the gap to a couple of minutes.
 *
 * ── FAILURE IS NOT FATAL ────────────────────────────────────────────────
 *
 * If HAOS is unreachable, or unset, this keeps whatever is already committed
 * and exits 0. A build must not fail because a CMS was down; the alternative
 * is a site that cannot be deployed at all during an unrelated outage.
 */

const ENDPOINT = process.env.SITE_CONTENT_URL;
const TIMEOUT_MS = Number(process.env.SITE_CONTENT_TIMEOUT_MS ?? 10000);

const HERE = dirname(fileURLToPath(import.meta.url));
const OUT = join(HERE, '..', 'src', 'content', 'site-content.json');

/** The shape every consumer can rely on, whatever happens below. */
const EMPTY = {
  leadership: [],
  social: {},
  brochure: { available: false, url: '', size_label: '', updated_at: '' },
  contact: { fallback_email: '', response_expectation: '' },
};

function keepExisting(reason) {
  if (existsSync(OUT)) {
    const current = JSON.parse(readFileSync(OUT, 'utf-8'));
    const n = current.leadership?.length ?? 0;
    console.log(`site-content: ${reason} — keeping the committed copy (${n} leadership entries).`);
    return;
  }

  mkdirSync(dirname(OUT), { recursive: true });
  writeFileSync(OUT, JSON.stringify(EMPTY, null, 2) + '\n');
  console.log(`site-content: ${reason} — wrote an empty document so the build can proceed.`);
}

if (!ENDPOINT) {
  keepExisting('SITE_CONTENT_URL is not set');
  process.exit(0);
}

try {
  const controller = new AbortController();
  const timer = setTimeout(() => controller.abort(), TIMEOUT_MS);

  const res = await fetch(ENDPOINT, {
    signal: controller.signal,
    headers: { Accept: 'application/json' },
  });
  clearTimeout(timer);

  if (!res.ok) {
    keepExisting(`HAOS answered ${res.status}`);
    process.exit(0);
  }

  const body = await res.json();
  const data = body?.data;

  /*
   * Validated rather than trusted. This file is committed and shipped, so a
   * malformed response must not be able to replace a good copy with rubbish
   * that only shows up as a blank page after deploy.
   */
  if (
    !data ||
    !Array.isArray(data.leadership) ||
    typeof data.social !== 'object' ||
    typeof data.brochure !== 'object' ||
    typeof data.contact !== 'object'
  ) {
    keepExisting('HAOS returned an unexpected shape');
    process.exit(0);
  }

  mkdirSync(dirname(OUT), { recursive: true });
  writeFileSync(OUT, JSON.stringify(data, null, 2) + '\n');

  const named = data.leadership.length;
  const social = Object.keys(data.social).length;
  console.log(
    `site-content: fetched — ${named} leadership entr${named === 1 ? 'y' : 'ies'}, ` +
      `${social} social link${social === 1 ? '' : 's'}, ` +
      `brochure ${data.brochure.available ? 'available' : 'not set'}, ` +
      `contact email ${data.contact.email ? 'set' : 'not set'}.`,
  );
} catch (error) {
  keepExisting(`could not reach HAOS (${error.name === 'AbortError' ? 'timed out' : error.message})`);
}
