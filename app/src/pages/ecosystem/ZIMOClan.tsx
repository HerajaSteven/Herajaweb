import Layout from '@/components/layout/Layout';
import CTABlock from '@/components/sections/CTABlock';
import { motion } from 'framer-motion';
import { Building2, Fingerprint, ShoppingCart, Brain, Check } from 'lucide-react';
import { useScrollReveal } from '@/hooks/useScrollReveal';

const metrics = [
  { label: 'Operations Coordinated', value: '12+' },
  { label: 'Modules Deployed', value: '4' },
  { label: 'Workflows Active', value: '25+' },
  { label: 'Data Points Tracked', value: '100K+' },
];

export default function ZIMOClan() {
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
            <div className="flex items-center gap-3 mb-4">
              <span className="px-3 py-1 bg-brand-secondary/20 text-brand-primary rounded-full text-label">Enterprise Client</span>
            </div>
            <h1 className="text-display max-w-4xl mb-6">ZIMO Clan</h1>
            <p className="text-body-large text-neutral-700 max-w-2xl">
              Heraja's flagship enterprise client — running HAOS, Marketplace, Traceability, and Operational Intelligence together across a multi-sector agricultural business.
            </p>
          </motion.div>
        </div>
      </section>

      <section ref={ref} className="section-padding bg-surface-elevated">
        <div className="container-heraja">
          <div className="text-center mb-12">
            <p className="text-overline mb-3">Implementation</p>
            <h2 className="text-h1">Infrastructure Consumed</h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: <Building2 className="w-6 h-6" />, title: 'HAOS', desc: 'Workflow engine and operational coordination', color: '#231F20' },
              { icon: <ShoppingCart className="w-6 h-6" />, title: 'Marketplace', desc: 'Supply chain and trade coordination', color: '#7AC142' },
              { icon: <Fingerprint className="w-6 h-6" />, title: 'Traceability', desc: 'Verified operations and quality tracking', color: '#4F9D5C' },
              { icon: <Brain className="w-6 h-6" />, title: 'Intelligence', desc: 'Operational analytics and insights', color: '#C9782B' },
            ].map((mod, i) => (
              <motion.div key={mod.title} initial={{ opacity: 0, y: 20 }} animate={isVisible ? { opacity: 1, y: 0 } : {}} transition={{ delay: i * 0.1 }}
                className="bg-surface rounded-lg border border-neutral-100 p-6 text-center">
                <div className="w-12 h-12 rounded-lg mx-auto flex items-center justify-center mb-4" style={{ backgroundColor: `${mod.color}15` }}>
                  <div style={{ color: mod.color }}>{mod.icon}</div>
                </div>
                <h3 className="text-h4 mb-2">{mod.title}</h3>
                <p className="text-body-small text-neutral-600">{mod.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding bg-surface">
        <div className="container-heraja">
          <div className="text-center mb-12">
            <p className="text-overline mb-3">Outcomes</p>
            <h2 className="text-h1">Business Outcomes</h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {metrics.map((m, i) => (
              <motion.div key={m.label} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}
                className="text-center p-6 bg-surface-elevated rounded-lg">
                <p className="text-3xl font-bold text-brand-primary mb-1">{m.value}</p>
                <p className="text-body-small text-neutral-600">{m.label}</p>
              </motion.div>
            ))}
          </div>
          <div className="max-w-2xl mx-auto space-y-4">
            {['Digital coordination across agricultural operations', 'Verified quality tracking and compliance', 'Infrastructure-enabled marketplace access', 'Real-time operational visibility', 'Scalable architecture for growth'].map((o, i) => (
              <div key={i} className="flex items-center gap-3">
                <div className="w-6 h-6 rounded-full bg-brand-secondary/20 flex items-center justify-center flex-shrink-0">
                  <Check className="w-3.5 h-3.5 text-brand-secondary" />
                </div>
                <p className="text-body">{o}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTABlock title="Explore Similar Implementations" description="See how other organizations are building on Heraja infrastructure."
        primaryCta={{ label: 'View Enterprise Clients', href: '/ecosystem/enterprise-clients' }} secondaryCta={{ label: 'Contact Sales', href: '/company/contact' }} />
    </Layout>
  );
}
