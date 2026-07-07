import Layout from '@/components/layout/Layout';
import CTABlock from '@/components/sections/CTABlock';
import { motion } from 'framer-motion';
import { Bird, Fish, Check, TrendingUp, Repeat, Layers, Gauge } from 'lucide-react';
import { useScrollReveal } from '@/hooks/useScrollReveal';

const sharedRationale = [
  { icon: TrendingUp, label: 'Strong market demand' },
  { icon: Gauge, label: 'Faster production cycles' },
  { icon: Layers, label: 'Scalable aggregation' },
  { icon: Repeat, label: 'High repeat-market frequency' },
];

const pilots = [
  {
    icon: Bird,
    name: 'Poultry Pilot',
    color: '#7AC142',
    description: 'Heraja\u2019s initial rollout focuses on poultry due to its strong market demand, faster production cycles, scalable aggregation, and operational coordination opportunities.',
    points: ['Strong, consistent buyer demand', 'Short production cycles enable fast iteration', 'High repeat-purchase frequency from offtakers', 'Well-suited to structured aggregation'],
  },
  {
    icon: Fish,
    name: 'Fish Farming Pilot',
    color: '#4F9D5C',
    description: 'Aquaculture extends the pilot into a second fast-cycling protein sector, validating Heraja infrastructure across different production environments, input chains, and cold-chain logistics requirements.',
    points: ['Growing demand for traceable, quality-verified fish', 'Production cycles comparable to poultry, enabling shared learnings', 'Tests cold-chain and time-sensitive logistics coordination', 'Shared input-supplier and buyer network with poultry operations'],
  },
];

const objectives = [
  { num: '01', title: 'Build reliable aggregation systems', desc: 'Across both sectors, with sector-specific handling for live birds and live or processed fish.' },
  { num: '02', title: 'Improve buyer confidence', desc: 'Through verified production records and quality checks at every handoff.' },
  { num: '03', title: 'Establish operational visibility', desc: 'Real-time visibility into production, aggregation, and movement for both pilots.' },
  { num: '04', title: 'Optimize logistics coordination', desc: 'Including cold-chain and time-sensitive movement specific to fish farming.' },
  { num: '05', title: 'Validate infrastructure scalability', desc: 'Prove that HAOS generalizes across distinct production environments before further sector expansion.' },
];

export default function PilotPrograms() {
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
            <p className="text-overline mb-4">Ecosystem / Pilot Programs</p>
            <h1 className="text-display max-w-4xl mb-6">Starting with Poultry & Fish Farming. Scaling Through Infrastructure.</h1>
            <p className="text-body-large text-neutral-700 max-w-2xl">
              Heraja's initial rollout focuses on two fast-cycling protein sectors — poultry and fish farming — chosen for their strong market demand, faster production cycles, scalable aggregation, and operational coordination opportunities.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Why These Sectors */}
      <section className="section-padding bg-surface-elevated">
        <div className="container-heraja">
          <div className="text-center mb-12">
            <p className="text-overline mb-3">Why These Sectors</p>
            <h2 className="text-h1">A Shared Rationale for Both Pilots</h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {sharedRationale.map((r, i) => (
              <motion.div key={r.label} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}
                className="bg-surface rounded-lg border border-neutral-100 p-6 text-center">
                <div className="w-12 h-12 rounded-lg bg-brand-secondary/20 flex items-center justify-center mx-auto mb-4">
                  <r.icon className="w-6 h-6 text-brand-secondary" />
                </div>
                <p className="text-body font-medium">{r.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* The Two Pilots */}
      <section ref={ref} className="section-padding bg-surface">
        <div className="container-heraja">
          <div className="text-center mb-12">
            <p className="text-overline mb-3">The Pilots</p>
            <h2 className="text-h1">Two Sectors, One Infrastructure</h2>
          </div>
          <div className="grid lg:grid-cols-2 gap-8">
            {pilots.map((p, i) => (
              <motion.div key={p.name} initial={{ opacity: 0, y: 20 }} animate={isVisible ? { opacity: 1, y: 0 } : {}} transition={{ delay: i * 0.15 }}
                className="bg-surface-elevated rounded-xl border border-neutral-100 p-8">
                <div className="w-12 h-12 rounded-lg flex items-center justify-center mb-4" style={{ backgroundColor: `${p.color}20` }}>
                  <p.icon className="w-6 h-6" style={{ color: p.color }} />
                </div>
                <h3 className="text-h3 mb-3">{p.name}</h3>
                <p className="text-body text-neutral-600 mb-5">{p.description}</p>
                <ul className="space-y-2.5">
                  {p.points.map((pt) => (
                    <li key={pt} className="flex items-start gap-3 text-body-small">
                      <div className="w-5 h-5 rounded-full bg-brand-secondary/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <Check className="w-3 h-3 text-brand-secondary" />
                      </div>
                      <span className="text-neutral-700">{pt}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Pilot Objectives */}
      <section className="section-padding bg-surface-dark text-white">
        <div className="container-heraja">
          <div className="text-center mb-12">
            <p className="text-overline mb-3">Across Both Pilots</p>
            <h2 className="text-h1 text-white">Pilot Objectives</h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-4">
            {objectives.map((o, i) => (
              <motion.div key={o.num} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}
                className="p-5 bg-white/5 rounded-lg border border-white/10">
                <p className="text-h3 text-brand-secondary mb-3">{o.num}</p>
                <h4 className="font-semibold mb-2">{o.title}</h4>
                <p className="text-body-small text-neutral-300">{o.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Phased Expansion */}
      <section className="section-padding bg-surface">
        <div className="container-heraja max-w-3xl text-center">
          <p className="text-h4 text-brand-primary">
            This phased rollout establishes a scalable operational foundation for future agricultural expansion beyond poultry and fish farming into livestock, grains, and other agricultural commodities.
          </p>
        </div>
      </section>

      <CTABlock title="Partner on the Pilot" description="Buyers, cooperatives, and logistics partners can join the poultry and fish farming pilots today."
        primaryCta={{ label: 'Contact Us', href: '/company/contact' }} secondaryCta={{ label: 'View Regional Programs', href: '/ecosystem/regional-programs' }} />
    </Layout>
  );
}
