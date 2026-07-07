import { motion } from 'framer-motion';
import { useScrollReveal } from '@/hooks/useScrollReveal';

interface SectionIntroProps {
  overline?: string;
  title: string;
  description?: string;
  align?: 'left' | 'center';
  dark?: boolean;
}

export default function SectionIntro({ overline, title, description, align = 'left', dark = false }: SectionIntroProps) {
  const { ref, isVisible } = useScrollReveal();
  const textAlign = align === 'center' ? 'text-center' : 'text-left';
  const mx = align === 'center' ? 'mx-auto' : '';

  return (
    <div ref={ref} className={`${textAlign} mb-12 lg:mb-16`}>
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={isVisible ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.5 }}
      >
        {overline && <p className="text-overline mb-3">{overline}</p>}
        <h2 className={`text-h1 max-w-3xl ${mx} ${dark ? 'text-white' : ''}`}>{title}</h2>
        {description && (
          <p className={`text-body-large max-w-2xl mt-4 ${mx} ${dark ? 'text-neutral-300' : 'text-neutral-700'}`}>
            {description}
          </p>
        )}
      </motion.div>
    </div>
  );
}
