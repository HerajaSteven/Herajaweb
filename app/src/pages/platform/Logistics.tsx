import PlatformTemplate from '@/components/layout/PlatformTemplate';
import {
  Truck,
  MapPin,
  PackageCheck,
  Route,
  Warehouse,
  Clock,
  ShieldCheck,
  BarChart3,
} from 'lucide-react';

const capabilities = [
  { title: 'Movement Coordination', description: 'Plan and coordinate transportation of aggregated product across regions.', icon: <Truck className="w-6 h-6 text-infra-marketplace" /> },
  { title: 'Route Planning', description: 'Logistics routing that accounts for aggregation points, road conditions, and delivery windows.', icon: <Route className="w-6 h-6 text-infra-traceability" /> },
  { title: 'Live Tracking', description: 'Real-time visibility into where a shipment is between aggregation and final delivery.', icon: <MapPin className="w-6 h-6 text-infra-ai" /> },
  { title: 'Aggregation & Storage', description: 'Coordination with aggregation and storage points to keep movement and inventory in sync.', icon: <Warehouse className="w-6 h-6 text-infra-identity" /> },
  { title: 'Delivery Confirmation', description: 'Proof-of-delivery workflows that close the loop between dispatch and buyer receipt.', icon: <PackageCheck className="w-6 h-6 text-brand-primary" /> },
  { title: 'Scheduling', description: 'Coordinated pickup and delivery windows aligned with buyer and producer availability.', icon: <Clock className="w-6 h-6 text-infra-api" /> },
  { title: 'Chain-of-Custody Verification', description: 'Movement events tied into the same verification layer used for traceability.', icon: <ShieldCheck className="w-6 h-6 text-brand-primary" /> },
  { title: 'Logistics Intelligence', description: 'Performance data on routes, carriers, and delivery times to improve future planning.', icon: <BarChart3 className="w-6 h-6 text-infra-ai" /> },
];

const workflow = [
  { step: 'Aggregation Handoff', description: 'Product moves from production into structured aggregation and storage systems.' },
  { step: 'Movement Planning', description: 'Routes and transport are coordinated based on aggregation points and delivery destinations.' },
  { step: 'Dispatch & Tracking', description: 'Shipments are dispatched with live tracking visible to coordinators and buyers.' },
  { step: 'Delivery & Confirmation', description: 'Delivery is confirmed at the buyer end, closing the loop with proof-of-delivery records.' },
  { step: 'Performance Review', description: 'Route and carrier performance feed back into logistics intelligence for future planning.' },
];

const benefits = [
  'Reduced post-production losses in transit',
  'Real-time shipment visibility',
  'Coordinated aggregation and movement',
  'Stronger buyer confidence in delivery',
  'Verified chain of custody',
  'Better routing and carrier decisions over time',
  'Fewer missed pickup and delivery windows',
  'Foundation for regional expansion',
];

const faq = [
  { question: 'What is the Logistics Platform?', answer: 'The Logistics Platform coordinates the movement of aggregated agricultural product — from collection points through transportation to final delivery — with live tracking and proof-of-delivery built in.' },
  { question: 'How does this reduce post-production losses?', answer: 'By coordinating aggregation, scheduling, and routing in one system, product spends less time waiting in the wrong place at the wrong time — a leading cause of spoilage and loss in fragmented supply chains.' },
  { question: 'Does Logistics connect to traceability?', answer: 'Yes. Every movement event — pickup, transfer, delivery — is tied into the same verification layer used for traceability, so chain of custody is documented automatically rather than reconstructed after the fact.' },
];

export default function Logistics() {
  return (
    <PlatformTemplate
      overline="Logistics Platform"
      title="Coordinated Movement, From Aggregation to Delivery"
      description="Movement coordination for aggregation, transportation, and operational delivery across regions — with live tracking and proof-of-delivery built into every shipment."
      heroCta={{ label: 'Explore Traceability', href: '/platform/traceability' }}
      problemTitle="Fragmented Logistics Drive Losses and Delays"
      problemDescription="Without coordinated movement, product sits too long at aggregation points, routes are planned reactively, and buyers have no visibility into when a shipment will actually arrive — driving post-production losses and weak buyer confidence."
      whyTitle="Movement Coordinated Like Everything Else"
      whyDescription="Heraja Logistics Infrastructure connects aggregation, scheduling, and transportation into one coordinated system — so movement isn't the weak link between strong production and a confident buyer."
      whyPoints={['Coordinated aggregation and dispatch', 'Live shipment tracking', 'Proof-of-delivery workflows', 'Verified chain of custody']}
      capabilities={capabilities}
      workflow={workflow}
      benefits={benefits}
      faq={faq}
      relatedPages={[
        { title: 'Coordination Network', href: '/platform/coordination-network', description: 'Real-time communication' },
        { title: 'Traceability', href: '/platform/traceability', description: 'Verified operations' },
        { title: 'Marketplace', href: '/platform/marketplace', description: 'Trade coordination' },
        { title: 'Farm Intelligence', href: '/platform/farm-intelligence', description: 'Production visibility' },
        { title: 'Operational Intelligence', href: '/platform/operational-intelligence', description: 'Analytics' },
      ]}
    />
  );
}
