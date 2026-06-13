import React from 'react';
import { motion } from 'framer-motion';
import type { Variants } from 'framer-motion';
import DrinkCard from './DrinkCard';
import { drinks } from '../../data/drinks';
import { Link } from 'react-router-dom';

const containerVariant: Variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.15, delayChildren: 0.2 },
  },
};

const headerVariant: Variants = {
  hidden: { opacity: 0, y: -20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
};

const PopularDrinks: React.FC = () => {

  return (
    <section
      id="popular"
      className="relative bg-[#FAFAF8] pt-32 pb-16 overflow-hidden"
      aria-labelledby="drinks-heading"
    >
      {/* Decorative Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-[-10%] left-[-5%] w-[40%] h-[40%] rounded-full bg-brand-yellow/10 blur-[120px]"></div>
        <div className="absolute bottom-[-10%] right-[-5%] w-[30%] h-[30%] rounded-full bg-brand-orange/10 blur-[100px]"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10 px-5 md:px-10">
        <motion.div
          className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
        >
          <motion.div variants={headerVariant} className="max-w-2xl">
            <span className="font-accent text-3xl text-brand-orange mb-3 block">Our Signature</span>
            <h2 className="font-heading font-bold text-5xl md:text-6xl text-brand-dark mb-4 leading-tight">
              Popular Drinks
            </h2>
            <p className="font-body text-lg text-brand-muted/80 leading-relaxed max-w-lg">
              Every glass is crafted to order using the freshest local ingredients. Discover our most loved blends.
            </p>
          </motion.div>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12 pb-12 pt-8"
          variants={containerVariant}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.1 }}
          role="list"
        >
          {drinks.map((drink, index) => (
            <motion.div 
              key={drink.id} 
              className="h-full"
            >
              <DrinkCard {...drink} index={index} />
            </motion.div>
          ))}
        </motion.div>

        {/* View full menu CTA */}
        <motion.div
          className="flex justify-center mt-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, duration: 0.5 }}
        >
          <Link
            to="/menu"
            className="inline-flex items-center gap-2 font-body font-bold text-brand-dark bg-brand-yellow hover:bg-brand-orange active:scale-95 shadow-sm hover:shadow-md px-10 py-4 rounded-full transition-all duration-300 cursor-pointer group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-yellow focus-visible:ring-offset-2"
          >
            Explore Full Menu
            <span className="group-hover:translate-x-1 transition-transform duration-300">→</span>
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default PopularDrinks;
