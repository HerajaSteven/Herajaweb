import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

interface HeroSplitProps {
  overline?: string;
  headline: string;
  subheadline: string;
  primaryCta?: { label: string; href: string };
  secondaryCta?: { label: string; href: string };
  children?: React.ReactNode;
  variant?: 'default' | 'dark';
  minHeight?: string;
}

export default function HeroSplit({
  overline,
  headline,
  subheadline,
  primaryCta,
  secondaryCta,
  children,
  variant = 'default',
  minHeight = 'min-h-[85vh]',
}: HeroSplitProps) {
  const isDark = variant === 'dark';

  return (
    <section
      className={`relative ${minHeight} flex items-center ${
        isDark ? 'bg-surface-dark text-white' : 'bg-surface'
      }`}
      aria-label="Hero"
    >
      <div className="container-heraja w-full">
        <div className="grid lg:grid-cols-[1fr_0.45fr] gap-12 lg:gap-16 items-center">
          {/* Left Content */}
          <div className="pt-24 lg:pt-0">
            {overline && (
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="text-overline mb-4"
              >
                {overline}
              </motion.p>
            )}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className={`text-display mb-6 ${isDark ? 'text-white' : ''}`}
            >
              {headline}
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className={`text-body-large max-w-xl mb-8 ${isDark ? 'text-neutral-300' : 'text-neutral-700'}`}
            >
              {subheadline}
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="flex flex-wrap gap-4"
            >
              {primaryCta && (
                <Link to={primaryCta.href} className="btn-primary">
                  {primaryCta.label}
                  <ArrowRight className="w-4 h-4" />
                </Link>
              )}
              {secondaryCta && (
                <Link to={secondaryCta.href} className="btn-secondary">
                  {secondaryCta.label}
                </Link>
              )}
            </motion.div>
          </div>

          {/* Right Content */}
          {children && (
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7, delay: 0.5 }}
              className="hidden lg:block"
            >
              {children}
            </motion.div>
          )}
        </div>
      </div>
    </section>
  );
}
