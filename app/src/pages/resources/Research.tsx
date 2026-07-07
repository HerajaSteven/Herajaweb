import Layout from '@/components/layout/Layout';
import CTABlock from '@/components/sections/CTABlock';
import { motion } from 'framer-motion';
import { FileText } from 'lucide-react';

const papers = [
  { title: 'Digital Infrastructure for Agricultural Coordination', category: 'Infrastructure', year: '2026' },
  { title: 'Verification Mechanisms in Agricultural Supply Chains', category: 'Traceability', year: '2026' },
  { title: 'AI Applications in Agricultural Operations', category: 'Intelligence', year: '2025' },
];

export default function Research() {
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
            <p className="text-overline mb-4">Resources / Research</p>
            <h1 className="text-display max-w-4xl mb-6">Research</h1>
            <p className="text-body-large text-neutral-700 max-w-2xl">Papers, data, and analysis on what's actually changing agricultural markets — not just what we build.</p>
          </motion.div>
        </div>
      </section>

      <section className="section-padding bg-surface-elevated">
        <div className="container-heraja max-w-3xl">
          <div className="space-y-4">
            {papers.map((p, i) => (
              <motion.div key={p.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}
                className="bg-surface rounded-lg border border-neutral-100 p-6 flex items-start gap-4">
                <FileText className="w-5 h-5 text-brand-secondary flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-h4 mb-1">{p.title}</h3>
                  <div className="flex gap-3 text-body-small text-neutral-500">
                    <span>{p.category}</span>
                    <span>{p.year}</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <CTABlock title="Collaborate on Research" primaryCta={{ label: 'Contact Research Team', href: '/company/contact' }} />
    </Layout>
  );
}
