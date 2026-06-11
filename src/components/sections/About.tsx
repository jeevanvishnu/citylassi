import React from 'react';
import { motion } from 'framer-motion';
import { Leaf, Truck, Star, LayoutGrid } from 'lucide-react';
import SectionHeading from '../ui/SectionHeading';

const pillars = [
  {
    icon: Leaf,
    title: 'Fresh & Natural Ingredients',
    desc: 'We source directly from local farms — no concentrates, no shortcuts.',
  },
  {
    icon: Truck,
    title: 'Free Home Delivery',
    desc: 'Enjoy your favorite drinks delivered straight to your doorstep at no extra cost.',
  },
  {
    icon: Star,
    title: 'Authentic Taste',
    desc: 'Every batch blended fresh each morning using traditional methods.',
  },
  {
    icon: LayoutGrid,
    title: 'Variety of Choices',
    desc: 'From classic lassis to innovative fruit blends, we have something for everyone.',
  },
];

const About: React.FC = () => {
  return (
    <section
      id="about"
      className="bg-white py-24 px-5 md:px-10 overflow-hidden"
      aria-labelledby="about-heading"
    >
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        {/* Image side */}
        <motion.div
          className="relative"
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="relative rounded-3xl overflow-hidden aspect-[4/5] max-w-[480px] mx-auto">
            <img
              src="/product-image/blending.webp"
              alt="City Lassi ingredients being freshly blended"
              className="w-full h-full object-cover"
              loading="lazy"
            />
            {/* Overlay gradient */}
            <div className="absolute inset-0 bg-gradient-to-t from-brand-dark/40 to-transparent" />
          </div>
        </motion.div>

        {/* Content side */}
        <motion.div
          className="flex flex-col gap-8"
          initial={{ opacity: 0, x: 60 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.15 }}
        >
          <SectionHeading
            title="Blending Freshness & Tradition in Every Sip"
            badge="Our Story"
            align="left"
          />

          <p className="font-body text-brand-muted text-lg leading-relaxed">
            At City Lassi, we bring you the authentic taste of India and the freshness of Dubai in every glass. From our signature Mango Lassi to exotic Avocado Milkshakes and indulgent Faloodas, we’re proud to be the go-to juice shop in Deira, Dubai. Whether you’re craving a quick refreshment or a family treat, we’ve got something for everyone.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {pillars.map((pillar, i) => (
              <motion.div
                key={pillar.title}
                className="flex gap-4 p-4 rounded-2xl bg-brand-cream border border-brand-lemon hover:border-brand-yellow transition-colors duration-200"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 * i, duration: 0.5 }}
              >
                <div className="w-10 h-10 bg-brand-yellow rounded-xl flex items-center justify-center flex-shrink-0">
                  <pillar.icon className="w-5 h-5 text-brand-dark" strokeWidth={2} />
                </div>
                <div>
                  <h4 className="font-heading font-semibold text-brand-dark text-sm mb-1">
                    {pillar.title}
                  </h4>
                  <p className="font-body text-brand-muted text-xs leading-relaxed">
                    {pillar.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
