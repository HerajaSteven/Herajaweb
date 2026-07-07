import PlatformTemplate from '@/components/layout/PlatformTemplate';
import {
  ShoppingCart,
  TrendingUp,
  Search,
  Scale,
  Truck,
  Receipt,
  BarChart3,
  ShieldCheck,
} from 'lucide-react';

const capabilities = [
  { title: 'Verified Supply', description: 'Supply listings verified through Heraja traceability infrastructure.', icon: <ShieldCheck className="w-6 h-6 text-infra-marketplace" /> },
  { title: 'Demand Matching', description: 'Intelligent matching of verified supply with authenticated demand.', icon: <Search className="w-6 h-6 text-infra-traceability" /> },
  { title: 'Pricing Intelligence', description: 'Market data and pricing analytics for informed negotiations.', icon: <TrendingUp className="w-6 h-6 text-infra-ai" /> },
  { title: 'Quality Verification', description: 'Quality inspection workflows integrated into every transaction.', icon: <Scale className="w-6 h-6 text-infra-identity" /> },
  { title: 'Trade Coordination', description: 'End-to-end trade management from inquiry to settlement.', icon: <ShoppingCart className="w-6 h-6 text-brand-primary" /> },
  { title: 'Logistics Integration', description: 'Transport and logistics coordination within trade workflows.', icon: <Truck className="w-6 h-6 text-infra-api" /> },
  { title: 'Settlement Support', description: 'Payment coordination and settlement workflow management.', icon: <Receipt className="w-6 h-6 text-brand-primary" /> },
  { title: 'Market Analytics', description: 'Comprehensive market intelligence and performance dashboards.', icon: <BarChart3 className="w-6 h-6 text-infra-ai" /> },
];

const workflow = [
  { step: 'Supplier Registration', description: 'Producers register and verify their operations through the traceability system.' },
  { step: 'Listing Creation', description: 'Verified supply is listed with quality data, quantity, and availability.' },
  { step: 'Demand Matching', description: 'Buyers discover verified supply matched to their specifications.' },
  { step: 'Negotiation', description: 'Pricing intelligence supports fair negotiation between parties.' },
  { step: 'Trade Execution', description: 'Contracts, logistics, and settlement managed through unified workflows.' },
];

const benefits = [
  'Verified supply chain participants',
  'Quality-assured transactions',
  'Transparent pricing data',
  'Integrated logistics coordination',
  'Settlement workflow automation',
  'Market intelligence dashboards',
  'Reduced counterparty risk',
  'Operational reporting',
];

const faq = [
  { question: 'What is Marketplace Infrastructure?', answer: 'It\'s the layer that matches verified supply with authenticated demand, and integrates that match with traceability, quality checks, logistics, and settlement — so a trade isn\'t just agreed, it\'s coordinated end to end.' },
  { question: 'How does verification work?', answer: 'All marketplace participants must be verified through Heraja Identity and Traceability systems. Supply listings include verified quality data from inspection workflows.' },
  { question: 'Is this a commodity exchange?', answer: 'No. Heraja Marketplace Infrastructure is coordination infrastructure, not an exchange. It provides the tools and verification layer that organizations use to coordinate trade.' },
];

export default function Marketplace() {
  return (
    <PlatformTemplate
      overline="Marketplace Infrastructure"
      title="Coordinating Agricultural Markets Through Shared Infrastructure"
      description="Infrastructure that connects verified agricultural supply with authenticated demand — enabling transparent trade coordination, quality verification, and settlement workflows."
      heroCta={{ label: 'Explore Traceability', href: '/platform/traceability' }}
      problemTitle="Agricultural Markets Lack Coordination Infrastructure"
      problemDescription="Buyers struggle to find verified supply. Suppliers lack access to authenticated demand. Quality claims are difficult to verify. Pricing is opaque. Settlement is manual and slow."
      whyTitle="Verified Market Coordination"
      whyDescription="Buyers see supply that's already been checked. Suppliers reach demand that's already been authenticated. Pricing, quality, and logistics data sit alongside the listing instead of being negotiated blind — without cutting out the relationships and brokers that already work."
      whyPoints={['Verified participants', 'Quality-linked listings', 'Transparent pricing data', 'Integrated logistics']}
      capabilities={capabilities}
      workflow={workflow}
      benefits={benefits}
      faq={faq}
      relatedPages={[
        { title: 'HAOS', href: '/platform/haos', description: 'Operating infrastructure' },
        { title: 'Traceability', href: '/platform/traceability', description: 'Verification system' },
        { title: 'Operational Intelligence', href: '/platform/operational-intelligence', description: 'Analytics' },
        { title: 'APIs', href: '/platform/apis', description: 'Integration layer' },
        { title: 'Security', href: '/platform/security', description: 'Compliance' },
      ]}
    />
  );
}
