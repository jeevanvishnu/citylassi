import React from 'react';
import { motion } from 'framer-motion';
import SectionHeading from '../ui/SectionHeading';

const testimonials = [
  {
    quote: "Hands down the best mango lassi I've ever had. Thick, creamy, and bursting with real fruit.",
    name: "Priya S.",
    location: "Mumbai",
    rating: 5,
    avatar: "🧑🏽‍🦱",
  },
  {
    quote: "My go-to spot every summer. The watermelon cooler is absolutely refreshing. No sugar, pure nature.",
    name: "Arjun M.",
    location: "Pune",
    rating: 5,
    avatar: "👨🏾‍🦰",
  },
  {
    quote: "Love that they use zero preservatives. You can actually taste the difference. City Lassi is a gem.",
    name: "Meera K.",
    location: "Bangalore",
    rating: 5,
    avatar: "👩🏽",
  },
];

const containerVariant = {
  hidden: {},
  show: { transition: { staggerChildren: 0.15 } },
};

const itemVariant = {
  hidden: { y: 40, opacity: 0 },
  show: { y: 0, opacity: 1, transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] } },
};

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

        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-4"
          variants={containerVariant}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.15 }}
        >
          {testimonials.map((t) => (
            <motion.div
              key={t.name}
              variants={itemVariant}
              className="bg-brand-cream border border-brand-lemon rounded-3xl p-6 flex flex-col gap-4 backdrop-blur-sm hover:border-brand-yellow transition-colors duration-300 cursor-default"
            >
              {/* Stars */}
              <div className="flex gap-0.5">
                {Array.from({ length: t.rating }).map((_, i) => (
                  <span key={i} className="text-brand-yellow text-lg" aria-hidden="true">★</span>
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
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials;
