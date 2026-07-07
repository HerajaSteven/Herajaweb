import Layout from '@/components/layout/Layout';
import CTABlock from '@/components/sections/CTABlock';
import { motion } from 'framer-motion';
import { Check, Circle, Clock, MapPin } from 'lucide-react';
import { useScrollReveal } from '@/hooks/useScrollReveal';

interface RoadmapItem {
  phase: string;
  title: string;
  description: string;
  status: 'complete' | 'current' | 'future';
}

const roadmapItems: RoadmapItem[] = [
  { phase: 'Phase 1', title: 'Foundation', description: 'Core infrastructure, HAOS workflow engine, identity system, and initial deployment.', status: 'complete' },
  { phase: 'Phase 2', title: 'Traceability', description: 'End-to-end traceability infrastructure with verification workflows and certificate generation.', status: 'complete' },
  { phase: 'Phase 3', title: 'Marketplace', description: 'Market coordination infrastructure connecting verified supply with authenticated demand.', status: 'current' },
  { phase: 'Phase 4', title: 'Operational Intelligence', description: 'AI-powered analytics, demand forecasting, and predictive operational insights.', status: 'current' },
  { phase: 'Phase 5', title: 'Regional Expansion', description: 'Multi-region deployment with localized compliance and data residency.', status: 'future' },
  { phase: 'Phase 6', title: 'Open APIs', description: 'Comprehensive public API ecosystem for developer and partner integrations.', status: 'future' },
  { phase: 'Phase 7', title: 'Developer Ecosystem', description: 'Developer portal, SDKs, documentation, and partner marketplace.', status: 'future' },
  { phase: 'Phase 8', title: 'Financial Infrastructure', description: 'Settlement support, trade finance integration, and payment coordination.', status: 'future' },
];

const regions = [
  { name: 'West Africa', status: 'Active', milestones: 'Nigeria, Ghana, Cote d\'Ivoire' },
  { name: 'East Africa', status: 'Planned', milestones: 'Kenya, Uganda, Tanzania' },
  { name: 'Southern Africa', status: 'Planned', milestones: 'South Africa, Zambia, Zimbabwe' },
];

function StatusIcon({ status }: { status: string }) {
  if (status === 'complete') return <Check className="w-4 h-4 text-brand-secondary" />;
  if (status === 'current') return <Circle className="w-4 h-4 text-brand-tertiary" />;
  return <Clock className="w-4 h-4 text-neutral-400" />;
}

function StatusBadge({ status }: { status: string }) {
  const classes = {
    complete: 'bg-brand-secondary/20 text-brand-primary',
    current: 'bg-brand-tertiary/20 text-brand-tertiary',
    future: 'bg-neutral-100 text-neutral-500',
  };
  return (
    <span className={`px-2 py-0.5 rounded-full text-xs font-medium ${classes[status as keyof typeof classes]}`}>
      {status.charAt(0).toUpperCase() + status.slice(1)}
    </span>
  );
}

export default function Roadmap() {
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
            <p className="text-overline mb-4">Platform Roadmap</p>
            <h1 className="text-display max-w-4xl mb-6">Building Infrastructure for the Future of Agriculture</h1>
            <p className="text-body-large text-neutral-700 max-w-2xl">
              A phased build-out — starting with the poultry and fish farming pilot in West Africa, then expanding capability and geography from there.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="section-padding bg-surface">
        <div className="container-heraja">
          <div className="text-center mb-12">
            <p className="text-overline mb-3">Timeline</p>
            <h2 className="text-h1">Development Roadmap</h2>
          </div>
          <div ref={ref} className="max-w-3xl mx-auto">
            <div className="relative">
              {roadmapItems.map((item, i) => (
                <motion.div
                  key={item.phase}
                  initial={{ opacity: 0, x: -20 }}
                  animate={isVisible ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: i * 0.1 }}
                  className="flex gap-6 mb-8 last:mb-0"
                >
                  <div className="flex flex-col items-center">
                    <div className={`w-10 h-10 rounded-full flex items-center justify-center ${
                      item.status === 'complete' ? 'bg-brand-secondary/30' : item.status === 'current' ? 'bg-brand-tertiary/30' : 'bg-neutral-100'
                    }`}>
                      <StatusIcon status={item.status} />
                    </div>
                    {i < roadmapItems.length - 1 && <div className="w-px flex-1 bg-neutral-200 my-2" />}
                  </div>
                  <div className="pb-4 flex-1">
                    <div className="flex items-center gap-3 mb-1">
                      <span className="text-label text-neutral-500">{item.phase}</span>
                      <StatusBadge status={item.status} />
                    </div>
                    <h4 className="text-h4 mb-1">{item.title}</h4>
                    <p className="text-body text-neutral-600">{item.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding bg-surface-elevated">
        <div className="container-heraja">
          <div className="text-center mb-12">
            <p className="text-overline mb-3">Geographic Expansion</p>
            <h2 className="text-h1">Regional Deployment</h2>
          </div>
          <div className="grid sm:grid-cols-3 gap-6">
            {regions.map((region, i) => (
              <motion.div
                key={region.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-surface rounded-lg border border-neutral-100 p-6"
              >
                <MapPin className="w-6 h-6 text-brand-secondary mb-3" />
                <h3 className="text-h4 mb-1">{region.name}</h3>
                <p className="text-label text-brand-secondary mb-2">{region.status}</p>
                <p className="text-body-small text-neutral-600">{region.milestones}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── One Infrastructure, Every Commodity ─── */}
      <section className="section-padding bg-surface">
        <div className="container-heraja">
          <div className="text-center mb-10">
            <p className="text-overline mb-3">Built Once, Reused Everywhere</p>
            <h2 className="text-h1 max-w-2xl mx-auto">One Infrastructure, Every Commodity</h2>
            <p className="text-body-large text-neutral-700 max-w-2xl mx-auto mt-4">
              HAOS doesn't get rebuilt for each sector. The same registration, traceability, logistics, and market access layers that run the poultry and fish farming pilot extend to any commodity — without a new system for every value chain.
            </p>
          </div>
          <div className="flex flex-wrap justify-center gap-3">
            {['Poultry', 'Fish Farming', 'Livestock', 'Grains', 'Cassava', 'Cocoa', 'Cotton', 'Horticulture'].map((c) => (
              <span key={c} className="px-4 py-2 rounded-full bg-surface-elevated border border-neutral-200 text-body-small font-medium text-neutral-700">
                {c}
              </span>
            ))}
          </div>
        </div>
      </section>

      <CTABlock
        title="Join the Infrastructure Journey"
        description="Partner with us to shape the future of agricultural infrastructure."
        primaryCta={{ label: 'Become a Partner', href: '/ecosystem/partners' }}
        secondaryCta={{ label: 'Contact Our Team', href: '/company/contact' }}
      />
    </Layout>
  );
}
