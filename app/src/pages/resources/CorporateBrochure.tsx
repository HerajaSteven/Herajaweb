import Layout from '@/components/layout/Layout';
import CTABlock from '@/components/sections/CTABlock';
import Seo from '@/components/Seo';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { BookOpen, Download, Mail } from 'lucide-react';
import { downloadFor } from '@/config/documents';
import { track } from '@/lib/analytics';

export default function CorporateBrochure() {
  const download = downloadFor('corporateBrochure');

  return (
    <Layout>
      <Seo title="Corporate Brochure" description="Enterprise capability overview for decision-makers, procurement teams, and partners evaluating Heraja infrastructure." />
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
            {/*
              Two states, and no third. Either the file exists and this is a
              real download, or it does not and this is a way to ask for it.
              There is deliberately no disabled button: it would advertise
              something the visitor cannot have and leave them with nowhere
              to go.
            */}
            {download ? (
              <a
                href={download.href}
                download
                className="btn-primary"
                onClick={() => track('document_download', { document: 'corporate-brochure' })}
              >
                <Download className="w-4 h-4" /> Download Brochure
                {download.size && <span className="font-normal opacity-80">({download.size})</span>}
              </a>
            ) : (
              <div className="max-w-xl rounded-lg border border-neutral-300 bg-surface-elevated p-5">
                <p className="text-body font-semibold text-brand-primary mb-1">
                  The brochure is available on request
                </p>
                <p className="text-body-small text-neutral-700 mb-4">
                  We have not published it for direct download yet. Ask us for a copy and we
                  will send it over — tell us which part of the platform you are evaluating and
                  we will point you at the right material alongside it.
                </p>
                <Link
                  to="/company/contact"
                  className="btn-primary"
                  onClick={() =>
                    track('cta_click', { label: 'Request the brochure', page: 'corporate-brochure' })
                  }
                >
                  <Mail className="w-4 h-4" /> Request the brochure
                </Link>
              </div>
            )}
          </motion.div>
        </div>
      </section>

      <section className="section-padding bg-surface-elevated">
        <div className="container-heraja max-w-3xl">
          <div className="bg-surface rounded-lg border border-neutral-100 p-8">
            <div className="flex items-center gap-3 mb-6"><BookOpen className="w-6 h-6 text-brand-accent" /><h2 className="text-h3">What&apos;s Inside</h2></div>
            <ul className="space-y-3">
              {['Company Overview', 'Infrastructure Platform', 'Core Capabilities', 'Enterprise Benefits', 'Implementation Approach', 'Security & Compliance', 'Partnership Opportunities'].map((s) => (
                <li key={s} className="flex items-center gap-3 text-body">
                  <div className="w-5 h-5 rounded-full bg-brand-secondary/20 flex items-center justify-center flex-shrink-0"><svg className="w-3 h-3 text-brand-accent" viewBox="0 0 12 12" fill="none"><path d="M2 6l3 3 5-5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg></div>
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
