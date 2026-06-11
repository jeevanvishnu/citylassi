import React from 'react';
import { motion } from 'framer-motion';
import type { Drink } from '../../data/drinks';

type DrinkCardProps = Omit<Drink, 'id'>;

const cardVariant = {
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
      className="relative bg-white/70 backdrop-blur-xl p-6 md:p-8 rounded-[2.5rem] border border-white/60 flex flex-col items-center text-center shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_20px_40px_rgb(0,0,0,0.08)] transition-all h-full justify-center group overflow-hidden"
      role="listitem"
    >
      {/* Decorative Glow on Hover */}
      <div className="absolute inset-0 bg-gradient-to-br from-brand-yellow/5 via-transparent to-brand-orange/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-[2.5rem] pointer-events-none" />

      {/* Drink Image */}
      <div className="w-48 h-48 mb-6 relative z-10 flex-shrink-0 mt-4">
        {imagePath ? (
          <motion.img
            src={imagePath}
            alt={name}
            className="w-full h-full object-contain drop-shadow-xl"
            loading="lazy"
            whileHover={{ scale: 1.1, rotate: 3 }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
          />
        ) : (
          <div className="w-full h-full bg-brand-lemon rounded-full flex items-center justify-center text-6xl shadow-inner border border-brand-yellow/20">
            {emoji}
          </div>
        )}
      </div>

      <div className="flex flex-col w-full z-10 items-center justify-center">
        <h3 className="font-heading text-2xl md:text-3xl font-bold text-brand-dark mb-2 group-hover:text-brand-orange transition-colors duration-300">
          {name}
        </h3>
      </div>
    </motion.article>
  );
};

export default DrinkCard;
