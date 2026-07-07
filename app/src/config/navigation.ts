import type { NavItem, FooterColumn, BreadcrumbItem } from '@/types';

export const primaryNav: NavItem[] = [
  {
    label: 'Home',
    href: '/',
  },
  {
    label: 'Platform',
    href: '/platform',
    children: [
      {
        title: 'Overview',
        links: [
          { label: 'Platform Overview', href: '/platform', description: 'How HAOS works and infrastructure architecture' },
          { label: 'Architecture', href: '/platform/architecture', description: 'Full infrastructure stack explorer' },
          { label: 'Roadmap', href: '/platform/roadmap', description: 'Platform development timeline' },
        ],
      },
      {
        title: 'Core Infrastructure',
        links: [
          { label: 'HAOS', href: '/platform/haos', description: 'Agricultural Operating Infrastructure' },
          { label: 'Farm Intelligence', href: '/platform/farm-intelligence', description: 'Production monitoring and visibility' },
          { label: 'Coordination Network', href: '/platform/coordination-network', description: 'Real-time stakeholder communication' },
          { label: 'Logistics', href: '/platform/logistics', description: 'Aggregation and movement coordination' },
          { label: 'Marketplace', href: '/platform/marketplace', description: 'Market coordination infrastructure' },
          { label: 'Traceability', href: '/platform/traceability', description: 'Verified operations from farm to buyer' },
          { label: 'Operational Intelligence', href: '/platform/operational-intelligence', description: 'Real-time monitoring and analytics' },
        ],
      },
      {
        title: 'Services',
        links: [
          { label: 'Identity & Access', href: '/platform/identity', description: 'Digital profiles and verification' },
          { label: 'Infrastructure Services', href: '/platform/infrastructure-services', description: 'Shared platform services' },
          { label: 'APIs & Integrations', href: '/platform/apis', description: 'Developer-ready API infrastructure' },
          { label: 'Security & Compliance', href: '/platform/security', description: 'Enterprise security framework' },
        ],
      },
    ],
  },
  {
    label: 'Solutions',
    href: '/solutions',
    children: [
      {
        title: 'By Organization Type',
        links: [
          { label: 'Government', href: '/solutions/government', description: 'National and regional agricultural programs' },
          { label: 'Cooperatives', href: '/solutions/cooperatives', description: 'Member coordination and operations' },
          { label: 'Enterprise Organizations', href: '/solutions/enterprise', description: 'Large-scale operational coordination' },
          { label: 'Agribusiness', href: '/solutions/agribusiness', description: 'Supply chain and processing operations' },
        ],
      },
      {
        title: 'By Sector',
        links: [
          { label: 'Financial Institutions', href: '/solutions/financial-institutions', description: 'Agricultural finance and risk' },
          { label: 'Development Organizations', href: '/solutions/development-organizations', description: 'Impact programs and measurement' },
          { label: 'Technology Partners', href: '/solutions/technology-partners', description: 'Integration and platform partners' },
        ],
      },
    ],
  },
  {
    label: 'Ecosystem',
    href: '/ecosystem',
    children: [
      {
        title: 'Enterprise',
        links: [
          { label: 'Enterprise Clients', href: '/ecosystem/enterprise-clients', description: 'Organizations running on Heraja' },
          { label: 'ZIMO Clan', href: '/ecosystem/zimo-clan', description: 'Flagship enterprise implementation' },
        ],
      },
      {
        title: 'Partners & Programs',
        links: [
          { label: 'Partners', href: '/ecosystem/partners', description: 'Technology and implementation partners' },
          { label: 'Pilot Programs', href: '/ecosystem/pilot-programs', description: 'Poultry & Fish Farming pilot' },
          { label: 'Implementation Stories', href: '/ecosystem/implementation-stories', description: 'Real deployment outcomes' },
          { label: 'Regional Programs', href: '/ecosystem/regional-programs', description: 'Geographic deployment initiatives' },
        ],
      },
    ],
  },
  {
    label: 'Innovation',
    href: '/innovation',
    children: [
      {
        title: 'Research & Development',
        links: [
          { label: 'AI & Machine Learning', href: '/innovation/ai', description: 'Predictive models and intelligence' },
          { label: 'Research', href: '/innovation/research', description: 'Agricultural technology research' },
          { label: 'Open Innovation', href: '/innovation/open-innovation', description: 'Collaborative development model' },
          { label: 'Future Infrastructure', href: '/innovation/future-infrastructure', description: 'Next-generation capabilities' },
        ],
      },
    ],
  },
  {
    label: 'Resources',
    href: '/resources',
    children: [
      {
        title: 'Documentation',
        links: [
          { label: 'Whitepaper', href: '/resources/whitepaper', description: 'Infrastructure technical overview' },
          { label: 'Corporate Brochure', href: '/resources/corporate-brochure', description: 'Enterprise capability overview' },
          { label: 'Documentation', href: '/resources/documentation', description: 'Platform technical documentation' },
        ],
      },
      {
        title: 'Knowledge',
        links: [
          { label: 'Case Studies', href: '/resources/case-studies', description: 'Implementation outcomes and metrics' },
          { label: 'Research', href: '/resources/research', description: 'Industry research and insights' },
          { label: 'Blog', href: '/resources/blog', description: 'Updates and thought leadership' },
          { label: 'FAQ', href: '/resources/faq', description: 'Common questions answered' },
          { label: 'Media Kit', href: '/resources/media-kit', description: 'Brand assets and press materials' },
        ],
      },
    ],
  },
  {
    label: 'Company',
    href: '/company',
    children: [
      {
        title: 'About',
        links: [
          { label: 'About Heraja', href: '/company/about', description: 'Mission, vision, and values' },
          { label: 'Vision', href: '/company/vision', description: 'Strategic direction and objectives' },
          { label: 'Leadership', href: '/company/leadership', description: 'Executive team and advisors' },
        ],
      },
      {
        title: 'Connect',
        links: [
          { label: 'Careers', href: '/company/careers', description: 'Join the team' },
          { label: 'News', href: '/company/news', description: 'Company updates and press' },
          { label: 'Contact', href: '/company/contact', description: 'Get in touch' },
          { label: 'Legal', href: '/company/legal', description: 'Terms, privacy, and compliance' },
        ],
      },
    ],
  },
];

export const footerColumns: FooterColumn[] = [
  {
    title: 'Platform',
    links: [
      { label: 'HAOS', href: '/platform/haos' },
      { label: 'Farm Intelligence', href: '/platform/farm-intelligence' },
      { label: 'Coordination Network', href: '/platform/coordination-network' },
      { label: 'Logistics', href: '/platform/logistics' },
      { label: 'Marketplace', href: '/platform/marketplace' },
      { label: 'Traceability', href: '/platform/traceability' },
      { label: 'Operational Intelligence', href: '/platform/operational-intelligence' },
      { label: 'APIs & Integrations', href: '/platform/apis' },
      { label: 'Security', href: '/platform/security' },
    ],
  },
  {
    title: 'Solutions',
    links: [
      { label: 'Government', href: '/solutions/government' },
      { label: 'Cooperatives', href: '/solutions/cooperatives' },
      { label: 'Enterprise', href: '/solutions/enterprise' },
      { label: 'Agribusiness', href: '/solutions/agribusiness' },
      { label: 'Financial Institutions', href: '/solutions/financial-institutions' },
      { label: 'Technology Partners', href: '/solutions/technology-partners' },
      { label: 'Development Organizations', href: '/solutions/development-organizations' },
    ],
  },
  {
    title: 'Ecosystem',
    links: [
      { label: 'Enterprise Clients', href: '/ecosystem/enterprise-clients' },
      { label: 'ZIMO Clan', href: '/ecosystem/zimo-clan' },
      { label: 'Partners', href: '/ecosystem/partners' },
      { label: 'Pilot Programs', href: '/ecosystem/pilot-programs' },
      { label: 'Implementation Stories', href: '/ecosystem/implementation-stories' },
      { label: 'Regional Programs', href: '/ecosystem/regional-programs' },
    ],
  },
  {
    title: 'Resources',
    links: [
      { label: 'Whitepaper', href: '/resources/whitepaper' },
      { label: 'Corporate Brochure', href: '/resources/corporate-brochure' },
      { label: 'Documentation', href: '/resources/documentation' },
      { label: 'Case Studies', href: '/resources/case-studies' },
      { label: 'Research', href: '/resources/research' },
      { label: 'Blog', href: '/resources/blog' },
      { label: 'FAQ', href: '/resources/faq' },
      { label: 'Media Kit', href: '/resources/media-kit' },
    ],
  },
  {
    title: 'Company',
    links: [
      { label: 'About', href: '/company/about' },
      { label: 'Vision', href: '/company/vision' },
      { label: 'Leadership', href: '/company/leadership' },
      { label: 'Careers', href: '/company/careers' },
      { label: 'News', href: '/company/news' },
      { label: 'Contact', href: '/company/contact' },
      { label: 'Legal', href: '/company/legal' },
      { label: 'Privacy', href: '/company/privacy' },
    ],
  },
];

export const footerLegal = [
  { label: 'Terms of Service', href: '/company/terms' },
  { label: 'Privacy Policy', href: '/company/privacy' },
  { label: 'Accessibility', href: '#' },
];

export function generateBreadcrumbs(pathname: string): BreadcrumbItem[] {
  const crumbs: BreadcrumbItem[] = [{ label: 'Home', href: '/' }];
  
  const segments = pathname.split('/').filter(Boolean);
  let currentPath = '';
  
  for (const segment of segments) {
    currentPath += `/${segment}`;
    const label = segment
      .split('-')
      .map(word => word.charAt(0).toUpperCase() + word.slice(1))
      .join(' ');
    crumbs.push({ label, href: currentPath });
  }
  
  return crumbs;
}
