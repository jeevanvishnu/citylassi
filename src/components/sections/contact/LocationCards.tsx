import React from 'react';
import { motion } from 'framer-motion';
import type { Variants } from 'framer-motion';
import { MapPin, Clock } from 'lucide-react';

interface Location {
  id: string;
  city: string;
  status: 'open' | 'coming-soon';
  address?: string[];
}

const locations: Location[] = [
  {
    id: 'dubai',
    city: 'Dubai',
    status: 'open',
    address: [
      'Shop #02, Al Raffi Building,',
      'Near Naif Palace Hotel, Sabkha Road,',
      'Deira, Dubai, UAE',
    ],
  },
  {
    id: 'sharjah',
    city: 'Sharjah',
    status: 'coming-soon',
  },
  {
    id: 'abudhabi',
    city: 'Abu Dhabi',
    status: 'coming-soon',
  },
];

const cardVariant: Variants = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
};

const containerVariant: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.15 } },
};

const LocationCards: React.FC = () => {
  return (
    <section
      className="relative bg-[#FAFAF8] py-20 lg:py-32 border-t border-brand-dark/5"
      aria-label="Our locations"
    >
      <div className="max-w-7xl mx-auto px-5 md:px-10">
        {/* Section header */}
        <motion.div
          className="text-center mb-16 lg:mb-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
        >
          <span className="font-accent text-brand-orange text-xl mb-3 block">
            Our Locations
          </span>
          <h2 className="font-display font-bold text-brand-dark text-4xl md:text-5xl leading-tight">
            Find Us Across the{' '}
            <span className="text-brand-orange">
              UAE
            </span>
          </h2>
        </motion.div>

        {/* Cards */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
          variants={containerVariant}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
        >
          {locations.map((loc) => (
            <motion.div
              key={loc.id}
              variants={cardVariant}
              className={`relative bg-white rounded-3xl p-8 lg:p-10 overflow-hidden transition-all duration-300 ${
                loc.status === 'open'
                  ? 'border border-brand-dark/10 shadow-lg shadow-brand-dark/5 hover:border-brand-orange hover:-translate-y-2'
                  : 'border border-dashed border-brand-dark/20 opacity-80 bg-transparent'
              }`}
            >
              {/* City name + badge */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
                <h3 className="font-heading font-semibold text-brand-dark text-2xl">
                  {loc.city}
                </h3>
                <span
                  className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full font-body text-xs font-semibold tracking-wider uppercase ${
                    loc.status === 'open'
                      ? 'bg-green-50 text-green-600'
                      : 'bg-brand-cream text-brand-orange'
                  }`}
                >
                  {loc.status === 'open' ? (
                    <>
                      <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
                      Open
                    </>
                  ) : (
                    <>
                      <Clock className="w-3.5 h-3.5" />
                      Coming Soon
                    </>
                  )}
                </span>
              </div>

              {/* Address or Coming Soon */}
              {loc.status === 'open' && loc.address ? (
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-brand-cream flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-4 h-4 text-brand-orange" />
                  </div>
                  <address className="not-italic font-body text-brand-dark/70 text-base leading-relaxed">
                    {loc.address.map((line, i) => (
                      <React.Fragment key={i}>
                        {line}
                        {i < loc.address!.length - 1 && <br />}
                      </React.Fragment>
                    ))}
                  </address>
                </div>
              ) : (
                <div className="flex items-center gap-4 py-4">
                  <div className="w-10 h-10 rounded-full bg-brand-dark/5 flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-4 h-4 text-brand-dark/40" />
                  </div>
                  <p className="font-body text-brand-dark/50 text-base">
                    We're expanding! Stay tuned for updates.
                  </p>
                </div>
              )}
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default LocationCards;
