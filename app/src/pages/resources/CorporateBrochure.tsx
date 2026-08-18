import Layout from '@/components/layout/Layout';
import CTABlock from '@/components/sections/CTABlock';
import Seo from '@/components/Seo';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Download, Mail } from 'lucide-react';
import { downloadFor } from '@/config/documents';
import { track } from '@/lib/analytics';

/*
 * Two states, and no third (Phase 5 §8.6).
 *
 * ── THE BUTTON ────────────────────────────────────────────────────────────
 * This page shipped a "Download Brochure" control that was a <button> with no
 * handler and no file behind it: clicking it did nothing at all. That is the
 * worst version of a missing dependency, because it looks like it works — a
 * procurement team clicks, nothing happens, and the conclusion they draw is
 * about the company rather than about one absent PDF. Availability now comes
 * from the HAOS admin: upload the file, the next build turns the download on.
 *
 * There is deliberately no disabled button. It advertises something the
 * visitor cannot have and leaves them nowhere to go.
 *
 * ── "WHAT'S INSIDE" ───────────────────────────────────────────────────────
 * A seven-item contents list stood below — Company Overview · Infrastructure
 * Platform · Core Capabilities · Enterprise Benefits · Implementation Approach
 * · Security & Compliance · Partnership Opportunities — describing the
 * chapters of a document that does not exist. Nobody wrote that brochure, so
 * nobody knows what is in it. It is a fabrication of a specific kind that is
 * easy to miss: it describes an artefact rather than the company, so it reads
 * as administrative detail rather than as a claim.
 *
 * What replaces it is the material that does exist and can be opened right
 * now. A visitor who came for a PDF and leaves with the architecture and the
 * product screenshots has been served better than one who leaves with a
 * table of contents.
 */
export default function CorporateBrochure() {
  const download = downloadFor('corporateBrochure');

  const material = [
    {
      title: 'The platform',
      line: 'What HAOS is, and the four applications that run on it.',
      href: '/platform',
    },
    {
      title: 'Architecture',
      line: 'The stack in one diagram: services, capabilities, applications.',
      href: '/platform/architecture',
    },
    {
      title: 'Security and audit',
      line: 'Access control, permissions, and the audit trail behind every record.',
      href: '/platform/security',
    },
    {
      title: 'Evidence',
      line: 'A subsidiary running on the platform, and a pilot described with its open questions.',
      href: '/evidence',
    },
  ];

  return (
    <Layout>
      <Seo
        title="Corporate Brochure"
        description="Capability overview for teams evaluating Heraja infrastructure — and the material available on this site right now."
      />
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
            <h1 className="text-display max-w-4xl mb-6 min-w-0">Corporate Brochure</h1>
            <p className="text-body-large text-neutral-700 max-w-2xl mb-8">
              A capability overview for decision-makers, procurement teams and partners evaluating
              Heraja infrastructure.
            </p>
            {download ? (
              <a
                href={download.href}
                download
                className="btn-primary"
                onClick={() => track('document_download', { document: 'corporate-brochure' })}
              >
                <Download className="w-4 h-4" aria-hidden="true" /> Download the brochure
                {download.size && <span className="font-normal opacity-80">({download.size})</span>}
              </a>
            ) : (
              <div className="max-w-xl rounded-lg border border-neutral-300 bg-surface-elevated p-5">
                <p className="text-body font-semibold text-brand-primary mb-1">
                  The brochure is available on request
                </p>
                <p className="text-body-small text-neutral-700 mb-4">
                  We have not published it for direct download. Ask us for a copy and we will send
                  it over — tell us which part of the platform you are evaluating and we will
                  point you at the right material alongside it.
                </p>
                <Link
                  to="/company/contact?enquiry=other"
                  className="btn-primary"
                  onClick={() =>
                    track('cta_click', { label: 'Request the brochure', page: 'corporate-brochure' })
                  }
                >
                  <Mail className="w-4 h-4" aria-hidden="true" /> Request the brochure
                </Link>
              </div>
            )}
          </motion.div>
        </div>
      </section>

      <section className="section-padding bg-surface-elevated">
        <div className="container-heraja">
          <div className="max-w-[720px] mb-10">
            <p className="text-overline mb-3">Available now</p>
            <h2 className="text-h1 mb-4">You do not have to wait for the PDF</h2>
            <p className="text-body-large text-neutral-700">
              Most of what a brochure would say is already on this site, in more detail and with
              the software attached.
            </p>
          </div>
          <ul className="grid md:grid-cols-2 gap-px bg-neutral-300 border border-neutral-300 rounded-lg overflow-hidden">
            {material.map((item) => (
              <li key={item.href} className="bg-surface min-w-0">
                <Link
                  to={item.href}
                  className="group block p-6 h-full hover:bg-surface-elevated transition-colors"
                >
                  <h3 className="text-h4 mb-2 group-hover:text-brand-accent transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-body-small text-neutral-600">{item.line}</p>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <CTABlock
        title="Talk to us"
        description="Tell us what you are evaluating and we will send the material that answers it."
        primaryCta={{ label: 'Talk to us', href: '/company/contact' }}
      />
    </Layout>
  );
}
