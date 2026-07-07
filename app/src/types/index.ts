// Navigation types
export interface NavItem {
  label: string;
  href: string;
  children?: MegaMenuSection[];
}

export interface MegaMenuSection {
  title: string;
  links: MegaMenuLink[];
}

export interface MegaMenuLink {
  label: string;
  href: string;
  description?: string;
  icon?: string;
}

export interface FooterColumn {
  title: string;
  links: { label: string; href: string }[];
}

export interface BreadcrumbItem {
  label: string;
  href: string;
}

export interface PlatformModule {
  id: string;
  name: string;
  description: string;
  color: string;
  icon: string;
  href: string;
}

export interface SolutionAudience {
  id: string;
  name: string;
  description: string;
  icon: string;
  href: string;
  challenges: string[];
  outcomes: string[];
}

export interface ResourceItem {
  id: string;
  title: string;
  excerpt: string;
  category: string;
  href: string;
  date?: string;
}

export interface FAQItem {
  question: string;
  answer: string;
}

export interface MetricItem {
  label: string;
  value: string;
  trend?: string;
}

export interface EcosystemLayer {
  id: string;
  name: string;
  description: string;
  items: string[];
  color: string;
}

export interface TimelineItem {
  id: string;
  title: string;
  description: string;
  date: string;
  status: 'complete' | 'current' | 'future';
}

export interface CaseStudy {
  id: string;
  organization: string;
  industry: string;
  challenge: string;
  solution: string;
  outcomes: string[];
  metrics: MetricItem[];
}

export interface TeamMember {
  id: string;
  name: string;
  role: string;
  bio: string;
}

export interface SocialLink {
  platform: string;
  href: string;
}
