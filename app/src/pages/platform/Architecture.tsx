import Layout from '@/components/layout/Layout';
import ArchitectureDiagram from '@/components/diagrams/ArchitectureDiagram';
import CTABlock from '@/components/sections/CTABlock';
import Seo from '@/components/Seo';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, Layers, Shield, Database } from 'lucide-react';

/*
 * THE INTERACTIVE "ECOSYSTEM EXPLORER" WAS REMOVED FROM THIS PAGE.
 *
 * It rendered a second, different architecture immediately below the first —
 * five layers against the diagram's four — and its collapsed panels named four
 * applications that do not exist: Marketplace Portal, Operations Dashboard,
 * Buyer Portal, Analytics Console. It also listed "Enterprise Clients" as an
 * organisation type, implying a customer roster.
 *
 * Two contradictory architecture models on the page an engineer opens to
 * understand the architecture is worse than one, and the one that was wrong
 * was also the one hiding invented products behind a click.
 */
export default function Architecture() {
  return (
    <Layout>
      <Seo title="The Infrastructure Stack" description="How HAOS is put together: one platform, shared services, capabilities that span the applications, and four applications on top." />
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
            <h1 className="text-display max-w-4xl mb-6">The Infrastructure Stack</h1>
            <p className="text-body-large text-neutral-700 max-w-2xl mb-8">
              One platform, the services every application shares, capabilities that span all of
              them, and four applications on top. This page is the whole of it.
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

      <section className="section-padding bg-surface">
        <div className="container-heraja">
          <div className="text-center mb-12">
            <p className="text-overline mb-3">Design Principles</p>
            <h2 className="text-h1">Architectural Decisions</h2>
          </div>
          {/*
            "CLOUD-NATIVE — CONTAINERS, MICROSERVICES AND AUTO-SCALING FROM DAY
            ONE" STOOD HERE, AND IT WAS NOT TRUE.

            HAOS is a single deployed application, not a microservice estate,
            and nothing in the running system auto-scales. An engineer on an
            evaluating team reads that card, asks one question in the technical
            session, and the answer costs more than the card ever bought. Phase
            1 §17 rule 5: absence is stated, never papered over.

            What replaces it is what the architecture actually does — each of
            these is visible in the product or answerable in a technical
            review.
          */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: <Layers className="w-6 h-6" />, title: 'One platform, four applications', desc: 'Applications are surfaces over shared services rather than separate systems that later need integrating.' },
              { icon: <Database className="w-6 h-6" />, title: 'Multi-tenant by default', desc: 'Every organization is a tenant with its own data boundary, enforced in the platform rather than per application.' },
              { icon: <Shield className="w-6 h-6" />, title: 'Identity and audit are shared', desc: 'One identity across all four applications, and one audit trail behind every record they create.' },
              { icon: <Database className="w-6 h-6" />, title: 'API-addressable', desc: 'The operations the applications perform are available to external systems through the same interfaces.' },
            ].map((p) => (
              <div key={p.title} className="bg-surface-elevated rounded-lg border border-neutral-100 p-6">
                <div className="w-10 h-10 rounded-lg bg-brand-secondary/20 flex items-center justify-center text-brand-accent mb-4">
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
          <h3 className="text-h3 mb-6">Where to go next</h3>
          {/*
            key={m.href} was a React duplicate-key collision: three entries
            pointed at /platform/haos and two at /platform/architecture, so
            React warned on every render of this page. Keyed on the title,
            which is what is actually unique here.
          */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              { title: 'HAOS', href: '/platform/haos', desc: 'The operating system' },
              { title: 'Traceability', href: '/platform/haos', desc: 'A capability, not a product' },
              { title: 'Operational intelligence', href: '/platform/haos', desc: 'Figures from recorded events' },
              { title: 'Security & audit', href: '/platform/security', desc: 'Permissions and audit trail' },
              { title: 'APIs & integration', href: '/platform/apis', desc: 'The external surface' },
              { title: 'Farm Intelligence', href: '/platform/farm-intelligence', desc: 'Application' },
              { title: 'Marketplace', href: '/platform/marketplace', desc: 'Application' },
              { title: 'Logistics', href: '/platform/logistics', desc: 'Application' },
            ].map((m) => (
              <Link key={m.title} to={m.href} className="group flex items-center gap-3 p-4 bg-surface rounded-lg border border-neutral-100 hover:border-brand-accent transition-colors">
                <div>
                  <p className="font-medium text-brand-primary group-hover:text-brand-accent transition-colors">{m.title}</p>
                  <p className="text-body-small text-neutral-500">{m.desc}</p>
                </div>
                <ArrowRight className="w-4 h-4 text-neutral-400 group-hover:text-brand-accent ml-auto flex-shrink-0" />
              </Link>
            ))}
          </div>
        </div>
      </section>

      <CTABlock
        title="Ready to Explore Implementation?"
        description="See how organizations are building on this infrastructure."
        primaryCta={{ label: 'See a deployment', href: '/evidence/zimo-clan' }}
        secondaryCta={{ label: 'Talk to us', href: '/company/contact' }}
      />
    </Layout>
  );
}
