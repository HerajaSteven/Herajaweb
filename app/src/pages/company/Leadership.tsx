import Layout from '@/components/layout/Layout';
import CTABlock from '@/components/sections/CTABlock';
import { motion } from 'framer-motion';
import { Users } from 'lucide-react';
import { useScrollReveal } from '@/hooks/useScrollReveal';

const team = [
  { name: 'Chief Executive Officer', role: 'Leading strategy and vision for agricultural infrastructure transformation.' },
  { name: 'Chief Technology Officer', role: 'Driving technical architecture and platform development.' },
  { name: 'Chief Operating Officer', role: 'Overseeing operations and enterprise client implementations.' },
  { name: 'Head of Product', role: 'Defining product strategy and capability roadmap.' },
  { name: 'Head of Engineering', role: 'Leading engineering teams and technical delivery.' },
  { name: 'Head of Partnerships', role: 'Building the partner ecosystem and strategic alliances.' },
];

export default function Leadership() {
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
            <p className="text-overline mb-4">Company / Leadership</p>
            <h1 className="text-display max-w-4xl mb-6">Leadership</h1>
            <p className="text-body-large text-neutral-700 max-w-2xl">The people setting the direction — and staying close enough to the field to know if it's the right one.</p>
          </motion.div>
        </div>
      </section>

      <section ref={ref} className="section-padding bg-surface-elevated">
        <div className="container-heraja max-w-3xl">
          <div className="space-y-6">
            {team.map((m, i) => (
              <motion.div key={m.name} initial={{ opacity: 0, y: 20 }} animate={isVisible ? { opacity: 1, y: 0 } : {}} transition={{ delay: i * 0.1 }}
                className="bg-surface rounded-lg border border-neutral-100 p-6 flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-brand-primary/10 flex items-center justify-center flex-shrink-0">
                  <Users className="w-5 h-5 text-brand-primary" />
                </div>
                <div>
                  <h3 className="text-h4 mb-1">{m.name}</h3>
                  <p className="text-body text-neutral-600">{m.role}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <CTABlock title="Join Our Leadership Team" primaryCta={{ label: 'View Careers', href: '/company/careers' }} />
    </Layout>
  );
}
