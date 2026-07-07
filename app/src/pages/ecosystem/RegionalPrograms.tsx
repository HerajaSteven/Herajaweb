import Layout from '@/components/layout/Layout';
import CTABlock from '@/components/sections/CTABlock';
import { motion } from 'framer-motion';
import { MapPin } from 'lucide-react';
import { useScrollReveal } from '@/hooks/useScrollReveal';

const regions = [
  { name: 'West Africa', status: 'Active', countries: 'Nigeria, Ghana', focus: 'Aggregation, logistics, and market access — anchored by our Lagos headquarters' },
  { name: 'East Africa', status: 'Planned', countries: 'Kenya, Uganda, Tanzania', focus: 'Market coordination and traceability' },
  { name: 'Southern Africa', status: 'Planned', countries: 'South Africa, Zambia', focus: 'Enterprise coordination' },
];

export default function RegionalPrograms() {
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
            <h1 className="text-display max-w-4xl mb-6">Regional Programs</h1>
            <p className="text-body-large text-neutral-700 max-w-2xl">Where we're live today, and where we're headed next — starting from a Lagos base and expanding region by region.</p>
          </motion.div>
        </div>
      </section>

      <section ref={ref} className="section-padding bg-surface-elevated">
        <div className="container-heraja">
          <div className="grid gap-6">
            {regions.map((r, i) => (
              <motion.div key={r.name} initial={{ opacity: 0, y: 20 }} animate={isVisible ? { opacity: 1, y: 0 } : {}} transition={{ delay: i * 0.1 }}
                className="bg-surface rounded-lg border border-neutral-100 p-6 lg:p-8">
                <div className="flex items-start gap-4">
                  <MapPin className="w-6 h-6 text-brand-secondary flex-shrink-0 mt-1" />
                  <div>
                    <div className="flex items-center gap-3 mb-2">
                      <h3 className="text-h3">{r.name}</h3>
                      <span className={`px-2 py-0.5 rounded-full text-xs font-medium ${r.status === 'Active' ? 'bg-brand-secondary/20 text-brand-primary' : r.status === 'Planned' ? 'bg-brand-tertiary/20 text-brand-tertiary' : 'bg-neutral-100 text-neutral-500'}`}>{r.status}</span>
                    </div>
                    <p className="text-body text-neutral-600 mb-2">{r.countries}</p>
                    <p className="text-body-small text-neutral-500">Focus: {r.focus}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <CTABlock title="Partner on Regional Deployment" description="Work with us to bring agricultural infrastructure to your region."
        primaryCta={{ label: 'Contact Us', href: '/company/contact' }} />
    </Layout>
  );
}
