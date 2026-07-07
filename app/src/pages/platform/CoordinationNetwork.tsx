import PlatformTemplate from '@/components/layout/PlatformTemplate';
import {
  MessageSquare,
  Users,
  Radio,
  Bell,
  Languages,
  Network,
  CheckCircle2,
  Smartphone,
} from 'lucide-react';

const capabilities = [
  { title: 'Real-Time Messaging', description: 'Direct communication channels between farmers, field agents, operations teams, and partners.', icon: <MessageSquare className="w-6 h-6 text-infra-marketplace" /> },
  { title: 'WhatsApp Integration', description: 'Coordination through the messaging channels producers already use, with no new app required.', icon: <Radio className="w-6 h-6 text-infra-traceability" /> },
  { title: 'Stakeholder Directory', description: 'A connected network of farmers, vets and agents, aggregators, logistics, and buyers.', icon: <Users className="w-6 h-6 text-infra-ai" /> },
  { title: 'Alerts & Updates', description: 'Automated notifications for scheduling, health events, and operational milestones.', icon: <Bell className="w-6 h-6 text-infra-identity" /> },
  { title: 'Localized Communication', description: 'Multi-language support designed for the regions where producers actually operate.', icon: <Languages className="w-6 h-6 text-brand-primary" /> },
  { title: 'Network Coordination', description: 'Structured coordination across every stakeholder type in the agricultural value chain.', icon: <Network className="w-6 h-6 text-infra-api" /> },
  { title: 'Task Confirmation', description: 'Read receipts and confirmations so coordinators know instructions were received and acted on.', icon: <CheckCircle2 className="w-6 h-6 text-brand-primary" /> },
  { title: 'Mobile-First Design', description: 'Built for the devices and connectivity conditions common across rural operating environments.', icon: <Smartphone className="w-6 h-6 text-infra-ai" /> },
];

const workflow = [
  { step: 'Stakeholder Connection', description: 'Farmers, agents, aggregators, logistics partners, and buyers are connected into one network.' },
  { step: 'Channel Setup', description: 'Communication channels are configured per role, region, or operational group.' },
  { step: 'Daily Coordination', description: 'Updates, instructions, and field reports move through the network in real time.' },
  { step: 'Alerting', description: 'Operational exceptions trigger automated alerts to the right stakeholders.' },
  { step: 'Confirmation & Audit', description: 'Communications are logged, creating an audit trail alongside the operational record.' },
];

const benefits = [
  'Faster field-to-office communication',
  'No new app required for producers',
  'Connected, auditable stakeholder network',
  'Reduced coordination delays',
  'Works across language and literacy levels',
  'Stronger accountability between partners',
  'Lower cost than building bespoke channels',
  'Integrates with Farm Intelligence and Logistics',
];

const faq = [
  { question: 'What is the Coordination Network?', answer: 'The Coordination Network is the communication layer of HAOS, connecting farmers, field agents, operations teams, and partners in real time — so coordination happens at the speed agriculture actually moves.' },
  { question: 'Do producers need a new app?', answer: 'No. The Coordination Network is designed to meet producers where they already are, including WhatsApp-based communication, rather than requiring adoption of an unfamiliar new tool.' },
  { question: 'How is this different from generic messaging?', answer: 'Every conversation is tied to operational context — a farm, a batch, a shipment — and feeds into the same record that powers traceability and reporting, rather than living in a separate, unstructured chat history.' },
];

export default function CoordinationNetwork() {
  return (
    <PlatformTemplate
      overline="Coordination Network"
      title="Real-Time Communication Across the Value Chain"
      description="Communication systems connecting farmers, field agents, operations teams, and partners in real time — turning scattered phone calls and messages into a structured, auditable coordination layer."
      heroCta={{ label: 'Explore Logistics', href: '/platform/logistics' }}
      problemTitle="Coordination Breaks Down Between Stakeholders"
      problemDescription="Producers, aggregators, logistics partners, and buyers typically coordinate through fragmented phone calls, scattered messages, and word of mouth — with no shared record and no way to confirm instructions were received."
      whyTitle="One Connected Stakeholder Network"
      whyDescription="The Coordination Network connects every participant in the agricultural value chain — farmers, vets and agents, aggregators, logistics, and buyers — through real-time, auditable communication tied to operational context."
      whyPoints={['Real-time stakeholder messaging', 'WhatsApp-based, no new app required', 'Automated operational alerts', 'Logged for accountability and audit']}
      capabilities={capabilities}
      workflow={workflow}
      benefits={benefits}
      faq={faq}
      relatedPages={[
        { title: 'Farm Intelligence', href: '/platform/farm-intelligence', description: 'Production visibility' },
        { title: 'Logistics', href: '/platform/logistics', description: 'Movement coordination' },
        { title: 'HAOS', href: '/platform/haos', description: 'Operating infrastructure' },
        { title: 'Marketplace', href: '/platform/marketplace', description: 'Trade coordination' },
        { title: 'Traceability', href: '/platform/traceability', description: 'Verified operations' },
      ]}
    />
  );
}
