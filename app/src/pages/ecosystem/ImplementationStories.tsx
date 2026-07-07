import Layout from '@/components/layout/Layout';
import CTABlock from '@/components/sections/CTABlock';
import { motion } from 'framer-motion';
import { ArrowRight, Building2, CheckCircle } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useScrollReveal } from '@/hooks/useScrollReveal';

const stories = [
  { org: 'ZIMO Clan', industry: 'Multi-Sector', modules: ['HAOS', 'Marketplace', 'Traceability'], outcomes: ['Digital coordination', 'Verified operations', 'Market access'], href: '/ecosystem/zimo-clan' },
  { org: 'Regional Cooperative Federation', industry: 'Cooperatives', modules: ['HAOS', 'Identity'], outcomes: ['Member coordination', 'Quality verification'], href: '/ecosystem/enterprise-clients' },
];

export default function ImplementationStories() {
  const { ref, isVisible } = useScrollReveal();
  return (
    <Layout>
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
            <p className="text-overline mb-4">Ecosystem</p>
            <h1 className="text-display max-w-4xl mb-6">Implementation Stories</h1>
            <p className="text-body-large text-neutral-700 max-w-2xl">What actually happened when real organizations put Heraja into production — results, not case-study marketing.</p>
          </motion.div>
        </div>
      </section>

      <section ref={ref} className="section-padding bg-surface-elevated">
        <div className="container-heraja">
          <div className="space-y-6">
            {stories.map((s, i) => (
              <motion.div key={s.org} initial={{ opacity: 0, y: 20 }} animate={isVisible ? { opacity: 1, y: 0 } : {}} transition={{ delay: i * 0.1 }}
                className="bg-surface rounded-lg border border-neutral-100 p-6 lg:p-8">
                <div className="flex flex-col lg:flex-row gap-6">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <Building2 className="w-5 h-5 text-brand-secondary" />
                      <h3 className="text-h3">{s.org}</h3>
                    </div>
                    <p className="text-body-small text-neutral-500 mb-4">{s.industry}</p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {s.modules.map((m) => (
                        <span key={m} className="px-3 py-1 bg-surface-elevated rounded-full text-body-small text-brand-primary">{m}</span>
                      ))}
                    </div>
                    <div className="space-y-2">
                      {s.outcomes.map((o) => (
                        <div key={o} className="flex items-center gap-2">
                          <CheckCircle className="w-4 h-4 text-brand-secondary flex-shrink-0" />
                          <span className="text-body-small">{o}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                  <Link to={s.href} className="btn-secondary self-start">View Story <ArrowRight className="w-4 h-4" /></Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <CTABlock title="Share Your Story" description="Are you a Heraja client with an implementation story to share?"
        primaryCta={{ label: 'Contact Us', href: '/company/contact' }} />
    </Layout>
  );
}
