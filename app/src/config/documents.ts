import { brochureDownload } from '@/config/siteContent';

/**
 * Downloadable documents this site offers, and whether the file exists yet.
 *
 * WHY THIS FILE EXISTS. /resources/corporate-brochure shipped a "Download
 * Brochure" button that was a <button> with no handler and no file behind it.
 * Clicking it did nothing at all — no download, no navigation, no error. That
 * is the worst version of a missing dependency, because it looks like it
 * works: a procurement team clicks it, nothing happens, and the conclusion
 * they draw is about the company rather than about one absent PDF.
 *
 * The availability answer now comes from the HAOS admin rather than from this
 * file — someone uploads the brochure, the next build picks it up, and the
 * download appears. Nobody has to edit code to publish a PDF.
 *
 * The gate itself is unchanged: availability is a value that is checked, not
 * something a visitor discovers.
 */
export interface SiteDocument {
  title: string;
  /** Absolute or root-relative URL. Only meaningful when `available` is true. */
  file?: string;
  /** Human size, shown next to the download so the cost is known before the tap. */
  size?: string;
  available: boolean;
}

/**
 * The download target for a document, or undefined when there is no file.
 *
 * Undefined is deliberate and is what the page branches on: no file means no
 * download control at all, rather than a disabled button. A disabled button
 * still advertises a thing the visitor cannot have and gives them nowhere to
 * go; the page offers a request path instead.
 */
export function downloadFor(key: 'corporateBrochure'): { href: string; size?: string } | undefined {
  if (key === 'corporateBrochure') return brochureDownload();

  return undefined;
}
