import Layout from '@/components/layout/Layout';
import CTABlock from '@/components/sections/CTABlock';
import { motion } from 'framer-motion';
import { Target, Eye, Heart } from 'lucide-react';
import { useScrollReveal } from '@/hooks/useScrollReveal';

const values = [
  { icon: Target, title: 'Infrastructure First', desc: 'We build foundational capabilities, not features.' },
  { icon: Eye, title: 'Transparency', desc: 'We verify everything and hide nothing.' },
  { icon: Heart, title: 'Impact', desc: 'We measure success by organizational outcomes.' },
];

export default function About() {
  const { ref, isVisible } = useScrollReveal();
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
            <p className="text-overline mb-4">Company / About</p>
            <h1 className="text-display max-w-4xl mb-6">About Heraja</h1>
            <p className="text-body-large text-neutral-700 max-w-2xl">Heraja Agro Technologies is a Digital Agricultural Infrastructure Company building the operating backbone for modern agriculture.</p>
          </motion.div>
        </div>
      </section>

      <section className="section-padding bg-surface">
        <div className="container-heraja max-w-3xl">
          <p className="text-overline mb-3">Why We Exist</p>
          <h2 className="text-h1 mb-4">Founded to Solve Fragmented Coordination</h2>
          <p className="text-body-large text-neutral-700 mb-4">
            Heraja Agro Technologies was founded in Lagos, Nigeria after watching the same pattern repeat across production regions: strong farmers, real demand from buyers, and almost nothing connecting the two reliably. A producer's output was invisible to a buyer until it showed up — or didn't. Losses happened not because crops failed, but because aggregation was late, a truck never arrived, or nobody could confirm what a shipment actually contained.
          </p>
          <p className="text-body-large text-neutral-700 mb-4">
            That gap is what Heraja was built to close — not with another lending product or another app that asks farmers to change how they work, but with the connective layer underneath: registration, reporting, movement, and verification, all in one place. We started deliberately narrow, with a poultry and fish farming pilot, to prove the model on fast-cycling sectors before expanding into livestock, grains, and beyond.
          </p>
          <p className="text-h4 text-brand-primary border-l-4 border-brand-secondary pl-4">
            Agriculture does not only need financing. It needs operational coordination infrastructure.
          </p>
        </div>
      </section>

      <section className="section-padding bg-surface-elevated">
        <div className="container-heraja">
          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <p className="text-overline mb-3">Mission</p>
              <h2 className="text-h1 mb-4">Our Mission</h2>
              <p className="text-body-large text-neutral-700">To give producers, aggregators, and buyers a shared, verifiable record of what's happening on the ground — from planting to delivery — so trust doesn't depend on who you already know.</p>
            </div>
            <div>
              <p className="text-overline mb-3">Vision</p>
              <h2 className="text-h1 mb-4">Our Vision</h2>
              <p className="text-body-large text-neutral-700">A future where organizations across Africa's agricultural markets don't each build their own version of the same systems — they connect to one, and compete on how well they use it.</p>
            </div>
          </div>
        </div>
      </section>

      <section ref={ref} className="section-padding bg-surface">
        <div className="container-heraja">
          <div className="text-center mb-12"><p className="text-overline mb-3">Values</p><h2 className="text-h1">What We Believe</h2></div>
          <div className="grid sm:grid-cols-3 gap-6">
            {values.map((v, i) => (
              <motion.div key={v.title} initial={{ opacity: 0, y: 20 }} animate={isVisible ? { opacity: 1, y: 0 } : {}} transition={{ delay: i * 0.1 }}
                className="bg-surface rounded-lg border border-neutral-100 p-6 text-center">
                <div className="w-12 h-12 rounded-lg bg-brand-secondary/20 flex items-center justify-center mx-auto mb-4">
                  <v.icon className="w-6 h-6 text-brand-secondary" />
                </div>
                <h3 className="text-h4 mb-2">{v.title}</h3>
                <p className="text-body-small text-neutral-600">{v.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <CTABlock title="Join Our Team" description="We're building something transformative."
        primaryCta={{ label: 'View Careers', href: '/company/careers' }} secondaryCta={{ label: 'Contact Us', href: '/company/contact' }} />
    </Layout>
  );
}
