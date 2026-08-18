import PlatformTemplate from '@/components/layout/PlatformTemplate';
import {
  Workflow,
  Users,
  ClipboardCheck,
  MessageSquare,
  Calendar,
  FileBarChart,
  ShieldCheck,
  Plug,
} from 'lucide-react';

const capabilities = [
  { title: 'Workflow Engine', description: 'Automated multi-step processes that coordinate activities across organizations and stakeholders.', icon: <Workflow className="w-6 h-6 text-brand-primary" /> },
  { title: 'Coordination Hub', description: 'Central interface for managing cross-organizational operations and task assignments.', icon: <Users className="w-6 h-6 text-infra-marketplace" /> },
  { title: 'Verification System', description: 'Multi-stage verification workflows ensuring data integrity at every operational step.', icon: <ClipboardCheck className="w-6 h-6 text-infra-traceability" /> },
  { title: 'Messaging', description: 'Secure communication layer connecting all stakeholders within the operational context.', icon: <MessageSquare className="w-6 h-6 text-infra-ai" /> },
  { title: 'Scheduling', description: 'Scheduling for inspections, deliveries, meetings and operational milestones.', icon: <Calendar className="w-6 h-6 text-infra-identity" /> },
  { title: 'Reporting', description: 'Comprehensive operational reports with export capabilities and scheduled distribution.', icon: <FileBarChart className="w-6 h-6 text-brand-primary" /> },
  { title: 'Identity Management', description: 'Digital profiles and role-based access for every stakeholder in the ecosystem.', icon: <ShieldCheck className="w-6 h-6 text-infra-traceability" /> },
  { title: 'Integration Layer', description: 'Connect external systems and data sources into unified operational workflows.', icon: <Plug className="w-6 h-6 text-infra-api" /> },
];

const workflow = [
  { step: 'Organization Setup', description: 'Configure organizational structure, roles, and operational parameters within HAOS.' },
  { step: 'Workflow Design', description: 'Define multi-step operational processes using the visual workflow builder.' },
  { step: 'Stakeholder Connection', description: 'Invite and onboard team members, partners, and external collaborators.' },
  { step: 'Operation Execution', description: 'Run day-to-day operations through configured workflows, with each step recorded as it happens.' },
  { step: 'Verification & Reporting', description: 'Generate verified operational reports with complete audit trails.' },
];

const benefits = [
  'Streamlined operational workflows',
  'Cross-organizational coordination',
  'Automated verification processes',
  'Operational visibility from recorded events',
  'Complete audit trails',
  'Role-based access control',
  'Integrated messaging and alerts',
  'Configurable reporting',
  'External system integration',
];

const faq = [
  { question: 'What is HAOS?', answer: 'HAOS (Heraja Agricultural Operating System) is the workflow and coordination layer of Heraja infrastructure. It provides the operational environment where agricultural organizations manage their day-to-day activities, coordinate with partners, and maintain verified records.' },
  { question: 'Who is HAOS for?', answer: 'Agricultural organizations that have to coordinate across more than one party — cooperatives with members, government agencies running programmes, agribusinesses operating across sites, lenders assessing production. Each configures HAOS to its own structure. We do not publish a customer list and this site claims none.' },
  { question: 'How is HAOS different from farm management software?', answer: 'HAOS is infrastructure, not software. It provides the coordination layer that connects multiple organizations, systems, and stakeholders — unlike traditional farm management tools that operate in isolation.' },
  { question: 'Can HAOS integrate with existing systems?', answer: 'Through the platform API, yes. There are no pre-built connectors for a named ERP or accounting package today — an integration is scoped work rather than a setting you switch on. The APIs page sets out exactly what exists.' },
];

export default function HAOS() {
  return (
    <PlatformTemplate
      overline="HAOS"
      title="HAOS — the Heraja Agricultural Operating System"
      description="The workflow engine and operational backbone that powers connected agriculture — where organizations design, run, and verify processes that span multiple stakeholders."
      heroCta={{ label: 'Explore Architecture', href: '/platform/architecture' }}
      problemTitle="Operations Without a Shared System"
      problemDescription="Most agricultural organizations run on disconnected processes — spreadsheets, phone calls, paper records, and isolated software that don't talk to each other. Nobody has the full picture, and gaps only surface after something's gone wrong."
      whyTitle="One Operational Environment, Every Stakeholder"
      whyDescription="HAOS is where organizations design workflows, assign tasks, track progress, and verify completion — a single system that every partner works from, instead of each running their own version."
      whyPoints={['Visual workflow design', 'Multi-stakeholder coordination', 'Automated verification', 'Operations recorded as they happen']}
      capabilities={capabilities}
      workflow={workflow}
      benefits={benefits}
      faq={faq}
      relatedPages={[
        { title: 'Marketplace', href: '/platform/marketplace', description: 'Market coordination' },
        { title: 'Traceability', href: '/platform/haos', description: 'Verified operations' },
        { title: 'Operational Intelligence', href: '/platform/haos', description: 'Analytics and AI' },
        { title: 'Identity & Access', href: '/platform/architecture', description: 'Digital profiles' },
        { title: 'APIs & Integrations', href: '/platform/apis', description: 'Developer tools' },
        { title: 'Architecture', href: '/platform/architecture', description: 'Full stack view' },
      ]}
    />
  );
}
