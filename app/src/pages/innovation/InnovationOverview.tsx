import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, Brain, Microscope, Lightbulb, Rocket } from 'lucide-react';
import Layout from '@/components/layout/Layout';
import CTABlock from '@/components/sections/CTABlock';
import { useScrollReveal } from '@/hooks/useScrollReveal';

const areas = [
  { icon: Brain, title: 'Artificial Intelligence', desc: 'Predictive models and operational intelligence.', href: '/innovation/ai', color: '#C9782B' },
  { icon: Microscope, title: 'Research', desc: 'Agricultural technology research and development.', href: '/innovation/research', color: '#4F9D5C' },
  { icon: Lightbulb, title: 'Open Innovation', desc: 'Collaborative development with partners.', href: '/innovation/open-innovation', color: '#7AC142' },
  { icon: Rocket, title: 'Future Infrastructure', desc: 'Next-generation capabilities and roadmap.', href: '/innovation/future-infrastructure', color: '#F99D1C' },
];

export default function InnovationOverview() {
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
            <h1 className="text-display max-w-4xl mb-6">Research & Innovation</h1>
            <p className="text-body-large text-neutral-700 max-w-2xl">Where AI, research, and open collaboration turn into the next capability on the platform.</p>
          </motion.div>
        </div>
      </section>

      <section ref={ref} className="section-padding bg-surface-elevated">
        <div className="container-heraja">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {areas.map((a, i) => (
              <motion.div key={a.href} initial={{ opacity: 0, y: 20 }} animate={isVisible ? { opacity: 1, y: 0 } : {}} transition={{ delay: i * 0.1 }}>
                <Link to={a.href} className="group card-elevate block bg-surface rounded-lg border border-neutral-100 p-6 h-full text-center">
                  <div className="w-12 h-12 rounded-lg mx-auto flex items-center justify-center mb-4" style={{ backgroundColor: `${a.color}15` }}>
                    <a.icon className="w-6 h-6" style={{ color: a.color }} />
                  </div>
                  <h3 className="text-h4 mb-2 group-hover:text-brand-secondary transition-colors">{a.title}</h3>
                  <p className="text-body-small text-neutral-600 mb-3">{a.desc}</p>
                  <ArrowRight className="w-4 h-4 text-neutral-400 group-hover:text-brand-secondary group-hover:translate-x-1 transition-all mx-auto" />
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <CTABlock title="Collaborate With Us" description="Partner on research and innovation initiatives."
        primaryCta={{ label: 'Contact Research Team', href: '/company/contact' }} />
    </Layout>
  );
}
