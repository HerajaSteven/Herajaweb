import { Link } from 'react-router-dom';
import Layout from '@/components/layout/Layout';
import CTABlock from '@/components/sections/CTABlock';
import { motion } from 'framer-motion';
import { MapPin, Check } from 'lucide-react';
import { useScrollReveal } from '@/hooks/useScrollReveal';

const roles = [
  { title: 'Senior Platform Engineer', location: 'Lagos / Remote', type: 'Full-time' },
  { title: 'Infrastructure Solutions Architect', location: 'Lagos / Remote', type: 'Full-time' },
  { title: 'Product Manager — Platform', location: 'Lagos', type: 'Full-time' },
  { title: 'Partnerships Lead', location: 'Lagos / Remote', type: 'Full-time' },
  { title: 'Developer Relations', location: 'Remote', type: 'Full-time' },
];

const benefits = [
  'Competitive compensation',
  'Health insurance',
  'Flexible working arrangements',
  'Professional development budget',
  'Meaningful equity participation',
  'Annual team retreats',
];

export default function Careers() {
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
            <p className="text-overline mb-4">Company / Careers</p>
            <h1 className="text-display max-w-4xl mb-6">Join the Team</h1>
            <p className="text-body-large text-neutral-700 max-w-2xl">We're hiring people who'd rather fix a broken supply chain than write another feature nobody asked for.</p>
          </motion.div>
        </div>
      </section>

      <section className="section-padding bg-surface">
        <div className="container-heraja">
          <div className="grid lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2">
              <p className="text-overline mb-3">Open Roles</p>
              <h2 className="text-h1 mb-6">Current Opportunities</h2>
              <div className="space-y-4">
                {roles.map((r, i) => (
                  <motion.div key={r.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}
                    className="bg-surface-elevated rounded-lg border border-neutral-100 p-5 flex flex-col sm:flex-row sm:items-center gap-3">
                    <div className="flex-1">
                      <h3 className="text-h4">{r.title}</h3>
                      <div className="flex gap-3 text-body-small text-neutral-500 mt-1">
                        <span className="flex items-center gap-1"><MapPin className="w-3.5 h-3.5" />{r.location}</span>
                        <span>{r.type}</span>
                      </div>
                    </div>
                    <Link to={`/company/contact?role=${encodeURIComponent(r.title)}`} className="btn-primary text-sm">Apply</Link>
                  </motion.div>
                ))}
              </div>
            </div>
            <div>
              <p className="text-overline mb-3">Benefits</p>
              <h2 className="text-h1 mb-6">Why Heraja</h2>
              <div ref={ref} className="space-y-3">
                {benefits.map((b, i) => (
                  <motion.div key={b} initial={{ opacity: 0, x: -10 }} animate={isVisible ? { opacity: 1, x: 0 } : {}} transition={{ delay: i * 0.1 }}
                    className="flex items-center gap-3">
                    <Check className="w-4 h-4 text-brand-secondary flex-shrink-0" />
                    <span className="text-body">{b}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <CTABlock title="Don't See Your Role?" description="We're always looking for exceptional talent."
        primaryCta={{ label: 'Send Your Resume', href: '/company/contact' }} />
    </Layout>
  );
}
