import SolutionTemplate from '@/components/layout/SolutionTemplate';

export default function Cooperatives() {
  return (
    <SolutionTemplate
      audience="Cooperatives"
      title="Coordination Infrastructure for Agricultural Cooperatives"
      description="A shared system for member coordination, production planning, market access, and verified collective outcomes — built for cooperatives, not adapted from enterprise software."
      heroCta={{ label: 'Explore HAOS', href: '/platform/haos' }}
      challenges={[
        'Member coordination across dispersed locations',
        'Limited access to verified market information',
        'Quality inconsistency across member production',
        'Paper-based record keeping and reporting',
        'Difficulty accessing finance and inputs',
      ]}
      howTitle="Shared Infrastructure for Cooperative Operations"
      howDescription="Members share one system for registration, production planning, and quality tracking — so the cooperative can sell collectively with a verified batch record, not just a handshake on quality."
      howPoints={['Member registration and verification', 'Production coordination workflows', 'Quality tracking and verification', 'Marketplace access for collective selling', 'Transparent reporting to members']}
      workflow={[{ step: 'Cooperative Setup', description: 'Register cooperative structure, define member categories, and configure operational workflows.' }, { step: 'Member Onboarding', description: 'Register and verify members, assign roles, and configure individual production tracking.' }, { step: 'Production Coordination', description: 'Coordinate planting schedules, input distribution, and collection logistics.' }, { step: 'Quality Verification', description: 'Track quality data through inspections and generate verified batch certificates.' }, { step: 'Market Access', description: 'List verified collective supply on the marketplace and coordinate sales.' }]}
      infrastructure={[{ title: 'HAOS', description: 'Member coordination workflows', href: '/platform/haos' }, { title: 'Traceability', description: 'Quality verification and batch tracking', href: '/platform/traceability' }, { title: 'Marketplace', description: 'Collective market access', href: '/platform/marketplace' }, { title: 'Identity', description: 'Member profile management', href: '/platform/identity' }]}
      benefits={['Improved member coordination', 'Verified quality tracking', 'Collective market access', 'Transparent operations', 'Reduced administrative costs', 'Better access to finance', 'Compliance documentation']}
      faq={[{ question: 'How does Heraja help cooperatives?', answer: 'It replaces scattered member records and paper-based collection logs with one system — member management, production coordination, quality verification, and market access together.' }, { question: 'Can small cooperatives afford this?', answer: 'Yes. Because the underlying system is shared across many organizations rather than built separately for each one, cooperatives of any size get enterprise-grade capability at a cost that scales with them.' }]} />
  );
}
