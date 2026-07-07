import Layout from '@/components/layout/Layout';
import { motion } from 'framer-motion';

export default function Privacy() {
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
            <p className="text-overline mb-4">Company / Legal / Privacy</p>
            <h1 className="text-display max-w-4xl mb-6">Privacy Policy</h1>
            <p className="text-body-large text-neutral-700 max-w-2xl">How Heraja Agro Technologies collects, uses, and protects your data.</p>
          </motion.div>
        </div>
      </section>

      <section className="section-padding bg-surface">
        <div className="container-heraja max-w-3xl">
          <div className="prose prose-lg max-w-none">
            <h2 className="text-h2 mb-4">1. Introduction</h2>
            <p className="text-body text-neutral-700 mb-6">Heraja Agro Technologies (&quot;Heraja,&quot; &quot;we,&quot; &quot;us,&quot; or &quot;our&quot;) is committed to protecting the privacy of individuals and organizations using our digital agricultural infrastructure platform. This Privacy Policy explains how we collect, use, disclose, and safeguard your information.</p>

            <h2 className="text-h2 mb-4">2. Information We Collect</h2>
            <p className="text-body text-neutral-700 mb-6">We collect information necessary to provide our infrastructure services, including: account information, organizational data, operational data submitted through the platform, usage data, and technical information required for service delivery.</p>

            <h2 className="text-h2 mb-4">3. How We Use Information</h2>
            <p className="text-body text-neutral-700 mb-6">We use collected information to: provide and maintain our infrastructure services, verify identities and operations, generate analytics and insights, comply with legal obligations, and communicate with platform users.</p>

            <h2 className="text-h2 mb-4">4. Data Security</h2>
            <p className="text-body text-neutral-700 mb-6">We implement enterprise-grade security measures including encryption, access controls, audit logging, and regular security assessments to protect your data.</p>

            <h2 className="text-h2 mb-4">5. Data Sharing</h2>
            <p className="text-body text-neutral-700 mb-6">We do not sell your data. We share data only as necessary to provide infrastructure services, with your consent, or as required by law.</p>

            <h2 className="text-h2 mb-4">6. Your Rights</h2>
            <p className="text-body text-neutral-700 mb-6">Depending on your jurisdiction, you may have rights to access, correct, delete, or port your data. Contact us to exercise these rights.</p>

            <h2 className="text-h2 mb-4">7. Contact Us</h2>
            <p className="text-body text-neutral-700 mb-6">For privacy-related questions, contact us at privacy@heraja.com.</p>
          </div>
        </div>
      </section>
    </Layout>
  );
}
