import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Building2, Users, Globe, FileText, MapPin, Sprout } from 'lucide-react';
import Layout from '@/components/layout/Layout';
import CTABlock from '@/components/sections/CTABlock';
import { useScrollReveal } from '@/hooks/useScrollReveal';

const ecosystemAreas = [
  { icon: Building2, title: 'Enterprise Clients', desc: 'Organizations running on Heraja infrastructure.', href: '/ecosystem/enterprise-clients', color: '#231F20' },
  { icon: Users, title: 'ZIMO Clan', desc: 'Flagship enterprise implementation.', href: '/ecosystem/zimo-clan', color: '#7AC142' },
  { icon: Sprout, title: 'Pilot Programs', desc: 'Poultry & Fish Farming pilot, live today.', href: '/ecosystem/pilot-programs', color: '#F99D1C' },
  { icon: Globe, title: 'Partners', desc: 'Technology and implementation partners.', href: '/ecosystem/partners', color: '#4F9D5C' },
  { icon: FileText, title: 'Implementation Stories', desc: 'Real deployment outcomes and metrics.', href: '/ecosystem/implementation-stories', color: '#C9782B' },
  { icon: MapPin, title: 'Regional Programs', desc: 'Geographic deployment initiatives.', href: '/ecosystem/regional-programs', color: '#5FA83D' },
];

export default function EcosystemOverview() {
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
            <p className="text-overline mb-4">Ecosystem</p>
            <h1 className="text-display max-w-4xl mb-6">The Heraja Ecosystem</h1>
            <p className="text-body-large text-neutral-700 max-w-2xl">
              Every enterprise client, technology partner, and pilot program running on Heraja — the network, not just the platform.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="section-padding bg-surface-elevated">
        <div className="container-heraja">
          <div className="text-center mb-12">
            <p className="text-overline mb-3">Explore</p>
            <h2 className="text-h1">Ecosystem Components</h2>
          </div>
          <div ref={ref} className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {ecosystemAreas.map((a, i) => (
              <motion.div key={a.href} initial={{ opacity: 0, y: 20 }} animate={isVisible ? { opacity: 1, y: 0 } : {}} transition={{ delay: i * 0.1 }}>
                <Link to={a.href} className="group card-elevate block bg-surface rounded-lg border border-neutral-100 p-6 h-full">
                  <div className="w-10 h-10 rounded-lg flex items-center justify-center mb-4" style={{ backgroundColor: `${a.color}15` }}>
                    <a.icon className="w-5 h-5" style={{ color: a.color }} />
                  </div>
                  <h3 className="text-h4 mb-2 group-hover:text-brand-secondary transition-colors">{a.title}</h3>
                  <p className="text-body-small text-neutral-600">{a.desc}</p>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <CTABlock title="Join the Ecosystem" description="Become a partner or enterprise client building on Heraja infrastructure."
        primaryCta={{ label: 'Become a Partner', href: '/ecosystem/partners' }} secondaryCta={{ label: 'Contact Us', href: '/company/contact' }} />
    </Layout>
  );
}
