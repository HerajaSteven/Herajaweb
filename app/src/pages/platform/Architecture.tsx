import Layout from '@/components/layout/Layout';
import ArchitectureDiagram from '@/components/diagrams/ArchitectureDiagram';
import EcosystemExplorer from '@/components/diagrams/EcosystemExplorer';
import CTABlock from '@/components/sections/CTABlock';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, Layers, Cloud, Shield, Database } from 'lucide-react';
import { useScrollReveal } from '@/hooks/useScrollReveal';

export default function Architecture() {
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
            <p className="text-overline mb-4">Infrastructure Architecture</p>
            <h1 className="text-display max-w-4xl mb-6">The Complete Infrastructure Stack</h1>
            <p className="text-body-large text-neutral-700 max-w-2xl mb-8">
              A five-layer architecture that connects organizations, applications, workflows, services, and cloud infrastructure into a unified operational environment.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="section-padding bg-surface">
        <div className="container-heraja">
          <div className="text-center mb-12">
            <p className="text-overline mb-3">Stack Overview</p>
            <h2 className="text-h1">Layered Architecture</h2>
          </div>
          <ArchitectureDiagram />
        </div>
      </section>

      <section ref={ref} className="section-padding bg-surface-elevated">
        <div className="container-heraja">
          <div className="text-center mb-12">
            <p className="text-overline mb-3">Interactive Explorer</p>
            <h2 className="text-h1">Explore the Ecosystem</h2>
          </div>
          <motion.div initial={{ opacity: 0, y: 30 }} animate={isVisible ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.5 }}>
            <EcosystemExplorer />
          </motion.div>
        </div>
      </section>

      <section className="section-padding bg-surface">
        <div className="container-heraja">
          <div className="text-center mb-12">
            <p className="text-overline mb-3">Design Principles</p>
            <h2 className="text-h1">Architectural Decisions</h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: <Layers className="w-6 h-6" />, title: 'Layered Design', desc: 'Clear separation between organization, application, platform, service, and infrastructure layers.' },
              { icon: <Cloud className="w-6 h-6" />, title: 'Cloud-Native', desc: 'Built for cloud deployment with containers, microservices, and auto-scaling from day one.' },
              { icon: <Shield className="w-6 h-6" />, title: 'Security-First', desc: 'Security integrated at every layer — not bolted on as an afterthought.' },
              { icon: <Database className="w-6 h-6" />, title: 'API-First', desc: 'Every capability exposed through well-designed, versioned APIs.' },
            ].map((p, i) => (
              <div key={i} className="bg-surface-elevated rounded-lg border border-neutral-100 p-6">
                <div className="w-10 h-10 rounded-lg bg-brand-secondary/20 flex items-center justify-center text-brand-secondary mb-4">
                  {p.icon}
                </div>
                <h3 className="text-h4 mb-2">{p.title}</h3>
                <p className="text-body-small text-neutral-600">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding-sm bg-surface-elevated border-t border-neutral-100">
        <div className="container-heraja">
          <h3 className="text-h3 mb-6">Platform Modules</h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              { title: 'HAOS', href: '/platform/haos', desc: 'Operating system' },
              { title: 'Marketplace', href: '/platform/marketplace', desc: 'Trade coordination' },
              { title: 'Traceability', href: '/platform/traceability', desc: 'Verification' },
              { title: 'Intelligence', href: '/platform/operational-intelligence', desc: 'Analytics' },
              { title: 'Identity', href: '/platform/identity', desc: 'Access control' },
              { title: 'Services', href: '/platform/infrastructure-services', desc: 'Platform services' },
              { title: 'APIs', href: '/platform/apis', desc: 'Integration' },
              { title: 'Security', href: '/platform/security', desc: 'Compliance' },
            ].map((m) => (
              <Link key={m.href} to={m.href} className="group flex items-center gap-3 p-4 bg-surface rounded-lg border border-neutral-100 hover:border-brand-secondary transition-colors">
                <div>
                  <p className="font-medium text-brand-primary group-hover:text-brand-secondary transition-colors">{m.title}</p>
                  <p className="text-body-small text-neutral-500">{m.desc}</p>
                </div>
                <ArrowRight className="w-4 h-4 text-neutral-400 group-hover:text-brand-secondary ml-auto flex-shrink-0" />
              </Link>
            ))}
          </div>
        </div>
      </section>

      <CTABlock
        title="Ready to Explore Implementation?"
        description="See how organizations are building on this infrastructure."
        primaryCta={{ label: 'View Enterprise Clients', href: '/ecosystem/enterprise-clients' }}
        secondaryCta={{ label: 'Contact Our Team', href: '/company/contact' }}
      />
    </Layout>
  );
}
