import PlatformTemplate from '@/components/layout/PlatformTemplate';
import ArchitectureDiagram from '@/components/diagrams/ArchitectureDiagram';
import {
  Database,
  Sprout,
  Radio,
  Truck,
  ShoppingCart,
  Fingerprint,
  Brain,
  BarChart3,
  Shield,
  Zap,
  Globe,
  Code,
} from 'lucide-react';

const capabilities = [
  { title: 'HAOS', description: 'Agricultural Operating Infrastructure with workflow engine, coordination, and verification.', icon: <Database className="w-6 h-6 text-brand-primary" /> },
  { title: 'Farm Intelligence', description: 'Production monitoring, field reporting, and operational visibility across every farm.', icon: <Sprout className="w-6 h-6 text-infra-marketplace" /> },
  { title: 'Coordination Network', description: 'Real-time communication connecting farmers, field agents, operations teams, and partners.', icon: <Radio className="w-6 h-6 text-infra-traceability" /> },
  { title: 'Logistics', description: 'Movement coordination for aggregation, transportation, and operational delivery.', icon: <Truck className="w-6 h-6 text-infra-ai" /> },
  { title: 'Marketplace', description: 'Verified supply chain coordination connecting producers with authenticated buyers.', icon: <ShoppingCart className="w-6 h-6 text-infra-marketplace" /> },
  { title: 'Traceability', description: 'End-to-end operational verification from farm registration to final delivery.', icon: <Fingerprint className="w-6 h-6 text-infra-traceability" /> },
  { title: 'Operational Intelligence', description: 'Real-time monitoring, predictive analytics, and AI-driven decision support.', icon: <Brain className="w-6 h-6 text-infra-ai" /> },
  { title: 'Identity & Access', description: 'Digital profiles, verification systems, and role-based access management.', icon: <BarChart3 className="w-6 h-6 text-infra-identity" /> },
  { title: 'Security & Compliance', description: 'Enterprise-grade security, data governance, and regulatory compliance.', icon: <Shield className="w-6 h-6 text-brand-primary" /> },
  { title: 'API & Integrations', description: 'Developer-ready APIs for connecting external systems and building extensions.', icon: <Code className="w-6 h-6 text-infra-api" /> },
  { title: 'Infrastructure Services', description: 'Shared services including messaging, notifications, data layer, and monitoring.', icon: <Zap className="w-6 h-6 text-brand-primary" /> },
  { title: 'Multi-Region Deployment', description: 'Geographic distribution with regional data residency and compliance.', icon: <Globe className="w-6 h-6 text-infra-api" /> },
];

const workflow = [
  { step: 'Organization Onboarding', description: 'Enterprise clients configure their operational environment on Heraja infrastructure.' },
  { step: 'Module Selection', description: 'Organizations select and configure the infrastructure modules they need.' },
  { step: 'Integration', description: 'Existing systems connect via APIs. Data flows into the shared infrastructure.' },
  { step: 'Operations', description: 'Day-to-day coordination happens through HAOS workflows and shared services.' },
  { step: 'Intelligence', description: 'AI and analytics transform operational data into actionable insights.' },
];

const benefits = [
  'Reduced operational fragmentation',
  'Verified data across all stakeholders',
  'Real-time coordination capabilities',
  'Enterprise-grade security and compliance',
  'Scalable multi-tenant architecture',
  'API-first integration model',
  'AI-powered operational insights',
  'Shared infrastructure cost model',
  'Proven deployment patterns',
];

const faq = [
  { question: 'What is Heraja Platform?', answer: 'Heraja Platform is the collective term for the digital infrastructure that enables agricultural organizations to coordinate operations. It includes HAOS, Farm Intelligence, Coordination Network, Logistics, Marketplace, Traceability, Operational Intelligence, Identity Services, APIs, and Security — all designed to work together as a unified system.' },
  { question: 'How does HAOS relate to the Platform?', answer: 'HAOS (Heraja Agricultural Operating System) is the workflow and coordination layer that runs on top of Heraja infrastructure. It provides the operational environment that organizations use to manage their day-to-day activities.' },
  { question: 'Can I use individual modules without the full platform?', answer: 'Infrastructure modules are designed to work together, but organizations can start with specific capabilities and expand over time. Each module has well-defined integration points.' },
  { question: 'What is the deployment model?', answer: 'Heraja infrastructure is deployed across multiple regions with cloud-native architecture. Organizations can choose deployment configurations that meet their data residency and compliance requirements.' },
];

export default function PlatformOverview() {
  return (
    <PlatformTemplate
      overline="Heraja Platform"
      title="Digital Agricultural Infrastructure Platform"
      description="Enterprise-grade infrastructure enabling agricultural organizations to coordinate production, logistics, traceability, and market access through a unified operating system."
      heroCta={{ label: 'Explore HAOS', href: '/platform/haos' }}
      problemTitle="Agricultural Operations Are Fundamentally Fragmented"
      problemDescription="Organizations across agriculture operate in silos — disconnected systems, manual coordination, unverified data, and limited visibility. This fragmentation creates inefficiency, reduces trust, and prevents scale."
      whyTitle="Infrastructure Connects Ecosystems"
      whyDescription="Instead of every organization building its own version of the same systems — coordination tools, verification workflows, reporting dashboards — Heraja gives them a shared backbone to connect to. That shared foundation is what makes the cost, trust, and scale numbers work differently than isolated software ever could."
      whyPoints={['Shared operational backbone', 'Connected stakeholder network', 'Verified data flows', 'AI-powered intelligence']}
      architecture={<ArchitectureDiagram />}
      capabilities={capabilities}
      workflow={workflow}
      benefits={benefits}
      faq={faq}
      relatedPages={[
        { title: 'HAOS', href: '/platform/haos', description: 'Agricultural Operating Infrastructure' },
        { title: 'Farm Intelligence', href: '/platform/farm-intelligence', description: 'Production visibility' },
        { title: 'Coordination Network', href: '/platform/coordination-network', description: 'Real-time communication' },
        { title: 'Logistics', href: '/platform/logistics', description: 'Movement coordination' },
        { title: 'Marketplace', href: '/platform/marketplace', description: 'Market coordination infrastructure' },
        { title: 'Traceability', href: '/platform/traceability', description: 'Verified operations' },
        { title: 'Operational Intelligence', href: '/platform/operational-intelligence', description: 'AI and analytics' },
      ]}
      resources={[
        { title: 'Platform Whitepaper', href: '/resources/whitepaper', type: 'Whitepaper' },
        { title: 'API Documentation', href: '/resources/documentation', type: 'Docs' },
        { title: 'Security Whitepaper', href: '/resources/whitepaper', type: 'Security' },
      ]}
    />
  );
}
