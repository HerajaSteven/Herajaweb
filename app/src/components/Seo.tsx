import { Helmet } from 'react-helmet-async';
import { useLocation } from 'react-router-dom';

const SITE_NAME = 'Heraja';
const SITE_URL = 'https://www.heraja.com';
const DEFAULT_OG_IMAGE = `${SITE_URL}/assets/og-image.png`;

interface SeoProps {
  /** Page-specific title — the site name is appended automatically, don't include it here. */
  title: string;
  description: string;
  /** Override the canonical/og:url path if it differs from the current route (rare). */
  path?: string;
}

/**
 * Per-route SEO tags (ADR: SEO audit, 2026-07-25). Every route needs its own
 * title/description — before this component existed, every page shared the
 * same static <title> from index.html regardless of route. Rendered once per
 * page inside PlatformTemplate/SolutionTemplate (covers ~22 routes) or
 * directly in each standalone page (Home, Ecosystem, Innovation, Resources,
 * Company, NotFound).
 */
export default function Seo({ title, description, path }: SeoProps) {
  const location = useLocation();
  const url = `${SITE_URL}${path ?? location.pathname}`;
  const fullTitle = `${title} | ${SITE_NAME}`;

  return (
    <Helmet>
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={url} />

      <meta property="og:type" content="website" />
      <meta property="og:site_name" content={SITE_NAME} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={url} />
      <meta property="og:image" content={DEFAULT_OG_IMAGE} />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={DEFAULT_OG_IMAGE} />
    </Helmet>
  );
}
