import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FileText, BookOpen, Code, BarChart3, Microscope, Newspaper, HelpCircle, Image } from 'lucide-react';
import Layout from '@/components/layout/Layout';
import CTABlock from '@/components/sections/CTABlock';
import { useScrollReveal } from '@/hooks/useScrollReveal';

const resources = [
  { icon: FileText, title: 'Whitepaper', desc: 'Technical deep-dive into Heraja infrastructure architecture.', href: '/resources/whitepaper', color: '#231F20' },
  { icon: BookOpen, title: 'Corporate Brochure', desc: 'Enterprise capability overview for decision-makers.', href: '/resources/corporate-brochure', color: '#7AC142' },
  { icon: Code, title: 'Documentation', desc: 'Complete technical documentation for developers.', href: '/resources/documentation', color: '#4F9D5C' },
  { icon: BarChart3, title: 'Case Studies', desc: 'Implementation outcomes and verified results.', href: '/resources/case-studies', color: '#C9782B' },
  { icon: Microscope, title: 'Research', desc: 'Industry research and technical papers.', href: '/resources/research', color: '#F99D1C' },
  { icon: Newspaper, title: 'Blog', desc: 'Updates, insights, and thought leadership.', href: '/resources/blog', color: '#5FA83D' },
  { icon: HelpCircle, title: 'FAQ', desc: 'Common questions about Heraja infrastructure.', href: '/resources/faq', color: '#231F20' },
  { icon: Image, title: 'Media Kit', desc: 'Brand assets, logos, and press materials.', href: '/resources/media-kit', color: '#7AC142' },
];

export default function ResourcesOverview() {
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
            <p className="text-overline mb-4">Resources</p>
            <h1 className="text-display max-w-4xl mb-6">Knowledge Hub</h1>
            <p className="text-body-large text-neutral-700 max-w-2xl">Everything for understanding the platform, evaluating it, and building on it — docs, research, and real outcomes.</p>
          </motion.div>
        </div>
      </section>

      <section ref={ref} className="section-padding bg-surface-elevated">
        <div className="container-heraja">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {resources.map((r, i) => (
              <motion.div key={r.href} initial={{ opacity: 0, y: 20 }} animate={isVisible ? { opacity: 1, y: 0 } : {}} transition={{ delay: i * 0.1 }}>
                <Link to={r.href} className="group card-elevate block bg-surface rounded-lg border border-neutral-100 p-6 h-full">
                  <div className="w-10 h-10 rounded-lg flex items-center justify-center mb-4" style={{ backgroundColor: `${r.color}15` }}>
                    <r.icon className="w-5 h-5" style={{ color: r.color }} />
                  </div>
                  <h3 className="text-h4 mb-2 group-hover:text-brand-secondary transition-colors">{r.title}</h3>
                  <p className="text-body-small text-neutral-600">{r.desc}</p>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <CTABlock title="Can't Find What You Need?" description="Our team is happy to provide additional resources."
        primaryCta={{ label: 'Contact Us', href: '/company/contact' }} />
    </Layout>
  );
}
