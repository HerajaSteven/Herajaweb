import Layout from '@/components/layout/Layout';
import CTABlock from '@/components/sections/CTABlock';
import { motion } from 'framer-motion';
import { Building2, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const studies = [
  { org: 'ZIMO Clan', industry: 'Multi-Sector Agriculture', outcome: 'Digital coordination across operations', modules: ['HAOS', 'Marketplace', 'Traceability'], href: '/ecosystem/zimo-clan' },
  { org: 'Regional Cooperative', industry: 'Cooperative Federation', outcome: 'Member coordination and quality tracking', modules: ['HAOS', 'Identity'], href: '/ecosystem/implementation-stories' },
];

export default function CaseStudies() {
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
            <p className="text-overline mb-4">Resources / Case Studies</p>
            <h1 className="text-display max-w-4xl mb-6">Case Studies</h1>
            <p className="text-body-large text-neutral-700 max-w-2xl">What happened, with numbers attached — verified outcomes from organizations running on Heraja.</p>
          </motion.div>
        </div>
      </section>

      <section className="section-padding bg-surface-elevated">
        <div className="container-heraja">
          <div className="space-y-6">
            {studies.map((s, i) => (
              <motion.div key={s.org} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}
                className="bg-surface rounded-lg border border-neutral-100 p-6 lg:p-8">
                <div className="flex flex-col lg:flex-row lg:items-center gap-6">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <Building2 className="w-5 h-5 text-brand-secondary" />
                      <h3 className="text-h3">{s.org}</h3>
                    </div>
                    <p className="text-body-small text-neutral-500 mb-2">{s.industry}</p>
                    <p className="text-body text-neutral-700 mb-3">{s.outcome}</p>
                    <div className="flex flex-wrap gap-2">
                      {s.modules.map((m) => (<span key={m} className="px-3 py-1 bg-surface-elevated rounded-full text-body-small text-brand-primary">{m}</span>))}
                    </div>
                  </div>
                  <Link to={s.href} className="btn-secondary">View Case Study <ArrowRight className="w-4 h-4" /></Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <CTABlock title="Want to Be a Case Study?" primaryCta={{ label: 'Contact Us', href: '/company/contact' }} />
    </Layout>
  );
}
