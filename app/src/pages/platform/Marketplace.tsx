import PlatformTemplate from '@/components/layout/PlatformTemplate';
import { launchCtaFor } from '@/config/liveApps';
import { APPLICATION_EVIDENCE } from '@/config/productEvidence';
import {
  ShoppingCart,
  Layers,
  ClipboardList,
  Wallet,
  Receipt,
  LineChart,
  MapPin,
  ShieldCheck,
} from 'lucide-react';

/*
 * ── WRITTEN FROM THE APPLICATION, NOT FROM IMAGINATION ───────────────────
 *
 * Every capability below maps to an endpoint in the deployed application
 * (routes/gateway/haos-marketplace.php, 41 routes) running at
 * marketplace.heraja.com, verified 200 on 2026-08-18. Phase 7 decision
 * register §I holds the mapping claim by claim.
 *
 * FIVE CLAIMS WERE REMOVED because verification did not support them:
 *
 *  · "Pricing Intelligence — market data and pricing analytics for informed
 *    negotiations" and "Market Analytics — comprehensive market intelligence
 *    and performance dashboards". Both described MarketIntelligenceService,
 *    which aggregates recorded supply quantity and regional demand week over
 *    week. There is no pricing analytic anywhere in it.
 *
 *  · "Quality Verification — quality inspection workflows integrated into
 *    every transaction". No quality-inspection endpoint exists in this
 *    application. Inspections live in Logistics, against consignments.
 *
 *  · "Demand Matching — intelligent matching of verified supply with
 *    authenticated demand". Requests and supply both exist and orders do
 *    aggregate across farms; nothing supports "intelligent".
 *
 *  · "Reduced counterparty risk" — an outcome claim with no measurement.
 *
 * Worth knowing when editing this file: MarketIntelligenceService's own
 * docblock records the platform owner instructing that it be "real historical
 * aggregation now rather than fabricate predictive numbers", and that a trend
 * with no comparable prior period returns null rather than a guess. The
 * product already held the standard this page had drifted from. Do not
 * reintroduce a forecast claim.
 */

const capabilities = [
  {
    title: 'Supply recorded as batches',
    description:
      'A producer registers what they actually have — commodity, quantity, region — and it stays theirs to update or retire until it is sold.',
    icon: <Layers className="w-6 h-6 text-infra-marketplace" />,
  },
  {
    title: 'Buyer requests',
    description:
      'A buyer states what they need and where. Requests and supply are separate records, so demand is visible even when nothing matches it yet.',
    icon: <ClipboardList className="w-6 h-6 text-infra-traceability" />,
  },
  {
    title: 'Aggregation across farms',
    description:
      'One order can draw on several producers, and the order keeps a record of which farm supplied how much rather than collapsing them into a total.',
    icon: <ShoppingCart className="w-6 h-6 text-brand-primary" />,
  },
  {
    title: 'Orders that move through stages',
    description:
      'An order advances through recorded statuses, and can be cancelled, reordered or rated. Each transition is an event, not a field someone overwrites.',
    icon: <Receipt className="w-6 h-6 text-infra-identity" />,
  },
  {
    title: 'Settlement and wallet',
    description:
      'Orders settle against a wallet that holds balances, history, transfers, currency swaps, bank withdrawal and funding — the same wallet service the other applications use.',
    icon: <Wallet className="w-6 h-6 text-brand-primary" />,
  },
  {
    title: 'Sales that happened elsewhere',
    description:
      'A producer can record a sale made off-platform against the batch it came from, so the supply record stays true instead of quietly diverging from reality.',
    icon: <ShieldCheck className="w-6 h-6 text-infra-api" />,
  },
  {
    title: 'Recorded supply and demand, by region',
    description:
      'An eight-week supply trend and a week-on-week regional demand comparison, computed from batches and requests actually entered. Not a forecast.',
    icon: <LineChart className="w-6 h-6 text-infra-ai" />,
  },
  {
    title: 'Delivery addresses',
    description:
      'Buyers keep delivery destinations against their account, which is what lets an order hand off cleanly to Logistics.',
    icon: <MapPin className="w-6 h-6 text-infra-marketplace" />,
  },
];

const workflow = [
  { step: 'Register supply', description: 'A producer records a batch — commodity, quantity, region — against their verified identity.' },
  { step: 'State demand', description: 'A buyer creates a procurement request for what they need, and where they need it.' },
  { step: 'Aggregate into an order', description: 'Supply from one or more farms is drawn into a single order, with each farm’s contribution recorded.' },
  { step: 'Move the order', description: 'The order advances through recorded statuses. Delivery hands off to Logistics against a stored address.' },
  { step: 'Settle', description: 'Settlement runs against the wallet, and the transaction joins the same history as every other movement of value on the platform.' },
];

const benefits = [
  'Supply recorded by the producer who owns it',
  'Demand visible before it is matched',
  'One order can aggregate several farms',
  'Order transitions recorded as events',
  'Settlement through the shared wallet',
  'Off-platform sales recordable',
  'Historical supply and demand by region',
  'Delivery handoff to Logistics',
];

const faq = [
  {
    question: 'Is this a commodity exchange?',
    answer:
      'No. There is no order book, no clearing and no price discovery mechanism. It is coordination infrastructure: producers record supply, buyers record demand, orders aggregate across farms, and settlement runs through the platform wallet. Prices are agreed between the parties.',
  },
  {
    question: 'What does the market intelligence screen actually show?',
    answer:
      'Two things, both computed from records already in the system: an eight-week trend of supply quantity, and a week-on-week comparison of requested demand against available supply by region, labelled as shortage, rising or stable. It is deliberately not a forecast, and where there is no comparable prior period it reports nothing rather than estimating.',
  },
  {
    question: 'Does it verify quality?',
    answer:
      'Not in this application. Quality and condition checks sit in Logistics, against a consignment in transit — including per-phase inspections and cold-chain readings. The marketplace records who supplied what and what was agreed; it does not inspect produce.',
  },
  {
    question: 'What happens if a sale is agreed off the platform?',
    answer:
      'It can be recorded against the batch it came from. That matters more than it sounds: without it, a producer’s recorded supply drifts away from what they actually hold, and every figure computed from it degrades.',
  },
];

export default function Marketplace() {
  return (
    <PlatformTemplate
      overline="Application"
      title="HAOS Marketplace"
      description="Producers record what they have, buyers record what they need, and orders aggregate supply across farms and settle through the platform wallet."
      launchCta={launchCtaFor('marketplace')}
      productEvidence={{
        title: 'Marketplace, running',
        items: [APPLICATION_EVIDENCE.marketplace],
      }}
      heroCta={{ label: 'How HAOS works', href: '/platform/haos' }}
      problemTitle="Supply and demand that never see each other"
      problemDescription="A producer's output is invisible to a buyer until it arrives — or does not. Demand is equally invisible going the other way, so aggregation happens by phone, against estimates, and what was actually supplied by whom is reconstructed afterwards if at all."
      whyTitle="Records first, transaction second"
      whyDescription="Supply and demand are separate records that exist whether or not they match. An order is built from them and keeps each producer's contribution attached, so settlement, delivery and any later question about the trade all resolve against the same entries rather than against someone's recollection."
      whyPoints={[
        'Supply and demand recorded independently',
        'Orders aggregate across farms, attributably',
        'Status changes are events',
        'Settlement through the shared wallet',
      ]}
      capabilities={capabilities}
      workflow={workflow}
      benefits={benefits}
      faq={faq}
      relatedPages={[
        { title: 'HAOS', href: '/platform/haos', description: 'The platform underneath' },
        { title: 'Logistics', href: '/platform/logistics', description: 'Where delivery is coordinated' },
        { title: 'e-Chimusika', href: '/platform/echimusika', description: 'The other market-side application' },
        { title: 'Architecture', href: '/platform/architecture', description: 'Shared services and multi-tenancy' },
      ]}
    />
  );
}
