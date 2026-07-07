import PlatformTemplate from '@/components/layout/PlatformTemplate';
import {
  Sprout,
  ClipboardList,
  Camera,
  CloudSun,
  Bell,
  LineChart,
  Layers,
  Smartphone,
} from 'lucide-react';

const capabilities = [
  { title: 'Production Monitoring', description: 'Track day-to-day farm operations, inputs, and activity logs across every operation in the network.', icon: <Sprout className="w-6 h-6 text-infra-marketplace" /> },
  { title: 'Field Reporting', description: 'Structured digital reporting from field agents and producers, replacing paper-based recordkeeping.', icon: <ClipboardList className="w-6 h-6 text-infra-traceability" /> },
  { title: 'Visual Verification', description: 'Photo-based evidence capture tied to production records and inspection workflows.', icon: <Camera className="w-6 h-6 text-infra-ai" /> },
  { title: 'Operational Visibility', description: 'Real-time visibility into production status across farms, regions, and sectors.', icon: <Layers className="w-6 h-6 text-infra-identity" /> },
  { title: 'Environmental Signals', description: 'Weather, seasonal, and environmental data integrated into operational planning.', icon: <CloudSun className="w-6 h-6 text-brand-primary" /> },
  { title: 'Alerts & Notifications', description: 'Automated alerts for health events, production milestones, and operational exceptions.', icon: <Bell className="w-6 h-6 text-infra-api" /> },
  { title: 'Performance Tracking', description: 'Yield, mortality, and production performance tracked against historical benchmarks.', icon: <LineChart className="w-6 h-6 text-brand-primary" /> },
  { title: 'Mobile-First Access', description: 'Built for low-bandwidth, mobile-first environments where most producers operate.', icon: <Smartphone className="w-6 h-6 text-infra-ai" /> },
];

const workflow = [
  { step: 'Farm Onboarding', description: 'Producers and production partners are registered with operational and geolocation data.' },
  { step: 'Daily Reporting', description: 'Field activity, inputs, and production data captured through mobile interfaces.' },
  { step: 'Monitoring & Visibility', description: 'Operational activity is monitored centrally through digital coordination and dashboards.' },
  { step: 'Exception Handling', description: 'Health events, delays, or anomalies trigger alerts for field agents and coordinators.' },
  { step: 'Performance Review', description: 'Production performance is reviewed against benchmarks to guide the next cycle.' },
];

const benefits = [
  'Real-time production visibility',
  'Reduced reliance on paper records',
  'Earlier detection of operational issues',
  'Stronger data for buyer confidence',
  'Consistent reporting across producers',
  'Foundation for traceability and verification',
  'Works in low-connectivity environments',
  'Feeds operational intelligence and forecasting',
];

const faq = [
  { question: 'What is the Farm Intelligence Platform?', answer: 'Farm Intelligence is the Heraja capability that brings production monitoring, reporting, coordination, and operational visibility to every farm operation in the network — from a single smallholder to a large commercial operation.' },
  { question: 'Who uses it day to day?', answer: 'Producers, field agents, and veterinary or agronomy partners use Farm Intelligence to log activity and flag issues. Coordinators and buyers use the same data, verified, to understand operational status without visiting every site.' },
  { question: 'Does it require constant internet access?', answer: 'No. Farm Intelligence is built mobile-first for the connectivity conditions common across rural production regions, with offline-capable reporting that syncs when connectivity is available.' },
  { question: 'How does this connect to the Poultry & Fish Farming Pilot?', answer: 'Farm Intelligence is the operational layer underneath the pilot — every aggregation, logistics, and verification outcome in the pilot traces back to production data captured here.' },
];

export default function FarmIntelligence() {
  return (
    <PlatformTemplate
      overline="Farm Intelligence Platform"
      title="Operational Visibility From the Farm Up"
      description="Production monitoring, field reporting, and operational visibility across every farm operation in the network — the foundation that traceability, logistics, and market access are built on."
      heroCta={{ label: 'See the Poultry & Fish Farming Pilot', href: '/ecosystem/pilot-programs' }}
      problemTitle="Production Happens Without Structured Visibility"
      problemDescription="Most producers operate without digital records of what's happening on the ground. Coordinators and buyers are left guessing at production status, and issues are only discovered after they've become losses."
      whyTitle="Visibility Starts at the Farm"
      whyDescription="Heraja Farm Intelligence gives every operation — from a single poultry house to a multi-region aggregation network — a structured, digital record of what's actually happening, captured by the people closest to it."
      whyPoints={['Structured field reporting', 'Photo-based evidence capture', 'Real-time operational dashboards', 'Built for mobile, low-bandwidth use']}
      capabilities={capabilities}
      workflow={workflow}
      benefits={benefits}
      faq={faq}
      relatedPages={[
        { title: 'HAOS', href: '/platform/haos', description: 'Operating infrastructure' },
        { title: 'Coordination Network', href: '/platform/coordination-network', description: 'Real-time communication' },
        { title: 'Traceability', href: '/platform/traceability', description: 'Verified operations' },
        { title: 'Logistics', href: '/platform/logistics', description: 'Movement coordination' },
        { title: 'Operational Intelligence', href: '/platform/operational-intelligence', description: 'Analytics' },
      ]}
    />
  );
}
