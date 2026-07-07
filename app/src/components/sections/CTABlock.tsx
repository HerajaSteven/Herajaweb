import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { useScrollReveal } from '@/hooks/useScrollReveal';

interface CTABlockProps {
  title: string;
  description?: string;
  primaryCta?: { label: string; href: string };
  secondaryCta?: { label: string; href: string };
  variant?: 'default' | 'dark';
}

export default function CTABlock({ title, description, primaryCta, secondaryCta, variant = 'default' }: CTABlockProps) {
  const { ref, isVisible } = useScrollReveal();
  const isDark = variant === 'dark';

  return (
    <section ref={ref} className={`section-padding ${isDark ? 'bg-surface-dark' : 'bg-surface-elevated'}`}>
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={isVisible ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.5 }}
        className="container-heraja text-center max-w-3xl mx-auto"
      >
        <h2 className={`text-h1 mb-4 ${isDark ? 'text-white' : ''}`}>{title}</h2>
        {description && (
          <p className={`text-body-large mb-8 ${isDark ? 'text-neutral-300' : 'text-neutral-700'}`}>
            {description}
          </p>
        )}
        <div className="flex flex-wrap justify-center gap-4">
          {primaryCta && (
            <Link to={primaryCta.href} className={`btn-primary ${isDark ? 'bg-brand-secondary text-brand-primary hover:bg-[#00E0B5]' : ''}`}>
              {primaryCta.label}
              <ArrowRight className="w-4 h-4" />
            </Link>
          )}
          {secondaryCta && (
            <Link to={secondaryCta.href} className={`btn-secondary ${isDark ? 'border-white/30 text-white hover:bg-white/10' : ''}`}>
              {secondaryCta.label}
            </Link>
          )}
        </div>
      </motion.div>
    </section>
  );
}
