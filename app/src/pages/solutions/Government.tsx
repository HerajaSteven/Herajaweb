import SolutionTemplate from '@/components/layout/SolutionTemplate';

export default function Government() {
  return (
    <SolutionTemplate
      audience="Government"
      title="Digital Infrastructure for Agricultural Transformation"
      description="Across Africa, mobile money and national digital ID programs became the shared infrastructure that payments and identity now run on. Agriculture still runs without that equivalent — this is the foundation for national and regional programs built to close that gap."
      heroCta={{ label: 'Explore Platform', href: '/platform' }}
      challenges={[
        'Limited visibility into agricultural operations across regions',
        'Fragmented data from multiple disconnected systems',
        'Difficulty verifying compliance and program outcomes',
        'Coordination gaps between agencies and stakeholders',
        'Paper-based processes limiting program effectiveness',
      ]}
      howTitle="Government-Grade Agricultural Infrastructure"
      howDescription="Agencies run programs on the same system rather than reconciling five disconnected ones after the fact — compliance is checked as data comes in, not audited months later, and outcomes are measurable from day one."
      howPoints={[
        'National agricultural data backbone',
        'Multi-agency coordination platform',
        'Verified compliance tracking',
        'Program outcome measurement',
        'Regional deployment support',
      ]}
      workflow={[
        { step: 'Program Design', description: 'Define program scope, participants, compliance requirements, and success metrics.' },
        { step: 'Stakeholder Onboarding', description: 'Register and verify government agencies, partner organizations, and program participants.' },
        { step: 'Infrastructure Deployment', description: 'Configure HAOS workflows, traceability requirements, and data collection systems.' },
        { step: 'Program Execution', description: 'Run program operations with real-time monitoring and compliance verification.' },
        { step: 'Reporting & Evaluation', description: 'Generate comprehensive reports on program outcomes, compliance, and impact.' },
      ]}
      infrastructure={[
        { title: 'HAOS', description: 'Workflow coordination for multi-agency programs', href: '/platform/haos' },
        { title: 'Traceability', description: 'Compliance verification and audit trails', href: '/platform/traceability' },
        { title: 'Operational Intelligence', description: 'Program analytics and outcome measurement', href: '/platform/operational-intelligence' },
        { title: 'Identity & Access', description: 'Role-based access for agencies and partners', href: '/platform/identity' },
      ]}
      benefits={[
        'A verified national agricultural data model',
        'A multi-agency coordination framework',
        'Real-time program monitoring capability',
        'An audit-ready compliance record',
        'A reusable blueprint for regional expansion',
        'Reduced administrative burden across agencies',
        'A foundation for evidence-based policy',
      ]}
      faq={[
        { question: 'How does Heraja support government agricultural programs?', answer: 'Heraja provides the digital infrastructure for coordinating multi-stakeholder agricultural programs — from registration and verification through data collection, compliance monitoring, and outcome reporting.' },
        { question: 'Can this integrate with existing government systems?', answer: 'Yes. Heraja APIs enable integration with existing government ERP, GIS, and data systems.' },
        { question: 'Is data sovereignty supported?', answer: 'Yes. Heraja supports regional data residency and complies with local data protection regulations.' },
      ]}
    />
  );
}
