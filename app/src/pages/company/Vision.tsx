import Layout from '@/components/layout/Layout';
import CTABlock from '@/components/sections/CTABlock';
import { motion } from 'framer-motion';
import { Target, Globe, Cpu, Users } from 'lucide-react';
import { useScrollReveal } from '@/hooks/useScrollReveal';

const objectives = [
  { icon: Globe, title: 'Pan-African Reach', desc: 'Extend the same coordination backbone across production regions on the continent.', color: '#4F9D5C' },
  { icon: Cpu, title: 'Intelligent Operations', desc: 'Embed AI and analytics into every stage of agricultural coordination.', color: '#C9782B' },
  { icon: Users, title: 'Ecosystem Connectivity', desc: 'Connect every stakeholder — farmer to buyer — through one shared system.', color: '#7AC142' },
  { icon: Target, title: 'Verified Agriculture', desc: 'Make verified, transparent operations the standard, not the exception.', color: '#F99D1C' },
];

export default function Vision() {
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
            <p className="text-overline mb-4">Company / Vision</p>
            <h1 className="text-display max-w-4xl mb-6">Our Vision</h1>
            <p className="text-body-large text-neutral-700 max-w-2xl">The future of agriculture won't be won on financing alone — it will be won by whoever builds the operating backbone that connects farmers, buyers, and everyone between them across Africa and emerging markets.</p>
          </motion.div>
        </div>
      </section>

      {/* ─── The Infrastructure Category ─── */}
      <section className="section-padding bg-brand-primary">
        <div className="container-heraja max-w-3xl">
          <p className="text-overline mb-3 text-brand-secondary">The Category</p>
          <h2 className="text-h1 text-white mb-4">A Missing Layer of Public Infrastructure</h2>
          <p className="text-body-large text-neutral-300 mb-4">
            Across Africa, mobile money and national digital ID programs became the shared infrastructure that payments and identity now run on. Both categories now have an accepted foundation that everything else gets built on top of. Agriculture — the sector employing the most people on the continent — still doesn't.
          </p>
          <p className="text-body-large text-neutral-300">
            That's not an agricultural gap. It's an infrastructure gap. Fragmented farmer data, weak traceability, and disconnected market access aren't symptoms of bad farming — they're symptoms of a missing layer, the same way unreliable payments were a missing layer before shared payment rails existed.
          </p>
        </div>
      </section>

      <section ref={ref} className="section-padding bg-surface-elevated">
        <div className="container-heraja">
          <div className="text-center mb-12"><p className="text-overline mb-3">Strategic Objectives</p><h2 className="text-h1">What We're Building Towards</h2></div>
          <div className="grid sm:grid-cols-2 gap-6">
            {objectives.map((o, i) => (
              <motion.div key={o.title} initial={{ opacity: 0, y: 20 }} animate={isVisible ? { opacity: 1, y: 0 } : {}} transition={{ delay: i * 0.1 }}
                className="bg-surface rounded-lg border border-neutral-100 p-6">
                <div className="w-10 h-10 rounded-lg flex items-center justify-center mb-4" style={{ backgroundColor: `${o.color}15` }}>
                  <o.icon className="w-5 h-5" style={{ color: o.color }} />
                </div>
                <h3 className="text-h4 mb-2">{o.title}</h3>
                <p className="text-body-small text-neutral-600">{o.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <CTABlock title="Be Part of the Vision" primaryCta={{ label: 'Contact Us', href: '/company/contact' }} />
    </Layout>
  );
}
