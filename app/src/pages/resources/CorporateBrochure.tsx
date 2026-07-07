import Layout from '@/components/layout/Layout';
import CTABlock from '@/components/sections/CTABlock';
import { motion } from 'framer-motion';
import { BookOpen, Download } from 'lucide-react';

export default function CorporateBrochure() {
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
            <p className="text-overline mb-4">Resources / Corporate Brochure</p>
            <h1 className="text-display max-w-4xl mb-6">Corporate Brochure</h1>
            <p className="text-body-large text-neutral-700 max-w-2xl mb-8">Enterprise capability overview for decision-makers, procurement teams, and partners evaluating Heraja infrastructure.</p>
            <button className="btn-primary"><Download className="w-4 h-4" /> Download Brochure</button>
          </motion.div>
        </div>
      </section>

      <section className="section-padding bg-surface-elevated">
        <div className="container-heraja max-w-3xl">
          <div className="bg-surface rounded-lg border border-neutral-100 p-8">
            <div className="flex items-center gap-3 mb-6"><BookOpen className="w-6 h-6 text-brand-secondary" /><h2 className="text-h3">What&apos;s Inside</h2></div>
            <ul className="space-y-3">
              {['Company Overview', 'Infrastructure Platform', 'Core Capabilities', 'Enterprise Benefits', 'Implementation Approach', 'Security & Compliance', 'Partnership Opportunities'].map((s) => (
                <li key={s} className="flex items-center gap-3 text-body">
                  <div className="w-5 h-5 rounded-full bg-brand-secondary/20 flex items-center justify-center flex-shrink-0"><svg className="w-3 h-3 text-brand-secondary" viewBox="0 0 12 12" fill="none"><path d="M2 6l3 3 5-5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg></div>
                  {s}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <CTABlock title="Request a Physical Copy" primaryCta={{ label: 'Contact Us', href: '/company/contact' }} />
    </Layout>
  );
}
