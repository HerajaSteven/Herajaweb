import PlatformTemplate from '@/components/layout/PlatformTemplate';
import { launchCtaFor } from '@/config/liveApps';
import { FARM_INTELLIGENCE_EVIDENCE } from '@/config/productEvidence';
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
  { title: 'Operational Visibility', description: 'Production status across farms, regions and sectors, built from the reports as they arrive.', icon: <Layers className="w-6 h-6 text-infra-identity" /> },
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
  'Production visibility from twice-daily reports',
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
      launchCta={launchCtaFor('farmIntelligence')}
      productEvidence={{
        title: 'Farm Intelligence, running',
        intro:
          'Six screens from the application, captured against a demonstration farm mid-cycle — a broiler batch on day 24 of 41.',
        items: FARM_INTELLIGENCE_EVIDENCE,
      }}
      heroCta={{ label: 'See the Poultry & Fish Farming Pilot', href: '/evidence/pilot' }}
      problemTitle="Production Happens Without Structured Visibility"
      problemDescription="Most producers operate without digital records of what's happening on the ground. Coordinators and buyers are left guessing at production status, and issues are only discovered after they've become losses."
      whyTitle="Visibility Starts at the Farm"
      whyDescription="Heraja Farm Intelligence gives every operation — from a single poultry house to a multi-region aggregation network — a structured, digital record of what's actually happening, captured by the people closest to it."
      whyPoints={['Structured field reporting', 'Photo-based evidence capture', 'Dashboards built from submitted reports', 'Built for mobile, low-bandwidth use']}
      capabilities={capabilities}
      workflow={workflow}
      benefits={benefits}
      faq={faq}
      relatedPages={[
        { title: 'HAOS', href: '/platform/haos', description: 'Operating infrastructure' },
        { title: 'Traceability', href: '/platform/haos', description: 'Verified operations' },
        { title: 'Logistics', href: '/platform/logistics', description: 'Movement coordination' },
        { title: 'Operational Intelligence', href: '/platform/haos', description: 'Analytics' },
      ]}
   
      users={{
        organisation:
          "An organisation running livestock production across one or more farms — a cooperative coordinating members, an agribusiness operating its own sites, or a programme that needs the same records from every farm it funds.",
        endUser:
          "The person at the farm. They open it twice a day to record what was served, what the flock looked like, and any mortality — from a phone, in a few taps.",
      }}
      dataAndVerification={{
        title: "Recorded, then derived — never asserted",
        description:
          "Every figure on the livestock screen traces back to something a person entered at a known time. Nothing is typed in as a summary, which is what makes the numbers worth anything to a lender or a programme.",
        points: [
          "Weights come from logged weigh-in samples; the average is derived from them, so a typed average cannot enter the record.",
          "Feed conversion is computed from what was SERVED, and the product says so — “Feed Conversion (as served)” — because served and consumed are different measurements and only one of them was taken.",
          "Reporting is split into a morning and an evening round rather than one daily total, so a missed round is visible instead of averaged away.",
          "Vaccinations record the vaccine, route, administering person and batch lot number — the detail an audit needs rather than a checkbox.",
        ],
      }}
      implementation={{
        title: "What deploying it involves",
        description:
          "Farm Intelligence runs on HAOS, so deployment is a matter of establishing the organisation and its people rather than standing up new infrastructure.",
        steps: [
          "The organisation is established as a tenant, with its own users and its own data boundary.",
          "Farms and production units are recorded, with location captured where it matters.",
          "Farmers are onboarded against a verified identity shared with the rest of the platform.",
          "Batches are placed, and twice-daily reporting begins.",
        ],
      }}
      cta={{
        title: "Open it and see",
        description:
          "Farm Intelligence is deployed and publicly reachable — open it and compare.",
        primary: { label: "Launch Farm Intelligence", href: "https://farm-web.heraja.com" },
        secondary: { label: "Talk to us", href: "/company/contact" },
      }}
    />
  );
}
