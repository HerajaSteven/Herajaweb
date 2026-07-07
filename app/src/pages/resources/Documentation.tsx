import Layout from '@/components/layout/Layout';
import CTABlock from '@/components/sections/CTABlock';
import { motion } from 'framer-motion';
import { FileJson, Shield, BookOpen, Terminal } from 'lucide-react';
import { Link } from 'react-router-dom';

const docs = [
  { icon: FileJson, title: 'API Reference', desc: 'Complete API documentation with examples and authentication details.', href: '/platform/apis', color: '#4F9D5C' },
  { icon: BookOpen, title: 'Integration Guide', desc: 'Step-by-step guides for integrating external systems.', href: '/platform/apis', color: '#7AC142' },
  { icon: Terminal, title: 'SDK Documentation', desc: 'Official SDKs for JavaScript, Python, and mobile platforms.', href: '/platform/apis', color: '#C9782B' },
  { icon: Shield, title: 'Security Guide', desc: 'Authentication, authorization, and security best practices.', href: '/platform/security', color: '#F99D1C' },
];

export default function Documentation() {
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
            <p className="text-overline mb-4">Resources / Documentation</p>
            <h1 className="text-display max-w-4xl mb-6">Platform Documentation</h1>
            <p className="text-body-large text-neutral-700 max-w-2xl">Complete technical documentation for developers, system architects, and integration teams.</p>
          </motion.div>
        </div>
      </section>

      <section className="section-padding bg-surface-elevated">
        <div className="container-heraja">
          <div className="grid sm:grid-cols-2 gap-6">
            {docs.map((d, i) => (
              <motion.div key={d.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}>
                <Link to={d.href} className="group card-elevate block bg-surface rounded-lg border border-neutral-100 p-6">
                  <div className="w-10 h-10 rounded-lg flex items-center justify-center mb-4" style={{ backgroundColor: `${d.color}15` }}>
                    <d.icon className="w-5 h-5" style={{ color: d.color }} />
                  </div>
                  <h3 className="text-h4 mb-2 group-hover:text-brand-secondary transition-colors">{d.title}</h3>
                  <p className="text-body-small text-neutral-600">{d.desc}</p>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <CTABlock title="Need Additional Documentation?" primaryCta={{ label: 'Contact Developer Support', href: '/company/contact' }} />
    </Layout>
  );
}
