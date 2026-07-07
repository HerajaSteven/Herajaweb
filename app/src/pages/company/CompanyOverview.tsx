import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Building2, Target, Users, Newspaper, Mail, Gavel } from 'lucide-react';
import Layout from '@/components/layout/Layout';
import CTABlock from '@/components/sections/CTABlock';
import { useScrollReveal } from '@/hooks/useScrollReveal';

const sections = [
  { icon: Building2, title: 'About', desc: 'Mission, vision, and values.', href: '/company/about', color: '#231F20' },
  { icon: Target, title: 'Vision', desc: 'Strategic direction and objectives.', href: '/company/vision', color: '#7AC142' },
  { icon: Users, title: 'Leadership', desc: 'Executive team and advisors.', href: '/company/leadership', color: '#4F9D5C' },
  { icon: Newspaper, title: 'News', desc: 'Company updates and press.', href: '/company/news', color: '#C9782B' },
  { icon: Mail, title: 'Contact', desc: 'Get in touch with our team.', href: '/company/contact', color: '#F99D1C' },
  { icon: Gavel, title: 'Legal', desc: 'Terms, privacy, and compliance.', href: '/company/legal', color: '#5FA83D' },
];

export default function CompanyOverview() {
  const { ref, isVisible } = useScrollReveal();
  return (
    <Layout>
      <section className="relative overflow-hidden bg-surface py-20 sm:py-24 md:py-28">
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
            <p className="text-overline mb-4">Company</p>
            <h1 className="text-display max-w-4xl mb-6">Heraja Agro Technologies</h1>
            <p className="text-body-large text-neutral-700 max-w-2xl">Who we are, why we started in Lagos, and where we're headed next.</p>
          </motion.div>
        </div>
      </section>

      <section ref={ref} className="section-padding bg-surface-elevated">
        <div className="container-heraja">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {sections.map((s, i) => (
              <motion.div key={s.href} initial={{ opacity: 0, y: 20 }} animate={isVisible ? { opacity: 1, y: 0 } : {}} transition={{ delay: i * 0.1 }}>
                <Link to={s.href} className="group card-elevate block bg-surface rounded-lg border border-neutral-100 p-6 h-full">
                  <div className="w-10 h-10 rounded-lg flex items-center justify-center mb-4" style={{ backgroundColor: `${s.color}15` }}>
                    <s.icon className="w-5 h-5" style={{ color: s.color }} />
                  </div>
                  <h3 className="text-h4 mb-2 group-hover:text-brand-secondary transition-colors">{s.title}</h3>
                  <p className="text-body-small text-neutral-600">{s.desc}</p>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <CTABlock title="Get in Touch" description="We'd love to hear from you."
        primaryCta={{ label: 'Contact Us', href: '/company/contact' }} />
    </Layout>
  );
}
