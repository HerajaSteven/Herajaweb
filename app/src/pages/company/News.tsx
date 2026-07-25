import Layout from '@/components/layout/Layout';
import CTABlock from '@/components/sections/CTABlock';
import Seo from '@/components/Seo';
import { motion } from 'framer-motion';
import { Newspaper } from 'lucide-react';

export default function News() {
  return (
    <Layout>
      <Seo title="News & Updates" description="Latest updates, announcements, and press coverage." />
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
        <div className="container-heraja max-w-3xl text-center">
          <div className="bg-surface rounded-lg border border-dashed border-neutral-300 p-12">
            <Newspaper className="w-10 h-10 text-brand-secondary mx-auto mb-4" />
            <h3 className="text-h3 mb-2">No Announcements Yet</h3>
            <p className="text-body text-neutral-600 max-w-md mx-auto">We're heads-down building the platform and onboarding pilot partners. Real announcements will appear here as they happen.</p>
          </div>
        </div>
      </section>

      <CTABlock title="Media Inquiries" primaryCta={{ label: 'Contact Press Team', href: '/company/contact' }} />
    </Layout>
  );
}
