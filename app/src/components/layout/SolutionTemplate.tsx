import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import Layout from './Layout';
import CTABlock from '@/components/sections/CTABlock';
import FAQAccordion from '@/components/sections/FAQAccordion';
import Seo from '@/components/Seo';
import { useScrollReveal } from '@/hooks/useScrollReveal';
import type { FAQItem } from '@/types';
import ProductEvidenceGallery from '@/components/evidence/ProductEvidenceGallery';
import type { EvidenceItem } from '@/config/productEvidence';

/*
 * ── WHY THIS TEMPLATE CARRIES THREE VARIATION POINTS ────────────────────
 *
 * The failure mode of an audience template is five pages that differ only in
 * a noun. Phase 5 §8.1 prevents that structurally rather than editorially,
 * with three things that genuinely differ per audience:
 *
 *   1. `infrastructure` — which applications are relevant. Already existed.
 *   2. `evidence`       — WHAT KIND of proof leads. Government leads with
 *                         governance; Cooperatives leads with a phone screen.
 *                         NEW.
 *   3. `cta`            — a verb specific to the audience, which pre-selects
 *                         the matching enquiry type on the contact form so an
 *                         evaluator arriving from a page written for them does
 *                         not have to re-state who they are. NEW.
 *
 * Without 2 and 3 the five pages were one page with the nouns swapped.
 */
interface SolutionTemplateProps {
  audience: string;
  title: string;
  description: string;
  heroCta?: { label: string; href: string };
  challenges: string[];
  howTitle: string;
  howDescription: string;
  howPoints: string[];
  workflow?: { step: string; description: string }[];
  infrastructure: { title: string; description: string; href: string }[];
  benefits: string[];
  faq: FAQItem[];
  /**
   * The proof this audience actually needs, and what kind it is.
   *
   * `emphasis` is not decorative — it decides which section leads, because a
   * lender and a cooperative are convinced by different things.
   */
  evidence?: {
    emphasis: 'product' | 'pilot' | 'zimo-clan' | 'architecture';
    title: string;
    description: string;
    items?: EvidenceItem[];
    link?: { label: string; href: string };
  };
  /**
   * Audience-specific call to action.
   *
   * `enquiryType` appends ?enquiry= so the contact form arrives pre-selected —
   * the Contact page already reads that parameter, so this costs nothing and
   * removes a step for the visitor.
   */
  cta?: { label: string; enquiryType?: string; title?: string; description?: string };
}

export default function SolutionTemplate({
  audience,
  title,
  description,
  heroCta,
  challenges,
  howTitle,
  howDescription,
  howPoints,
  workflow,
  infrastructure,
  benefits,
  faq,
  evidence,
  cta,
}: SolutionTemplateProps) {
  const { ref: capRef, isVisible: capVisible } = useScrollReveal();

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
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
            <div className="flex items-center gap-1.5 mb-4" aria-hidden="true">
              <span className="w-2 h-2 rounded-full bg-brand-tertiary" />
              <span className="w-1.5 h-1.5 rounded-full bg-brand-secondary" />
              <span className="w-1 h-1 rounded-full bg-brand-primary" />
            </div>
            <p className="text-overline mb-4">Solutions / {audience}</p>
            <h1 className="text-display max-w-4xl mb-6">{title}</h1>
            <p className="text-body-large text-neutral-700 max-w-2xl mb-8">{description}</p>
            {heroCta && (
              <Link to={heroCta.href} className="btn-primary">
                {heroCta.label} <ArrowRight className="w-4 h-4" />
              </Link>
            )}
          </motion.div>
        </div>
      </section>

      {/* Challenges */}
      <section className="section-padding bg-surface-dark text-white">
        <div className="container-heraja">
          <p className="text-overline mb-3">The Challenge</p>
          <h2 className="text-h1 text-white mb-8">Key Challenges</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {challenges.map((c, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="p-5 bg-white/5 rounded-lg border border-white/10"
              >
                <div className="w-8 h-8 rounded-full bg-brand-secondary/30 flex items-center justify-center mb-3">
                  <span className="text-sm font-bold text-white">{i + 1}</span>
                </div>
                <p className="text-body text-neutral-200">{c}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* How Heraja Helps */}
      <section className="section-padding bg-surface">
        <div className="container-heraja">
          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <p className="text-overline mb-3">How Heraja Helps</p>
              <h2 className="text-h1 mb-4">{howTitle}</h2>
              <p className="text-body-large text-neutral-700 mb-6">{howDescription}</p>
              <ul className="space-y-3">
                {howPoints.map((p) => (
                  <li key={p} className="flex items-center gap-3 text-body">
                    <div className="w-5 h-5 rounded-full bg-brand-secondary/20 flex items-center justify-center flex-shrink-0">
                      <svg className="w-3 h-3 text-brand-accent" viewBox="0 0 12 12" fill="none"><path d="M2 6l3 3 5-5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
                    </div>
                    {p}
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-surface-elevated rounded-xl p-8 border border-neutral-100">
              <h3 className="text-h4 mb-4">Infrastructure Used</h3>
              <div className="space-y-4">
                {infrastructure.map((item) => (
                  <Link key={item.href} to={item.href} className="group block p-4 bg-white rounded-lg border border-neutral-100 hover:border-brand-accent transition-colors">
                    <p className="font-medium text-brand-primary group-hover:text-brand-accent transition-colors flex items-center gap-2">
                      {item.title}
                      <ArrowRight className="w-3.5 h-3.5 opacity-0 group-hover:opacity-100 transition-opacity" />
                    </p>
                    <p className="text-body-small text-neutral-500 mt-0.5">{item.description}</p>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Workflow */}
      {workflow && (
        <section className="section-padding bg-surface-elevated">
          <div className="container-heraja">
            <div className="text-center mb-12">
              <p className="text-overline mb-3">Implementation</p>
              <h2 className="text-h1">Deployment Workflow</h2>
            </div>
            <div className="max-w-4xl mx-auto">
              {workflow.map((step, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
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
        </section>
      )}

      {/* Benefits */}
      <section className="section-padding bg-surface">
        <div className="container-heraja">
          <div className="text-center mb-12">
            <p className="text-overline mb-3">Outcomes</p>
            <h2 className="text-h1">Expected Benefits</h2>
          </div>
          <div ref={capRef} className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {benefits.map((b, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                animate={capVisible ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: i * 0.1 }}
                className="flex items-start gap-3 p-4 bg-surface-elevated rounded-lg"
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

      {/*
        Phase 5 §8.1 differentiator 2 — evidence emphasis.

        The kind of proof that convinces differs by audience, so this section
        does too. A lender wants the verification model; a cooperative wants to
        see the thing on a phone. Where real screenshots exist the gallery
        renders them (with its ordering assertion intact); otherwise the
        section makes an honest prose case and links onward, rather than
        padding itself with a fabricated visual.
      */}
      {evidence && (
        evidence.items && evidence.items.length > 0 ? (
          <ProductEvidenceGallery
            title={evidence.title}
            intro={evidence.description}
            items={evidence.items}
          />
        ) : (
          <section className="section-padding bg-surface-elevated">
            <div className="container-prose">
              <p className="text-overline mb-3">Evidence</p>
              <h2 className="text-h2 mb-4">{evidence.title}</h2>
              <p className="text-body-large text-neutral-700">{evidence.description}</p>
              {evidence.link && (
                <Link
                  to={evidence.link.href}
                  className="inline-flex items-center gap-2 mt-6 text-body font-medium text-brand-accent hover:underline"
                >
                  {evidence.link.label} <ArrowRight className="w-4 h-4" aria-hidden="true" />
                </Link>
              )}
            </div>
          </section>
        )
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

      {/*
        Phase 5 §8.1 differentiator 3 — an audience-specific verb.

        "View All Solutions" sent a reader who had just finished the page
        written for them back to the index of pages written for other people,
        which is the wrong direction. The CTA now carries this audience's own
        language and pre-selects their enquiry type on the contact form, so
        they do not have to re-state who they are.
      */}
      <CTABlock
        title={cta?.title ?? `Talk to us about ${audience.toLowerCase()}`}
        description={
          cta?.description ??
          'Tell us what you are evaluating and we will point you at the part of the platform that answers it.'
        }
        primaryCta={{
          label: cta?.label ?? 'Talk to us',
          href: cta?.enquiryType
            ? `/company/contact?enquiry=${cta.enquiryType}`
            : '/company/contact',
        }}
        secondaryCta={{ label: 'Explore the platform', href: '/platform' }}
      />
    </Layout>
  );
}
