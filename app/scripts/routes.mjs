import { readFileSync } from 'fs';

/*
 * The one place that answers "what routes does this site have?".
 *
 * src/App.tsx is the manifest; both generate-sitemap.mjs and check-links.mjs
 * read it through here so they cannot disagree.
 *
 * WHY THIS STRIPS COMMENTS FIRST. The original regex ran over the raw file,
 * which meant any <Route path="..."> appearing inside a comment was treated
 * as a real route. That is not hypothetical: /company/leadership is
 * deliberately commented out until real leadership content exists, and a
 * naive parse put it straight back into the sitemap — publishing to crawlers
 * exactly the page that was withheld from visitors. A prose comment
 * containing the literal string `<Route path="...">` also emitted a route
 * called "...".
 *
 * A commented-out route is a route that does not exist. Stripping comments
 * before parsing is what makes that true for the tooling as well as the
 * router.
 */
export function readRoutes(appTsxUrl) {
  const raw = readFileSync(appTsxUrl, 'utf-8');

  const withoutComments = raw
    // Block comments, including the {/* ... */} form JSX uses.
    .replace(/\/\*[\s\S]*?\*\//g, '')
    // Line comments. Safe here because App.tsx contains no string literal
    // with a `//` in it — there are no URLs in this file, only paths.
    .replace(/^\s*\/\/.*$/gm, '');

  const paths = [...withoutComments.matchAll(/<Route\s+path="([^"]+)"/g)]
    .map((m) => m[1])
    // The catch-all renders NotFound; it is not an address.
    .filter((p) => p !== '*');

  if (paths.length === 0) {
    throw new Error(
      'readRoutes: parsed zero routes from App.tsx. The regex or the file shape changed — fix this rather than shipping an empty sitemap.',
    );
  }

  const duplicates = paths.filter((p, i) => paths.indexOf(p) !== i);
  if (duplicates.length > 0) {
    throw new Error(`readRoutes: duplicate route path(s): ${[...new Set(duplicates)].join(', ')}`);
  }

  return paths;
}
