import { motion } from 'framer-motion';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

interface SectionTitleProps {
  subtitle?: string;
  title: string;
  description?: string;
  light?: boolean;
}

export default function SectionTitle({ subtitle, title, description, light }: SectionTitleProps) {
  const { ref, inView } = useScrollAnimation();

  return (
    <div ref={ref} className="mb-16 text-center">
      {subtitle && (
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className={`mb-3 font-poppins text-sm font-semibold tracking-[0.2em] uppercase ${light ? 'text-secondary-light' : 'text-primary'}`}
        >
          {subtitle}
        </motion.p>
      )}
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6, delay: 0.1 }}
        className={`font-playfair text-3xl font-bold md:text-4xl lg:text-5xl ${light ? 'text-white' : 'text-dark'}`}
      >
        {title}
      </motion.h2>
      <motion.div
        initial={{ scaleX: 0 }}
        animate={inView ? { scaleX: 1 } : {}}
        transition={{ duration: 0.6, delay: 0.3 }}
        className="mx-auto mt-4 h-1 w-20 rounded-full bg-gradient-to-r from-primary to-secondary"
      />
      {description && (
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.4 }}
          className={`mx-auto mt-6 max-w-2xl font-inter text-lg ${light ? 'text-white/80' : 'text-gray-600'}`}
        >
          {description}
        </motion.p>
      )}
    </div>
  );
}
