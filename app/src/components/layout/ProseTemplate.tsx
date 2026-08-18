import type { ReactNode } from 'react';
import { motion } from 'framer-motion';
import Layout from '@/components/layout/Layout';
import Seo from '@/components/Seo';
import CTABlock from '@/components/sections/CTABlock';

/*
 * The shape every prose page shares (Phase 5 §8.7).
 *
 * About, Careers, Privacy, Terms and FAQ were five hand-built pages that each
 * re-declared the same hero, the same decorative blurs and their own body
 * width — which is why they drifted: two used a 3xl content container for
 * running text, one centred, one did not. Reading measure is a design decision
 * (Phase 4 §5), not something five files should each answer separately.
 *
 * The body sits in `.container-reading` — 720px — because that is the width at
 * which prose is readable, and it is the only width these pages need. Anything
 * that wants to be wider than its own text does not belong on a prose page.
 */
interface Props {
  eyebrow: string;
  title: string;
  lede: string;
  /** Defaults to the lede; override where the search snippet should differ. */
  description?: string;
  children: ReactNode;
  cta?: {
    title: string;
    description?: string;
    primaryCta: { label: string; href: string };
    secondaryCta?: { label: string; href: string };
  };
}

export default function ProseTemplate({
  eyebrow,
  title,
  lede,
  description,
  children,
  cta,
}: Props) {
  return (
    <Layout>
      <Seo title={title} description={description ?? lede} />

      <section className="relative overflow-hidden bg-surface py-16 sm:py-20 md:py-24">
        <div className="absolute inset-0 pointer-events-none overflow-hidden" aria-hidden="true">
          <div className="absolute -top-24 -right-24 w-72 h-72 rounded-full bg-brand-secondary/10 blur-3xl" />
          <div className="absolute -bottom-32 -left-16 w-64 h-64 rounded-full bg-brand-tertiary/10 blur-3xl" />
        </div>
        <div className="container-heraja w-full">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="flex items-center gap-1.5 mb-4" aria-hidden="true">
              <span className="w-2 h-2 rounded-full bg-brand-tertiary" />
              <span className="w-1.5 h-1.5 rounded-full bg-brand-secondary" />
              <span className="w-1 h-1 rounded-full bg-brand-primary" />
            </div>
            <p className="text-overline mb-4">{eyebrow}</p>
            {/* min-w-0: a grid/flex ancestor would otherwise let the longest
                word in a display heading push past its track at 390px. */}
            <h1 className="text-display max-w-4xl mb-6 min-w-0">{title}</h1>
            <p className="text-body-large text-neutral-700 max-w-2xl">{lede}</p>
          </motion.div>
        </div>
      </section>

      <section className="section-padding bg-surface">
        <div className="container-reading">{children}</div>
      </section>

      {cta && <CTABlock {...cta} />}
    </Layout>
  );
}
