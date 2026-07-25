import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import Navigation from './Navigation';
import Footer from './Footer';
import ScrollProgress from './ScrollProgress';
import Breadcrumb from './Breadcrumb';
import { generateBreadcrumbs } from '@/config/navigation';

interface LayoutProps {
  children: React.ReactNode;
  showBreadcrumb?: boolean;
}

const SITE_URL = 'https://www.heraja.com';

/** Rendered once per route — reuses the same breadcrumb data Breadcrumb.tsx already computes for the visible UI. */
function StructuredData({ pathname }: { pathname: string }) {
  const crumbs = generateBreadcrumbs(pathname);

  const organizationSchema = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'Heraja',
    url: SITE_URL,
    logo: `${SITE_URL}/assets/heraja-logo.png`,
  };

  const websiteSchema = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: 'Heraja',
    url: SITE_URL,
  };

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: crumbs.map((crumb, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: crumb.label,
      item: `${SITE_URL}${crumb.href}`,
    })),
  };

  return (
    <Helmet>
      <script type="application/ld+json">{JSON.stringify(organizationSchema)}</script>
      <script type="application/ld+json">{JSON.stringify(websiteSchema)}</script>
      {crumbs.length > 1 && <script type="application/ld+json">{JSON.stringify(breadcrumbSchema)}</script>}
    </Helmet>
  );
}

export default function Layout({ children, showBreadcrumb = true }: LayoutProps) {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex flex-col">
      <StructuredData pathname={location.pathname} />
      <ScrollProgress />
      <Navigation />
      <div className="flex-1 flex flex-col pt-20">
        {showBreadcrumb && <Breadcrumb />}
        <main id="main-content" className="flex-1" role="main">
          {children}
        </main>
      </div>
      <Footer />
    </div>
  );
}
