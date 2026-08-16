import { readFileSync, writeFileSync } from 'fs';
import { readRoutes } from './routes.mjs';

// Derives the sitemap from src/App.tsx's real <Route path="..."> list — the
// true source of truth for what routes exist — instead of a hand-maintained
// public/sitemap.xml that silently drifts the moment a route is added
// without someone remembering to also edit the sitemap (2026-07-25 SEO audit
// finding #4).

const SITE_URL = 'https://www.heraja.com';

// Comment-aware — see scripts/routes.mjs. A commented-out route (currently
// /company/leadership, held back until real content exists) must not reach a
// crawler, and the previous inline parse put it in the sitemap.
let routePaths = readRoutes(new URL('../src/App.tsx', import.meta.url));

/*
 * /company/leadership is registered unconditionally but only publishes itself
 * once someone has been added in the HAOS admin. The page renders the 404
 * while it is empty, so advertising it here would point a crawler at a 404 —
 * both read the same content file so they cannot disagree.
 */
const siteContent = JSON.parse(
  readFileSync(new URL('../src/content/site-content.json', import.meta.url), 'utf-8'),
);
if (!Array.isArray(siteContent.leadership) || siteContent.leadership.length === 0) {
  routePaths = routePaths.filter((path) => path !== '/company/leadership');
  console.log('generate-sitemap: leadership is empty — omitting /company/leadership.');
}

const today = new Date().toISOString().slice(0, 10);

const urlEntries = routePaths
  .map((path) => {
    const priority = path === '/' ? '1.0' : path.split('/').length <= 2 ? '0.8' : '0.6';
    const loc = path === '/' ? `${SITE_URL}/` : `${SITE_URL}${path}`;
    return `  <url>\n    <loc>${loc}</loc>\n    <lastmod>${today}</lastmod>\n    <priority>${priority}</priority>\n  </url>`;
  })
  .join('\n');

const sitemap = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urlEntries}\n</urlset>\n`;

writeFileSync(new URL('../public/sitemap.xml', import.meta.url), sitemap);
console.log(`generate-sitemap: wrote ${routePaths.length} routes to public/sitemap.xml`);
