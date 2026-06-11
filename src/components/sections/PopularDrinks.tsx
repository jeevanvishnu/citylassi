import React, { useRef, useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import DrinkCard from './DrinkCard';
import { drinks } from '../../data/drinks';

const containerVariant = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.15, delayChildren: 0.2 },
  },
};

const headerVariant = {
  hidden: { opacity: 0, y: -20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
};

const PopularDrinks: React.FC = () => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    if (isHovered) return;

    const interval = setInterval(() => {
      if (scrollRef.current) {
        const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;

        // If we've reached the end, smoothly scroll back to the start
        if (scrollLeft + clientWidth >= scrollWidth - 10) {
          scrollRef.current.scrollTo({ left: 0, behavior: 'smooth' });
        } else {
          // Scroll by exactly one full page (3 cards)
          scrollRef.current.scrollTo({ left: scrollLeft + clientWidth, behavior: 'smooth' });
        }
      }
    }, 4000);

    return () => clearInterval(interval);
  }, [isHovered]);

  return (
    <section
      id="popular"
      className="relative bg-[#FAFAF8] py-32 overflow-hidden"
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
          ref={scrollRef}
          className="flex overflow-x-auto gap-8 pb-16 pt-4 snap-x snap-mandatory [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none] scroll-smooth"
          variants={containerVariant}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.1 }}
          role="list"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          onTouchStart={() => setIsHovered(true)}
          onTouchEnd={() => setIsHovered(false)}
        >
          {drinks.map((drink) => (
            <div key={drink.id} className="w-[calc((100%-4rem)/3)] min-w-[280px] md:min-w-0 snap-start shrink-0">
              <DrinkCard {...drink} />
            </div>
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
          <a
            href="#full-menu"
            className="inline-flex items-center gap-2 font-body font-bold text-brand-dark bg-brand-yellow hover:bg-brand-amber active:scale-95 shadow-sm hover:shadow-md px-10 py-4 rounded-full transition-all duration-300 cursor-pointer group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-yellow focus-visible:ring-offset-2"
          >
            Explore Full Menu
            <span className="group-hover:translate-x-1 transition-transform duration-300">→</span>
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default PopularDrinks;
