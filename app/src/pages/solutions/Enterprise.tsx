import SolutionTemplate from '@/components/layout/SolutionTemplate';

export default function Enterprise() {
  return (
    <SolutionTemplate
      audience="Enterprise Organizations"
      title="Enterprise-Grade Agricultural Infrastructure"
      description="One system across every location instead of a different spreadsheet for each — built for the coordination, verified operations, and audit trail that large agricultural enterprises are already expected to have."
      heroCta={{ label: 'Explore Platform', href: '/platform' }}
      challenges={['Fragmented operations across multiple locations', 'Limited real-time operational visibility', 'Difficulty verifying supply chain claims', 'Integration challenges with existing systems', 'Compliance and audit requirements']}
      howTitle="Scalable Infrastructure for Enterprise Operations"
      howDescription="Every location runs on the same workflows and reports into the same dashboard, and existing ERP, logistics, and accounting systems connect through APIs rather than requiring a rebuild."
      howPoints={['Multi-location coordination', 'Real-time operational dashboards', 'Verified supply chain documentation', 'Enterprise system integration', 'Compliance and audit support']}
      workflow={[{ step: 'Enterprise Assessment', description: 'Evaluate operational requirements, integration needs, and compliance obligations.' }, { step: 'Infrastructure Configuration', description: 'Configure multi-location setup, roles, workflows, and integration points.' }, { step: 'Integration', description: 'Connect existing ERP, logistics, and accounting systems via APIs.' }, { step: 'Deployment', description: 'Roll out across locations with training and change management.' }, { step: 'Operations', description: 'Run day-to-day operations with real-time monitoring and optimization.' }]}
      infrastructure={[{ title: 'HAOS', description: 'Enterprise workflow coordination', href: '/platform/haos' }, { title: 'Traceability', description: 'Supply chain verification', href: '/platform/traceability' }, { title: 'Operational Intelligence', description: 'Analytics and reporting', href: '/platform/operational-intelligence' }, { title: 'APIs', description: 'Enterprise system integration', href: '/platform/apis' }, { title: 'Security', description: 'Compliance and governance', href: '/platform/security' }]}
      benefits={['Improved operational visibility', 'Verified supply chain data', 'Reduced coordination costs', 'Better compliance posture', 'Data-driven decisions', 'Scalable architecture', 'Enterprise integration']} faq={[{ question: 'Is Heraja suitable for large enterprises?', answer: 'Yes — it\'s built for multi-location operations with role-based access and integration depth that scales with the organization, not just a single-site tool stretched thin.' }, { question: 'Can Heraja integrate with our existing ERP?', answer: 'Yes, through APIs and integration tooling built to connect with major ERP, logistics, and accounting systems without replacing them.' }]} />
  );
}
