import Layout from '@/components/layout/Layout';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, FileText, Shield } from 'lucide-react';

const legalAreas = [
  { icon: FileText, title: 'Terms of Service', desc: 'Terms governing the use of Heraja infrastructure and services.', href: '/company/terms' },
  { icon: Shield, title: 'Privacy Policy', desc: 'How we collect, use, and protect your data.', href: '/company/privacy' },
];

export default function Legal() {
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
            <p className="text-overline mb-4">Company / Legal</p>
            <h1 className="text-display max-w-4xl mb-6">Legal</h1>
            <p className="text-body-large text-neutral-700 max-w-2xl">Legal information, terms of service, and privacy policy.</p>
          </motion.div>
        </div>
      </section>

      <section className="section-padding bg-surface-elevated">
        <div className="container-heraja max-w-3xl">
          <div className="space-y-4">
            {legalAreas.map((l, i) => (
              <motion.div key={l.href} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}>
                <Link to={l.href} className="group card-elevate block bg-surface rounded-lg border border-neutral-100 p-6 flex items-center gap-4">
                  <l.icon className="w-6 h-6 text-brand-secondary flex-shrink-0" />
                  <div className="flex-1">
                    <h3 className="text-h4 group-hover:text-brand-secondary transition-colors">{l.title}</h3>
                    <p className="text-body-small text-neutral-600">{l.desc}</p>
                  </div>
                  <ArrowRight className="w-4 h-4 text-neutral-400 group-hover:text-brand-secondary transition-colors" />
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
}
