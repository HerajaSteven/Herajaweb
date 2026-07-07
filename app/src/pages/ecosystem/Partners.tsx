import Layout from '@/components/layout/Layout';
import CTABlock from '@/components/sections/CTABlock';
import { motion } from 'framer-motion';
import { Globe, Cpu, Handshake, TrendingUp } from 'lucide-react';
import { useScrollReveal } from '@/hooks/useScrollReveal';

const partnerTypes = [
  { icon: Cpu, title: 'Technology Partners', desc: 'Build applications and integrations on Heraja APIs.', color: '#231F20' },
  { icon: Handshake, title: 'Implementation Partners', desc: 'Deploy and configure Heraja for enterprise clients.', color: '#7AC142' },
  { icon: Globe, title: 'Regional Partners', desc: 'Represent and support Heraja in specific geographies.', color: '#4F9D5C' },
  { icon: TrendingUp, title: 'Strategic Partners', desc: 'Joint go-to-market and solution development.', color: '#C9782B' },
];

export default function Partners() {
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
            <h1 className="text-display max-w-4xl mb-6">Partners</h1>
            <p className="text-body-large text-neutral-700 max-w-2xl">The technology, implementation, and strategic partners we build alongside — not vendors, collaborators.</p>
          </motion.div>
        </div>
      </section>

      <section ref={ref} className="section-padding bg-surface-elevated">
        <div className="container-heraja">
          <div className="text-center mb-12">
            <p className="text-overline mb-3">Partner Types</p>
            <h2 className="text-h1">Partnership Opportunities</h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {partnerTypes.map((p, i) => (
              <motion.div key={p.title} initial={{ opacity: 0, y: 20 }} animate={isVisible ? { opacity: 1, y: 0 } : {}} transition={{ delay: i * 0.1 }}
                className="bg-surface rounded-lg border border-neutral-100 p-6 text-center">
                <div className="w-12 h-12 rounded-lg mx-auto flex items-center justify-center mb-4" style={{ backgroundColor: `${p.color}15` }}>
                  <p.icon className="w-6 h-6" style={{ color: p.color }} />
                </div>
                <h3 className="text-h4 mb-2">{p.title}</h3>
                <p className="text-body-small text-neutral-600">{p.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <CTABlock title="Become a Partner" description="Join the Heraja partner ecosystem."
        primaryCta={{ label: 'Apply Now', href: '/company/contact' }} secondaryCta={{ label: 'View Technology Partners', href: '/solutions/technology-partners' }} />
    </Layout>
  );
}
