import SolutionTemplate from '@/components/layout/SolutionTemplate';

export default function Agribusiness() {
  return (
    <SolutionTemplate
      audience="Agribusiness"
      title="Infrastructure for Agribusiness Operations"
      description="Supply chains, processing, and market access managed through one connected system instead of five disconnected spreadsheets — built for agribusinesses operating at scale."
      heroCta={{ label: 'Explore Marketplace', href: '/platform/marketplace' }}
      challenges={['Supply chain visibility gaps', 'Quality inconsistency from suppliers', 'Coordination with multiple stakeholders', 'Manual compliance documentation', 'Limited market intelligence']}
      howTitle="Coordinated Agribusiness Operations"
      howDescription="Supplier quality is checked at the source and carried forward, processing runs on tracked workflows instead of tribal knowledge, and market data is available when a pricing decision actually needs to be made."
      howPoints={['Supplier verification and management', 'Quality tracking from source', 'Processing workflow coordination', 'Market intelligence and pricing', 'Compliance documentation']}
      workflow={[{ step: 'Supplier Onboarding', description: 'Register and verify supplier network with quality history.' }, { step: 'Procurement Coordination', description: 'Manage procurement workflows with quality requirements.' }, { step: 'Processing Management', description: 'Track processing operations with quality checkpoints.' }, { step: 'Market Coordination', description: 'Access verified market data and coordinate sales.' }, { step: 'Reporting', description: 'Generate comprehensive operational and compliance reports.' }]}
      infrastructure={[{ title: 'Marketplace', description: 'Supplier and buyer coordination', href: '/platform/marketplace' }, { title: 'Traceability', description: 'Quality verification', href: '/platform/traceability' }, { title: 'HAOS', description: 'Workflow management', href: '/platform/haos' }, { title: 'Intelligence', description: 'Market analytics', href: '/platform/operational-intelligence' }]}
      benefits={['Verified supplier network', 'Quality assurance', 'Operational efficiency', 'Market intelligence', 'Compliance documentation', 'Reduced supply risk']}
      faq={[{ question: 'How does Heraja help agribusinesses?', answer: 'It replaces the patchwork of spreadsheets and phone calls most agribusinesses run on with one system for supplier networks, quality tracking, processing, and market data.' }]} />
  );
}
