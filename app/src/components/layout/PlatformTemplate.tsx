import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import Layout from './Layout';
import CTABlock from '@/components/sections/CTABlock';
import FAQAccordion from '@/components/sections/FAQAccordion';
import { useScrollReveal } from '@/hooks/useScrollReveal';
import type { FAQItem } from '@/types';

interface PlatformTemplateProps {
  overline: string;
  title: string;
  description: string;
  heroCta?: { label: string; href: string };
  problemTitle: string;
  problemDescription: string;
  whyTitle: string;
  whyDescription: string;
  whyPoints?: string[];
  architecture?: React.ReactNode;
  capabilities: { title: string; description: string; icon?: React.ReactNode }[];
  workflow?: { step: string; description: string }[];
  benefits?: string[];
  faq: FAQItem[];
  relatedPages: { title: string; href: string; description: string }[];
  resources?: { title: string; href: string; type: string }[];
}

export default function PlatformTemplate({
  overline,
  title,
  description,
  heroCta,
  problemTitle,
  problemDescription,
  whyTitle,
  whyDescription,
  whyPoints,
  architecture,
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
            {heroCta && (
              <Link to={heroCta.href} className="btn-primary">
                {heroCta.label} <ArrowRight className="w-4 h-4" />
              </Link>
            )}
          </motion.div>
        </div>
      </section>

      {/* Quick Nav: related platform pages (the path itself is now shown by the page breadcrumb above) */}
      {relatedPages.length > 0 && (
        <div className="bg-surface-elevated border-b border-neutral-100">
          <div className="container-heraja py-3 flex items-center gap-4 text-body-small overflow-x-auto">
            <span className="text-neutral-500 whitespace-nowrap flex-shrink-0">Related:</span>
            {relatedPages.slice(0, 3).map((p) => (
              <Link key={p.href} to={p.href} className="text-neutral-500 hover:text-brand-secondary transition-colors whitespace-nowrap">
                {p.title}
              </Link>
            ))}
            <Link to="/ecosystem/zimo-clan" className="text-brand-secondary hover:underline whitespace-nowrap font-medium ml-auto flex-shrink-0">
              See This in Action
            </Link>
          </div>
        </div>
      )}

      {/* Problem Statement */}
      <section className="section-padding bg-surface-dark text-white">
        <div className="container-heraja max-w-3xl">
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
                        <svg className="w-3 h-3 text-brand-secondary" viewBox="0 0 12 12" fill="none"><path d="M2 6l3 3 5-5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
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
                        <span className="text-sm font-bold text-brand-secondary">{i + 1}</span>
                      </div>
                      {i < workflow.length - 1 && <div className="w-px flex-1 bg-neutral-200 my-2" />}
                    </div>
                    <div className="pb-4">
                      <h4 className="text-h4 mb-1">{step.step}</h4>
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
              <h2 className="text-h1">Enterprise Benefits</h2>
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
                    <svg className="w-3.5 h-3.5 text-brand-secondary" viewBox="0 0 12 12" fill="none"><path d="M2 6l3 3 5-5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
                  </div>
                  <p className="text-body">{b}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* FAQ */}
      <section className="section-padding bg-surface">
        <div className="container-heraja max-w-3xl">
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
            {relatedPages.map((p) => (
              <Link key={p.href} to={p.href} className="group flex items-center gap-3 p-4 bg-surface rounded-lg border border-neutral-100 hover:border-brand-secondary transition-colors">
                <div>
                  <p className="font-medium text-brand-primary group-hover:text-brand-secondary transition-colors">{p.title}</p>
                  <p className="text-body-small text-neutral-500">{p.description}</p>
                </div>
                <ArrowRight className="w-4 h-4 text-neutral-400 group-hover:text-brand-secondary group-hover:translate-x-1 transition-all ml-auto flex-shrink-0" />
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
              {resources.map((r) => (
                <Link key={r.href} to={r.href} className="inline-flex items-center gap-2 px-4 py-2 bg-surface-elevated rounded-full border border-neutral-200 text-sm text-brand-primary hover:border-brand-secondary transition-colors">
                  {r.title} <span className="text-neutral-400">({r.type})</span>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* CTA */}
      <CTABlock
        title="Ready to Explore Implementation?"
        description="See how organizations are building on this infrastructure today."
        primaryCta={{ label: 'View Enterprise Clients', href: '/ecosystem/enterprise-clients' }}
        secondaryCta={{ label: 'Contact Our Team', href: '/company/contact' }}
      />
    </Layout>
  );
}
