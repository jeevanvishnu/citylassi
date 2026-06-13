import React from 'react';
import { motion } from 'framer-motion';
import type { Variants } from 'framer-motion';
import type { Drink } from '../../data/drinks';

type DrinkCardProps = Omit<Drink, 'id'>;

const cardVariant: Variants = {
  hidden: { y: 40, opacity: 0 },
  show: {
    y: 0,
    opacity: 1,
    transition: { type: 'spring', bounce: 0.2, duration: 0.8 },
  },
};

const DrinkCard: React.FC<DrinkCardProps & { index: number }> = ({
  name,
  emoji,
  imagePath,
  description,
  tag,
  index
}) => {
  return (
    <motion.article
      variants={cardVariant}
      whileHover={{ y: -8, transition: { duration: 0.3 } }}
      className="relative flex flex-col items-center text-center transition-all h-full bg-white rounded-[2.5rem] shadow-sm hover:shadow-xl border border-brand-cream overflow-hidden group p-8"
      role="listitem"
    >
      {/* Decorative Blob inside card */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-48 h-48 bg-brand-yellow/5 rounded-full blur-2xl z-0 group-hover:bg-brand-orange/10 transition-colors duration-500 pointer-events-none" />

      {/* Drink Image */}
      <div className="w-44 h-44 mb-8 relative z-10 flex-shrink-0 mx-auto">
        {imagePath ? (
          <motion.img
            src={imagePath}
            alt={name}
            className="w-full h-full object-contain"
            loading="lazy"
            whileHover={{ scale: 1.05, rotate: index % 2 === 0 ? 3 : -3 }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
          />
        ) : (
          <div className="w-full h-full bg-brand-lemon rounded-full flex items-center justify-center text-6xl shadow-inner border border-brand-yellow/20">
            {emoji}
          </div>
        )}
      </div>

      <div className="flex flex-col w-full z-10 items-center justify-start flex-grow">
        {tag && (
          <span className="text-[10px] sm:text-xs font-bold tracking-[0.2em] uppercase text-brand-orange bg-brand-orange/10 px-4 py-1.5 rounded-full mb-5">
            {tag}
          </span>
        )}
        <h3 className="font-heading text-2xl md:text-3xl font-bold text-brand-dark mb-4 group-hover:text-brand-orange transition-colors duration-300">
          {name}
        </h3>
        <p className="font-body text-brand-muted/80 text-sm md:text-base leading-relaxed max-w-[280px]">
          {description}
        </p>
      </div>
    </motion.article>
  );
};

export default DrinkCard;
