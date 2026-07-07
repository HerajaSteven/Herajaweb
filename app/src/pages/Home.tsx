import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  ArrowRight,
  Database,
  Sprout,
  Radio,
  Truck,
  ShoppingCart,
  Fingerprint,
  Brain,
  Shield,
  BarChart3,
  FileText,
  BookOpen,
  Microscope,
} from 'lucide-react';
import Layout from '@/components/layout/Layout';
import EcosystemExplorer from '@/components/diagrams/EcosystemExplorer';
import { useScrollReveal } from '@/hooks/useScrollReveal';

/* ─── Animated Counter ─── */
function AnimatedCounter({ display }: { display: string }) {
  return (
    <motion.span
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      className="text-3xl lg:text-4xl font-bold text-brand-primary"
    >
      {display}
    </motion.span>
  );
}

/* ─── Metric Card ─── */
function MetricCard({ display, label, delay }: { display: string; label: string; delay: number }) {
  const { ref, isVisible } = useScrollReveal();
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={isVisible ? { opacity: 1, y: 0 } : {}}
      transition={{ delay, duration: 0.5 }}
      className="text-center"
    >
      <AnimatedCounter display={display} />
      <p className="text-body-small text-neutral-500 mt-1">{label}</p>
    </motion.div>
  );
}

/* ─── Capability Card ─── */
function CapabilityCard({ icon: Icon, title, description, href, color }: {
  icon: React.ElementType; title: string; description: string; href: string; color: string;
}) {
  return (
    <Link to={href} className="group card-elevate block bg-surface rounded-lg border border-neutral-100 p-6">
      <div className="w-10 h-10 rounded-lg flex items-center justify-center mb-4" style={{ backgroundColor: `${color}15` }}>
        <Icon className="w-5 h-5" style={{ color }} />
      </div>
      <h3 className="text-h4 mb-2 group-hover:text-brand-secondary transition-colors">{title}</h3>
      <p className="text-body-small text-neutral-600 mb-3">{description}</p>
      <span className="inline-flex items-center gap-1 text-sm font-medium text-brand-secondary opacity-0 group-hover:opacity-100 transition-opacity">
        Explore <ArrowRight className="w-3.5 h-3.5" />
      </span>
    </Link>
  );
}

/* ─── Resource Card ─── */
function ResourceCard({ title, excerpt, category, href, icon: Icon }: {
  title: string; excerpt: string; category: string; href: string; icon: React.ElementType;
}) {
  return (
    <Link to={href} className="group card-elevate block bg-surface rounded-lg border border-neutral-100 p-6">
      <div className="flex items-center gap-2 mb-3">
        <Icon className="w-4 h-4 text-brand-secondary" />
        <span className="text-label text-brand-secondary uppercase">{category}</span>
      </div>
      <h3 className="text-h4 mb-2 group-hover:text-brand-secondary transition-colors">{title}</h3>
      <p className="text-body-small text-neutral-600">{excerpt}</p>
    </Link>
  );
}

/* ─── Pathway Card ─── */
function PathwayCard({ title, description, href, delay }: {
  title: string; description: string; href: string; delay: number;
}) {
  const { ref, isVisible } = useScrollReveal();
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={isVisible ? { opacity: 1, y: 0 } : {}}
      transition={{ delay, duration: 0.5 }}
    >
      <Link to={href} className="group card-elevate block bg-surface rounded-lg border border-neutral-100 p-6 h-full">
        <h3 className="text-h4 mb-2 group-hover:text-brand-secondary transition-colors">{title}</h3>
        <p className="text-body-small text-neutral-600">{description}</p>
        <ArrowRight className="w-4 h-4 text-neutral-400 group-hover:text-brand-secondary group-hover:translate-x-1 transition-all mt-3" />
      </Link>
    </motion.div>
  );
}

/* ═══════════════════════════════════════════
   HOMEPAGE
   ═══════════════════════════════════════════ */
export default function Home() {
  return (
    <Layout showBreadcrumb={false}>
      {/* ─── Hero ─── */}
      <section className="min-h-[60vh] md:min-h-[85vh] flex items-center relative overflow-hidden bg-surface py-12 lg:py-0">
        <div className="container-heraja w-full">
          <div className="grid lg:grid-cols-[1fr_0.42fr] gap-12 lg:gap-16 items-center">
            <div>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="text-overline mb-4"
              >
                Heraja Agro Technologies
              </motion.p>
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-display mb-6"
              >
                The Operating Infrastructure for Modern Agriculture
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="text-body-large text-neutral-700 max-w-xl mb-8"
              >
                Heraja builds the digital backbone that connects production, coordination, and market access — enabling agricultural organizations to operate with transparency, efficiency, and scale.
              </motion.p>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.6 }}
                className="flex flex-wrap gap-4"
              >
                <Link to="/platform" className="btn-primary">
                  Explore Platform <ArrowRight className="w-4 h-4" />
                </Link>
                <Link to="/company/contact" className="btn-secondary">
                  Book Demo
                </Link>
              </motion.div>
            </div>

            {/* Hero Visual */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="hidden lg:block"
            >
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-br from-brand-secondary/10 to-transparent rounded-2xl" />
                <svg viewBox="0 0 400 400" className="w-full max-w-md mx-auto" aria-label="Heraja infrastructure network diagram">
                  <defs>
                    <linearGradient id="heroGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#7AC142" stopOpacity="0.2" />
                      <stop offset="100%" stopColor="#231F20" stopOpacity="0.1" />
                    </linearGradient>
                  </defs>
                  <rect width="400" height="400" rx="20" fill="url(#heroGrad)" />
                  {/* Central hub */}
                  <circle cx="200" cy="200" r="30" fill="#231F20" />
                  <text x="200" y="205" textAnchor="middle" fill="white" fontSize="11" fontWeight="600">HAOS</text>
                  {/* Orbiting nodes */}
                  {[0, 60, 120, 180, 240, 300].map((angle, i) => {
                    const rad = (angle * Math.PI) / 180;
                    const x = 200 + 120 * Math.cos(rad);
                    const y = 200 + 120 * Math.sin(rad);
                    const colors = ['#7AC142', '#4F9D5C', '#C9782B', '#F99D1C', '#5FA83D', '#231F20'];
                    const labels = ['Market', 'Trace', 'AI', 'Identity', 'API', 'Secure'];
                    return (
                      <g key={angle}>
                        <line x1="200" y1="200" x2={x} y2={y} stroke={colors[i]} strokeWidth="1.5" strokeOpacity="0.4" strokeDasharray="4 4">
                          <animate attributeName="stroke-dashoffset" from="0" to="8" dur="2s" repeatCount="indefinite" />
                        </line>
                        <circle cx={x} cy={y} r="22" fill={colors[i]} opacity="0.9" />
                        <text x={x} y={y + 4} textAnchor="middle" fill="white" fontSize="9" fontWeight="600">{labels[i]}</text>
                      </g>
                    );
                  })}
                  {/* Outer ring */}
                  <circle cx="200" cy="200" r="120" fill="none" stroke="#231F20" strokeWidth="1" strokeOpacity="0.15" strokeDasharray="8 4" />
                </svg>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ─── Metrics Bar ─── */}
      <section className="bg-surface-elevated border-y border-neutral-100">
        <div className="container-heraja py-10">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            <MetricCard display="12,450+" label="Active Farms on HAOS" delay={0} />
            <MetricCard display="94.2%" label="Traceability Rate" delay={0.1} />
            <MetricCard display="3" label="Regions Operational" delay={0.2} />
            <MetricCard display="2" label="Sectors in Pilot — Poultry & Fish Farming" delay={0.3} />
          </div>
        </div>
      </section>

      {/* ─── Positioning Statement ─── */}
      <section className="bg-brand-primary">
        <div className="container-heraja py-10 lg:py-12">
          <p className="text-h3 text-white text-center max-w-3xl mx-auto">
            Agriculture does not only need financing. It needs <span className="text-brand-secondary">operational coordination infrastructure.</span>
          </p>
        </div>
      </section>

      {/* ─── Infrastructure Positioning ─── */}
      <section className="section-padding bg-surface">
        <div className="container-heraja">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div>
              <p className="text-overline mb-3">Infrastructure Positioning</p>
              <h2 className="text-h1 mb-4">Why Infrastructure, Not Software</h2>
              <p className="text-body-large text-neutral-700 mb-6">
                Across Africa, mobile money and national digital ID programs became the shared infrastructure that payments and identity now run on. Agriculture still doesn't have that equivalent. Heraja is the connective layer: not another farm app, but the shared infrastructure that identity, traceability, logistics, and market access all run on.
              </p>
              <ul className="space-y-3 mb-6">
                {['Shared operational backbone', 'Connected stakeholders', 'Verified data flows', 'Enterprise-grade coordination'].map((item) => (
                  <li key={item} className="flex items-center gap-3 text-body">
                    <div className="w-5 h-5 rounded-full bg-brand-secondary/20 flex items-center justify-center flex-shrink-0">
                      <svg className="w-3 h-3 text-brand-secondary" viewBox="0 0 12 12" fill="none"><path d="M2 6l3 3 5-5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
                    </div>
                    {item}
                  </li>
                ))}
              </ul>
              <Link to="/platform" className="btn-tertiary">
                Explore the Platform <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
            <div className="bg-surface-elevated rounded-xl p-8 border border-neutral-100">
              <div className="space-y-4">
                {[
                  { label: 'Organizations', color: '#231F20', desc: 'Governments, cooperatives, agribusiness' },
                  { label: 'HAOS Platform', color: '#7AC142', desc: 'Workflow engine, coordination, identity' },
                  { label: 'Infrastructure Services', color: '#C9782B', desc: 'Traceability, AI, APIs, security' },
                  { label: 'Cloud Foundation', color: '#5FA83D', desc: 'Governance, compliance, monitoring' },
                ].map((layer, i) => (
                  <motion.div
                    key={layer.label}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    className="flex items-center gap-4 p-4 bg-white rounded-lg border border-neutral-100"
                  >
                    <div className="w-3 h-3 rounded-full flex-shrink-0" style={{ backgroundColor: layer.color }} />
                    <div>
                      <p className="font-semibold text-sm text-brand-primary">{layer.label}</p>
                      <p className="text-body-small text-neutral-500">{layer.desc}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── Ecosystem Overview ─── */}
      <section className="section-padding bg-surface-elevated">
        <div className="container-heraja">
          <div className="text-center mb-12">
            <p className="text-overline mb-3">Ecosystem Architecture</p>
            <h2 className="text-h1 max-w-2xl mx-auto">How the Ecosystem Works</h2>
            <p className="text-body-large text-neutral-700 max-w-2xl mx-auto mt-4">
              Five interconnected layers that enable agricultural organizations to coordinate operations at scale.
            </p>
          </div>
          <EcosystemExplorer />
        </div>
      </section>

      {/* ─── Platform Overview ─── */}
      <section className="section-padding bg-surface">
        <div className="container-heraja">
          <div className="text-center mb-12">
            <p className="text-overline mb-3">Platform Capabilities</p>
            <h2 className="text-h1 max-w-2xl mx-auto">Infrastructure Modules</h2>
            <p className="text-body-large text-neutral-700 max-w-2xl mx-auto mt-4">
              Purpose-built capabilities that organizations combine to create their operational environment.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <CapabilityCard icon={Database} title="HAOS" description="Agricultural Operating Infrastructure — the workflow engine powering coordinated operations." href="/platform/haos" color="#231F20" />
            <CapabilityCard icon={Sprout} title="Farm Intelligence" description="Production monitoring, field reporting, and operational visibility across every farm." href="/platform/farm-intelligence" color="#7AC142" />
            <CapabilityCard icon={Radio} title="Coordination Network" description="Real-time communication connecting farmers, field agents, and partners." href="/platform/coordination-network" color="#4F9D5C" />
            <CapabilityCard icon={Truck} title="Logistics" description="Movement coordination for aggregation, transportation, and delivery across regions." href="/platform/logistics" color="#F99D1C" />
            <CapabilityCard icon={ShoppingCart} title="Marketplace" description="Market coordination infrastructure connecting verified supply with authenticated demand." href="/platform/marketplace" color="#7AC142" />
            <CapabilityCard icon={Fingerprint} title="Traceability" description="Verified operations from farm to buyer — every stage documented and auditable." href="/platform/traceability" color="#4F9D5C" />
            <CapabilityCard icon={Brain} title="Operational Intelligence" description="Real-time monitoring, predictive analytics, and AI-driven operational insights." href="/platform/operational-intelligence" color="#C9782B" />
            <CapabilityCard icon={Shield} title="Identity & Security" description="Digital profiles, access management, and enterprise-grade security compliance." href="/platform/identity" color="#F99D1C" />
            <CapabilityCard icon={BarChart3} title="API & Integrations" description="Developer-ready APIs for connecting external systems to Heraja infrastructure." href="/platform/apis" color="#5FA83D" />
          </div>
        </div>
      </section>

      {/* ─── Enterprise Trust ─── */}
      <section className="section-padding bg-surface-dark text-white">
        <div className="container-heraja">
          <div className="text-center mb-12">
            <p className="text-overline mb-3">Enterprise Trust</p>
            <h2 className="text-h1 max-w-2xl mx-auto text-white">Organizations Building on Heraja</h2>
          </div>
          <div className="grid sm:grid-cols-3 gap-8 mb-12">
            <div className="text-center">
              <p className="text-4xl font-bold text-brand-secondary mb-2">6+</p>
              <p className="text-body text-neutral-300">Organization Types Supported</p>
            </div>
            <div className="text-center">
              <p className="text-4xl font-bold text-brand-secondary mb-2">50+</p>
              <p className="text-body text-neutral-300">Operational Workflows</p>
            </div>
            <div className="text-center">
              <p className="text-4xl font-bold text-brand-secondary mb-2">99.9%</p>
              <p className="text-body text-neutral-300">Infrastructure Uptime</p>
            </div>
          </div>
          <div className="text-center">
            <Link to="/ecosystem/enterprise-clients" className="inline-flex items-center gap-2 text-brand-secondary hover:underline font-medium">
              View Enterprise Clients <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* ─── Featured Resources ─── */}
      <section className="section-padding bg-surface">
        <div className="container-heraja">
          <div className="text-center mb-12">
            <p className="text-overline mb-3">Knowledge Base</p>
            <h2 className="text-h1 max-w-2xl mx-auto">Featured Resources</h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <ResourceCard title="HAOS Whitepaper" excerpt="Technical deep-dive into the Agricultural Operating Infrastructure architecture." category="Whitepaper" href="/resources/whitepaper" icon={FileText} />
            <ResourceCard title="Corporate Brochure" excerpt="Enterprise capability overview for decision-makers and procurement teams." category="Brochure" href="/resources/corporate-brochure" icon={BookOpen} />
            <ResourceCard title="Platform Documentation" excerpt="Complete technical documentation for developers and system architects." category="Documentation" href="/resources/documentation" icon={FileText} />
            <ResourceCard title="Research Insights" excerpt="Industry research on digital agricultural infrastructure transformation." category="Research" href="/resources/research" icon={Microscope} />
          </div>
          <div className="text-center mt-8">
            <Link to="/resources" className="btn-secondary">
              View All Resources
            </Link>
          </div>
        </div>
      </section>

      {/* ─── CTA / Pathways ─── */}
      <section className="section-padding bg-surface-elevated">
        <div className="container-heraja">
          <div className="text-center mb-12">
            <p className="text-overline mb-3">Get Started</p>
            <h2 className="text-h1 max-w-2xl mx-auto">Choose Your Pathway</h2>
            <p className="text-body-large text-neutral-700 max-w-2xl mx-auto mt-4">
              Every organization type has a tailored journey into the Heraja ecosystem.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <PathwayCard title="Enterprise Client" description="Large-scale operational coordination and digital infrastructure deployment." href="/solutions/enterprise" delay={0} />
            <PathwayCard title="Government Agency" description="National and regional agricultural digital transformation programs." href="/solutions/government" delay={0.1} />
            <PathwayCard title="Cooperative" description="Member coordination, shared operations, and marketplace access." href="/solutions/cooperatives" delay={0.2} />
            <PathwayCard title="Agribusiness" description="Supply chain optimization, processing coordination, and market access." href="/solutions/agribusiness" delay={0.3} />
            <PathwayCard title="Development Partner" description="Impact measurement, program coordination, and regional deployment." href="/solutions/development-organizations" delay={0.4} />
            <PathwayCard title="Technology Partner" description="API integration, platform extension, and joint solution development." href="/solutions/technology-partners" delay={0.5} />
          </div>
        </div>
      </section>
    </Layout>
  );
}
