import Layout from '@/components/layout/Layout';
import CTABlock from '@/components/sections/CTABlock';
import { motion } from 'framer-motion';
import { Brain, TrendingUp, AlertTriangle, Sprout, BarChart3, Zap } from 'lucide-react';
import { useScrollReveal } from '@/hooks/useScrollReveal';

const capabilities = [
  { icon: TrendingUp, title: 'Demand Forecasting', desc: 'Predict supply and demand patterns using historical data, seasonal trends, and market signals.', color: '#C9782B' },
  { icon: AlertTriangle, title: 'Risk Detection', desc: 'Identify operational anomalies, weather risks, and supply chain disruptions before they impact operations.', color: '#EF4444' },
  { icon: Sprout, title: 'Yield Prediction', desc: 'Estimate production yields based on weather, soil, input, and historical performance data.', color: '#7AC142' },
  { icon: BarChart3, title: 'Market Intelligence', desc: 'Analyze pricing trends, trade patterns, and market dynamics across regions and commodities.', color: '#4F9D5C' },
  { icon: Zap, title: 'Operational Optimization', desc: 'Recommend operational improvements based on performance patterns and benchmark analysis.', color: '#F99D1C' },
  { icon: Brain, title: 'Continuous Learning', desc: 'Models improve over time as more operational data flows through the infrastructure.', color: '#C9782B' },
];

export default function AI() {
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
            <h1 className="text-display max-w-4xl mb-6">Artificial Intelligence & Operational Intelligence</h1>
            <p className="text-body-large text-neutral-700 max-w-2xl">Practical AI that transforms agricultural operational data into actionable insights — demand forecasting, risk detection, yield prediction, and market intelligence.</p>
          </motion.div>
        </div>
      </section>

      <section ref={ref} className="section-padding bg-surface-elevated">
        <div className="container-heraja">
          <div className="text-center mb-12">
            <p className="text-overline mb-3">AI Capabilities</p>
            <h2 className="text-h1">Intelligence Layer</h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {capabilities.map((cap, i) => (
              <motion.div key={cap.title} initial={{ opacity: 0, y: 20 }} animate={isVisible ? { opacity: 1, y: 0 } : {}} transition={{ delay: i * 0.1 }}
                className="bg-surface rounded-lg border border-neutral-100 p-6">
                <div className="w-10 h-10 rounded-lg flex items-center justify-center mb-4" style={{ backgroundColor: `${cap.color}15` }}>
                  <cap.icon className="w-5 h-5" style={{ color: cap.color }} />
                </div>
                <h3 className="text-h4 mb-2">{cap.title}</h3>
                <p className="text-body-small text-neutral-600">{cap.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding bg-surface">
        <div className="container-heraja">
          <div className="text-center mb-12">
            <p className="text-overline mb-3">Data Flow</p>
            <h2 className="text-h1">How Intelligence Works</h2>
          </div>
          <div className="max-w-4xl mx-auto">
            {[
              { step: 'Data Collection', desc: 'Operational data flows from across the infrastructure.' },
              { step: 'Processing', desc: 'Data is cleaned, normalized, and prepared for analysis.' },
              { step: 'Model Application', desc: 'AI models process data to generate predictions and insights.' },
              { step: 'Insight Delivery', desc: 'Results are delivered through dashboards, alerts, and reports.' },
            ].map((s, i) => (
              <motion.div key={i} initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.15 }}
                className="flex gap-6 mb-6 last:mb-0">
                <div className="flex flex-col items-center">
                  <div className="w-10 h-10 rounded-full bg-brand-secondary/20 flex items-center justify-center flex-shrink-0"><span className="text-sm font-bold text-brand-secondary">{i + 1}</span></div>
                  {i < 3 && <div className="w-px flex-1 bg-neutral-200 my-2" />}
                </div>
                <div className="pb-4"><h4 className="text-h4 mb-1">{s.step}</h4><p className="text-body text-neutral-600">{s.desc}</p></div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <CTABlock title="Explore Operational Intelligence" description="See how intelligence capabilities are deployed on the platform."
        primaryCta={{ label: 'View Operational Intelligence', href: '/platform/operational-intelligence' }} secondaryCta={{ label: 'Contact Research Team', href: '/company/contact' }} />
    </Layout>
  );
}
