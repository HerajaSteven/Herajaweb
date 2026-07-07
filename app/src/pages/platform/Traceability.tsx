import PlatformTemplate from '@/components/layout/PlatformTemplate';
import { Fingerprint, ClipboardCheck, ScanLine, FileCheck, Link2, BarChart3, Globe, ShieldCheck } from 'lucide-react';

const capabilities = [
  { title: 'Farm Registration', description: 'Digital registration and geolocation of production operations.', icon: <Globe className="w-6 h-6 text-infra-traceability" /> },
  { title: 'Production Tracking', description: 'Capture production activities, inputs, and operational milestones.', icon: <ClipboardCheck className="w-6 h-6 text-infra-marketplace" /> },
  { title: 'Inspection Workflows', description: 'Multi-stage inspection with photo verification and inspector assignment.', icon: <ScanLine className="w-6 h-6 text-infra-ai" /> },
  { title: 'Chain of Custody', description: 'Track handoffs between supply chain participants with verification.', icon: <Link2 className="w-6 h-6 text-infra-identity" /> },
  { title: 'Verification Engine', description: 'Automated verification of claims against captured data.', icon: <FileCheck className="w-6 h-6 text-brand-primary" /> },
  { title: 'Certificate Generation', description: 'Generate verified certificates and compliance documentation.', icon: <ShieldCheck className="w-6 h-6 text-infra-api" /> },
  { title: 'QR Code Integration', description: 'Consumer-facing QR codes linking to verified product history.', icon: <Fingerprint className="w-6 h-6 text-brand-primary" /> },
  { title: 'Analytics Dashboard', description: 'Traceability analytics, compliance status, and chain visualization.', icon: <BarChart3 className="w-6 h-6 text-infra-ai" /> },
];

const workflow = [
  { step: 'Farm Registration', description: 'Production operations register with geolocation and operational details.' },
  { step: 'Production Capture', description: 'Activities, inputs, and harvest data captured through mobile interfaces.' },
  { step: 'Inspection', description: 'Independent inspectors verify claims using structured verification workflows.' },
  { step: 'Aggregation Tracking', description: 'Batches aggregated and tracked through processing and transport.' },
  { step: 'Final Verification', description: 'Complete chain verified and certificate generated for market access.' },
];

const benefits = [
  'Verified production claims',
  'Complete chain of custody',
  'Independent inspection records',
  'Compliance documentation',
  'Consumer transparency',
  'Quality assurance',
  'Risk reduction',
  'Market access enablement',
];

const faq = [
  { question: 'What is Traceability Infrastructure?', answer: 'It\'s the layer that captures, verifies, and documents the complete journey of agricultural products from production through to final delivery — turning claims about origin and quality into evidence.' },
  { question: 'How is data verified?', answer: 'Data is verified through a combination of automated checks, independent inspections, photographic evidence, and cross-referencing with other data sources in the infrastructure.' },
  { question: 'Can this integrate with existing certification?', answer: 'Yes. Heraja Traceability is designed to support and integrate with existing certification schemes and compliance requirements.' },
];

export default function Traceability() {
  return (
    <PlatformTemplate
      overline="Traceability Infrastructure"
      title="Building Trust Through Verified Operations"
      description="End-to-end traceability infrastructure that captures, verifies, and documents every stage of the agricultural value chain — from farm registration through production, inspection, aggregation, and delivery."
      heroCta={{ label: 'Explore Intelligence', href: '/platform/operational-intelligence' }}
      problemTitle="Agricultural Supply Chains Lack Verification"
      problemDescription="Most agricultural products move through supply chains with limited documentation. Claims about origin, quality, and handling are difficult to verify — creating risk for buyers and limiting market access for producers."
      whyTitle="Verified Operations Enable Trust"
      whyDescription="Every stage — registration, production, inspection, movement — gets documented as it happens, not reconstructed afterward. Claims about origin and quality stop being assertions and become records buyers can check."
      whyPoints={['Structured data capture', 'Independent verification', 'Complete audit trails', 'Compliance documentation']}
      capabilities={capabilities}
      workflow={workflow}
      benefits={benefits}
      faq={faq}
      relatedPages={[
        { title: 'HAOS', href: '/platform/haos', description: 'Operating system' },
        { title: 'Marketplace', href: '/platform/marketplace', description: 'Trade coordination' },
        { title: 'Operational Intelligence', href: '/platform/operational-intelligence', description: 'Analytics' },
        { title: 'Identity', href: '/platform/identity', description: 'Digital profiles' },
        { title: 'Security', href: '/platform/security', description: 'Compliance' },
      ]}
    />
  );
}
