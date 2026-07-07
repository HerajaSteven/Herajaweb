import Layout from '@/components/layout/Layout';
import CTABlock from '@/components/sections/CTABlock';
import { motion } from 'framer-motion';
import { Globe, Cpu, Shield, Zap } from 'lucide-react';
import { useScrollReveal } from '@/hooks/useScrollReveal';

const capabilities = [
  { icon: Globe, title: 'Global Interoperability', desc: 'Cross-border agricultural data standards and coordination protocols.', color: '#4F9D5C' },
  { icon: Cpu, title: 'Edge Computing', desc: 'Processing capabilities deployed closer to agricultural operations.', color: '#C9782B' },
  { icon: Shield, title: 'Decentralized Verification', desc: 'Advanced verification mechanisms for supply chain integrity.', color: '#7AC142' },
  { icon: Zap, title: 'Autonomous Coordination', desc: 'Self-optimizing operational workflows powered by AI.', color: '#F99D1C' },
];

export default function FutureInfrastructure() {
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
            <h1 className="text-display max-w-4xl mb-6">Future Infrastructure</h1>
            <p className="text-body-large text-neutral-700 max-w-2xl">What's next after the current platform — global interoperability, autonomous coordination, and capabilities still in development.</p>
          </motion.div>
        </div>
      </section>

      <section ref={ref} className="section-padding bg-surface-elevated">
        <div className="container-heraja">
          <div className="text-center mb-12"><p className="text-overline mb-3">Roadmap</p><h2 className="text-h1">Coming Capabilities</h2></div>
          <div className="grid sm:grid-cols-2 gap-6">
            {capabilities.map((cap, i) => (
              <motion.div key={cap.title} initial={{ opacity: 0, y: 20 }} animate={isVisible ? { opacity: 1, y: 0 } : {}} transition={{ delay: i * 0.1 }}
                className="bg-surface rounded-lg border border-neutral-100 p-6">
                <div className="w-10 h-10 rounded-lg flex items-center justify-center mb-4" style={{ backgroundColor: `${cap.color}15` }}>
                  <cap.icon className="w-5 h-5" style={{ color: cap.color }} />
                </div>
                <h3 className="text-h4 mb-2">{cap.title}</h3>
                <p className="text-body-small text-neutral-600">{cap.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <CTABlock title="Influence the Roadmap" description="Share your infrastructure needs and help shape future development."
        primaryCta={{ label: 'Contact Us', href: '/company/contact' }} />
    </Layout>
  );
}
