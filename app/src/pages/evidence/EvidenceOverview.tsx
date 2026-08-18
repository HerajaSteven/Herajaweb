import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import Layout from '@/components/layout/Layout';
import Seo from '@/components/Seo';
import CTABlock from '@/components/sections/CTABlock';

/*
 * ── THIS PAGE WAS A ROSTER OF THINGS THAT DO NOT EXIST ───────────────────
 *
 * It was titled "The Heraja Ecosystem" and opened: "Every enterprise client,
 * technology partner, and pilot program running on Heraja". Six cards
 * followed. Three of them named nothing real:
 *
 *     Partners               "Technology and implementation partners."
 *     Implementation Stories "Real deployment outcomes and metrics."
 *     Regional Programs      "Geographic deployment initiatives."
 *
 * There are no partners, no implementation stories, and no regional
 * programmes. All three linked to /evidence — this page — so a reader who
 * clicked "Partners" arrived back where they started, which is how the link
 * checker missed it: the destination resolved. A fourth and fifth card were
 * both Zimo Clan, one of them labelled "Flagship enterprise implementation".
 * The closing CTA was "Become a Partner", pointing here.
 *
 * This is the most damaging page on the site to get wrong. It is where a
 * diligence reader goes specifically to check whether the claims elsewhere
 * are backed, and it was the page inventing the most.
 *
 * ── WHAT AN EVIDENCE PAGE OWES THE READER (Phase 5 §15) ──────────────────
 *
 * Not another marketing layer. It has to let a visitor tell apart: an existing
 * product · a demonstrated interface · related-party evidence · architecture ·
 * roadmap · an unverified claim. Those categories are the structure of this
 * page, labelled, rather than six identical cards that blur them.
 *
 * The last section is the one that makes the rest credible. Stating what
 * cannot be shown costs nothing when it is already true and the reader will
 * work it out anyway.
 */

const EVIDENCE = [
  {
    kind: 'Related-party deployment',
    title: 'Zimo Clan runs on HAOS',
    desc: 'A Heraja subsidiary operating its business on the platform. Real usage, and not an arm’s-length purchasing decision — the page leads with the relationship and states both.',
    href: '/evidence/zimo-clan',
    action: 'Read the deployment',
  },
  {
    kind: 'Pilot, in progress',
    title: 'Poultry and fish',
    desc: 'Two fast-cycling sectors chosen to prove the model before extending it. The page sets out the method, what is measured, where it has reached — and what is not yet known.',
    href: '/evidence/pilot',
    action: 'Read the pilot',
  },
  {
    kind: 'The software itself',
    title: 'Screens from the running applications',
    desc: 'Screenshots captured from the deployed products on a phone, not mockups and not retouched. The strongest evidence here, because you can open the applications yourself.',
    href: '/platform/farm-intelligence',
    action: 'See the product',
  },
  {
    kind: 'Architecture',
    title: 'How the platform is put together',
    desc: 'One diagram: the services every application shares, the capabilities that span them, and the four applications on top. Answerable in a technical review.',
    href: '/platform/architecture',
    action: 'See the architecture',
  },
  {
    kind: 'Roadmap — building, not live',
    title: 'What is not deployed yet',
    desc: 'Work in progress is listed as work in progress. Nothing on the roadmap has an application page, because it cannot be opened.',
    href: '/platform/roadmap',
    action: 'See the roadmap',
  },
];

const NOT_SHOWN = [
  'Independent validation. The one deployment described here is a subsidiary.',
  'Customer references, logos or testimonials. There is no customer roster to publish.',
  'Outcome statistics — production value, farm counts, transaction volumes. None are published on this site, and figures that once appeared have been removed rather than restated more carefully.',
  'Security certifications or compliance accreditations. None are held, and none are claimed anywhere on this site.',
];

export default function EvidenceOverview() {
  return (
    <Layout>
      <Seo
        title="Evidence"
        description="What Heraja can actually show: a related-party deployment, a pilot in progress, the running software — and an explicit account of what is not evidenced."
      />

      <section className="relative overflow-hidden bg-surface py-16 sm:py-20 md:py-24">
        <div className="absolute inset-0 pointer-events-none overflow-hidden" aria-hidden="true">
          <div className="absolute -top-24 -right-24 w-72 h-72 rounded-full bg-brand-secondary/10 blur-3xl" />
          <div className="absolute -bottom-32 -left-16 w-64 h-64 rounded-full bg-brand-tertiary/10 blur-3xl" />
        </div>
        <div className="container-heraja w-full">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
            <div className="flex items-center gap-1.5 mb-4" aria-hidden="true">
              <span className="w-2 h-2 rounded-full bg-brand-tertiary" />
              <span className="w-1.5 h-1.5 rounded-full bg-brand-secondary" />
              <span className="w-1 h-1 rounded-full bg-brand-primary" />
            </div>
            <p className="text-overline mb-4">Evidence</p>
            <h1 className="text-display max-w-4xl mb-6 min-w-0">What we can actually show</h1>
            <p className="text-body-large text-neutral-700 max-w-2xl">
              No customer logos, no testimonials, no outcome statistics. What is here is sorted by
              what kind of evidence it is, so you can weigh each piece for what it is worth rather
              than take the set on trust.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="section-padding bg-surface-elevated">
        <div className="container-heraja">
          <ul className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 list-none p-0 m-0">
            {EVIDENCE.map((item) => (
              <li key={item.href} className="min-w-0">
                <Link
                  to={item.href}
                  className="group card-elevate flex flex-col h-full bg-surface rounded-lg border border-neutral-300 p-6"
                >
                  <p className="text-overline mb-3">{item.kind}</p>
                  <h2 className="text-h4 mb-2 group-hover:text-brand-accent transition-colors">
                    {item.title}
                  </h2>
                  <p className="text-body-small text-neutral-700 mb-4">{item.desc}</p>
                  <span className="mt-auto text-body-small font-medium text-brand-accent">
                    {item.action} →
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="section-padding bg-surface">
        <div className="container-heraja">
          <div className="max-w-[720px]">
            <p className="text-overline mb-3">The other half</p>
            <h2 className="text-h1 mb-4">What this site does not evidence</h2>
            <p className="text-body-large text-neutral-700 mb-8">
              An evaluator will establish this list whether or not we publish it. Publishing it is
              cheaper for both sides, and it is the part of an evidence page that is worth
              anything.
            </p>
            <ul className="space-y-4 border-l-2 border-neutral-300 pl-6">
              {NOT_SHOWN.map((line) => (
                <li key={line} className="text-body text-neutral-700">
                  {line}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <CTABlock
        title="Ask us something harder"
        description="If there is a specific question this page does not answer, put it to us directly."
        primaryCta={{ label: 'Talk to us', href: '/company/contact' }}
        secondaryCta={{ label: 'Explore the platform', href: '/platform' }}
      />
    </Layout>
  );
}
