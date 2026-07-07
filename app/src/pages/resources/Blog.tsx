import Layout from '@/components/layout/Layout';
import CTABlock from '@/components/sections/CTABlock';
import { motion } from 'framer-motion';
import { Calendar } from 'lucide-react';

const posts = [
  { title: 'Introducing Heraja Infrastructure Platform', excerpt: 'The next generation of digital infrastructure for agricultural coordination.', date: '2026-06-15', category: 'Platform' },
  { title: 'The Case for Agricultural Infrastructure', excerpt: 'Why infrastructure, not software, is what agriculture needs.', date: '2026-05-28', category: 'Industry' },
  { title: 'HAOS: How It Works', excerpt: 'Deep dive into the Agricultural Operating Infrastructure.', date: '2026-05-10', category: 'Technical' },
];

export default function Blog() {
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
            <p className="text-overline mb-4">Resources / Blog</p>
            <h1 className="text-display max-w-4xl mb-6">Blog</h1>
            <p className="text-body-large text-neutral-700 max-w-2xl">Notes from the team building Heraja — product updates, field lessons, and the occasional strong opinion.</p>
          </motion.div>
        </div>
      </section>

      <section className="section-padding bg-surface-elevated">
        <div className="container-heraja max-w-3xl">
          <div className="space-y-6">
            {posts.map((p, i) => (
              <motion.article key={p.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}
                className="bg-surface rounded-lg border border-neutral-100 p-6">
                <div className="flex items-center gap-3 mb-3">
                  <span className="px-2 py-0.5 bg-brand-secondary/20 text-brand-primary rounded-full text-xs font-medium">{p.category}</span>
                  <div className="flex items-center gap-1 text-body-small text-neutral-500">
                    <Calendar className="w-3.5 h-3.5" />
                    {p.date}
                  </div>
                </div>
                <h3 className="text-h3 mb-2">{p.title}</h3>
                <p className="text-body text-neutral-600">{p.excerpt}</p>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      <CTABlock title="Subscribe to Updates" primaryCta={{ label: 'Subscribe', href: '#' }} />
    </Layout>
  );
}
