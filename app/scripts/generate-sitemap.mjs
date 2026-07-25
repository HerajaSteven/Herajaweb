import { readFileSync, writeFileSync } from 'fs';

// Derives the sitemap from src/App.tsx's real <Route path="..."> list — the
// true source of truth for what routes exist — instead of a hand-maintained
// public/sitemap.xml that silently drifts the moment a route is added
// without someone remembering to also edit the sitemap (2026-07-25 SEO audit
// finding #4).

const SITE_URL = 'https://www.heraja.com';
const appSource = readFileSync(new URL('../src/App.tsx', import.meta.url), 'utf-8');

const routePaths = [...appSource.matchAll(/<Route\s+path="([^"]+)"/g)]
  .map((m) => m[1])
  .filter((path) => path !== '*'); // NotFound catch-all doesn't belong in a sitemap

if (routePaths.length === 0) {
  throw new Error('generate-sitemap: found zero <Route path="..."> entries in src/App.tsx — regex probably broke, check the file.');
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
