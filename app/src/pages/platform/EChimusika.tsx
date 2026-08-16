import PlatformTemplate from '@/components/layout/PlatformTemplate';
import { launchCtaFor } from '@/config/liveApps';
import { APPLICATION_EVIDENCE } from '@/config/productEvidence';

/*
 * e-Chimusika — live at echimusika.heraja.com, and until now the only
 * deployed application in the estate with no page on this site.
 *
 * COPY SCOPE. What is written below is limited to what can be verified from
 * the deployed application and the HAOS codebase: that it exists, that it is
 * live, that it is an application rather than a platform capability, and that
 * it shares the platform services every other HAOS application uses.
 *
 * It is deliberately shorter than the Farm Intelligence page. Product-specific
 * detail — the trading workflow, who transacts with whom, what settlement
 * looks like — needs sign-off from the people who built it, and inventing it
 * here to make the page match its siblings in length would be exactly the
 * failure this redesign exists to correct. Depth follows evidence.
 */
export default function EChimusika() {
  return (
    <PlatformTemplate
      overline="Application"
      title="e-Chimusika"
      description="A live marketplace application in the HAOS estate, built on the same identity, verification and settlement services as every other Heraja application."
      launchCta={launchCtaFor('echimusika')}
      productEvidence={{
        title: 'e-Chimusika, running',
        items: [APPLICATION_EVIDENCE.echimusika],
      }}
      heroCta={{ label: 'How HAOS works', href: '/platform/haos' }}
      problemTitle="Trade that leaves no record"
      problemDescription="Agricultural trade across much of the region is arranged verbally and settled informally. It works, but it produces nothing an organisation can audit, a lender can assess, or a programme can measure — so each transaction has to be trusted rather than verified."
      whyTitle="An application, not a separate system"
      whyDescription="e-Chimusika runs on HAOS. Identity, verification, notifications, multi-tenancy, audit trail and settlement are platform services shared with Farm Intelligence, Marketplace and Logistics rather than rebuilt per application — which is what makes a record created in one place meaningful in another."
      whyPoints={[
        'Shared identity and verification with the rest of the estate',
        'Transactions recorded against the platform audit trail',
        'Settlement through the same wallet service the other applications use',
        'Deployed and publicly reachable today',
      ]}
      capabilities={[
        {
          title: 'Built on shared services',
          description: 'Identity, access, verification, notifications and audit come from HAOS rather than from this application.',
        },
        {
          title: 'Multi-tenant by design',
          description: 'An organisation deploying it operates its own tenant, with its own users and its own data boundary.',
        },
        {
          title: 'Recorded, not asserted',
          description: 'Activity produces a record on the platform audit trail rather than a claim that has to be taken on trust.',
        },
      ]}
      faq={[
        {
          question: 'Is e-Chimusika available now?',
          answer: 'Yes. It is deployed and publicly reachable, and the launch button on this page opens the live application.',
        },
        {
          question: 'How does it relate to HAOS Marketplace?',
          answer: 'Both are applications on HAOS and both use the same platform services. They address different markets; the Marketplace page describes that side of the estate.',
        },
        {
          question: 'Can it be deployed for our organisation?',
          answer: 'HAOS is multi-tenant, so an organisation runs its own tenant rather than a shared instance. Deployment scope is a conversation — contact us and we will talk through it.',
        },
      ]}
      relatedPages={[
        { title: 'HAOS', href: '/platform/haos', description: 'The platform underneath' },
        { title: 'Marketplace', href: '/platform/marketplace', description: 'The other market-side application' },
        { title: 'Architecture', href: '/platform/architecture', description: 'Multi-tenancy and shared services' },
      ]}
    />
  );
}
