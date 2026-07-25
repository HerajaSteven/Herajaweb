import sharp from 'sharp';
import { mkdirSync } from 'fs';

const SRC = 'public/assets/heraja-logo.png';
const OUT = 'public/assets';
mkdirSync(OUT, { recursive: true });

const meta = await sharp(SRC).metadata();
const { width, height } = meta;

// ── 1. Icon-only crop (just the mark: black shapes + orange/green dots, no wordmark) ──
const ICON_CROP_WIDTH = 895; // determined by visual inspection — full orange dot, zero wordmark bleed
const iconBuffer = await sharp(SRC)
  .extract({ left: 0, top: 0, width: ICON_CROP_WIDTH, height })
  .png()
  .toBuffer();

// Pad icon to a square canvas (transparent) before downscaling, so favicons aren't stretched
const iconSquareSize = Math.max(ICON_CROP_WIDTH, height);
const iconSquare = await sharp({
  create: { width: iconSquareSize, height: iconSquareSize, channels: 4, background: { r: 0, g: 0, b: 0, alpha: 0 } },
})
  .composite([{ input: iconBuffer, gravity: 'centre' }])
  .png()
  .toBuffer();

await sharp(iconSquare).resize(32, 32).png().toFile(`${OUT}/favicon-32x32.png`);
await sharp(iconSquare).resize(16, 16).png().toFile(`${OUT}/favicon-16x16.png`);

// apple-touch-icon: solid white background (transparent PNGs render with a black
// square on iOS home screens), 180x180 per Apple's convention, icon padded in from
// the edges since iOS applies its own corner-rounding mask.
const appleTouchSize = 180;
const applePadding = 24;
const appleIconResized = await sharp(iconSquare)
  .resize(appleTouchSize - applePadding * 2, appleTouchSize - applePadding * 2)
  .png()
  .toBuffer();
await sharp({
  create: { width: appleTouchSize, height: appleTouchSize, channels: 4, background: { r: 255, g: 255, b: 255, alpha: 1 } },
})
  .composite([{ input: appleIconResized, gravity: 'centre' }])
  .png()
  .toFile(`${OUT}/apple-touch-icon.png`);

// ── 2. White monochrome wordmark (real asset, replaces the CSS brightness/invert hack) ──
// Recipe (Porter-Duff source-in): composite a solid white tile over the original logo
// with blend 'in' — the white tile is shown only where the destination (the logo) is
// opaque, and the result's alpha comes from the destination's alpha. Net effect: same
// silhouette, recolored solid white.
const whiteTile = await sharp({
  create: { width: 1, height: 1, channels: 4, background: { r: 255, g: 255, b: 255, alpha: 1 } },
})
  .png()
  .toBuffer();
await sharp(SRC)
  .composite([{ input: whiteTile, tile: true, blend: 'in' }])
  .png({ compressionLevel: 9 })
  .toFile(`${OUT}/heraja-logo-white.png`);

// ── 3. Compressed/optimized main logo (same content, smaller file) ──
await sharp(SRC).png({ compressionLevel: 9, palette: true }).toFile(`${OUT}/heraja-logo-optimized.png`);

// ── 4. Branded OG image (1200x630) ──
const OG_W = 1200;
const OG_H = 630;
const bgSvg = `
<svg width="${OG_W}" height="${OG_H}" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="bg" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#231F20" />
      <stop offset="100%" stop-color="#2d2728" />
    </linearGradient>
    <radialGradient id="glow1" cx="85%" cy="15%" r="55%">
      <stop offset="0%" stop-color="#7AC142" stop-opacity="0.35" />
      <stop offset="100%" stop-color="#7AC142" stop-opacity="0" />
    </radialGradient>
    <radialGradient id="glow2" cx="10%" cy="90%" r="45%">
      <stop offset="0%" stop-color="#F99D1C" stop-opacity="0.25" />
      <stop offset="100%" stop-color="#F99D1C" stop-opacity="0" />
    </radialGradient>
  </defs>
  <rect width="${OG_W}" height="${OG_H}" fill="url(#bg)" />
  <rect width="${OG_W}" height="${OG_H}" fill="url(#glow1)" />
  <rect width="${OG_W}" height="${OG_H}" fill="url(#glow2)" />
  <text x="90" y="430" font-family="Arial, Helvetica, sans-serif" font-size="44" font-weight="700" fill="#ffffff">The Operating Infrastructure</text>
  <text x="90" y="486" font-family="Arial, Helvetica, sans-serif" font-size="44" font-weight="700" fill="#ffffff">for Modern Agriculture</text>
  <text x="92" y="528" font-family="Arial, Helvetica, sans-serif" font-size="22" fill="#c9c1ba">heraja.com</text>
</svg>`;

const whiteLogoForOg = await sharp(`${OUT}/heraja-logo-white.png`).resize({ width: 560 }).toBuffer();

await sharp(Buffer.from(bgSvg))
  .composite([{ input: whiteLogoForOg, left: 90, top: 90 }])
  .png()
  .toFile(`${OUT}/og-image.png`);

console.log('Generated: favicon-32x32.png, favicon-16x16.png, apple-touch-icon.png, heraja-logo-white.png, heraja-logo-optimized.png, og-image.png');
