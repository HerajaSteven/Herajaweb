import Layout from '@/components/layout/Layout';
import CTABlock from '@/components/sections/CTABlock';
import { motion } from 'framer-motion';
import { Calendar } from 'lucide-react';

const articles = [
  { title: 'Heraja Launches Infrastructure Platform', excerpt: 'Announcing the public availability of Heraja Digital Agricultural Infrastructure.', date: '2026-06-01', category: 'Product' },
  { title: 'ZIMO Clan Deploys on Heraja', excerpt: 'ZIMO Clan becomes flagship enterprise client on Heraja infrastructure.', date: '2026-05-15', category: 'Partnership' },
  { title: 'Regional Expansion Announcement', excerpt: 'Heraja expands infrastructure deployment to East African markets.', date: '2026-04-20', category: 'Expansion' },
];

export default function News() {
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
            <p className="text-overline mb-4">Company / News</p>
            <h1 className="text-display max-w-4xl mb-6">News & Updates</h1>
            <p className="text-body-large text-neutral-700 max-w-2xl">Latest updates, announcements, and press coverage.</p>
          </motion.div>
        </div>
      </section>

      <section className="section-padding bg-surface-elevated">
        <div className="container-heraja max-w-3xl">
          <div className="space-y-6">
            {articles.map((a, i) => (
              <motion.article key={a.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}
                className="bg-surface rounded-lg border border-neutral-100 p-6">
                <div className="flex items-center gap-3 mb-3">
                  <span className="px-2 py-0.5 bg-brand-secondary/20 text-brand-primary rounded-full text-xs font-medium">{a.category}</span>
                  <div className="flex items-center gap-1 text-body-small text-neutral-500">
                    <Calendar className="w-3.5 h-3.5" />{a.date}
                  </div>
                </div>
                <h3 className="text-h3 mb-2">{a.title}</h3>
                <p className="text-body text-neutral-600">{a.excerpt}</p>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      <CTABlock title="Media Inquiries" primaryCta={{ label: 'Contact Press Team', href: '/company/contact' }} />
    </Layout>
  );
}
