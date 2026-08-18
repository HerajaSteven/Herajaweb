import PlatformTemplate from '@/components/layout/PlatformTemplate';
import { Code, Webhook, Key, Shield } from 'lucide-react';

/*
 * ── A DEVELOPER PLATFORM THAT DOES NOT EXIST ─────────────────────────────
 *
 * This page described, as present-tense fact:
 *
 *     Official SDKs for popular languages · GraphQL support · an isolated
 *     sandbox environment · interactive API documentation with testing ·
 *     OAuth 2.0 · usage analytics · API versioning · dedicated support
 *
 * None of it is built. There is no SDK in any language, no GraphQL endpoint,
 * no sandbox, no developer portal and no published documentation — the
 * "View Documentation" button in the hero pointed back at this same page,
 * because /documentation was removed in Phase 2 and had nowhere else to go.
 *
 * This is the most checkable category of false claim on the whole site. A
 * developer evaluating an integration does not ask whether the SDK exists;
 * they search for it, find nothing, and conclude something about everything
 * else on the page. The cost is paid instantly and in full.
 *
 * ── WHAT IS ACTUALLY TRUE ────────────────────────────────────────────────
 *
 * There is a real HTTP API: it is the one the four applications themselves
 * are clients of, which is a stronger statement than a marketing API page
 * usually gets to make — it is exercised by everything the products do rather
 * than maintained separately for integrators. Authentication is token-based,
 * webhooks exist for events that need them, and an integration today is
 * scoped work with the engineering team rather than self-serve.
 *
 * [CONTENT REQUIRED] When a developer portal, published reference or sandbox
 * exists, it belongs here — named, linked and dated. Until then this page
 * says so.
 */

const capabilities = [
  {
    title: 'One HTTP API',
    description:
      'The same API the four applications are built on. Nothing in the products reaches the data by a private route, so the interface is exercised by everything they do.',
    icon: <Code className="w-6 h-6 text-infra-api" />,
  },
  {
    title: 'Token authentication',
    description:
      'Requests are authenticated with issued credentials and carry the same permissions as the user or service behind them.',
    icon: <Key className="w-6 h-6 text-infra-identity" />,
  },
  {
    title: 'Webhooks',
    description:
      'Events can be delivered to an endpoint you control, so an external system reacts to what happened rather than polling for it.',
    icon: <Webhook className="w-6 h-6 text-infra-marketplace" />,
  },
  {
    title: 'Tenant-scoped by default',
    description:
      'API access is bounded by the same tenant boundary as the applications. An integration cannot reach another organization’s records.',
    icon: <Shield className="w-6 h-6 text-brand-primary" />,
  },
];

const workflow = [
  { step: 'Tell us what you need to connect', description: 'Which system, which direction, and what has to stay in step. Integration is scoped work today, not self-serve.' },
  { step: 'Credentials', description: 'You receive credentials bound to your organization’s tenant and the permissions the integration needs.' },
  { step: 'Build against the endpoints', description: 'We supply the reference for the operations in scope. There is no public portal to read instead.' },
  { step: 'Test against your own tenant', description: 'Testing happens in your tenant with data you control. There is no separate sandbox environment.' },
  { step: 'Run it', description: 'Once live, the integration is subject to the same permissions and audit trail as anything else on the platform.' },
];

const benefits = [
  'One API, exercised by the products themselves',
  'Token-authenticated requests',
  'Webhook delivery for events',
  'Tenant-scoped access',
  'Permissions consistent with the applications',
  'Actions recorded in the audit trail',
];

const faq = [
  {
    question: 'Is there a public developer portal or published reference?',
    answer:
      'Not yet. There is no self-serve portal, no published API reference and no interactive documentation. We supply the reference for the operations in scope when an integration is agreed, which is a smaller offer than a developer platform and an accurate description of what exists.',
  },
  {
    question: 'Are there SDKs, or a GraphQL endpoint?',
    answer:
      'No to both. The API is REST over HTTPS. This site previously listed official SDKs for popular languages and GraphQL support; neither exists, and both have been removed rather than softened.',
  },
  {
    question: 'Is there a sandbox?',
    answer:
      'No separate sandbox environment exists. Integration testing happens against your own tenant, with data you control and can remove — which is workable but is not the same thing, and we would rather say so than let you plan around one.',
  },
  {
    question: 'Who can get access?',
    answer:
      'Organizations already using the platform, and teams evaluating an integration as part of one. There is no partner programme and no approved-developer list; talk to us about the integration and we will tell you what it involves.',
  },
];

export default function APIs() {
  return (
    <PlatformTemplate
      overline="APIs & Integrations"
      title="The interface external systems connect to"
      description="A REST API over HTTPS — the same one the four applications are built on — with token authentication, webhooks and tenant-scoped access. No SDKs, no sandbox, and no public portal yet."
      heroCta={{ label: 'Talk to us about an integration', href: '/company/contact?enquiry=technology-partner' }}
      problemTitle="Integrations fail at the boundary, not in the middle"
      problemDescription="Organizations need existing systems — ERP, accounting, logistics — to stay in step with what is happening on the ground. When the connection is a periodic export, the two sides disagree by the time anyone acts on either."
      whyTitle="The applications use the same API you would"
      whyDescription="Farm Intelligence, Marketplace, e-Chimusika and Logistics are clients of the platform API rather than privileged code sitting beside the database. An interface that the products depend on is maintained because the products would break, not because an integrator complained."
      whyPoints={[
        'REST over HTTPS',
        'Token-authenticated',
        'Webhook delivery',
        'Tenant-scoped access',
      ]}
      capabilities={capabilities}
      workflow={workflow}
      benefits={benefits}
      faq={faq}
      relatedPages={[
        { title: 'Architecture', href: '/platform/architecture', description: 'How the platform is put together' },
        { title: 'Security & access', href: '/platform/security', description: 'Permissions and the audit trail' },
        { title: 'HAOS', href: '/platform/haos', description: 'The operating system' },
      ]}
    />
  );
}
