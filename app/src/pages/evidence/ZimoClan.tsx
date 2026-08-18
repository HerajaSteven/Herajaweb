import Layout from '@/components/layout/Layout';
import Seo from '@/components/Seo';
import CTABlock from '@/components/sections/CTABlock';
import { motion } from 'framer-motion';
import { zimoMetrics } from '@/config/siteContent';

/*
 * ── DISCLOSURE IS STRUCTURAL HERE, NOT EDITORIAL (Phase 5 §8.2) ───────────
 *
 * The relationship is the eyebrow, the first line under the H1, and a diagram
 * the reader passes before any description of the deployment. Not a footnote,
 * not a panel at the bottom, not smaller type. A reader cannot reach what Zimo
 * Clan does without first learning who owns it.
 *
 * The page used to open with a badge reading "Enterprise Client", which is the
 * one thing this relationship is not. Phase 1 §9 exists because an
 * arm's-length customer and a subsidiary are different evidence, and
 * presenting the second as the first is the kind of thing that ends a
 * diligence conversation rather than advancing it.
 *
 * ── THE FIGURES THAT WERE REMOVED ────────────────────────────────────────
 *
 * A four-card metric strip stood here:
 *
 *     Partner Farms                  500+
 *     Production Value Facilitated   ₦2B+
 *     Buyer-Matching Turnaround      24hrs
 *     Core Products                  4
 *
 * Phase 1 D1 is the decision that removed "₦2B+ / 500+ farms" from this site.
 * The homepage was cleaned in Phase 3.5; this page was never opened, so the
 * same two numbers survived on the page where they do the most damage — the
 * evidence page for a RELATED PARTY. An unverifiable outcome figure attributed
 * to a subsidiary is the single easiest thing for a diligence reader to take
 * apart. "24hrs" outlived the strip inside a product description and has now
 * gone with it.
 *
 * They are NOT replaced with other numbers. Phase 5 §8.2 says no metrics on
 * this page, and the replacement for an unverifiable figure is a checkable
 * sentence, not a smaller figure.
 *
 * [CONTENT REQUIRED] If real, attributable operating figures are ever
 * published, they belong here phrased as Phase 1 §9 requires — "Zimo Clan
 * achieved X on HAOS", never "Heraja facilitated X".
 *
 * ── PROVENANCE OF THE PRODUCT NAMES ──────────────────────────────────────
 *
 * Animal Tracker, Farmer Groups, Farm Logistics and Sell & Earn are Zimo
 * Clan's own names for its four surfaces, verified against Zimo Clan's product
 * source rather than written for this page. The descriptions are paraphrases
 * of theirs, and the section says so — they are Zimo Clan's account of Zimo
 * Clan, which is what an evidence page is allowed to carry.
 */

const PRODUCTS = [
  {
    name: 'Animal Tracker',
    desc: 'Livestock monitoring — feeding, health and growth, with alerts against expected intervals.',
  },
  {
    name: 'Farmer Groups',
    desc: 'Cooperative coordination: shared costs, bulk input purchasing, joint access to larger buyers.',
  },
  {
    name: 'Farm Logistics',
    desc: 'Storage, pickup and processing requested through the platform rather than arranged privately.',
  },
  {
    name: 'Sell & Earn',
    desc: 'Produce listings and buyer matching, with payment to a bank account or mobile wallet.',
  },
];

export default function ZimoClan() {
  return (
    <Layout>
      <Seo
        title="Zimo Clan"
        description="A Heraja subsidiary running its operations on HAOS — what that demonstrates, and what it does not."
      />

      <section className="relative overflow-hidden bg-surface py-16 sm:py-20 md:py-24">
        <div className="absolute inset-0 pointer-events-none overflow-hidden" aria-hidden="true">
          <div className="absolute -top-24 -right-24 w-72 h-72 rounded-full bg-brand-secondary/10 blur-3xl" />
          <div className="absolute -bottom-32 -left-16 w-64 h-64 rounded-full bg-brand-tertiary/10 blur-3xl" />
        </div>
        <div className="container-heraja w-full">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
            <p className="text-overline mb-4">Evidence / A Heraja subsidiary</p>
            <h1 className="text-display max-w-4xl mb-6 min-w-0">Zimo Clan</h1>
            <p className="text-body-large text-neutral-700 max-w-2xl mb-4">
              <strong className="font-semibold text-brand-primary">
                Zimo Clan is a subsidiary of Heraja Agro Technologies.
              </strong>{' '}
              It is a Lagos-based digital agriculture marketplace, and it runs its operations on
              HAOS.
            </p>
            <p className="text-body text-neutral-700 max-w-2xl">
              That makes it evidence that the infrastructure runs a real operating company. It is
              not evidence that the market has independently chosen it. Both halves matter, and
              the second one is why this page carries no outcome figures.
            </p>
          </motion.div>
        </div>
      </section>

      {/*
        The relationship, drawn. Phase 5 §8.2 requires it immediately under the
        H1 so the reader passes through it. Rectangles and a labelled edge —
        Phase 5 §9.2 — with the ownership edge named rather than implied by an
        arrow, because "→" alone does not distinguish "owns" from "sells to".
      */}
      <section className="section-padding-sm bg-surface-elevated">
        <div className="container-heraja">
          <figure className="max-w-3xl mx-auto m-0 rounded-lg border border-neutral-300 bg-surface p-6">
            <ol className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 list-none p-0 m-0">
              <li className="flex-1 rounded border border-neutral-300 px-4 py-3 text-center min-w-0">
                <p className="font-semibold text-brand-primary">Heraja Agro Technologies</p>
                <p className="text-body-small text-neutral-600">Parent company</p>
              </li>
              <li className="text-center text-label text-neutral-600 whitespace-nowrap" aria-hidden="true">
                builds →
              </li>
              <li className="flex-1 rounded bg-brand-primary text-brand-secondary px-4 py-3 text-center min-w-0">
                <p className="font-semibold">HAOS</p>
                <p className="text-body-small text-white/80">The platform</p>
              </li>
              <li className="text-center text-label text-neutral-600 whitespace-nowrap" aria-hidden="true">
                run by →
              </li>
              <li className="flex-1 rounded border-2 border-neutral-300 px-4 py-3 text-center min-w-0">
                <p className="font-semibold text-brand-primary">Zimo Clan</p>
                <p className="text-body-small text-neutral-600">Subsidiary, and user of the platform</p>
              </li>
            </ol>
            <figcaption className="text-body-small text-neutral-600 mt-4">
              Heraja owns Zimo Clan. The deployment described below is therefore a related-party
              deployment, and the site says so before describing it rather than after.
            </figcaption>
          </figure>
        </div>
      </section>

      <section className="section-padding bg-surface">
        <div className="container-heraja">
          <div className="max-w-[720px] mb-10">
            <p className="text-overline mb-3">What Zimo Clan runs</p>
            <h2 className="text-h1 mb-4">Four surfaces on one platform</h2>
            <p className="text-body-large text-neutral-700">
              As described by Zimo Clan. Each of these is a surface its farmers and buyers use;
              underneath, they share the identity, verification and audit trail HAOS provides.
            </p>
          </div>
          <ul className="grid sm:grid-cols-2 gap-px bg-neutral-300 border border-neutral-300 rounded-lg overflow-hidden">
            {PRODUCTS.map((product) => (
              <li key={product.name} className="bg-surface p-6 min-w-0">
                <h3 className="text-h4 mb-2">{product.name}</h3>
                <p className="text-body-small text-neutral-700">{product.desc}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/*
        OPERATING FIGURES — only ever attributed, and only when supplied.

        This section does not exist until someone enters figures in the HAOS
        admin, and the admin cannot store one without a source and a date: the
        backend drops any row missing either, so an unattributed number cannot
        reach this page through any route.

        That is Phase 1 §9 made structural. The wording below states the figure
        as Zimo Clan's — "as reported by X" — never as something Heraja
        facilitated, because Heraja owns Zimo Clan and the distinction is the
        whole reason the original numbers came down.
      */}
      {zimoMetrics.length > 0 && (
        <section className="section-padding bg-surface">
          <div className="container-heraja">
            <div className="max-w-[720px] mb-10">
              <p className="text-overline mb-3">Operating figures</p>
              <h2 className="text-h1 mb-4">What Zimo Clan reports</h2>
              <p className="text-body-large text-neutral-700">
                Each figure below is Zimo Clan&apos;s own, attributed and dated. Heraja owns Zimo
                Clan, so treat these as a subsidiary&apos;s self-reported operating data rather
                than as independently audited numbers.
              </p>
            </div>
            <ul className="grid sm:grid-cols-2 lg:grid-cols-3 gap-px bg-neutral-300 border border-neutral-300 rounded-lg overflow-hidden list-none p-0 m-0">
              {zimoMetrics.map((metric) => (
                <li key={metric.label} className="bg-surface p-6 min-w-0">
                  <p className="text-h2 text-brand-primary mb-1">{metric.value}</p>
                  <p className="text-body font-medium text-brand-primary mb-2">{metric.label}</p>
                  <p className="text-body-small text-neutral-600">
                    As reported by {metric.source}, {metric.as_of}.
                  </p>
                </li>
              ))}
            </ul>
          </div>
        </section>
      )}

      {/*
        The section that makes this page evidence rather than a case study.
        Phase 5 §8.3 designs the equivalent panel on the pilot page as
        prominent and of equal weight, and the same reasoning applies here: a
        related-party deployment that states its own limits is more useful to
        an evaluator than one that hopes they will not ask.
      */}
      <section className="section-padding bg-surface-elevated">
        <div className="container-heraja">
          <div className="grid lg:grid-cols-2 gap-6">
            <div className="rounded-lg border border-neutral-300 bg-surface p-6">
              <p className="text-overline mb-3">What this shows</p>
              <ul className="space-y-3">
                {[
                  'HAOS carries the day-to-day operations of a working business, not a demonstration environment.',
                  'Four distinct surfaces run against one platform, sharing identity and the audit trail.',
                  'The platform is being used by farmers and buyers who did not build it.',
                ].map((line) => (
                  <li key={line} className="text-body text-neutral-700">
                    {line}
                  </li>
                ))}
              </ul>
            </div>
            <div className="rounded-lg border-2 border-neutral-300 bg-surface p-6">
              <p className="text-overline mb-3">What this does not show</p>
              <ul className="space-y-3">
                {[
                  'Independent validation. Heraja owns Zimo Clan; nothing here reflects an arm’s-length purchasing decision.',
                  'Published operating figures. None are claimed on this page, and any that appear elsewhere should be attributed to Zimo Clan rather than to Heraja.',
                  'That the platform has been selected in a competitive procurement, or run at a scale beyond this deployment.',
                ].map((line) => (
                  <li key={line} className="text-body text-neutral-700">
                    {line}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <CTABlock
        title="Evaluating the same infrastructure?"
        description="The platform Zimo Clan runs on is the one described across this site. Tell us what you are assessing."
        primaryCta={{ label: 'Talk to us', href: '/company/contact' }}
        secondaryCta={{ label: 'Explore the platform', href: '/platform' }}
      />
    </Layout>
  );
}
