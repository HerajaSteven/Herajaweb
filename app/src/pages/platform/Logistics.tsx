import PlatformTemplate from '@/components/layout/PlatformTemplate';
import { launchCtaFor } from '@/config/liveApps';
import { APPLICATION_EVIDENCE } from '@/config/productEvidence';
import {
  Truck,
  MapPin,
  ClipboardCheck,
  Thermometer,
  Warehouse,
  BadgeCheck,
  AlertTriangle,
  Wallet,
} from 'lucide-react';

/*
 * ── WRITTEN FROM THE APPLICATION, NOT FROM IMAGINATION ───────────────────
 *
 * Every capability below maps to an endpoint in the deployed application
 * (routes/gateway/logistics.php, 76 routes) running at logistics.heraja.com,
 * verified 200 on 2026-08-18. Phase 7 decision register §J holds the mapping.
 *
 * ── THE "REAL-TIME" CORRECTION, WHICH OVERTURNS A PHASE 6 DECISION ───────
 *
 * This page said "Live Tracking — real-time visibility into where a shipment
 * is between aggregation and final delivery", and the Phase 6 content register
 * APPROVED it (CI-013) as shipment position tracking.
 *
 * Closer reading does not support it. `inputOrderTracking` returns the
 * assignment stage, `picked_up_at`, `delivered_at`, the driver's name and
 * phone, and the checklist items captured so far. Position points come from
 * `addRouteCheckpoint`, which a DRIVER submits with a `recorded_at` timestamp
 * validated as being within the last two days. That is a trail of recorded
 * events, not continuous telemetry, and "real-time" would let a buyer expect a
 * moving dot they will not get.
 *
 * CI-013 is re-classified REMOVED. Phase 6 was right to examine the claim and
 * landed one notch too generous; the correction is recorded rather than
 * quietly applied, because a register that hides its own corrections is not
 * worth keeping.
 *
 * ── ALSO REMOVED ─────────────────────────────────────────────────────────
 *
 *  · "Route Planning — routing that accounts for aggregation points, ROAD
 *    CONDITIONS, and delivery windows." Route TEMPLATES are matched to a job.
 *    Nothing reads road conditions, and the map carries no traffic layer —
 *    that prohibition is deliberate and still stands.
 *  · "Reduced post-production losses in transit" — an outcome with no
 *    measurement behind it.
 *  · "Foundation for regional expansion" — a geography claim by implication.
 *
 * ── ADDED, BECAUSE IT IS REAL AND WAS GOING UNCLAIMED ────────────────────
 *
 * Cold chain: readings against a consignment, a monitor, history, and
 * configurable thresholds, with `requires_cold_chain` carried on the
 * assignment itself. Also warehouses and zones with verification, declared
 * driver capabilities that are then verified, and incident reporting. A page
 * overstating four things while omitting these was misrepresenting the
 * product in both directions.
 */

const capabilities = [
  {
    title: 'Assignments and dispatch',
    description:
      'Consignments enter a dispatch queue, a driver is assigned, and the assignment advances through recorded stages rather than being tracked in a group chat.',
    icon: <Truck className="w-6 h-6 text-infra-marketplace" />,
  },
  {
    title: 'Cold chain',
    description:
      'Temperature readings recorded against a consignment, checked against configurable thresholds, with the full reading history retained and a monitor for consignments that require it.',
    icon: <Thermometer className="w-6 h-6 text-infra-ai" />,
  },
  {
    title: 'Inspections at each phase',
    description:
      'A structured inspection form at each phase of the journey, so condition at handover is recorded when it is observed rather than argued about later.',
    icon: <ClipboardCheck className="w-6 h-6 text-infra-traceability" />,
  },
  {
    title: 'Checkpoints along the route',
    description:
      'Drivers log checkpoints with coordinates and a timestamp. The result is a recorded trail of where a consignment has been — not a continuous feed.',
    icon: <MapPin className="w-6 h-6 text-infra-identity" />,
  },
  {
    title: 'Warehouses and zones',
    description:
      'Aggregation points and delivery zones are defined, and a warehouse can be verified rather than merely listed.',
    icon: <Warehouse className="w-6 h-6 text-brand-primary" />,
  },
  {
    title: 'Driver and vehicle capability',
    description:
      'Drivers declare capabilities and those declarations are verified. Vehicles carry a readiness state, and maintenance issues are raised and resolved against the vehicle.',
    icon: <BadgeCheck className="w-6 h-6 text-infra-api" />,
  },
  {
    title: 'Incidents',
    description:
      'When something goes wrong on a journey it is reported against the assignment, so the exception is part of the record instead of a phone call nobody wrote down.',
    icon: <AlertTriangle className="w-6 h-6 text-brand-tertiary" />,
  },
  {
    title: 'Earnings and wallet',
    description:
      'Drivers see what they have earned and can draw a statement, against the same wallet service used across the platform.',
    icon: <Wallet className="w-6 h-6 text-brand-primary" />,
  },
];

const workflow = [
  { step: 'Consignment queued', description: 'A delivery enters the dispatch queue, carrying whether it requires cold chain.' },
  { step: 'Driver assigned', description: 'A driver is assigned against declared and verified capabilities, and a vehicle with a known readiness state.' },
  { step: 'Pickup and inspection', description: 'Condition is recorded on a structured inspection form at pickup, with checklist items captured as they happen.' },
  { step: 'In transit', description: 'The driver logs checkpoints, and where cold chain applies, temperature readings are recorded against thresholds.' },
  { step: 'Delivery and receipt', description: 'Delivery is confirmed by the recipient, the driver can be rated, and the assignment closes with its full event trail attached.' },
];

const benefits = [
  'Dispatch queue instead of ad-hoc allocation',
  'Cold-chain readings against thresholds',
  'Inspection recorded at each phase',
  'Checkpoints logged with coordinates',
  'Verified driver capabilities',
  'Vehicle readiness and maintenance history',
  'Incidents recorded against the journey',
  'Driver earnings and statements',
];

const faq = [
  {
    question: 'Can I see where a consignment is right now?',
    answer:
      'You can see the stage it has reached, when it was picked up, when it was delivered, the checklist captured so far, and any checkpoints the driver has logged with coordinates. That is a recorded trail rather than continuous tracking — checkpoints appear when a driver logs them, not on a timer. We would rather say that than let you plan around a live map.',
  },
  {
    question: 'Does it give an estimated arrival time?',
    answer:
      'No, and this is deliberate. The map shows recorded positions on an open street map with no traffic layer, and an ETA computed without live road data is a guess presented as information. A buyer who is told a delivery lands at 14:00 makes decisions on it.',
  },
  {
    question: 'How does cold chain work?',
    answer:
      'A consignment can be flagged as requiring cold chain. Temperature readings are recorded against it and checked against thresholds you configure, the full history is retained, and consignments under cold-chain requirement can be monitored as a set.',
  },
  {
    question: 'Does it plan routes?',
    answer:
      'It matches a journey to a route template you have defined, and it holds zones and warehouses as fixed points. It does not compute an optimal route, and it does not read road conditions.',
  },
];

export default function Logistics() {
  return (
    <PlatformTemplate
      overline="Application"
      title="HAOS Logistics"
      description="Dispatch, inspection, cold chain and delivery confirmation — recorded against the consignment as they happen, on the same platform as the order that created it."
      launchCta={launchCtaFor('logistics')}
      productEvidence={{
        title: 'Logistics, running',
        items: [APPLICATION_EVIDENCE.logistics],
      }}
      heroCta={{ label: 'How HAOS works', href: '/platform/haos' }}
      problemTitle="The handoffs are where the record breaks"
      problemDescription="Production is recorded and the sale is recorded, and between them a consignment changes hands three or four times with nothing written down. When produce arrives in poor condition, or does not arrive, there is no account of what happened in between — only people recalling it differently."
      whyTitle="Movement recorded like everything else"
      whyDescription="Every stage, inspection, checkpoint, temperature reading and incident is an entry against the consignment, on the same platform and the same audit trail as the order it came from. The chain of custody is documented as it happens rather than reconstructed afterwards."
      whyPoints={[
        'Stages recorded, not messaged',
        'Inspection at each phase',
        'Cold-chain readings against thresholds',
        'No ETA, and no traffic claims',
      ]}
      capabilities={capabilities}
      workflow={workflow}
      benefits={benefits}
      faq={faq}
      relatedPages={[
        { title: 'HAOS', href: '/platform/haos', description: 'The platform underneath' },
        { title: 'Marketplace', href: '/platform/marketplace', description: 'Where the order comes from' },
        { title: 'Farm Intelligence', href: '/platform/farm-intelligence', description: 'Where production is recorded' },
        { title: 'Architecture', href: '/platform/architecture', description: 'Shared services and multi-tenancy' },
      ]}
    />
  );
}
