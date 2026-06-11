import React from 'react';
import { motion } from 'framer-motion';

interface SectionHeadingProps {
  title: string;
  badge?: string;
  subtitle?: string;
  align?: 'left' | 'center';
  light?: boolean;
}

const SectionHeading: React.FC<SectionHeadingProps> = ({
  title,
  badge,
  subtitle,
  align = 'center',
  light = false,
}) => {
  const alignment = align === 'center' ? 'items-center text-center' : 'items-start text-left';

  return (
    <motion.div
      className={`flex flex-col gap-2 mb-12 ${alignment}`}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.4 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
    >
      {badge && (
        <span className={`font-accent text-xl ${light ? 'text-brand-yellow' : 'text-brand-orange'}`}>
          {badge}
        </span>
      )}
      <h2
        className={`font-heading font-semibold text-4xl md:text-5xl leading-tight ${light ? 'text-white' : 'text-brand-dark'
          }`}
      >
        {title}
      </h2>
      {subtitle && (
        <p className={`font-body text-lg max-w-xl ${light ? 'text-white/70' : 'text-brand-muted'}`}>
          {subtitle}
        </p>
      )}
      <div
        className={`mt-2 h-1 w-16 rounded-full ${light ? 'bg-brand-yellow' : 'bg-brand-yellow'
          }`}
      />
    </motion.div>
  );
};

export default SectionHeading;
