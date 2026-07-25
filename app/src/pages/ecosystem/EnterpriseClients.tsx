import { Link } from 'react-router-dom';
import Layout from '@/components/layout/Layout';
import Seo from '@/components/Seo';
import CTABlock from '@/components/sections/CTABlock';
import { motion } from 'framer-motion';
import { Building2, ArrowRight } from 'lucide-react';
import { useScrollReveal } from '@/hooks/useScrollReveal';

const clients = [
  { name: 'ZIMO Clan', industry: 'Digital Agriculture Marketplace', modules: ['HAOS', 'Marketplace', 'Logistics'], outcome: 'A Lagos-based platform connecting digital investors with verified farms, and farms directly with institutional buyers — built on the Heraja Agricultural Operating System.', href: '/ecosystem/zimo-clan' },
];

export default function EnterpriseClients() {
  const { ref, isVisible } = useScrollReveal();
  return (
    <Layout>
      <Seo
        title="Enterprise Clients"
        description="Organizations building their day-to-day agricultural operations on Heraja."
      />
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
            <h1 className="text-display max-w-4xl mb-6">Enterprise Clients</h1>
            <p className="text-body-large text-neutral-700 max-w-2xl">Organizations building their day-to-day agricultural operations on Heraja.</p>
          </motion.div>
        </div>
      </section>

      <section ref={ref} className="section-padding bg-surface-elevated">
        <div className="container-heraja">
          <div className="space-y-6">
            {clients.map((client, i) => (
              <motion.div key={client.name} initial={{ opacity: 0, y: 20 }} animate={isVisible ? { opacity: 1, y: 0 } : {}} transition={{ delay: i * 0.1 }}
                className="bg-surface rounded-lg border border-neutral-100 p-6 lg:p-8">
                <div className="flex flex-col lg:flex-row lg:items-start gap-6">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <Building2 className="w-5 h-5 text-brand-secondary" />
                      <h3 className="text-h3">{client.name}</h3>
                    </div>
                    <p className="text-body-small text-neutral-500 mb-3">{client.industry}</p>
                    <p className="text-body text-neutral-700 mb-4">{client.outcome}</p>
                    <div className="flex flex-wrap gap-2">
                      {client.modules.map((m) => (
                        <span key={m} className="px-3 py-1 bg-surface-elevated rounded-full text-body-small text-brand-primary">{m}</span>
                      ))}
                    </div>
                  </div>
                  <Link to={client.href} className="btn-secondary self-start whitespace-nowrap">View Story <ArrowRight className="w-4 h-4" /></Link>
                </div>
              </motion.div>
            ))}
            <div className="bg-surface rounded-lg border border-dashed border-neutral-300 p-6 lg:p-8 text-center">
              <p className="text-body text-neutral-600">We're onboarding new enterprise partners as the platform scales beyond our current Poultry &amp; Fish Farming pilot.</p>
              <Link to="/company/contact" className="inline-flex items-center gap-2 text-brand-secondary hover:underline font-medium mt-3">
                Talk to us about becoming a partner <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      <CTABlock title="Become an Enterprise Client" description="Join organizations building on Heraja infrastructure."
        primaryCta={{ label: 'Contact Sales', href: '/company/contact' }} secondaryCta={{ label: 'Explore Platform', href: '/platform' }} />
    </Layout>
  );
}
