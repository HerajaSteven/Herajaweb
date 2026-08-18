import PlatformTemplate from '@/components/layout/PlatformTemplate';
import ArchitectureDiagram from '@/components/diagrams/ArchitectureDiagram';
import {
  Database,
  Sprout,
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
  { title: 'Logistics', description: 'Movement coordination for aggregation, transportation, and operational delivery.', icon: <Truck className="w-6 h-6 text-infra-ai" /> },
  { title: 'Marketplace', description: 'Verified supply chain coordination connecting producers with authenticated buyers.', icon: <ShoppingCart className="w-6 h-6 text-infra-marketplace" /> },
  { title: 'Traceability', description: 'End-to-end operational verification from farm registration to final delivery.', icon: <Fingerprint className="w-6 h-6 text-infra-traceability" /> },
  { title: 'Operational Intelligence', description: 'Figures derived from the events the applications record, rather than entered separately.', icon: <Brain className="w-6 h-6 text-infra-ai" /> },
  { title: 'Identity & Access', description: 'One identity per person across the applications, with role-based permissions.', icon: <BarChart3 className="w-6 h-6 text-infra-identity" /> },
  { title: 'Security & Audit', description: 'Permissions checked per action, a per-tenant data boundary, and an attributed record history.', icon: <Shield className="w-6 h-6 text-brand-primary" /> },
  { title: 'API & Integrations', description: 'APIs for the operations the applications perform, for connecting external systems.', icon: <Code className="w-6 h-6 text-infra-api" /> },
  { title: 'Infrastructure Services', description: 'Shared services including messaging, notifications and the data layer.', icon: <Zap className="w-6 h-6 text-brand-primary" /> },
  { title: 'Multi-Tenancy', description: 'Every organization operates as a tenant with its own users and its own data boundary.', icon: <Globe className="w-6 h-6 text-infra-api" /> },
];

/*
 * "MULTI-REGION DEPLOYMENT — GEOGRAPHIC DISTRIBUTION WITH REGIONAL DATA
 * RESIDENCY" stood in that list, and the FAQ below repeated it. The production
 * estate is a single deployment. It is replaced by multi-tenancy, which is the
 * capability that actually exists and is the one an evaluator is usually
 * reaching for when they ask the question.
 *
 * Also removed: "predictive analytics and AI-driven decision support",
 * "AI-powered operational insights", "AI and analytics transform operational
 * data into actionable insights", "Enterprise-grade security and compliance",
 * and "Proven deployment patterns" — five claims about capabilities and a
 * track record that nothing in the estate supports.
 */
const workflow = [
  { step: 'Organization Onboarding', description: 'An organization is set up as a tenant, with its own users and its own data boundary.' },
  { step: 'Application Selection', description: 'Organizations use the applications they need; the platform underneath is the same either way.' },
  { step: 'Integration', description: 'Existing systems connect through the APIs, so records flow rather than being re-keyed.' },
  { step: 'Operations', description: 'Day-to-day coordination happens in the applications, against shared identity and verification.' },
  { step: 'Reporting', description: 'Figures are computed from the events already recorded, not collected a second time.' },
];

const benefits = [
  'Reduced operational fragmentation',
  'Verified data across stakeholders',
  'One identity across applications',
  'Per-tenant data boundary',
  'Attributed record history',
  'API-first integration model',
  'Shared infrastructure cost model',
  'Figures derived from recorded events',
];

const faq = [
  { question: 'What is the Heraja platform?', answer: 'HAOS and the four applications that run on it — Farm Intelligence, Marketplace, e-Chimusika and Logistics. Traceability, operational intelligence, identity and security are properties of the platform rather than separate products: you use them, you do not open them.' },
  { question: 'How does HAOS relate to the applications?', answer: 'HAOS — the Heraja Agricultural Operating System — holds identity, verification, multi-tenancy and the audit trail. The applications are surfaces over it, which is why a record created in one still means something in the next.' },
  { question: 'Can we use one application without the others?', answer: 'Yes. Organizations commonly start with the application that matches their immediate problem and extend later. Because they share the platform underneath, adding a second one does not mean a second integration.' },
  { question: 'What is the deployment model?', answer: 'Organizations use the hosted platform as tenants; there is no separate per-customer installation today. If you have a residency or isolation requirement, ask us and we will tell you what is and is not currently possible rather than describe a configuration that has not been built.' },
];

export default function PlatformOverview() {
  return (
    <PlatformTemplate
      overline="Heraja Platform"
      title="Digital Agricultural Infrastructure Platform"
      description="One platform and four applications: production recording, market coordination, movement and verification, running against shared identity and one audit trail."
      heroCta={{ label: 'Explore HAOS', href: '/platform/haos' }}
      problemTitle="Agricultural Operations Are Fundamentally Fragmented"
      problemDescription="Organizations across agriculture operate in silos — disconnected systems, manual coordination, unverified data, and limited visibility. This fragmentation creates inefficiency, reduces trust, and prevents scale."
      whyTitle="Infrastructure Connects Ecosystems"
      whyDescription="Instead of every organization building its own version of the same systems — coordination tools, verification workflows, reporting dashboards — Heraja gives them a shared backbone to connect to. That shared foundation is what makes the cost, trust, and scale numbers work differently than isolated software ever could."
      whyPoints={['Shared operational backbone', 'Connected stakeholder network', 'Verified data flows', 'One audit trail']}
      architecture={<ArchitectureDiagram />}
      capabilities={capabilities}
      workflow={workflow}
      benefits={benefits}
      faq={faq}
      relatedPages={[
        { title: 'HAOS', href: '/platform/haos', description: 'Agricultural Operating Infrastructure' },
        { title: 'Farm Intelligence', href: '/platform/farm-intelligence', description: 'Production visibility' },
        { title: 'Logistics', href: '/platform/logistics', description: 'Movement coordination' },
        { title: 'Marketplace', href: '/platform/marketplace', description: 'Market coordination infrastructure' },
        { title: 'Traceability', href: '/platform/haos', description: 'Verified operations' },
        { title: 'Operational Intelligence', href: '/platform/haos', description: 'AI and analytics' },
      ]}
      resources={[
        { title: 'Platform Whitepaper', href: '/resources/corporate-brochure', type: 'Whitepaper' },
        { title: 'API Documentation', href: '/platform/apis', type: 'Docs' },
        { title: 'Security Whitepaper', href: '/resources/corporate-brochure', type: 'Security' },
      ]}
    />
  );
}
