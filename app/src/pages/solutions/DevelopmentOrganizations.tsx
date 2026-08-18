import SolutionTemplate from '@/components/layout/SolutionTemplate';

export default function DevelopmentOrganizations() {
  return (
    <SolutionTemplate
      audience="Development Organizations"
      title="Infrastructure for Agricultural Development Programs"
      description="A system for coordinating multi-partner programs and turning impact claims into evidence — built for organizations that have to prove outcomes, not just report activity."
      heroCta={{ label: 'Explore Platform', href: '/platform' }}
      challenges={['Difficulty coordinating multi-stakeholder programs', 'Limited ability to measure program outcomes', 'Unverified impact claims', 'Fragmented reporting across partners', 'Sustainability concerns post-program']}
      howTitle="Measurable Development Impact"
      howDescription="Partners, beneficiaries, and field agents work from the same program record, so outcome data is captured as it happens rather than reconstructed for a final report — and the system keeps running after the program ends."
      howPoints={['Multi-stakeholder coordination', 'Verified outcome tracking', 'Impact measurement dashboards', 'Transparent reporting', 'Sustainable infrastructure transfer']}
      workflow={[{ step: 'Program Design', description: 'Define outcomes, indicators, and coordination requirements.' }, { step: 'Stakeholder Setup', description: 'Onboard partners, beneficiaries, and verification agents.' }, { step: 'Implementation', description: 'Run program activities with progress recorded as it happens.' }, { step: 'Monitoring', description: 'Track indicators and verify outcomes through the platform.' }, { step: 'Evaluation', description: 'Generate comprehensive impact reports with verified data.' }]}
      infrastructure={[{ title: 'HAOS', description: 'Program coordination', href: '/platform/haos' }, { title: 'Traceability', description: 'Outcome verification', href: '/platform/haos' }, { title: 'Intelligence', description: 'Impact analytics', href: '/platform/haos' }, { title: 'Identity', description: 'Beneficiary management', href: '/platform/architecture' }]}
      benefits={['Verified impact data', 'Improved coordination', 'Transparent reporting', 'Sustainable infrastructure', 'Reduced monitoring costs']}
      faq={[{ question: 'How does Heraja support development programs?', answer: 'It gives program staff, partners, and beneficiaries one shared record for implementation, monitoring, and evaluation — so outcome claims are backed by data captured in the field, not assembled afterward.' }]}
      evidence={{
        emphasis: 'pilot',
        title: "The pilot, and what it has not answered",
        description:
          "Two sectors — poultry and fish — with the method, what is being measured, where it has reached, and the questions still open.",
        link: { label: "Read the pilot", href: '/evidence/pilot' },
      }}
      cta={{
        label: "Discuss a programme",
        enquiryType: 'development-organization',
        title: "Discuss a programme",
        description:
          "Tell us what you need to measure and we will be direct about what the platform can and cannot evidence today.",
      }}
    />
  );
}
