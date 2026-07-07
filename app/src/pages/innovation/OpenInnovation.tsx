import Layout from '@/components/layout/Layout';
import CTABlock from '@/components/sections/CTABlock';
import { motion } from 'framer-motion';
import { Users, Code, Share2 } from 'lucide-react';
import { useScrollReveal } from '@/hooks/useScrollReveal';

const models = [
  { icon: Users, title: 'Partner Collaboration', desc: 'Joint development with technology and implementation partners.', color: '#7AC142' },
  { icon: Code, title: 'Developer Contributions', desc: 'API ecosystem enabling third-party developers to extend capabilities.', color: '#4F9D5C' },
  { icon: Share2, title: 'Knowledge Sharing', desc: 'Open research and best practices for agricultural infrastructure.', color: '#C9782B' },
];

export default function OpenInnovation() {
  const { ref, isVisible } = useScrollReveal();
  return (
    <Layout>
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
            <p className="text-overline mb-4">Innovation</p>
            <h1 className="text-display max-w-4xl mb-6">Open Innovation</h1>
            <p className="text-body-large text-neutral-700 max-w-2xl">Partners, researchers, and independent developers building alongside us, not just on top of us.</p>
          </motion.div>
        </div>
      </section>

      <section ref={ref} className="section-padding bg-surface-elevated">
        <div className="container-heraja">
          <div className="text-center mb-12"><p className="text-overline mb-3">Models</p><h2 className="text-h1">Collaboration Models</h2></div>
          <div className="grid sm:grid-cols-3 gap-6">
            {models.map((m, i) => (
              <motion.div key={m.title} initial={{ opacity: 0, y: 20 }} animate={isVisible ? { opacity: 1, y: 0 } : {}} transition={{ delay: i * 0.1 }}
                className="bg-surface rounded-lg border border-neutral-100 p-6 text-center">
                <div className="w-12 h-12 rounded-lg mx-auto flex items-center justify-center mb-4" style={{ backgroundColor: `${m.color}15` }}>
                  <m.icon className="w-6 h-6" style={{ color: m.color }} />
                </div>
                <h3 className="text-h4 mb-2">{m.title}</h3>
                <p className="text-body-small text-neutral-600">{m.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <CTABlock title="Join Our Open Innovation Program" description="Contribute to the future of agricultural infrastructure."
        primaryCta={{ label: 'Apply Now', href: '/company/contact' }} />
    </Layout>
  );
}
