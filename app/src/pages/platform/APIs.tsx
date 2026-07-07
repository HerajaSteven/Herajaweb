import PlatformTemplate from '@/components/layout/PlatformTemplate';
import { Code, Webhook, FileJson, Key, Globe, BookOpen, Terminal, Shield } from 'lucide-react';

const capabilities = [
  { title: 'REST API', description: 'Comprehensive REST API for all platform capabilities with predictable endpoints.', icon: <Code className="w-6 h-6 text-infra-api" /> },
  { title: 'Webhook Support', description: 'Event-driven webhooks for real-time integration with external systems.', icon: <Webhook className="w-6 h-6 text-infra-marketplace" /> },
  { title: 'SDK Libraries', description: 'Official SDKs for popular languages to accelerate integration development.', icon: <Terminal className="w-6 h-6 text-infra-traceability" /> },
  { title: 'API Management', description: 'Key management, rate limiting, versioning, and usage analytics.', icon: <Key className="w-6 h-6 text-infra-identity" /> },
  { title: 'Documentation', description: 'Interactive API documentation with examples and testing capabilities.', icon: <BookOpen className="w-6 h-6 text-brand-primary" /> },
  { title: 'Sandbox Environment', description: 'Isolated sandbox for development and testing before production deployment.', icon: <Globe className="w-6 h-6 text-infra-ai" /> },
  { title: 'GraphQL Support', description: 'Flexible data querying with GraphQL for complex integration scenarios.', icon: <FileJson className="w-6 h-6 text-infra-api" /> },
  { title: 'Security', description: 'OAuth 2.0, API key authentication, and enterprise security standards.', icon: <Shield className="w-6 h-6 text-brand-primary" /> },
];

const workflow = [
  { step: 'API Key Registration', description: 'Developers register applications and receive API credentials.' },
  { step: 'Integration Development', description: 'Build integrations using SDKs, documentation, and sandbox environment.' },
  { step: 'Testing', description: 'Thoroughly test integrations in the sandbox before production.' },
  { step: 'Production Deployment', description: 'Deploy to production with monitoring and support.' },
  { step: 'Ongoing Management', description: 'Monitor usage, manage versions, and optimize integrations.' },
];

const benefits = [
  'Developer-ready documentation',
  'Sandbox testing environment',
  'Multi-language SDKs',
  'Webhook event support',
  'API versioning',
  'Usage analytics',
  'Enterprise security',
  'Dedicated support',
];

const faq = [
  { question: 'Who can use the APIs?', answer: 'APIs are available to enterprise clients, technology partners, and approved developers building on Heraja infrastructure.' },
  { question: 'What APIs are available?', answer: 'Heraja provides APIs for HAOS workflows, marketplace operations, traceability data, identity verification, and operational intelligence.' },
  { question: 'Is there a sandbox?', answer: 'Yes. A complete sandbox environment is available for development and testing without affecting production data.' },
];

export default function APIs() {
  return (
    <PlatformTemplate
      overline="APIs & Integrations"
      title="Developer-Ready API Infrastructure"
      description="Comprehensive APIs, SDKs, and integration tools that enable developers and technology partners to connect external systems to Heraja infrastructure."
      heroCta={{ label: 'View Documentation', href: '/resources/documentation' }}
      problemTitle="Integration Is Difficult Without Proper APIs"
      problemDescription="Organizations need to connect existing systems — ERPs, accounting, logistics — to their operational infrastructure. Without well-designed APIs, these integrations are fragile and expensive."
      whyTitle="API-First Architecture"
      whyDescription="Heraja is built API-first. Every capability is exposed through well-documented, versioned APIs with SDKs, sandbox environments, and comprehensive developer support."
      whyPoints={['REST and GraphQL', 'Multi-language SDKs', 'Sandbox environment', 'Webhook support']}
      capabilities={capabilities}
      workflow={workflow}
      benefits={benefits}
      faq={faq}
      relatedPages={[
        { title: 'Infrastructure Services', href: '/platform/infrastructure-services', description: 'Platform services' },
        { title: 'Security', href: '/platform/security', description: 'Security framework' },
        { title: 'HAOS', href: '/platform/haos', description: 'Operating system' },
        { title: 'Technology Partners', href: '/solutions/technology-partners', description: 'Partner solutions' },
      ]}
    />
  );
}
