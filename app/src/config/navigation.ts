import type { NavItem, FooterColumn, BreadcrumbItem } from '@/types';
import { hasLeadership } from '@/config/siteContent';

/*
 * Primary navigation — Phase 1 §5.
 *
 *   Platform    Solutions    Evidence    Company    [Talk to us]
 *
 * Four items and one call to action, down from six items. Only Platform and
 * Solutions open panels; Evidence and Company are direct links, so the
 * dropdown machinery is used where it earns its cost and nowhere else.
 *
 * Two sections that used to be top-level are not:
 *   · Resources — one document and an FAQ. They live in the footer and are
 *     linked from the pages that need them.
 *   · Innovation — real work, but it is technical credibility, which belongs
 *     under Platform rather than competing with it.
 *
 * "Home" is not an item. The logo is the home link, which is the convention
 * every visitor already knows and it buys back a nav slot.
 */
export const primaryNav: NavItem[] = [
  {
    label: 'Platform',
    href: '/platform',
    children: [
      {
        title: 'Platform',
        links: [
          { label: 'HAOS', href: '/platform/haos', description: 'Heraja Agricultural Operating System' },
          { label: 'Architecture', href: '/platform/architecture', description: 'Multi-tenancy, identity and shared services' },
          { label: 'Security', href: '/platform/security', description: 'Access control, permissions and audit trails' },
          { label: 'APIs & Integrations', href: '/platform/apis', description: 'The integration surface' },
          { label: 'Innovation', href: '/platform/innovation', description: 'Current engineering and research work' },
          { label: 'Roadmap', href: '/platform/roadmap', description: 'What is live, and what is being built' },
        ],
      },
      {
        /*
         * Every application listed here is deployed and launchable. Nothing
         * unavailable appears — no "coming soon", no disabled row — so the
         * panel needs no status markers to be truthful.
         */
        title: 'Applications',
        links: [
          { label: 'Farm Intelligence', href: '/platform/farm-intelligence', description: 'Production recording and operational intelligence' },
          { label: 'Marketplace', href: '/platform/marketplace', description: 'Market coordination' },
          { label: 'e-Chimusika', href: '/platform/echimusika', description: 'Marketplace application' },
          { label: 'Logistics', href: '/platform/logistics', description: 'Movement and aggregation' },
        ],
      },
    ],
  },
  {
    /*
     * One flat list. The previous "By Organization Type / By Sector" split was
     * Heraja's own taxonomy rather than the visitor's — a ministry official
     * does not first decide which of those two groups they belong to.
     */
    label: 'Solutions',
    href: '/solutions',
    children: [
      {
        title: 'Who Heraja works with',
        links: [
          { label: 'Government', href: '/solutions/government', description: 'Programme infrastructure and accountability' },
          { label: 'Financial Institutions', href: '/solutions/financial-institutions', description: 'Verified operational data for lending' },
          { label: 'Cooperatives', href: '/solutions/cooperatives', description: 'Member coordination' },
          { label: 'Agribusiness', href: '/solutions/agribusiness', description: 'Visibility across sites' },
          { label: 'Development Organizations', href: '/solutions/development-organizations', description: 'Measurable programme outcomes' },
        ],
      },
    ],
  },
  { label: 'Evidence', href: '/evidence' },
  { label: 'Company', href: '/company/about' },
];

export const footerColumns: FooterColumn[] = [
  {
    title: 'Platform',
    links: [
      { label: 'Platform Overview', href: '/platform' },
      { label: 'HAOS', href: '/platform/haos' },
      { label: 'Architecture', href: '/platform/architecture' },
      { label: 'Security', href: '/platform/security' },
      { label: 'APIs & Integrations', href: '/platform/apis' },
      { label: 'Innovation', href: '/platform/innovation' },
      { label: 'Roadmap', href: '/platform/roadmap' },
    ],
  },
  {
    title: 'Applications',
    links: [
      { label: 'Farm Intelligence', href: '/platform/farm-intelligence' },
      { label: 'Marketplace', href: '/platform/marketplace' },
      { label: 'e-Chimusika', href: '/platform/echimusika' },
      { label: 'Logistics', href: '/platform/logistics' },
    ],
  },
  {
    title: 'Solutions',
    links: [
      { label: 'Government', href: '/solutions/government' },
      { label: 'Financial Institutions', href: '/solutions/financial-institutions' },
      { label: 'Cooperatives', href: '/solutions/cooperatives' },
      { label: 'Agribusiness', href: '/solutions/agribusiness' },
      { label: 'Development Organizations', href: '/solutions/development-organizations' },
    ],
  },
  {
    title: 'Evidence',
    links: [
      { label: 'Overview', href: '/evidence' },
      { label: 'Zimo Clan', href: '/evidence/zimo-clan' },
      { label: 'Pilot', href: '/evidence/pilot' },
    ],
  },
  {
    /*
     * Leadership appears only once someone has been added in the HAOS admin —
     * the same flag the page and the sitemap read, so the link cannot point at
     * a page that renders a 404. Resources sit here rather than in the primary
     * nav; two items do not need a top-level section.
     */
    title: 'Company',
    links: [
      { label: 'About', href: '/company/about' },
      ...(hasLeadership ? [{ label: 'Leadership', href: '/company/leadership' }] : []),
      { label: 'Careers', href: '/company/careers' },
      { label: 'Contact', href: '/company/contact' },
      { label: 'Corporate Brochure', href: '/resources/corporate-brochure' },
      { label: 'FAQ', href: '/resources/faq' },
    ],
  },
];

export const footerLegal = [
  { label: 'Terms of Service', href: '/company/terms' },
  { label: 'Privacy Policy', href: '/company/privacy' },
];

/*
 * Human breadcrumb labels.
 *
 * Deriving a label from the URL slug produces "Development Organizations"
 * correctly by accident and "Echimusika", "Apis" and "Haos" incorrectly —
 * a breadcrumb reading "Platform / Apis" tells a visitor the site was
 * assembled carelessly. Anything not listed falls back to title-casing the
 * slug, which is right for the simple cases.
 */
const BREADCRUMB_LABELS: Record<string, string> = {
  '/platform': 'Platform',
  '/platform/haos': 'HAOS',
  '/platform/architecture': 'Architecture',
  '/platform/security': 'Security',
  '/platform/apis': 'APIs & Integrations',
  '/platform/innovation': 'Innovation',
  '/platform/roadmap': 'Roadmap',
  '/platform/farm-intelligence': 'Farm Intelligence',
  '/platform/marketplace': 'Marketplace',
  '/platform/echimusika': 'e-Chimusika',
  '/platform/logistics': 'Logistics',
  '/solutions': 'Solutions',
  '/solutions/government': 'Government',
  '/solutions/financial-institutions': 'Financial Institutions',
  '/solutions/cooperatives': 'Cooperatives',
  '/solutions/agribusiness': 'Agribusiness',
  '/solutions/development-organizations': 'Development Organizations',
  '/evidence': 'Evidence',
  '/evidence/zimo-clan': 'Zimo Clan',
  '/evidence/pilot': 'Pilot',
  '/company': 'Company',
  '/company/about': 'About',
  '/company/leadership': 'Leadership',
  '/company/careers': 'Careers',
  '/company/contact': 'Contact',
  '/company/privacy': 'Privacy',
  '/company/terms': 'Terms',
  '/resources': 'Resources',
  '/resources/corporate-brochure': 'Corporate Brochure',
  '/resources/faq': 'FAQ',
};

/*
 * Path segments that name a section but are not themselves routes.
 *
 * /company/about produces the segments "company" and "about". "Company" is a
 * real part of the hierarchy and belongs in the breadcrumb, but /company is
 * not a page — it 301s to /company/about. Linking it would send a visitor
 * through a redirect back to the page they are already on.
 *
 * These crumbs are rendered as plain text instead: the hierarchy is still
 * shown, without an link that goes nowhere useful.
 */
const SECTION_ONLY_PATHS = new Set(['/company', '/resources']);

export function generateBreadcrumbs(pathname: string): BreadcrumbItem[] {
  const crumbs: BreadcrumbItem[] = [{ label: 'Home', href: '/', linkable: true }];

  const segments = pathname.split('/').filter(Boolean);
  let currentPath = '';

  for (const segment of segments) {
    currentPath += `/${segment}`;
    const label =
      BREADCRUMB_LABELS[currentPath] ??
      segment
        .split('-')
        .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
        .join(' ');
    crumbs.push({ label, href: currentPath, linkable: !SECTION_ONLY_PATHS.has(currentPath) });
  }

  return crumbs;
}
