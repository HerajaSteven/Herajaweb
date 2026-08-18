/**
 * Scan rendered pages for PROTESTING-TOO-MUCH language: copy that insists the
 * site's own material is genuine, rather than showing it.
 *
 * Deliberately separate from the disclosure language the site keeps on
 * purpose ("What this site does not evidence", "None are held"). Stating a
 * LIMIT is useful. Insisting on your own authenticity is what invites doubt.
 */
const { chromium } = await import('file:///c:/Users/DELL/Desktop/HAOS/haos-frontend/node_modules/playwright-core/index.mjs');
import { readFileSync } from 'node:fs';

const BASE = 'http://127.0.0.1:4390';
const APP = 'c:/Users/DELL/Desktop/HAOS/Herajaweb/app/src/App.tsx';
const routes = [...readFileSync(APP, 'utf-8')
  .replace(/\/\*[\s\S]*?\*\//g, '').replace(/^\s*\/\/.*$/gm, '')
  .matchAll(/<Route\s+path="([^"]+)"/g)].map((m) => m[1]).filter((p) => p !== '*');

const PATTERNS = [
  ['authenticity-denial', /\bnot\s+(?:a\s+)?(?:mock-?ups?|mockups?|prototypes?|renders?|demos?|fakes?|staged|simulated|concepts?)\b/gi],
  ['authenticity-denial', /\bnothing (?:here|on this page) is\b/gi],
  ['authenticity-denial', /\bthis is not a\b/gi],
  ['retouch', /\b(?:un)?retouch\w*|unedited|unaltered|unmodified|doctored|photoshop\w*|no filters?\b/gi],
  ['insisting-real', /\b(?:real|actual|genuine|authentic|true)\s+(?:screenshots?|screens?|captures?|images?|photos?|product|data)\b/gi],
  ['insisting-real', /\bscreenshots? (?:are|is)\b/gi],
  ['capture-meta', /\bcaptured (?:on|from|with)\b/gi],
  ['capture-meta', /\btaken (?:on|from) a (?:phone|device)\b/gi],
  ['trust-me', /\btrust (?:us|me)\b|\brest assured\b|\bwe promise\b|\bbelieve (?:us|me)\b/gi],
  ['trust-me', /\bto be clear\b|\bmake no mistake\b|\bhonestly\b|\bfrankly\b|\bin all honesty\b/gi],
  ['no-tricks', /\bno (?:tricks|smoke|gimmicks|spin|marketing fluff|exaggeration)\b/gi],
  ['self-praise-honesty', /\bwe (?:do not|don't) (?:invent|fabricate|make up|exaggerate|embellish)\b/gi],
  ['self-praise-honesty', /\b(?:unlike|better than) (?:other|most|typical)\b/gi],
];

const browser = await chromium.launch();
const page = await browser.newPage({ viewport: { width: 1280, height: 900 } });
const hits = [];

for (const route of routes) {
  await page.goto(BASE + route, { waitUntil: 'networkidle' });
  await page.waitForSelector('h1', { timeout: 10000 }).catch(() => {});
  // Open disclosures so nothing hides behind a click.
  for (let pass = 0; pass < 2; pass++) {
    const els = await page.$$('main [aria-expanded="false"], main details:not([open])');
    for (const el of els) { await el.click({ timeout: 1200 }).catch(() => {}); }
    if (!els.length) break;
    await page.waitForTimeout(200);
  }
  const text = await page.evaluate(() => document.body.innerText);
  for (const [cat, re] of PATTERNS) {
    re.lastIndex = 0;
    for (const m of text.matchAll(re)) {
      const from = Math.max(0, m.index - 70);
      hits.push({ route, cat, phrase: m[0], ctx: text.slice(from, m.index + m[0].length + 70).replace(/\s+/g, ' ').trim() });
    }
  }
}
await browser.close();

if (!hits.length) console.log('No protesting-too-much language found across ' + routes.length + ' rendered routes.');
else {
  console.log(hits.length + ' candidate(s):\n');
  for (const h of hits) console.log(`[${h.cat}] ${h.route}\n   "${h.phrase}"\n   …${h.ctx}…\n`);
}
