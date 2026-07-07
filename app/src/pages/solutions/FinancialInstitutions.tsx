import SolutionTemplate from '@/components/layout/SolutionTemplate';

export default function FinancialInstitutions() {
  return (
    <SolutionTemplate
      audience="Financial Institutions"
      title="Agricultural Finance Infrastructure"
      description="Lending decisions based on what's actually happening on a farm, not what a borrower reports — verified production and quality data that turns agricultural finance from a guess into an assessment."
      heroCta={{ label: 'Explore Traceability', href: '/platform/traceability' }}
      challenges={['Limited visibility into borrower operations', 'Difficulty verifying production claims', 'High default risk due to information asymmetry', 'Manual and expensive due diligence', 'Limited post-disbursement monitoring']}
      howTitle="Data-Driven Agricultural Finance"
      howDescription="Traceability records and operational history replace paperwork-based due diligence, and the same data keeps flowing after disbursement — so monitoring a loan doesn't require a field visit every quarter."
      howPoints={['Verified borrower operational data', 'Production and quality tracking', 'Automated risk assessment', 'Portfolio monitoring dashboards', 'Compliance documentation']}
      workflow={[{ step: 'Borrower Assessment', description: 'Review verified operational history and production data.' }, { step: 'Risk Evaluation', description: 'Assess risk using operational analytics and market data.' }, { step: 'Disbursement', description: 'Structure loan with traceability-linked conditions.' }, { step: 'Monitoring', description: 'Track operational performance and compliance post-disbursement.' }, { step: 'Reporting', description: 'Generate portfolio analytics and risk reports.' }]}
      infrastructure={[{ title: 'Traceability', description: 'Verified operational data', href: '/platform/traceability' }, { title: 'Operational Intelligence', description: 'Risk analytics and forecasting', href: '/platform/operational-intelligence' }, { title: 'Identity', description: 'Borrower verification', href: '/platform/identity' }, { title: 'APIs', description: 'Integration with banking systems', href: '/platform/apis' }]}
      benefits={['A verified borrower data model', 'Reduced information asymmetry at underwriting', 'A structured risk-assessment framework', 'Ongoing portfolio monitoring without field visits', 'An audit-ready compliance record', 'Lower due diligence cost per loan']}
      faq={[{ question: 'How does Heraja help agricultural lenders?', answer: 'By replacing self-reported borrower claims with operational and traceability records captured independently — the basis for both the initial credit decision and ongoing monitoring.' }]} />
  );
}
