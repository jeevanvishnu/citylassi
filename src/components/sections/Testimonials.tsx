import React from 'react';
import { motion } from 'framer-motion';
import SectionHeading from '../ui/SectionHeading';

const testimonials = [
  {
    quote: "Refreshing juices, affordable prices, and excellent service. City Lassy truly serves the best fresh juices in Deira.",
    name: "Rajesh P",
    location: "Deira",
    rating: 5,
    avatar: "👨🏾‍🦱",
  },
  {
    quote: "Absolutely the best lassi in Dubai! The mango lassi is creamy, refreshing, and reminds me of home. Highly recommend City Lassy for anyone craving authentic taste.",
    name: "Aisha K",
    location: "Dubai",
    rating: 5,
    avatar: "👩🏽",
  },
  {
    quote: "The falooda was heavenly – rich, colorful, and full of flavor. Plus, the delivery was super fast. City Lassy is now my go-to juice shop.",
    name: "Mohammed R",
    location: "Dubai",
    rating: 5,
    avatar: "👨🏾‍🦰",
  },
  {
    quote: "I tried the avocado milkshake and it was the best I’ve ever had! Fresh, healthy, and so delicious. Can’t wait to try more flavors.",
    name: "Fatima S",
    location: "Dubai",
    rating: 5,
    avatar: "🧕🏽",
  },
];



const Testimonials: React.FC = () => {
  return (
    <section
      id="blog"
      className="bg-[#FAFAF8] py-24 px-5 md:px-10 overflow-hidden"
      aria-labelledby="testimonials-heading"
    >
      <div className="max-w-7xl mx-auto">
        <SectionHeading
          title="What Our Customers Say"
          badge="Testimonials"
          align="center"
        />

        <div className="relative overflow-hidden mt-10 -mx-5 md:-mx-10 px-5 md:px-10">
          <div className="absolute top-0 bottom-0 left-0 w-12 md:w-24 bg-gradient-to-r from-[#FAFAF8] to-transparent z-10 pointer-events-none"></div>
          <div className="absolute top-0 bottom-0 right-0 w-12 md:w-24 bg-gradient-to-l from-[#FAFAF8] to-transparent z-10 pointer-events-none"></div>
          
          <motion.div
            className="flex gap-6 w-max"
            animate={{ x: ["0%", "calc(-50% - 12px)"] }}
            transition={{
              repeat: Infinity,
              ease: "linear",
              duration: 25,
            }}
          >
            {[...testimonials, ...testimonials].map((t, i) => (
              <div
                key={i}
                className="w-[300px] md:w-[350px] shrink-0 bg-brand-cream border border-brand-lemon rounded-3xl p-6 flex flex-col gap-4 backdrop-blur-sm hover:border-brand-yellow transition-colors duration-300 cursor-default"
              >
                {/* Stars */}
                <div className="flex gap-0.5">
                  {Array.from({ length: t.rating }).map((_, idx) => (
                    <span key={idx} className="text-brand-yellow text-lg" aria-hidden="true">★</span>
                  ))}
                </div>

                {/* Quote */}
                <p className="font-body text-brand-muted text-sm leading-relaxed flex-1">
                  &ldquo;{t.quote}&rdquo;
                </p>

                {/* Author */}
                <div className="flex items-center gap-3 pt-4 border-t border-brand-lemon">
                  <span className="text-2xl" aria-hidden="true">{t.avatar}</span>
                  <div>
                    <p className="font-heading font-semibold text-brand-dark text-sm">{t.name}</p>
                    <p className="font-body text-brand-muted text-xs">{t.location}</p>
                  </div>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
