import Layout from '@/components/layout/Layout';
import { motion } from 'framer-motion';

export default function Terms() {
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
            <p className="text-overline mb-4">Company / Legal / Terms</p>
            <h1 className="text-display max-w-4xl mb-6">Terms of Service</h1>
            <p className="text-body-large text-neutral-700 max-w-2xl">Terms governing the use of Heraja infrastructure and services.</p>
          </motion.div>
        </div>
      </section>

      <section className="section-padding bg-surface">
        <div className="container-heraja max-w-3xl">
          <div className="prose prose-lg max-w-none">
            <h2 className="text-h2 mb-4">1. Acceptance of Terms</h2>
            <p className="text-body text-neutral-700 mb-6">By accessing or using Heraja infrastructure and services, you agree to be bound by these Terms of Service. If you do not agree, you may not use our services.</p>

            <h2 className="text-h2 mb-4">2. Description of Services</h2>
            <p className="text-body text-neutral-700 mb-6">Heraja provides digital agricultural infrastructure including workflow coordination, traceability, marketplace coordination, operational intelligence, identity management, and related services.</p>

            <h2 className="text-h2 mb-4">3. Account Registration</h2>
            <p className="text-body text-neutral-700 mb-6">To use our services, you must register for an account and provide accurate, complete information. You are responsible for maintaining the security of your account credentials.</p>

            <h2 className="text-h2 mb-4">4. Acceptable Use</h2>
            <p className="text-body text-neutral-700 mb-6">You agree to use our services only for lawful purposes and in accordance with these terms. You may not use our services to transmit any harmful, fraudulent, or illegal content.</p>

            <h2 className="text-h2 mb-4">5. Data and Privacy</h2>
            <p className="text-body text-neutral-700 mb-6">Your use of our services is also governed by our Privacy Policy. By using our services, you consent to the collection and use of information as described therein.</p>

            <h2 className="text-h2 mb-4">6. Intellectual Property</h2>
            <p className="text-body text-neutral-700 mb-6">Heraja retains all rights to our platform, technology, and intellectual property. You retain rights to your data submitted through the platform.</p>

            <h2 className="text-h2 mb-4">7. Limitation of Liability</h2>
            <p className="text-body text-neutral-700 mb-6">Heraja shall not be liable for any indirect, incidental, special, consequential, or punitive damages arising from your use of our services.</p>

            <h2 className="text-h2 mb-4">8. Governing Law</h2>
            <p className="text-body text-neutral-700 mb-6">These terms shall be governed by the laws of the Federal Republic of Nigeria, without regard to conflict of law principles.</p>

            <h2 className="text-h2 mb-4">9. Changes to Terms</h2>
            <p className="text-body text-neutral-700 mb-6">We may modify these terms at any time. Continued use of our services after changes constitutes acceptance of the modified terms.</p>

            <h2 className="text-h2 mb-4">10. Contact</h2>
            <p className="text-body text-neutral-700 mb-6">For questions about these terms, contact us at legal@heraja.com.</p>
          </div>
        </div>
      </section>
    </Layout>
  );
}
