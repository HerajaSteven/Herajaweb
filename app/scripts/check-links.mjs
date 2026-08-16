import { readFileSync, readdirSync, statSync, existsSync } from 'fs';
import { join, relative } from 'path';
import { fileURLToPath } from 'url';
import { readRoutes } from './routes.mjs';

/*
 * Fails the build on an internal reference that points nowhere.
 *
 * ── WHY THIS IS STRICTER THAN IT LOOKS ──────────────────────────────────
 *
 * The first version of this checker matched only JSX attributes —
 * to="/x" and href="/x" — and reported the tree clean. It was not: the
 * codebase writes most of its links as object literals (href: '/x') inside
 * nav, footer, CTA and related-page configuration, and 73 dead links were
 * sitting behind that blind spot after the route restructure.
 *
 * The lesson is that a link guard is only worth the patterns it covers, so
 * this file enumerates them explicitly and PATTERN_COVERAGE below is checked
 * against the repository at run time. If a new way of writing an internal
 * path appears and is not covered here, the checker says so out loud rather
 * than silently passing.
 *
 * Every reference is classified rather than pattern-matched into pass/fail:
 * an external URL, a mailto, a tel, an in-page anchor and a route are
 * different things, and only one of them can be a dead internal route.
 */

const ROOT = fileURLToPath(new URL('..', import.meta.url));
const SRC = join(ROOT, 'src');
const PUBLIC = join(ROOT, 'public');

const routes = new Set(readRoutes(new URL('../src/App.tsx', import.meta.url)));

/* Redirect sources are legitimate link targets — they resolve, via a 301/302. */
const redirects = new Map(
  (JSON.parse(readFileSync(join(ROOT, 'vercel.json'), 'utf-8')).redirects ?? []).map((r) => [
    r.source,
    r.destination,
  ]),
);

/*
 * How internal paths are written in this repository. Each entry captures the
 * path in group 1. Adding a pattern here is how you extend coverage; the
 * self-check below flags anything that looks like a path but matches none of
 * them.
 */
const PATTERNS = [
  { name: 'jsx-attribute', re: /\b(?:to|href|src)="([^"]*)"/g },
  { name: 'jsx-expression-string', re: /\b(?:to|href|src)=\{\s*['"]([^'"]*)['"]\s*\}/g },
  { name: 'object-literal', re: /\b(?:to|href|src|url|path|destination|source)\s*:\s*['"]([^'"]*)['"]/g },
  { name: 'navigate-call', re: /\bnavigate\(\s*['"]([^'"]*)['"]/g },
  /*
   * Paths used as object KEYS rather than values — the breadcrumb label map is
   * keyed this way. A key for a route that no longer exists is stale config,
   * and a missing key makes a breadcrumb render a raw URL slug, so these are
   * worth classifying even though they are not links.
   */
  { name: 'object-key', re: /^\s*['"](\/[^'"]*)['"]\s*:/gm },
  /*
   * Paths listed in an array or Set literal — SECTION_ONLY_PATHS in
   * navigation.ts is written this way. Entries here are still paths that must
   * resolve to something, so they are classified like any other reference.
   */
  { name: 'array-or-set-entry', re: /['"](\/[a-zA-Z][^'"]*)['"]\s*[,\]]/g },
  // Template literals: only the static prefix is checkable, e.g.
  // `/company/contact?role=${...}` → /company/contact
  { name: 'template-literal', re: /`(\/[a-zA-Z0-9/_-]*)[?#`]/g },
];

function walk(dir) {
  return readdirSync(dir).flatMap((entry) => {
    const full = join(dir, entry);
    return statSync(full).isDirectory() ? walk(full) : [full];
  });
}

/** Comments are not code. My own prose describing a removed href="#" is not a link. */
function stripComments(source) {
  return source.replace(/\/\*[\s\S]*?\*\//g, '').replace(/^[ \t]*\/\/.*$/gm, '');
}

function classify(raw) {
  const ref = raw.trim();

  if (ref === '') return { kind: 'empty' };
  if (/^(https?:)?\/\//i.test(ref)) return { kind: 'external' };
  if (/^mailto:/i.test(ref)) return { kind: 'mailto' };
  if (/^tel:/i.test(ref)) return { kind: 'tel' };
  if (/^data:/i.test(ref)) return { kind: 'data-uri' };
  if (ref.startsWith('#')) return { kind: 'anchor' };
  if (!ref.startsWith('/')) return { kind: 'relative-or-dynamic' };

  // Strip query and hash — /company/contact?role=x resolves to /company/contact.
  const path = ref.split(/[?#]/)[0].replace(/\/$/, '') || '/';

  // Static assets live in public/ and are verified on disk, not against routes.
  if (/\.[a-z0-9]{2,5}$/i.test(path)) {
    return existsSync(join(PUBLIC, path))
      ? { kind: 'asset', path }
      : { kind: 'missing-asset', path };
  }

  if (routes.has(path)) return { kind: 'route', path };
  if (redirects.has(path)) return { kind: 'redirected', path, to: redirects.get(path) };

  return { kind: 'dead', path };
}

const files = walk(SRC).filter((f) => /\.(tsx?|jsx?)$/.test(f));
const tally = {};
const dead = [];
const redirectedInternal = [];
const missingAssets = [];
let scanned = 0;

for (const file of files) {
  const source = stripComments(readFileSync(file, 'utf-8'));
  const lines = source.split('\n');

  lines.forEach((line, i) => {
    const seen = new Set();
    for (const { re } of PATTERNS) {
      re.lastIndex = 0;
      for (const m of line.matchAll(re)) {
        if (seen.has(m[1])) continue;
        seen.add(m[1]);
        scanned += 1;

        const result = classify(m[1]);
        tally[result.kind] = (tally[result.kind] ?? 0) + 1;

        const where = { file: relative(SRC, file).replace(/\\/g, '/'), line: i + 1, ref: m[1] };
        if (result.kind === 'dead') dead.push(where);
        if (result.kind === 'missing-asset') missingAssets.push(where);
        /*
         * An internal link pointing at a redirect source is not broken, but it
         * costs the visitor a round trip the site could have avoided. Reported,
         * not failed.
         */
        if (result.kind === 'redirected') redirectedInternal.push({ ...where, to: result.to });
      }
    }
  });
}

/*
 * Coverage self-check.
 *
 * The patterns above are a guess about how this codebase writes links, and
 * that guess was wrong once already. So rather than trust it, sweep the source
 * for anything that LOOKS like an internal path in a string literal, and
 * report any occurrence the patterns did not capture.
 *
 * A hit here does not necessarily mean a broken link — it means this checker
 * cannot see it, which is the condition that let 73 dead links through before.
 */
const uncovered = [];
for (const file of files) {
  const source = stripComments(readFileSync(file, 'utf-8'));
  source.split('\n').forEach((line, i) => {
    /*
     * <Route path="..."> declares a route rather than linking to one. It is
     * the source of truth this checker reads, so it is not a reference.
     */
    if (/<Route\s+path=/.test(line)) return;

    for (const m of line.matchAll(/['"](\/[a-zA-Z][a-zA-Z0-9/_.-]*)['"]/g)) {
      const captured = PATTERNS.some((p) => {
        p.re.lastIndex = 0;
        return [...line.matchAll(p.re)].some((c) => c[1] === m[1]);
      });
      if (!captured) {
        uncovered.push({
          file: relative(SRC, file).replace(/\\/g, '/'),
          line: i + 1,
          ref: m[1],
          context: line.trim().slice(0, 80),
        });
      }
    }
  });
}

console.log(`\ncheck-links: ${files.length} files, ${scanned} internal references scanned`);
for (const [kind, n] of Object.entries(tally).sort((a, b) => b[1] - a[1])) {
  console.log(`  ${String(n).padStart(4)}  ${kind}`);
}

if (redirectedInternal.length) {
  console.log(`\n  ${redirectedInternal.length} internal link(s) point at a redirect rather than the destination:`);
  redirectedInternal.forEach((r) => console.log(`    ${r.file}:${r.line}  ${r.ref} → ${r.to}`));
}

let failed = false;

if (uncovered.length) {
  failed = true;
  console.error(
    `\n  ${uncovered.length} path-like string(s) this checker cannot see — its patterns do not cover them:`,
  );
  uncovered.forEach((u) => console.error(`    ${u.file}:${u.line}  ${u.ref}\n      ${u.context}`));
  console.error(
    '\n  Add a pattern to PATTERNS so these are classified, rather than leaving them unchecked.',
  );
}

if (missingAssets.length) {
  failed = true;
  console.error(`\n  ${missingAssets.length} reference(s) to a file that is not in public/:`);
  missingAssets.forEach((r) => console.error(`    ${r.file}:${r.line}  ${r.ref}`));
}

if (dead.length) {
  failed = true;
  console.error(`\n  ${dead.length} internal link(s) point at a route that does not exist:`);
  dead.forEach((r) => console.error(`    ${r.file}:${r.line}  ${r.ref}`));
  console.error('\n  Point each at a live route, or add the route to src/App.tsx.');
}

if (failed) process.exit(1);
console.log('\n  0 dead internal links, 0 missing assets.\n');
