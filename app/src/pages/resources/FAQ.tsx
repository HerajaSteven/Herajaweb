import Layout from '@/components/layout/Layout';
import CTABlock from '@/components/sections/CTABlock';
import FAQAccordion from '@/components/sections/FAQAccordion';
import { motion } from 'framer-motion';
import { HelpCircle } from 'lucide-react';

const faqItems = [
  { question: 'What is Heraja?', answer: 'Heraja is a Digital Agricultural Infrastructure Company. We build the digital backbone that enables agricultural organizations to coordinate production, logistics, traceability, intelligence, market access, and ecosystem collaboration at scale.' },
  { question: 'What is HAOS?', answer: 'HAOS (Heraja Agricultural Operating Infrastructure) is the workflow and coordination layer that runs on Heraja infrastructure. It provides the operational environment where organizations manage their day-to-day activities.' },
  { question: 'Who uses Heraja?', answer: 'Heraja infrastructure is used by governments, cooperatives, agribusinesses, financial institutions, development organizations, and enterprise clients who need to coordinate agricultural operations.' },
  { question: 'How is Heraja different from farm management software?', answer: 'Heraja is infrastructure, not software. It provides the coordination layer that connects multiple organizations, systems, and stakeholders — unlike traditional farm management tools that operate in isolation.' },
  { question: 'Is Heraja secure?', answer: 'Yes. Heraja implements enterprise-grade security including end-to-end encryption, multi-factor authentication, role-based access control, comprehensive audit logging, and compliance with GDPR, POPIA, and other regulations.' },
  { question: 'Can Heraja integrate with existing systems?', answer: 'Yes. Heraja provides comprehensive APIs, SDKs, and integration tools for connecting with ERP systems, accounting software, logistics platforms, and other enterprise tools.' },
  { question: 'What is the deployment model?', answer: 'Heraja infrastructure is deployed across multiple cloud regions with options for data residency, auto-scaling, and high availability. Organizations can choose deployment configurations that meet their compliance requirements.' },
  { question: 'How do I get started?', answer: 'Contact our team to discuss your organization\'s requirements and explore how Heraja infrastructure can support your agricultural operations.' },
];

export default function FAQ() {
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
            <p className="text-overline mb-4">Resources / FAQ</p>
            <h1 className="text-display max-w-4xl mb-6">Frequently Asked Questions</h1>
            <p className="text-body-large text-neutral-700 max-w-2xl">Straight answers about how the platform works, what it costs, and how implementation actually goes.</p>
          </motion.div>
        </div>
      </section>

      <section className="section-padding bg-surface-elevated">
        <div className="container-heraja max-w-3xl">
          <div className="bg-surface rounded-lg border border-neutral-100 p-6 lg:p-8">
            <div className="flex items-center gap-3 mb-6"><HelpCircle className="w-6 h-6 text-brand-secondary" /><h2 className="text-h3">General Questions</h2></div>
            <FAQAccordion items={faqItems} />
          </div>
        </div>
      </section>

      <CTABlock title="Still Have Questions?" description="Our team is happy to answer any additional questions."
        primaryCta={{ label: 'Contact Us', href: '/company/contact' }} />
    </Layout>
  );
}
