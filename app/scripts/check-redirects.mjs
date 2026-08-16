import { readFileSync } from 'fs';
import { fileURLToPath } from 'url';
import { join } from 'path';
import { readRoutes } from './routes.mjs';

/*
 * Validates vercel.json redirects against the live route table.
 *
 * A redirect map is write-only in practice — nobody reads it again — so the
 * failure modes are all silent. A destination that was itself removed gives a
 * visitor a redirect to a 404. A chain costs two round trips. A source that
 * matches a live route shadows a real page. None of these show up in a build.
 */

const ROOT = fileURLToPath(new URL('..', import.meta.url));
const routes = new Set(readRoutes(new URL('../src/App.tsx', import.meta.url)));
const config = JSON.parse(readFileSync(join(ROOT, 'vercel.json'), 'utf-8'));
const redirects = config.redirects ?? [];

const bySource = new Map(redirects.map((r) => [r.source, r]));
const problems = [];
const notes = [];

for (const r of redirects) {
  const dest = r.destination.split(/[?#]/)[0];

  // A source that is also a live route would shadow the page.
  if (routes.has(r.source)) {
    problems.push(`source "${r.source}" is also a live route — the redirect shadows the page`);
  }

  // Destination must be somewhere a visitor can actually land.
  if (!routes.has(dest)) {
    if (bySource.has(dest)) {
      problems.push(`"${r.source}" → "${dest}", which is itself redirected (chain)`);
    } else {
      problems.push(`"${r.source}" → "${dest}", which is not a live route`);
    }
  }

  // Direct and indirect loops.
  const seen = new Set([r.source]);
  let cursor = dest;
  while (bySource.has(cursor)) {
    if (seen.has(cursor)) {
      problems.push(`redirect loop involving "${r.source}"`);
      break;
    }
    seen.add(cursor);
    cursor = bySource.get(cursor).destination.split(/[?#]/)[0];
  }

  if (r.source === r.destination) problems.push(`"${r.source}" redirects to itself`);
}

// Duplicate sources: the first wins and the rest are dead config.
const dupes = redirects.map((r) => r.source).filter((s, i, a) => a.indexOf(s) !== i);
if (dupes.length) problems.push(`duplicate source(s): ${[...new Set(dupes)].join(', ')}`);

/*
 * /company/leadership is withheld rather than deleted, so its redirect is
 * deliberately temporary — a 301 is cached by browsers indefinitely and would
 * keep sending people away from the page after it is restored.
 */
const leadership = bySource.get('/company/leadership');
if (!leadership) {
  notes.push('/company/leadership has no redirect — it will 404 rather than degrade');
} else if (leadership.permanent === true) {
  problems.push(
    '/company/leadership is a permanent (301) redirect. It must be temporary: the page is withheld, ' +
      'not removed, and a 301 is cached by browsers long after the page returns.',
  );
} else {
  notes.push('/company/leadership → 302 (temporary), correct for a withheld page');
}

const permanent = redirects.filter((r) => r.permanent).length;

console.log(`\ncheck-redirects: ${redirects.length} redirects, ${routes.size} live routes`);
console.log(`  ${permanent} permanent (301) · ${redirects.length - permanent} temporary (302/307)`);
notes.forEach((n) => console.log(`  note: ${n}`));

if (problems.length) {
  console.error(`\n  ${problems.length} problem(s):`);
  problems.forEach((p) => console.error(`    ${p}`));
  process.exit(1);
}

console.log('  no loops, no chains, no collisions, every destination resolves.\n');
