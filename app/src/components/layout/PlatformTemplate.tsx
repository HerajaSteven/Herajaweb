import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import Layout from './Layout';
import CTABlock from '@/components/sections/CTABlock';
import FAQAccordion from '@/components/sections/FAQAccordion';
import Seo from '@/components/Seo';
import ProductEvidenceGallery from '@/components/evidence/ProductEvidenceGallery';
import type { EvidenceItem } from '@/config/productEvidence';
import { track } from '@/lib/analytics';
import { useScrollReveal } from '@/hooks/useScrollReveal';
import type { FAQItem } from '@/types';

interface PlatformTemplateProps {
  overline: string;
  title: string;
  description: string;
  heroCta?: { label: string; href: string };
  /** External link to the real, live HAOS app for this product (opens in a new tab) — distinct from heroCta, which is always an internal marketing-site route. */
  launchCta?: { label: string; href: string };
  problemTitle: string;
  problemDescription: string;
  whyTitle: string;
  whyDescription: string;
  whyPoints?: string[];
  architecture?: React.ReactNode;
  /*
   * Screens from the running application.
   *
   * Optional because evidence depth genuinely differs between products —
   * Farm Intelligence has six captured screens, the others have one each —
   * and forcing every page to fill the same slot would mean either padding
   * the thin ones or holding the deep one back. A page with no evidence
   * simply omits the section.
   */
  productEvidence?: { title: string; intro?: string; items: EvidenceItem[] };
  /*
   * Phase 5 §5.1 §2 — who uses it.
   *
   * Two named roles, not personas: the organisation that deploys it and the
   * person who opens it daily. A platform page that cannot say who operates
   * the thing is describing a capability rather than a product, and this
   * audience reads that difference.
   *
   * Optional because the concept pages (HAOS, Security, APIs) describe
   * platform properties rather than something a named role operates.
   */
  users?: { organisation: string; endUser: string };
  /*
   * Phase 5 §5.1 §6 — what it records, and what makes that trustworthy.
   * The strongest section on the page for a lender or programme audience,
   * because it is the one that distinguishes a record from a claim.
   */
  dataAndVerification?: { title: string; description: string; points?: string[] };
  /*
   * Phase 5 §5.1 §9 — what deploying it involves. Prose, reading width.
   * No timelines and no pricing: neither is established anywhere in the
   * approved material, and inventing either here would be a business claim.
   */
  implementation?: { title: string; description: string; steps?: string[] };
  /*
   * Phase 5 §5.1 §10. Configurable because the default was wrong: it read
   * "View Enterprise Clients" pointing at Zimo Clan, which frames a Heraja
   * subsidiary as an arm's-length customer roster — exactly the impression
   * Phase 1 §9 requires the site never to give.
   */
  cta?: {
    title: string;
    description?: string;
    primary?: { label: string; href: string };
    secondary?: { label: string; href: string };
  };
  capabilities: { title: string; description: string; icon?: React.ReactNode }[];
  workflow?: { step: string; description: string }[];
  benefits?: string[];
  faq: FAQItem[];
  relatedPages: { title: string; href: string; description: string }[];
  resources?: { title: string; href: string; type: string }[];
}

/*
 * Collapse entries that now point at the same place.
 *
 * The Phase 1 migration merged several pages into one — Traceability and
 * Operational Intelligence both became sections of /platform/haos, Whitepaper
 * and Media Kit both became the corporate brochure. Any page that linked to
 * both halves of a merged pair ends up listing the same destination twice,
 * which renders as a duplicated link and, because these lists are keyed by
 * href, triggers React's duplicate-key warning.
 *
 * Deduping here rather than hand-editing each page's list means the same
 * thing cannot break again the next time two pages merge.
 */
function byHref<T extends { href: string }>(items: T[]): T[] {
  const seen = new Set<string>();
  return items.filter((item) => (seen.has(item.href) ? false : (seen.add(item.href), true)));
}

export default function PlatformTemplate({
  overline,
  title,
  description,
  heroCta,
  launchCta,
  problemTitle,
  problemDescription,
  whyTitle,
  whyDescription,
  whyPoints,
  architecture,
  productEvidence,
  users,
  dataAndVerification,
  implementation,
  cta,
  capabilities,
  workflow,
  benefits,
  faq,
  relatedPages,
  resources,
}: PlatformTemplateProps) {
  const { ref: capRef, isVisible: capVisible } = useScrollReveal();
  const { ref: wfRef, isVisible: wfVisible } = useScrollReveal();
  const { ref: benRef, isVisible: benVisible } = useScrollReveal();

  return (
    <Layout>
      <Seo title={title} description={description} />
      {/* Hero */}
      <section className="relative overflow-hidden bg-surface py-20 sm:py-24 md:py-28">
        <div className="absolute inset-0 pointer-events-none overflow-hidden" aria-hidden="true">
          <div className="absolute -top-24 -right-24 w-72 h-72 rounded-full bg-brand-secondary/10 blur-3xl" />
          <div className="absolute -bottom-32 -left-16 w-64 h-64 rounded-full bg-brand-tertiary/10 blur-3xl" />
        </div>
        <div className="container-heraja w-full">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="flex items-center gap-1.5 mb-4" aria-hidden="true">
              <span className="w-2 h-2 rounded-full bg-brand-tertiary" />
              <span className="w-1.5 h-1.5 rounded-full bg-brand-secondary" />
              <span className="w-1 h-1 rounded-full bg-brand-primary" />
            </div>
            <p className="text-overline mb-4">{overline}</p>
            <h1 className="text-display max-w-4xl mb-6">{title}</h1>
            <p className="text-body-large text-neutral-700 max-w-2xl mb-8">{description}</p>
            <div className="flex flex-wrap items-center gap-4">
              {launchCta && (
                <a
                  href={launchCta.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary"
                  /*
                   * Someone leaving for a real application is the strongest
                   * engagement signal this site produces — and, because it
                   * navigates away, the one a pageview chart cannot see.
                   */
                  onClick={() => track('application_launch', { application: title })}
                >
                  {launchCta.label} <ArrowRight className="w-4 h-4" />
                </a>
              )}
              {heroCta && (
                <Link
                  to={heroCta.href}
                  className={launchCta ? 'btn-secondary' : 'btn-primary'}
                  onClick={() => track('cta_click', { label: heroCta.label, page: title })}
                >
                  {heroCta.label} <ArrowRight className="w-4 h-4" />
                </Link>
              )}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Quick Nav: related platform pages (the path itself is now shown by the page breadcrumb above) */}
      {relatedPages.length > 0 && (
        <div className="bg-surface-elevated border-b border-neutral-100">
          <div className="container-heraja py-3 flex items-center gap-4 text-body-small overflow-x-auto">
            <span className="text-neutral-500 whitespace-nowrap flex-shrink-0">Related:</span>
            {byHref(relatedPages).slice(0, 3).map((p) => (
              <Link key={p.href} to={p.href} className="text-neutral-500 hover:text-brand-accent transition-colors whitespace-nowrap">
                {p.title}
              </Link>
            ))}
            <Link to="/evidence/zimo-clan" className="text-brand-accent hover:underline whitespace-nowrap font-medium ml-auto flex-shrink-0">
              See This in Action
            </Link>
          </div>
        </div>
      )}

      {/*
        Phase 5 §5.1 §2 — who uses it.

        Two named roles rather than personas, and placed immediately after the
        proposition because "who operates this?" is the second question an
        evaluator asks and the site previously never answered it. Omitted on
        the concept pages, where there is no single operator to name.
      */}
      {users && (
        <section className="section-padding bg-surface">
          <div className="container-heraja">
            <p className="text-overline mb-3">Who uses it</p>
            <div className="grid md:grid-cols-2 gap-8 lg:gap-12 mt-6">
              <div className="min-w-0 border-l-2 border-brand-accent pl-6">
                <h2 className="text-h3 mb-2">The organisation</h2>
                <p className="text-body text-neutral-700">{users.organisation}</p>
              </div>
              <div className="min-w-0 border-l-2 border-neutral-300 pl-6">
                <h2 className="text-h3 mb-2">The person using it</h2>
                <p className="text-body text-neutral-700">{users.endUser}</p>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Problem Statement */}
      <section className="section-padding bg-surface-dark text-white">
        <div className="container-prose">
          <p className="text-overline mb-3">The Challenge</p>
          <h2 className="text-h1 text-white mb-4">{problemTitle}</h2>
          <p className="text-body-large text-neutral-300">{problemDescription}</p>
        </div>
      </section>

      {/* Why This Infrastructure */}
      <section className="section-padding bg-surface">
        <div className="container-heraja">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <div>
              <p className="text-overline mb-3">Why This Matters</p>
              <h2 className="text-h1 mb-4">{whyTitle}</h2>
              <p className="text-body-large text-neutral-700 mb-6">{whyDescription}</p>
              {whyPoints && (
                <ul className="space-y-3">
                  {whyPoints.map((p) => (
                    <li key={p} className="flex items-center gap-3 text-body">
                      <div className="w-5 h-5 rounded-full bg-brand-secondary/20 flex items-center justify-center flex-shrink-0">
                        <svg className="w-3 h-3 text-brand-accent" viewBox="0 0 12 12" fill="none"><path d="M2 6l3 3 5-5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
                      </div>
                      {p}
                    </li>
                  ))}
                </ul>
              )}
            </div>
            {architecture && (
              <div className="bg-surface-elevated rounded-xl p-6 border border-neutral-100">
                {architecture}
              </div>
            )}
          </div>
        </div>
      </section>

      {/*
        Product evidence sits directly after the argument for why this exists
        and before the list of what it does — so the reader sees the running
        product before reading any claim about it.
      */}
      {productEvidence && (
        <ProductEvidenceGallery
          title={productEvidence.title}
          intro={productEvidence.intro}
          items={productEvidence.items}
        />
      )}

      {/* Capabilities */}
      <section className="section-padding bg-surface-elevated">
        <div className="container-heraja">
          <div className="text-center mb-12">
            <p className="text-overline mb-3">Capabilities</p>
            <h2 className="text-h1">What This Infrastructure Provides</h2>
          </div>
          <div ref={capRef} className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {capabilities.map((cap, i) => (
              <motion.div
                key={cap.title}
                initial={{ opacity: 0, y: 20 }}
                animate={capVisible ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: i * 0.1 }}
                className="bg-surface rounded-lg border border-neutral-100 p-6 card-elevate"
              >
                {cap.icon && <div className="mb-3">{cap.icon}</div>}
                <h3 className="text-h4 mb-2">{cap.title}</h3>
                <p className="text-body-small text-neutral-600">{cap.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Workflow */}
      {workflow && (
        <section className="section-padding bg-surface">
          <div className="container-heraja">
            <div className="text-center mb-12">
              <p className="text-overline mb-3">How It Works</p>
              <h2 className="text-h1">Operational Workflow</h2>
            </div>
            <div ref={wfRef} className="max-w-4xl mx-auto">
              <div className="relative">
                {workflow.map((step, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: -20 }}
                    animate={wfVisible ? { opacity: 1, x: 0 } : {}}
                    transition={{ delay: i * 0.15 }}
                    className="flex gap-6 mb-8 last:mb-0"
                  >
                    <div className="flex flex-col items-center">
                      <div className="w-10 h-10 rounded-full bg-brand-secondary/20 flex items-center justify-center flex-shrink-0">
                        <span className="text-sm font-bold text-brand-primary">{i + 1}</span>
                      </div>
                      {i < workflow.length - 1 && <div className="w-px flex-1 bg-neutral-200 my-2" />}
                    </div>
                    <div className="pb-4">
                      <h3 className="text-h4 mb-1">{step.step}</h3>
                      <p className="text-body text-neutral-600">{step.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Benefits */}
      {benefits && (
        <section className="section-padding bg-surface-elevated">
          <div className="container-heraja">
            <div className="text-center mb-12">
              <p className="text-overline mb-3">Outcomes</p>
              <h2 className="text-h1">What you get</h2>
            </div>
            <div ref={benRef} className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-4xl mx-auto">
              {benefits.map((b, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  animate={benVisible ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: i * 0.1 }}
                  className="flex items-start gap-3"
                >
                  <div className="w-6 h-6 rounded-full bg-brand-secondary/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <svg className="w-3.5 h-3.5 text-brand-accent" viewBox="0 0 12 12" fill="none"><path d="M2 6l3 3 5-5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
                  </div>
                  <p className="text-body">{b}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/*
        Phase 5 §5.1 §6 — data & verification. Reading width, because it is
        argued in prose rather than shown. For a lender or programme evaluator
        this is the section that separates a record from an assertion, which is
        why it sits after the evidence rather than before it: the reader has
        just seen the product produce the figures being described.
      */}
      {dataAndVerification && (
        <section className="section-padding bg-surface">
          <div className="container-prose">
            <p className="text-overline mb-3">Data &amp; verification</p>
            <h2 className="text-h2 mb-4">{dataAndVerification.title}</h2>
            <p className="text-body-large text-neutral-700">{dataAndVerification.description}</p>
            {dataAndVerification.points && (
              <ul className="mt-6 space-y-3">
                {dataAndVerification.points.map((p) => (
                  <li key={p} className="flex items-start gap-3 text-body">
                    <span
                      className="mt-2 w-1.5 h-1.5 rounded-full bg-brand-accent flex-shrink-0"
                      aria-hidden="true"
                    />
                    {p}
                  </li>
                ))}
              </ul>
            )}
          </div>
        </section>
      )}

      {/*
        Phase 5 §5.1 §9 — implementation. Deliberately contains no timeline and
        no pricing: neither is established in any approved document, and a
        deployment schedule invented here would be a business claim the company
        has not made.
      */}
      {implementation && (
        <section className="section-padding bg-surface-elevated">
          <div className="container-prose">
            <p className="text-overline mb-3">Implementation</p>
            <h2 className="text-h2 mb-4">{implementation.title}</h2>
            <p className="text-body-large text-neutral-700">{implementation.description}</p>
            {implementation.steps && (
              <ol className="mt-8 space-y-6">
                {implementation.steps.map((step, i) => (
                  <li key={step} className="flex gap-4">
                    {/*
                      Numbering is legitimate here because deployment is a real
                      sequence — Phase 4 §15 forbids it only where order carries
                      no information.
                    */}
                    <span className="font-mono-data text-neutral-500 flex-shrink-0 pt-0.5">
                      {String(i + 1).padStart(2, '0')}
                    </span>
                    <p className="text-body min-w-0">{step}</p>
                  </li>
                ))}
              </ol>
            )}
          </div>
        </section>
      )}

      {/* FAQ */}
      <section className="section-padding bg-surface">
        <div className="container-reading">
          <div className="text-center mb-12">
            <p className="text-overline mb-3">FAQ</p>
            <h2 className="text-h1">Common Questions</h2>
          </div>
          <FAQAccordion items={faq} />
        </div>
      </section>

      {/* Related Pages */}
      <section className="section-padding-sm bg-surface-elevated border-t border-neutral-100">
        <div className="container-heraja">
          <h3 className="text-h3 mb-6">Related Infrastructure</h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {byHref(relatedPages).map((p) => (
              <Link key={p.href} to={p.href} className="group flex items-center gap-3 p-4 bg-surface rounded-lg border border-neutral-100 hover:border-brand-accent transition-colors">
                <div>
                  <p className="font-medium text-brand-primary group-hover:text-brand-accent transition-colors">{p.title}</p>
                  <p className="text-body-small text-neutral-500">{p.description}</p>
                </div>
                <ArrowRight className="w-4 h-4 text-neutral-400 group-hover:text-brand-accent group-hover:translate-x-1 transition-all ml-auto flex-shrink-0" />
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Resources */}
      {resources && (
        <section className="section-padding-sm bg-surface border-t border-neutral-100">
          <div className="container-heraja">
            <h3 className="text-h3 mb-6">Resources</h3>
            <div className="flex flex-wrap gap-3">
              {byHref(resources).map((r) => (
                <Link key={r.href} to={r.href} className="inline-flex items-center gap-2 px-4 py-2 bg-surface-elevated rounded-full border border-neutral-200 text-sm text-brand-primary hover:border-brand-accent transition-colors">
                  {r.title} <span className="text-neutral-400">({r.type})</span>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* CTA */}
      {/*
        The default used to read "View Enterprise Clients" pointing at
        /evidence/zimo-clan. Zimo Clan is a Heraja SUBSIDIARY as well as a
        client, and Phase 1 §9 requires that relationship to be disclosed
        before any claim built on it — a button labelled "Enterprise Clients"
        does the opposite, implying an arm's-length customer roster that does
        not exist. The label now says what the page actually is.

        `cta` is a prop so an application page can offer its own launch action
        instead of the generic one.
      */}
      <CTABlock
        title={cta?.title ?? 'See it running'}
        description={
          cta?.description ??
          'The applications are deployed and publicly reachable. Open one, or tell us what you are evaluating.'
        }
        primaryCta={cta?.primary ?? { label: 'Talk to us', href: '/company/contact' }}
        secondaryCta={cta?.secondary ?? { label: 'Explore the platform', href: '/platform' }}
      />
    </Layout>
  );
}
