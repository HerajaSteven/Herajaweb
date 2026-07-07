import { useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import Layout from '@/components/layout/Layout';
import { motion } from 'framer-motion';
import { Mail, MapPin, Phone, Clock, CheckCircle2, AlertCircle } from 'lucide-react';

const WEBHOOK_URL = import.meta.env.VITE_CONTACT_WEBHOOK_URL as string | undefined;

type FormState = 'idle' | 'submitting' | 'success' | 'error' | 'not-configured';

export default function Contact() {
  const [searchParams] = useSearchParams();
  const roleParam = searchParams.get('role');

  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    organization: '',
    message: roleParam ? `I'm interested in applying for: ${roleParam}` : '',
  });
  const [status, setStatus] = useState<FormState>('idle');

  const handleChange = (field: keyof typeof formData) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({ ...prev, [field]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!WEBHOOK_URL) {
      setStatus('not-configured');
      return;
    }

    setStatus('submitting');
    try {
      const res = await fetch(WEBHOOK_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          first_name: formData.firstName,
          last_name: formData.lastName,
          email: formData.email,
          organization: formData.organization,
          message: formData.message,
          source: 'website_contact_form',
          page_url: window.location.href,
          submitted_at: new Date().toISOString(),
        }),
      });
      if (!res.ok) throw new Error(`Webhook responded ${res.status}`);
      setStatus('success');
      setFormData({ firstName: '', lastName: '', email: '', organization: '', message: '' });
    } catch {
      setStatus('error');
    }
  };

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
            <p className="text-overline mb-4">Company / Contact</p>
            <h1 className="text-display max-w-4xl mb-6">Contact Us</h1>
            <p className="text-body-large text-neutral-700 max-w-2xl">Get in touch with our team to discuss infrastructure, partnerships, or implementation.</p>
          </motion.div>
        </div>
      </section>

      <section className="section-padding bg-surface-elevated">
        <div className="container-heraja">
          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <p className="text-overline mb-3">Get in Touch</p>
              <h2 className="text-h1 mb-6">Contact Information</h2>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <Mail className="w-5 h-5 text-brand-secondary flex-shrink-0 mt-1" />
                  <div>
                    <p className="font-medium text-brand-primary mb-1">Email</p>
                    <p className="text-body text-neutral-600">hello@heraja.com</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Phone className="w-5 h-5 text-brand-secondary flex-shrink-0 mt-1" />
                  <div>
                    <p className="font-medium text-brand-primary mb-1">Phone</p>
                    <p className="text-body text-neutral-600">+234 912 979 9393</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <MapPin className="w-5 h-5 text-brand-secondary flex-shrink-0 mt-1" />
                  <div>
                    <p className="font-medium text-brand-primary mb-1">Office</p>
                    <p className="text-body text-neutral-600">Lagos, Nigeria</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Clock className="w-5 h-5 text-brand-secondary flex-shrink-0 mt-1" />
                  <div>
                    <p className="font-medium text-brand-primary mb-1">Business Hours</p>
                    <p className="text-body text-neutral-600">Monday — Friday, 8:00 — 17:00 WAT</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-surface rounded-lg border border-neutral-100 p-6 lg:p-8">
              <h3 className="text-h3 mb-6">Send a Message</h3>

              {status === 'success' ? (
                <div className="flex flex-col items-center text-center py-8">
                  <CheckCircle2 className="w-10 h-10 text-brand-secondary mb-4" />
                  <p className="font-medium text-brand-primary mb-1">Message sent</p>
                  <p className="text-body-small text-neutral-600">We'll get back to you shortly.</p>
                </div>
              ) : (
                <form className="space-y-4" onSubmit={handleSubmit}>
                  {status === 'not-configured' && (
                    <div className="flex items-start gap-3 p-3 rounded-sm bg-brand-tertiary/10 border border-brand-tertiary/30">
                      <AlertCircle className="w-4 h-4 text-brand-tertiary flex-shrink-0 mt-0.5" />
                      <p className="text-body-small text-neutral-700">This form isn't connected yet — please email us directly at <a href="mailto:hello@heraja.com" className="underline font-medium">hello@heraja.com</a>.</p>
                    </div>
                  )}
                  {status === 'error' && (
                    <div className="flex items-start gap-3 p-3 rounded-sm bg-red-50 border border-red-200">
                      <AlertCircle className="w-4 h-4 text-red-600 flex-shrink-0 mt-0.5" />
                      <p className="text-body-small text-neutral-700">Something went wrong sending your message. Please try again, or email <a href="mailto:hello@heraja.com" className="underline font-medium">hello@heraja.com</a> directly.</p>
                    </div>
                  )}
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="firstName" className="block text-label text-neutral-500 mb-1.5">First Name</label>
                      <input id="firstName" type="text" required value={formData.firstName} onChange={handleChange('firstName')} className="w-full h-11 px-4 border border-neutral-300 rounded-sm focus:border-brand-secondary focus:outline-none focus:ring-2 focus:ring-brand-secondary/10" />
                    </div>
                    <div>
                      <label htmlFor="lastName" className="block text-label text-neutral-500 mb-1.5">Last Name</label>
                      <input id="lastName" type="text" required value={formData.lastName} onChange={handleChange('lastName')} className="w-full h-11 px-4 border border-neutral-300 rounded-sm focus:border-brand-secondary focus:outline-none focus:ring-2 focus:ring-brand-secondary/10" />
                    </div>
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-label text-neutral-500 mb-1.5">Email</label>
                    <input id="email" type="email" required value={formData.email} onChange={handleChange('email')} className="w-full h-11 px-4 border border-neutral-300 rounded-sm focus:border-brand-secondary focus:outline-none focus:ring-2 focus:ring-brand-secondary/10" />
                  </div>
                  <div>
                    <label htmlFor="organization" className="block text-label text-neutral-500 mb-1.5">Organization</label>
                    <input id="organization" type="text" value={formData.organization} onChange={handleChange('organization')} className="w-full h-11 px-4 border border-neutral-300 rounded-sm focus:border-brand-secondary focus:outline-none focus:ring-2 focus:ring-brand-secondary/10" />
                  </div>
                  <div>
                    <label htmlFor="message" className="block text-label text-neutral-500 mb-1.5">Message</label>
                    <textarea id="message" rows={4} required value={formData.message} onChange={handleChange('message')} className="w-full px-4 py-3 border border-neutral-300 rounded-sm focus:border-brand-secondary focus:outline-none focus:ring-2 focus:ring-brand-secondary/10 resize-none"></textarea>
                  </div>
                  <button type="submit" disabled={status === 'submitting'} className="btn-primary w-full disabled:opacity-60 disabled:cursor-not-allowed">
                    {status === 'submitting' ? 'Sending…' : 'Send Message'}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
