import React from 'react';
import { motion } from 'framer-motion';
import type { Variants } from 'framer-motion';
import type { Drink } from '../../data/drinks';

type DrinkCardProps = Omit<Drink, 'id'>;

const cardVariant: Variants = {
  hidden: { y: 30, opacity: 0 },
  show: {
    y: 0,
    opacity: 1,
    transition: { type: 'spring', bounce: 0.2, duration: 0.6 },
  },
};

const DrinkCard: React.FC<DrinkCardProps> = ({
  name,
  emoji,
  imagePath,
}) => {
  return (
    <motion.article
      variants={cardVariant}
      whileHover={{ y: -8, transition: { duration: 0.3 } }}
      className="relative flex flex-col items-center text-center transition-all h-full justify-start group pt-4"
      role="listitem"
    >
      {/* Drink Image */}
      <div className="w-56 h-56 mb-8 relative z-10 flex-shrink-0">
        {imagePath ? (
          <motion.img
            src={imagePath}
            alt={name}
            className="w-full h-full object-contain drop-shadow-md"
            loading="lazy"
            whileHover={{ scale: 1.05, rotate: 2 }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
          />
        ) : (
          <div className="w-full h-full bg-brand-lemon rounded-full flex items-center justify-center text-7xl shadow-inner border border-brand-yellow/20">
            {emoji}
          </div>
        )}
      </div>

      <div className="flex flex-col w-full z-10 items-center justify-center">
        <h3 className="font-heading text-2xl md:text-3xl font-bold text-brand-dark group-hover:text-brand-orange transition-colors duration-300">
          {name}
        </h3>
      </div>
    </motion.article>
  );
};

export default DrinkCard;
