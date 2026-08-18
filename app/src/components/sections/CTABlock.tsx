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
  /*
   * Render immediately instead of revealing on scroll.
   *
   * Phase 5 §4.6 allows the homepage exactly one motion sequence, in the hero,
   * and rules out the scroll-reveal chain down sections 2–9. Section 9 is this
   * block, so the homepage passes `static`. Every other page keeps the reveal:
   * §4.6 is written about the homepage, and changing 25 other pages is a wider
   * edit than the rule asks for.
   */
  static?: boolean;
}

export default function CTABlock({
  title,
  description,
  primaryCta,
  secondaryCta,
  variant = 'default',
  static: isStatic = false,
}: CTABlockProps) {
  const { ref, isVisible } = useScrollReveal();
  const isDark = variant === 'dark';
  const shown = isStatic || isVisible;

  return (
    /*
     * Structure note. This used to put `container-heraja` and `max-w-3xl` on
     * the same element. Both set max-width, so which one won depended on the
     * order Tailwind happened to emit them — and the losing declaration took
     * the container's horizontal padding out of play with it, letting the
     * block run past the viewport on narrow screens. Every page ends with a
     * CTA, so that single collision was the site's most widespread source of
     * horizontal scroll on mobile.
     *
     * They are separate elements now: the container handles gutters and the
     * page's maximum width, the inner element handles the measure of the text.
     */
    <section ref={ref} className={`section-padding ${isDark ? 'bg-surface-dark' : 'bg-surface-elevated'}`}>
      <div className="container-reading">
        <motion.div
          initial={isStatic ? false : { opacity: 0, y: 30 }}
          animate={shown ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center max-w-3xl mx-auto"
        >
          <h2 className={`text-h1 mb-4 ${isDark ? 'text-white' : ''}`}>{title}</h2>
          {description && (
            <p className={`text-body-large mb-8 ${isDark ? 'text-neutral-300' : 'text-neutral-700'}`}>
              {description}
            </p>
          )}
          <div className="flex flex-wrap justify-center gap-4">
            {primaryCta && (
              /*
               * The dark-variant hover was #00E0B5 — a teal from an older
               * palette, sitting in the same file as the navy button hover and
               * belonging to the brand no more than that one did. It is now a
               * lift of the logo green, which is what this button already is.
               */
              <Link
                to={primaryCta.href}
                className={`btn-primary ${isDark ? 'bg-brand-secondary text-brand-primary hover:bg-[#8ACD54] active:bg-[#6BAF38]' : ''}`}
              >
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
      </div>
    </section>
  );
}
