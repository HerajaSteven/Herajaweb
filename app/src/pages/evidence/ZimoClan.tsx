import Layout from '@/components/layout/Layout';
import Seo from '@/components/Seo';
import CTABlock from '@/components/sections/CTABlock';
import { motion } from 'framer-motion';
import { Building2, Sprout, ShoppingCart, Truck, Check } from 'lucide-react';
import { useScrollReveal } from '@/hooks/useScrollReveal';

const metrics = [
  { label: 'Partner Farms', value: '500+' },
  { label: 'Production Value Facilitated', value: '₦2B+' },
  { label: 'Buyer-Matching Turnaround', value: '24hrs' },
  { label: 'Core Products', value: '4' },
];

export default function ZIMOClan() {
  const { ref, isVisible } = useScrollReveal();
  return (
    <Layout>
      <Seo
        title="ZIMO Clan"
        description="A Lagos-based digital agriculture marketplace, built on the Heraja Agricultural Operating System — connecting digital investors with verified farms."
      />
      <section className="relative overflow-hidden bg-surface py-16 sm:py-20 md:py-24">
        <div className="absolute inset-0 pointer-events-none overflow-hidden" aria-hidden="true">
          <div className="absolute -top-24 -right-24 w-72 h-72 rounded-full bg-brand-secondary/10 blur-3xl" />
          <div className="absolute -bottom-32 -left-16 w-64 h-64 rounded-full bg-brand-tertiary/10 blur-3xl" />
        </div>
        <div className="container-heraja w-full">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
            <div className="flex items-center gap-3 mb-4">
              <span className="px-3 py-1 bg-brand-secondary/20 text-brand-primary rounded-full text-label">Enterprise Client</span>
            </div>
            <h1 className="text-display max-w-4xl mb-6">ZIMO Clan</h1>
            <p className="text-body-large text-neutral-700 max-w-2xl">
              A Lagos-based digital agriculture marketplace, built on the Heraja Agricultural Operating System — connecting digital investors with verified physical farms across Africa, and farms directly with institutional buyers.
            </p>
          </motion.div>
        </div>
      </section>

      <section ref={ref} className="section-padding bg-surface-elevated">
        <div className="container-heraja">
          <div className="text-center mb-12">
            <p className="text-overline mb-3">What ZIMO Clan Runs</p>
            <h2 className="text-h1">Four Core Products, One Infrastructure Layer</h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: <Sprout className="w-6 h-6" />, title: 'Animal Tracker', desc: 'Livestock monitoring across partner farms', color: '#7AC142' },
              { icon: <Building2 className="w-6 h-6" />, title: 'Farmer Groups', desc: 'Cooperative coordination for partner farmers', color: '#231F20' },
              { icon: <Truck className="w-6 h-6" />, title: 'Farm Logistics', desc: 'Storage, transport, and processing coordination', color: '#F99D1C' },
              { icon: <ShoppingCart className="w-6 h-6" />, title: 'Sell & Earn', desc: 'Direct buyer marketplace — 24-hour matching turnaround', color: '#4F9D5C' },
            ].map((mod, i) => (
              <motion.div key={mod.title} initial={{ opacity: 0, y: 20 }} animate={isVisible ? { opacity: 1, y: 0 } : {}} transition={{ delay: i * 0.1 }}
                className="bg-surface rounded-lg border border-neutral-100 p-6 text-center">
                <div className="w-12 h-12 rounded-lg mx-auto flex items-center justify-center mb-4" style={{ backgroundColor: `${mod.color}15` }}>
                  <div style={{ color: mod.color }}>{mod.icon}</div>
                </div>
                <h3 className="text-h4 mb-2">{mod.title}</h3>
                <p className="text-body-small text-neutral-600">{mod.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding bg-surface">
        <div className="container-heraja">
          <div className="text-center mb-12">
            <p className="text-overline mb-3">Reach</p>
            <h2 className="text-h1">ZIMO Clan, by the Numbers</h2>
            <p className="text-body text-neutral-500 max-w-2xl mx-auto mt-3">As reported by ZIMO Clan.</p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {metrics.map((m, i) => (
              <motion.div key={m.label} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}
                className="text-center p-6 bg-surface-elevated rounded-lg">
                <p className="text-3xl font-bold text-brand-primary mb-1">{m.value}</p>
                <p className="text-body-small text-neutral-600">{m.label}</p>
              </motion.div>
            ))}
          </div>
          <div className="max-w-2xl mx-auto space-y-4">
            {['Eliminates middlemen by connecting farms directly to institutional buyers', 'Instant digital payments to bank or mobile wallet', 'Farm verification before capital is pooled', 'Mobile-first, built for on-the-ground operators'].map((o, i) => (
              <div key={i} className="flex items-center gap-3">
                <div className="w-6 h-6 rounded-full bg-brand-secondary/20 flex items-center justify-center flex-shrink-0">
                  <Check className="w-3.5 h-3.5 text-brand-accent" />
                </div>
                <p className="text-body">{o}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTABlock title="Building Something Similar?" description="See how the same infrastructure ZIMO Clan runs on can support your organization."
        primaryCta={{ label: 'Explore the Platform', href: '/platform' }} secondaryCta={{ label: 'Contact Sales', href: '/company/contact' }} />
    </Layout>
  );
}
