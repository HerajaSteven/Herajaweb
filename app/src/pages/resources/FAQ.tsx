import Layout from '@/components/layout/Layout';
import CTABlock from '@/components/sections/CTABlock';
import FAQAccordion from '@/components/sections/FAQAccordion';
import Seo from '@/components/Seo';
import { motion } from 'framer-motion';
import { HelpCircle } from 'lucide-react';

/*
 * ── FOUR OF THESE EIGHT ANSWERS WERE NOT TRUE ────────────────────────────
 *
 * All four were inside a collapsed accordion, which is why source-reading
 * audits and the first rendered scan both walked past them.
 *
 *  · "Who uses Heraja? … used by governments, cooperatives, agribusinesses,
 *    financial institutions, development organizations, and enterprise
 *    clients." There is no such customer base. It named six categories of
 *    customer where the honest answer is who the platform is FOR.
 *
 *  · "Is Heraja secure? Yes. … end-to-end encryption, multi-factor
 *    authentication … and compliance with GDPR, POPIA, and other
 *    regulations." Two capabilities that do not exist and a regulatory claim
 *    nobody has assessed. See the note in platform/Security.tsx.
 *
 *  · "What is the deployment model? … deployed across multiple cloud regions
 *    with options for data residency, auto-scaling, and high availability."
 *    The production estate is a single deployment. This was not a stretch; it
 *    was a description of a different system.
 *
 *  · "Can Heraja integrate … comprehensive APIs, SDKs, and integration tools
 *    for connecting with ERP systems, accounting software, logistics
 *    platforms." No published SDK exists and no named ERP integration does
 *    either.
 *
 * Two more were wrong rather than false: HAOS was expanded as "Heraja
 * Agricultural Operating Infrastructure" here and as "…Operating System"
 * everywhere else, and the page lede promised answers about "what it costs"
 * that the page never gave.
 *
 * An FAQ is where a sceptical reader goes to check the marketing. It is the
 * worst possible place on a site to be caught overclaiming, and it had four.
 */
const faqItems = [
  {
    question: 'What is Heraja?',
    answer:
      'Heraja Agro Technologies builds operating infrastructure for agriculture: the shared layer that production recording, market coordination, movement and verification all run on, rather than a single application for one job.',
  },
  {
    question: 'What is HAOS?',
    answer:
      'HAOS — the Heraja Agricultural Operating System — is the platform underneath the applications. It holds identity, verification, multi-tenancy and the audit trail, so a record created in one application still means something in the next.',
  },
  {
    question: 'Who is it for?',
    answer:
      'Governments running agricultural programmes, financial institutions lending against production, cooperatives coordinating members, agribusinesses operating across several sites, and development organizations that have to evidence outcomes. Those are the audiences the platform is built for — see the Solutions pages. We do not publish a customer list, and this site claims none.',
  },
  {
    question: 'How is this different from farm management software?',
    answer:
      'Farm management software helps one organization run itself. The problem here is between organizations: a cooperative’s records mean nothing to the bank, and the bank’s verification means nothing to the programme auditor. The coordination layer is the part that is missing, and it is what Heraja builds.',
  },
  {
    question: 'Which applications actually exist today?',
    answer:
      'Four — Farm Intelligence, Marketplace, e-Chimusika and Logistics. All four are deployed and publicly reachable, so you can open them rather than take our word for it. Anything else you see referenced is on the roadmap and is labelled as such.',
  },
  {
    question: 'Is it secure, and do you hold certifications?',
    answer:
      'Heraja holds no SOC 2 report, no ISO 27001 certificate and no equivalent attestation, and claims none. What exists is architectural: role-based permissions checked per action, a per-tenant data boundary enforced at the query layer, an attributed audit trail, and TLS in transit. The security page sets out both halves in detail.',
  },
  {
    question: 'Can it integrate with our existing systems?',
    answer:
      'The platform exposes APIs for the operations the applications perform, which is the route in. There is no published SDK and no pre-built connector for a named ERP or accounting package — an integration is scoped work today. Tell us what you need to connect and we will tell you what it involves.',
  },
  {
    question: 'What does it cost?',
    answer:
      'There is no published price list. Pricing depends on which applications an organization uses and at what scale, and quoting a figure here that did not survive the first conversation would waste your time. Tell us your scope and we will price it.',
  },
  {
    question: 'How do we get started?',
    answer:
      'Open the applications and look at them, read the evidence pages including what they do not show, then write to us with what you are evaluating. We will point you at the part of the platform that answers it.',
  },
];

export default function FAQ() {
  return (
    <Layout>
      <Seo title="Frequently Asked Questions" description="What exists today, what is not claimed, and how to evaluate the platform." />
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
            <p className="text-overline mb-4">Resources / FAQ</p>
            <h1 className="text-display max-w-4xl mb-6 min-w-0">Frequently Asked Questions</h1>
            <p className="text-body-large text-neutral-700 max-w-2xl">What exists today, what is not claimed, and how to evaluate the platform — including the questions where the answer is no.</p>
          </motion.div>
        </div>
      </section>

      <section className="section-padding bg-surface-elevated">
        <div className="container-heraja max-w-3xl">
          <div className="bg-surface rounded-lg border border-neutral-100 p-6 lg:p-8">
            <div className="flex items-center gap-3 mb-6"><HelpCircle className="w-6 h-6 text-brand-accent" /><h2 className="text-h3">General Questions</h2></div>
            <FAQAccordion items={faqItems} />
          </div>
        </div>
      </section>

      <CTABlock title="Still have questions?" description="Ask us the one this page did not answer."
        primaryCta={{ label: 'Talk to us', href: '/company/contact' }} />
    </Layout>
  );
}
