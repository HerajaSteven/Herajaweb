import Layout from '@/components/layout/Layout';
import Seo from '@/components/Seo';
import CTABlock from '@/components/sections/CTABlock';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

/*
 * The pilot, structured as Phase 5 §8.3 specifies: sectors · what is being
 * tested · method · what is measured · current status · WHAT IS NOT YET KNOWN.
 *
 * That last section is designed to be prominent and of equal weight — not a
 * disclaimer in small type at the bottom. A pilot page that lists its own open
 * questions is more credible than one that does not, and this audience knows
 * what a pilot is: a reader who works in development finance or programme
 * evaluation will produce that list themselves within a minute of arriving.
 * Publishing it first is the cheaper move and the more honest one.
 *
 * WHAT WAS REMOVED:
 *
 *  · "View Regional Programs" in the closing CTA, pointing at /evidence.
 *    There are no regional programmes. The card making that claim on the
 *    evidence index has been deleted; this was the same fabrication surviving
 *    as a button label.
 *
 *  · "Buyers, cooperatives, and logistics partners can join the poultry and
 *    fish farming pilots today." Nobody has said the pilot is open to
 *    enrolment, and inviting an organisation to join something that may not be
 *    accepting participants wastes their time, not ours.
 *
 *  · "Real-time visibility into production." Farm Intelligence reporting is
 *    twice daily by design. "Real-time" contradicts the product's own
 *    description on /platform/farm-intelligence, and the product is right.
 *
 *  · The eyebrow "Ecosystem / Pilot Programs" — /ecosystem became /evidence in
 *    the Phase 1 restructure and this page was still labelled for the old
 *    information architecture.
 *
 * [CONTENT REQUIRED] Current status is deliberately structural rather than
 * numeric. Participant counts, volumes, dates and results are exactly the
 * figures Phase 1 D1 removed from this site, and none has been supplied. When
 * real results exist they belong in "What we have learned", attributed and
 * dated.
 */

const SECTORS = [
  {
    name: 'Poultry',
    why: 'Short production cycles, consistent buyer demand, and repeat offtake — so a coordination failure shows up in weeks rather than seasons.',
    tests: 'Whether structured aggregation and verified production records change what a buyer is willing to commit to.',
  },
  {
    name: 'Fish farming',
    why: 'A second fast-cycling protein sector with a different input chain and time-sensitive movement, sharing part of its buyer network with poultry.',
    tests: 'Whether the same platform generalises across a different production environment, including cold-chain handling.',
  },
];

const METHOD = [
  {
    step: '01',
    title: 'Register the operation',
    desc: 'Farms and production units are recorded against a verified identity, with location captured where it matters.',
  },
  {
    step: '02',
    title: 'Record production as it happens',
    desc: 'Structured reporting from the farm twice daily through Farm Intelligence, with photo evidence where a claim needs support.',
  },
  {
    step: '03',
    title: 'Aggregate against records, not estimates',
    desc: 'Collection is planned from what has actually been reported, so a buyer commitment is made against recorded output.',
  },
  {
    step: '04',
    title: 'Move it, and keep the chain intact',
    desc: 'Movement is coordinated through Logistics so the handoffs between farm, aggregation and buyer stay documented.',
  },
];

const MEASURED = [
  'Reporting compliance — how consistently production is recorded against the expected schedule, which the platform computes rather than infers.',
  'Feed conversion, computed from feed served against weight gained, per batch.',
  'Health and vaccination intervals against expected schedules, with overdue intervals flagged by the system.',
  'Whether aggregation and movement happen against recorded output rather than estimates.',
];

const NOT_KNOWN = [
  'Whether reporting compliance holds without direct support. A farm reporting twice daily during a supported pilot is not the same as one doing it unaided in year two.',
  'Whether the model transfers to slower-cycling sectors. Poultry and fish were chosen because they cycle fast; livestock and grains were not tested by choosing them.',
  'Unit economics at larger volumes. Nothing here establishes what coordination costs per tonne at a scale beyond the pilot.',
  'Independent verification. The records are the platform’s own; no third party has audited them.',
  'Whether buyers change commercial behaviour because of verified records, which is the claim the pilot exists to test and has not yet answered.',
];

export default function PilotPrograms() {
  return (
    <Layout>
      <Seo
        title="The poultry and fish pilot"
        description="Two fast-cycling protein sectors, the method being tested, what is measured — and what is not yet known."
      />

      <section className="relative overflow-hidden bg-surface py-16 sm:py-20 md:py-24">
        <div className="absolute inset-0 pointer-events-none overflow-hidden" aria-hidden="true">
          <div className="absolute -top-24 -right-24 w-72 h-72 rounded-full bg-brand-secondary/10 blur-3xl" />
          <div className="absolute -bottom-32 -left-16 w-64 h-64 rounded-full bg-brand-tertiary/10 blur-3xl" />
        </div>
        <div className="container-heraja w-full">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
            <p className="text-overline mb-4">Evidence / Pilot</p>
            <h1 className="text-display max-w-4xl mb-6 min-w-0">
              Starting narrow, on purpose
            </h1>
            <p className="text-body-large text-neutral-700 max-w-2xl">
              The initial rollout covers two fast-cycling protein sectors — poultry and fish
              farming. They were chosen so that a coordination failure becomes visible in weeks,
              which is what makes a pilot worth running.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Sectors, and what each one is testing */}
      <section className="section-padding bg-surface-elevated">
        <div className="container-heraja">
          <div className="max-w-[720px] mb-10">
            <p className="text-overline mb-3">The sectors</p>
            <h2 className="text-h1">Two sectors, one infrastructure</h2>
          </div>
          <div className="grid lg:grid-cols-2 gap-6">
            {SECTORS.map((sector) => (
              <div key={sector.name} className="bg-surface rounded-lg border border-neutral-300 p-6 min-w-0">
                <h3 className="text-h3 mb-4">{sector.name}</h3>
                <p className="text-label text-neutral-600 mb-1">Why this sector</p>
                <p className="text-body text-neutral-700 mb-4">{sector.why}</p>
                <p className="text-label text-neutral-600 mb-1">What it tests</p>
                <p className="text-body text-neutral-700">{sector.tests}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Method */}
      <section className="section-padding bg-surface">
        <div className="container-heraja">
          <div className="max-w-[720px] mb-10">
            <p className="text-overline mb-3">Method</p>
            <h2 className="text-h1 mb-4">How the pilot actually runs</h2>
            <p className="text-body-large text-neutral-700">
              Every step below happens in software that is deployed and publicly reachable —{' '}
              <Link
                to="/platform/farm-intelligence"
                className="text-brand-accent underline underline-offset-2"
              >
                Farm Intelligence
              </Link>{' '}
              and{' '}
              <Link to="/platform/logistics" className="text-brand-accent underline underline-offset-2">
                Logistics
              </Link>
              . The pilot is not a separate system built for the pilot.
            </p>
          </div>
          <ol className="grid sm:grid-cols-2 lg:grid-cols-4 gap-px bg-neutral-300 border border-neutral-300 rounded-lg overflow-hidden list-none p-0 m-0">
            {METHOD.map((item) => (
              <li key={item.step} className="bg-surface p-6 min-w-0">
                <p className="font-mono-data text-neutral-500 mb-3">{item.step}</p>
                <h3 className="text-h4 mb-2">{item.title}</h3>
                <p className="text-body-small text-neutral-700">{item.desc}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* What is measured */}
      <section className="section-padding bg-surface-dark text-white">
        <div className="container-reading">
          <p className="text-overline mb-3">What is measured</p>
          <h2 className="text-h1 text-white mb-6">Figures the system computes, not ones we assert</h2>
          <ul className="space-y-4">
            {MEASURED.map((line) => (
              <li key={line} className="text-body-large text-neutral-300 border-l-2 border-white/25 pl-5">
                {line}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Current status */}
      <section className="section-padding bg-surface">
        <div className="container-reading">
          <p className="text-overline mb-3">Current status</p>
          <h2 className="text-h1 mb-4">Running, with nothing published yet</h2>
          <p className="text-body-large text-neutral-700 mb-4">
            The pilot is under way in both sectors, on the deployed applications rather than on a
            demonstration build. No results, participant counts or volumes are published on this
            site.
          </p>
          <p className="text-body-large text-neutral-700">
            That is a deliberate omission rather than an oversight. Figures of that kind were
            removed from this site because they could not be attributed and checked, and putting
            them back in a different section would be the same problem with a new heading.
          </p>
        </div>
      </section>

      {/*
        Equal weight to the sections above it — same container, same heading
        level, same type. Phase 5 §8.3 is explicit that this must not read as a
        disclaimer, and shrinking it would turn it into one.
      */}
      <section className="section-padding bg-surface-elevated">
        <div className="container-reading">
          <p className="text-overline mb-3">The open questions</p>
          <h2 className="text-h1 mb-4">What is not yet known</h2>
          <p className="text-body-large text-neutral-700 mb-8">
            A pilot that has answered everything was not a pilot. These are the questions still
            open, in the order they would matter to someone deciding whether to fund or join one.
          </p>
          <ul className="space-y-5 border-l-2 border-neutral-300 pl-6">
            {NOT_KNOWN.map((line) => (
              <li key={line} className="text-body text-neutral-700">
                {line}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <CTABlock
        title="Working on the same problem?"
        description="If you run programmes, buy at volume, or fund production in these sectors, we would rather hear your questions than send you a deck."
        primaryCta={{ label: 'Talk to us', href: '/company/contact' }}
        secondaryCta={{ label: 'See the other evidence', href: '/evidence' }}
      />
    </Layout>
  );
}
