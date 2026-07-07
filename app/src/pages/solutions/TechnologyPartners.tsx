import SolutionTemplate from '@/components/layout/SolutionTemplate';

export default function TechnologyPartners() {
  return (
    <SolutionTemplate
      audience="Technology Partners"
      title="Build on Agricultural Infrastructure"
      description="Skip rebuilding farm registries, identity checks, and traceability from zero — build on top of ours instead, through documented APIs and SDKs."
      heroCta={{ label: 'Explore APIs', href: '/platform/apis' }}
      challenges={['Building agricultural apps from scratch is expensive', 'Limited access to verified agricultural data', 'Integration with farm management systems', 'Compliance and security requirements', 'Scaling across regions']}
      howTitle="Developer-Ready Infrastructure"
      howDescription="APIs, SDKs, and a sandbox environment mean the plumbing is already built — partners spend their time on what makes their product different, not on re-solving identity and data access."
      howPoints={['Comprehensive API ecosystem', 'Verified agricultural data access', 'SDKs and developer tools', 'Sandbox testing environment', 'Partner support program']}
      workflow={[{ step: 'Partner Registration', description: 'Apply to the technology partner program and receive API credentials.' }, { step: 'Development', description: 'Build integrations using SDKs, documentation, and sandbox environment.' }, { step: 'Testing', description: 'Thoroughly test in sandbox with realistic data scenarios.' }, { step: 'Certification', description: 'Pass integration certification for security and reliability.' }, { step: 'Go Live', description: 'Deploy to production with monitoring and support.' }]}
      infrastructure={[{ title: 'APIs & Integrations', description: 'Developer-ready APIs', href: '/platform/apis' }, { title: 'Security', description: 'Authentication and compliance', href: '/platform/security' }, { title: 'Infrastructure Services', description: 'Platform capabilities', href: '/platform/infrastructure-services' }, { title: 'Documentation', description: 'Technical documentation', href: '/resources/documentation' }]}
      benefits={['Reduced development time', 'Verified data access', 'Scalable infrastructure', 'Partner support', 'Joint go-to-market']}
      faq={[{ question: 'How do I become a technology partner?', answer: 'Reach out to the partnerships team — applications to the technology partner program include API access to get started.' }]} />
  );
}
