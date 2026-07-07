import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, Building2, Users, Factory, Landmark, HeartHandshake, Cpu } from 'lucide-react';
import Layout from '@/components/layout/Layout';
import CTABlock from '@/components/sections/CTABlock';
import { useScrollReveal } from '@/hooks/useScrollReveal';

const audiences = [
  { icon: Landmark, title: 'Government', desc: 'National and regional agricultural transformation programs.', href: '/solutions/government', color: '#231F20' },
  { icon: Users, title: 'Cooperatives', desc: 'Member coordination, shared operations, and market access.', href: '/solutions/cooperatives', color: '#7AC142' },
  { icon: Building2, title: 'Enterprise', desc: 'Large-scale operational coordination and digital infrastructure.', href: '/solutions/enterprise', color: '#4F9D5C' },
  { icon: Factory, title: 'Agribusiness', desc: 'Supply chain optimization and processing coordination.', href: '/solutions/agribusiness', color: '#C9782B' },
  { icon: Landmark, title: 'Financial Institutions', desc: 'Agricultural finance, risk assessment, and portfolio management.', href: '/solutions/financial-institutions', color: '#F99D1C' },
  { icon: HeartHandshake, title: 'Development Organizations', desc: 'Impact programs, measurement, and regional coordination.', href: '/solutions/development-organizations', color: '#5FA83D' },
  { icon: Cpu, title: 'Technology Partners', desc: 'API integration and platform extension development.', href: '/solutions/technology-partners', color: '#231F20' },
];

export default function SolutionsOverview() {
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
            <p className="text-overline mb-4">Solutions</p>
            <h1 className="text-display max-w-4xl mb-6">Infrastructure for Every Agricultural Organization</h1>
            <p className="text-body-large text-neutral-700 max-w-2xl">
              Governments, cooperatives, enterprises, agribusinesses, financial institutions, and development organizations all run on the same underlying system — configured differently for what each one actually needs.
            </p>
          </motion.div>
        </div>
      </section>

      <section ref={ref} className="section-padding bg-surface-elevated">
        <div className="container-heraja">
          <div className="text-center mb-12">
            <p className="text-overline mb-3">By Organization Type</p>
            <h2 className="text-h1">Choose Your Path</h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {audiences.map((a, i) => (
              <motion.div
                key={a.href}
                initial={{ opacity: 0, y: 20 }}
                animate={isVisible ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: i * 0.1 }}
              >
                <Link to={a.href} className="group card-elevate block bg-surface rounded-lg border border-neutral-100 p-6 h-full">
                  <div className="w-10 h-10 rounded-lg flex items-center justify-center mb-4" style={{ backgroundColor: `${a.color}15` }}>
                    <a.icon className="w-5 h-5" style={{ color: a.color }} />
                  </div>
                  <h3 className="text-h4 mb-2 group-hover:text-brand-secondary transition-colors">{a.title}</h3>
                  <p className="text-body-small text-neutral-600 mb-3">{a.desc}</p>
                  <span className="inline-flex items-center gap-1 text-sm font-medium text-brand-secondary opacity-0 group-hover:opacity-100 transition-opacity">
                    Learn more <ArrowRight className="w-3.5 h-3.5" />
                  </span>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <CTABlock
        title="Not Sure Where to Start?"
        description="Our team can help you identify the right infrastructure for your organization."
        primaryCta={{ label: 'Contact Our Team', href: '/company/contact' }}
        secondaryCta={{ label: 'Explore Platform', href: '/platform' }}
      />
    </Layout>
  );
}
