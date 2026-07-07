import Layout from '@/components/layout/Layout';
import CTABlock from '@/components/sections/CTABlock';
import { motion } from 'framer-motion';
import { Microscope, BookOpen, Users, Globe } from 'lucide-react';
import { useScrollReveal } from '@/hooks/useScrollReveal';

const areas = [
  { icon: BookOpen, title: 'Agricultural Informatics', desc: 'Research on digital systems for agricultural coordination and data management.', color: '#4F9D5C' },
  { icon: Users, title: 'Organizational Networks', desc: 'Studying how agricultural organizations coordinate through shared infrastructure.', color: '#7AC142' },
  { icon: Globe, title: 'Regional Systems', desc: 'Understanding regional agricultural ecosystem dynamics and infrastructure needs.', color: '#C9782B' },
  { icon: Microscope, title: 'Verification Science', desc: 'Methods for verifying agricultural claims and ensuring data integrity.', color: '#F99D1C' },
];

export default function Research() {
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
            <h1 className="text-display max-w-4xl mb-6">Research</h1>
            <p className="text-body-large text-neutral-700 max-w-2xl">Studying what actually makes agricultural coordination work at scale — and publishing what we learn.</p>
          </motion.div>
        </div>
      </section>

      <section ref={ref} className="section-padding bg-surface-elevated">
        <div className="container-heraja">
          <div className="text-center mb-12"><p className="text-overline mb-3">Focus Areas</p><h2 className="text-h1">Research Domains</h2></div>
          <div className="grid sm:grid-cols-2 gap-6">
            {areas.map((a, i) => (
              <motion.div key={a.title} initial={{ opacity: 0, y: 20 }} animate={isVisible ? { opacity: 1, y: 0 } : {}} transition={{ delay: i * 0.1 }}
                className="bg-surface rounded-lg border border-neutral-100 p-6">
                <div className="w-10 h-10 rounded-lg flex items-center justify-center mb-4" style={{ backgroundColor: `${a.color}15` }}>
                  <a.icon className="w-5 h-5" style={{ color: a.color }} />
                </div>
                <h3 className="text-h4 mb-2">{a.title}</h3>
                <p className="text-body-small text-neutral-600">{a.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <CTABlock title="Collaborate on Research" description="Partner with our research team on agricultural infrastructure studies."
        primaryCta={{ label: 'Contact Research Team', href: '/company/contact' }} />
    </Layout>
  );
}
