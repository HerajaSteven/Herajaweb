import { useState, useMemo } from 'react';
import { useSearchParams } from 'react-router-dom';
import Layout from '@/components/layout/Layout';
import Seo from '@/components/Seo';
import { motion } from 'framer-motion';
import { Mail, MapPin, Phone, Clock, CheckCircle2, AlertCircle } from 'lucide-react';
import { track } from '@/lib/analytics';
import { countries } from '@/config/countries';
import { contactDetails } from '@/config/siteContent';
import {
  sendEnquiry,
  contactIsConfigured,
  fallbackMailto,
  FALLBACK_ENQUIRY_EMAIL,
  HAS_FALLBACK_EMAIL,
  ENQUIRY_TYPES,
  type Enquiry,
} from '@/lib/contact';

type FormState = 'idle' | 'submitting' | 'success' | 'error' | 'not-configured';

export default function Contact() {
  const [searchParams] = useSearchParams();
  const roleParam = searchParams.get('role');
  const enquiryParam = searchParams.get('enquiry');

  const [formData, setFormData] = useState<Enquiry>({
    firstName: '',
    lastName: '',
    email: '',
    organization: '',
    country: '',
    /*
     * Solution pages link here with ?enquiry=government and the like, so an
     * evaluator who arrives from a page written for them does not have to
     * re-state who they are. Careers links with ?role=.
     */
    enquiryType:
      ENQUIRY_TYPES.find((t) => t.value === enquiryParam)?.value ??
      (roleParam ? 'careers' : 'other'),
    message: roleParam ? `I'm interested in applying for: ${roleParam}` : '',
  });
  const [status, setStatus] = useState<FormState>('idle');

  /*
   * Known before anyone types. Telling someone the form cannot deliver only
   * after they have written a message wastes their effort; saying so at the
   * top of the form lets them go straight to email.
   */
  const canSubmit = contactIsConfigured();

  // Built once: 190 Intl.DisplayNames lookups per keystroke would be wasteful.
  const countryList = useMemo(() => countries(), []);

  /*
   * Only the details that have been entered in the admin. tel: strips spaces
   * because a dialler will not accept them.
   */
  const contactRows = [
    {
      key: 'email',
      Icon: Mail,
      label: 'Email',
      value: contactDetails.email,
      href: contactDetails.email ? `mailto:${contactDetails.email}` : undefined,
    },
    {
      key: 'phone',
      Icon: Phone,
      label: 'Phone',
      value: contactDetails.phone,
      href: contactDetails.phone ? `tel:${contactDetails.phone.replace(/\s+/g, '')}` : undefined,
    },
    { key: 'office', Icon: MapPin, label: 'Office', value: contactDetails.office, href: undefined },
    { key: 'hours', Icon: Clock, label: 'Business hours', value: contactDetails.hours, href: undefined },
  ].filter((row) => row.value.trim() !== '');

  const handleChange =
    (field: keyof Enquiry) =>
    (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
      setFormData((prev) => ({ ...prev, [field]: e.target.value }));
    };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('submitting');

    const result = await sendEnquiry(formData);

    if (result.ok) {
      setStatus('success');
      /*
       * THE conversion. Note what is NOT sent: no name, no email, no
       * organisation, no message. Whether an enquiry arrived is a metric;
       * who sent it is theirs, and it is already in the destination inbox.
       * The enquiry type describes the enquiry, not the person, so it is
       * safe and it is the one property worth segmenting on.
       */
      track('contact_submitted', { enquiry_type: formData.enquiryType });
      setFormData({
        firstName: '',
        lastName: '',
        email: '',
        organization: '',
        enquiryType: 'other',
        country: '',
        message: '',
      });
      return;
    }

    /*
     * The form is deliberately NOT cleared on failure. Clearing it would
     * destroy what the visitor wrote at the exact moment they need it to
     * paste into an email — which is the fallback we are about to offer.
     *
     * "not_configured" is tracked because a form nobody has wired up and a
     * site nobody wants to contact produce identical silence otherwise, and
     * the first is a deployment fault somebody can fix in a minute.
     */
    setStatus(result.reason === 'not_configured' ? 'not-configured' : 'error');
    track('contact_failed', { reason: result.reason });
  };

  return (
    <Layout>
      <Seo title="Contact Us" description="Get in touch with our team to discuss infrastructure, partnerships, or implementation." />
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
              {/*
                Contact details come from the HAOS admin and are baked in at
                build time. Each row renders only when it has a value — an
                empty field means we do not publish that detail, not that we
                publish an empty one. Email and phone are real links, because a
                detail you cannot act on from a phone is decoration.
              */}
              <div className="space-y-6">
                {contactRows.map(({ key, Icon, label, value, href }) => (
                  <div key={key} className="flex items-start gap-4">
                    <Icon className="w-5 h-5 text-brand-accent flex-shrink-0 mt-1" aria-hidden="true" />
                    <div>
                      <p className="font-medium text-brand-primary mb-1">{label}</p>
                      {href ? (
                        <a href={href} className="text-body text-neutral-600 hover:text-brand-accent hover:underline">
                          {value}
                        </a>
                      ) : (
                        <p className="text-body text-neutral-600">{value}</p>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-surface rounded-lg border border-neutral-100 p-6 lg:p-8">
              <h3 className="text-h3 mb-6">Send a Message</h3>

              {status === 'success' ? (
                /*
                 * role="status" so a screen reader announces the outcome —
                 * without it, a keyboard user submits and hears nothing at
                 * all, because the form they were in has been replaced.
                 */
                <div className="flex flex-col items-center text-center py-8" role="status">
                  <CheckCircle2 className="w-10 h-10 text-brand-accent mb-4" />
                  <p className="font-medium text-brand-primary mb-1">Message sent</p>
                  <p className="text-body-small text-neutral-600">
                    We&apos;ll get back to you shortly.
                  </p>
                </div>
              ) : (
                <form className="space-y-4" onSubmit={handleSubmit}>
                  {/*
                    Said before anyone types, not after they submit. If there
                    is no endpoint configured, the honest thing is to point at
                    email immediately rather than let someone write a message
                    that this form cannot deliver.
                  */}
                  {!canSubmit && status !== 'not-configured' && (
                    <div className="flex items-start gap-3 p-3 rounded-sm bg-brand-tertiary/10 border border-brand-tertiary/30">
                      <AlertCircle className="w-4 h-4 text-brand-accent-warm flex-shrink-0 mt-0.5" />
                      <p className="text-body-small text-neutral-700">
                        This form is not connected to our systems yet.
                        {HAS_FALLBACK_EMAIL ? (
                          <>
                            {' '}Email{' '}
                            <a href={`mailto:${FALLBACK_ENQUIRY_EMAIL}`} className="underline font-medium">
                              {FALLBACK_ENQUIRY_EMAIL}
                            </a>{' '}
                            and we will pick it up from there.
                          </>
                        ) : (
                          <> Please try again later.</>
                        )}
                      </p>
                    </div>
                  )}
                  {status === 'not-configured' && (
                    <div
                      className="flex items-start gap-3 p-3 rounded-sm bg-brand-tertiary/10 border border-brand-tertiary/30"
                      role="alert"
                    >
                      <AlertCircle className="w-4 h-4 text-brand-accent-warm flex-shrink-0 mt-0.5" />
                      <p className="text-body-small text-neutral-700">
                        This form is not connected yet, so nothing was sent.
                        {HAS_FALLBACK_EMAIL ? (
                          <>
                            {' '}
                            <a href={fallbackMailto(formData)} className="underline font-medium">
                              Email it to us instead
                            </a>{' '}
                            — what you have written is carried across.
                          </>
                        ) : (
                          <> Your message is still here; please try again shortly.</>
                        )}
                      </p>
                    </div>
                  )}
                  {status === 'error' && (
                    <div
                      className="flex items-start gap-3 p-3 rounded-sm border"
                      style={{ backgroundColor: '#FBEAE8', borderColor: '#C0392B' }}
                      role="alert"
                    >
                      <AlertCircle className="w-4 h-4 text-error flex-shrink-0 mt-0.5" />
                      <p className="text-body-small text-neutral-700">
                        Your message could not be sent. Nothing has been lost — press Send Message
                        to try again
                        {HAS_FALLBACK_EMAIL ? (
                          <>
                            , or{' '}
                            <a href={fallbackMailto(formData)} className="underline font-medium">
                              email it to us
                            </a>{' '}
                            instead.
                          </>
                        ) : (
                          <>.</>
                        )}
                      </p>
                    </div>
                  )}
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="firstName" className="block text-label text-neutral-500 mb-1.5">First Name</label>
                      <input id="firstName" type="text" required value={formData.firstName} onChange={handleChange('firstName')} className="w-full h-11 px-4 border border-neutral-300 rounded-sm focus:border-brand-accent focus:outline-none focus:ring-2 focus:ring-brand-accent/10" />
                    </div>
                    <div>
                      <label htmlFor="lastName" className="block text-label text-neutral-500 mb-1.5">Last Name</label>
                      <input id="lastName" type="text" required value={formData.lastName} onChange={handleChange('lastName')} className="w-full h-11 px-4 border border-neutral-300 rounded-sm focus:border-brand-accent focus:outline-none focus:ring-2 focus:ring-brand-accent/10" />
                    </div>
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-label text-neutral-500 mb-1.5">Email</label>
                    <input id="email" type="email" required value={formData.email} onChange={handleChange('email')} className="w-full h-11 px-4 border border-neutral-300 rounded-sm focus:border-brand-accent focus:outline-none focus:ring-2 focus:ring-brand-accent/10" />
                  </div>
                  <div>
                    <label htmlFor="organization" className="block text-label text-neutral-500 mb-1.5">Organization</label>
                    <input id="organization" type="text" required autoComplete="organization" value={formData.organization} onChange={handleChange('organization')} className="w-full h-11 px-4 border border-neutral-300 rounded-sm focus:border-brand-accent focus:outline-none focus:ring-2 focus:ring-brand-accent/10" />
                  </div>
                  {/*
                    Enquiry type routes the message to whoever is responsible
                    for that kind of conversation, and it is the only property
                    attached to the contact_submitted event — it describes the
                    enquiry rather than the person, so it can be measured
                    without collecting anything about them.
                  */}
                  <div>
                    <label htmlFor="enquiryType" className="block text-label text-neutral-500 mb-1.5">
                      What is this about?
                    </label>
                    <select
                      id="enquiryType"
                      required
                      value={formData.enquiryType}
                      onChange={handleChange('enquiryType')}
                      className="w-full h-11 px-4 bg-white border border-neutral-300 rounded-sm focus:border-brand-accent focus:outline-none focus:ring-2 focus:ring-brand-accent/10"
                    >
                      {ENQUIRY_TYPES.map((type) => (
                        <option key={type.value} value={type.value}>
                          {type.label}
                        </option>
                      ))}
                    </select>
                  </div>
                  {/*
                    Country/region, per the approved contact specification. It
                    routes an enquiry to whoever covers that market and tells
                    us which time zone a reply lands in.

                    A native <select> rather than a custom combobox: it is
                    keyboard-operable and screen-reader-correct with no work,
                    and on Android it opens the platform's own picker, which
                    handles 190 options far better than anything built here.
                  */}
                  <div>
                    <label htmlFor="country" className="block text-label text-neutral-500 mb-1.5">
                      Country or region
                    </label>
                    <select
                      id="country"
                      required
                      autoComplete="country"
                      value={formData.country}
                      onChange={handleChange('country')}
                      className="w-full h-11 px-4 bg-white border border-neutral-300 rounded-sm focus:border-brand-accent focus:outline-none focus:ring-2 focus:ring-brand-accent/10"
                    >
                      <option value="">Select a country or region</option>
                      {countryList.map((c) => (
                        <option key={c.code} value={c.code}>
                          {c.name}
                        </option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <label htmlFor="message" className="block text-label text-neutral-500 mb-1.5">Message</label>
                    <textarea id="message" rows={4} required value={formData.message} onChange={handleChange('message')} className="w-full px-4 py-3 border border-neutral-300 rounded-sm focus:border-brand-accent focus:outline-none focus:ring-2 focus:ring-brand-accent/10 resize-none"></textarea>
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
