import Layout from '@/components/layout/Layout';
import CTABlock from '@/components/sections/CTABlock';
import { motion } from 'framer-motion';
import { Image, Download, FileText, Newspaper } from 'lucide-react';

const assets = [
  { icon: FileText, title: 'Brand Guidelines', desc: 'Logo usage, color palette, typography, and brand standards.', format: 'PDF' },
  { icon: Image, title: 'Logo Package', desc: 'Heraja logos in multiple formats and color variations.', format: 'PNG, SVG' },
  { icon: Newspaper, title: 'Press Release Template', desc: 'Template for announcing Heraja partnerships and deployments.', format: 'DOCX' },
];

export default function MediaKit() {
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
            <p className="text-overline mb-4">Resources / Media Kit</p>
            <h1 className="text-display max-w-4xl mb-6">Media Kit</h1>
            <p className="text-body-large text-neutral-700 max-w-2xl">Brand assets, press materials, and guidelines for media and partners.</p>
          </motion.div>
        </div>
      </section>

      <section className="section-padding bg-surface-elevated">
        <div className="container-heraja max-w-3xl">
          <div className="space-y-4">
            {assets.map((a, i) => (
              <motion.div key={a.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}
                className="bg-surface rounded-lg border border-neutral-100 p-6 flex items-center gap-4">
                <a.icon className="w-6 h-6 text-brand-secondary flex-shrink-0" />
                <div className="flex-1">
                  <h3 className="text-h4 mb-1">{a.title}</h3>
                  <p className="text-body-small text-neutral-600">{a.desc}</p>
                </div>
                <span className="text-body-small text-neutral-500 mr-3">{a.format}</span>
                <button className="p-2 text-brand-primary hover:text-brand-secondary transition-colors"><Download className="w-5 h-5" /></button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <CTABlock title="Need Custom Assets?" primaryCta={{ label: 'Contact Us', href: '/company/contact' }} />
    </Layout>
  );
}
