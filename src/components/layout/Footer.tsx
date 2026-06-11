import React from 'react';
import { motion } from 'framer-motion';
import type { Variants } from 'framer-motion';
import { MapPin, Phone, Mail } from 'lucide-react';

const FacebookIcon = (props: any) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
  </svg>
);

const InstagramIcon = (props: any) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
  </svg>
);

const quickLinks = ['Home', 'About', 'Menu', 'Contact'];

const menuLinks = [
  'Lassi', 'Dry Shakes', 'Smoothies', 'Boba', 'Kulki',
  'Milk Shake', 'Fresh Juices', 'Falooda', 'Avil Milk',
  'Ice Creams', 'With Cream', 'Ice Crushes', 'Mojito'
];

const columnVariant: Variants = {
  hidden: { y: 40, opacity: 0 },
  show: { y: 0, opacity: 1, transition: { duration: 0.6, ease: 'easeOut' } },
};

const containerVariant: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12 } },
};

const Footer: React.FC = () => {
  return (
    <footer
      id="contact"
      className="bg-brand-dark text-white"
      aria-label="City Lassi footer"
    >
      <div className="max-w-7xl mx-auto px-5 md:px-10 py-16">
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12"
          variants={containerVariant}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.15 }}
        >
          {/* Col 1 — Brand */}
          <motion.div variants={columnVariant} className="flex flex-col gap-5">
            <div className="flex items-center gap-2">
              <img src="/hero/logo.webp" alt="City Lassi Logo" className="w-10 h-10 object-contain flex-shrink-0" />
              <span className="font-display font-bold text-xl text-white">City Lassi</span>
            </div>
            <p className="font-body text-white/60 text-sm leading-relaxed max-w-[280px]">
              City Lassy – Dubai’s favorite spot for fresh lassis, faloodas, milkshakes, and juices. Sip happiness with every glass, delivered with love across Deira and beyond.
            </p>
            <div className="flex items-center gap-3 mt-1">
              {[
                { Icon: FacebookIcon, label: 'Facebook' },
                { Icon: InstagramIcon, label: 'Instagram' },
              ].map(({ Icon, label }) => (
                <a
                  key={label}
                  href="#"
                  aria-label={`City Lassi on ${label}`}
                  className="w-9 h-9 bg-white/10 rounded-full flex items-center justify-center hover:bg-brand-yellow hover:text-brand-dark transition-colors duration-200 cursor-pointer"
                >
                  <Icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </motion.div>

          {/* Col 2 — Quick Links */}
          <motion.div variants={columnVariant}>
            <h4 className="font-heading font-semibold text-white text-base mb-5">Quick Links</h4>
            <nav aria-label="Footer navigation">
              <ul className="flex flex-col gap-3">
                {quickLinks.map((link) => (
                  <li key={link}>
                    <a
                      href={`#${link.toLowerCase()}`}
                      className="font-body text-white/60 text-sm hover:text-brand-yellow transition-colors duration-200 cursor-pointer group flex items-center gap-2"
                    >
                      <span className="w-0 h-px bg-brand-yellow transition-all duration-200 group-hover:w-3" />
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          </motion.div>

          {/* Col 3 — Menu */}
          <motion.div variants={columnVariant}>
            <h4 className="font-heading font-semibold text-white text-base mb-5">
              Menu
            </h4>
            <ul className="grid grid-cols-2 gap-2">
              {menuLinks.map((link) => (
                <li key={link}>
                  <a
                    href={`#${link.toLowerCase().replace(/ /g, '-')}`}
                    className="font-body text-white/60 text-sm hover:text-brand-yellow transition-colors duration-200 cursor-pointer"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Col 4 — Contact */}
          <motion.div variants={columnVariant}>
            <h4 className="font-heading font-semibold text-white text-base mb-5">Address</h4>
            <address className="not-italic flex flex-col gap-4">
              <a
                href="https://maps.google.com/?q=Shop#02, Al Raffi Building, Near Naif palace Hotel, Sabhka Road, Deira, Dubai"
                className="flex items-start gap-3 text-white/60 hover:text-brand-yellow transition-colors duration-200 cursor-pointer group"
                target="_blank"
                rel="noopener noreferrer"
              >
                <MapPin className="w-4 h-4 mt-0.5 flex-shrink-0 text-brand-yellow" />
                <span className="font-body text-sm leading-relaxed">
                  Shop#02, Al Raffi Building, <br />Near Naif palace Hotel, <br />Sabhka Road, Deira, Dubai
                </span>
              </a>
              <a
                href="tel:+971521064442"
                className="flex items-center gap-3 text-white/60 hover:text-brand-yellow transition-colors duration-200 cursor-pointer"
              >
                <Phone className="w-4 h-4 flex-shrink-0 text-brand-yellow" />
                <span className="font-body text-sm">+971 52 106 4442</span>
              </a>
              <a
                href="tel:+97143449122"
                className="flex items-center gap-3 text-white/60 hover:text-brand-yellow transition-colors duration-200 cursor-pointer"
              >
                <Phone className="w-4 h-4 flex-shrink-0 text-brand-yellow" />
                <span className="font-body text-sm">+971 4 3 44 91 22</span>
              </a>
              <a
                href="mailto:sales@citylassi.com"
                className="flex items-center gap-3 text-white/60 hover:text-brand-yellow transition-colors duration-200 cursor-pointer"
              >
                <Mail className="w-4 h-4 flex-shrink-0 text-brand-yellow" />
                <span className="font-body text-sm">sales@citylassi.com</span>
              </a>
            </address>
          </motion.div>
        </motion.div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-5 md:px-10 py-5 flex flex-col sm:flex-row items-center justify-between gap-3 text-sm">
          <p className="font-body text-white/40">
            &copy; {new Date().getFullYear()} City Lassi. All rights reserved.
          </p>
          <div className="flex items-center gap-4">
            <a href="#" className="font-body text-white/40 hover:text-white/70 transition-colors duration-200 cursor-pointer">
              Privacy Policy
            </a>
            <span className="text-white/20">·</span>
            <a href="#" className="font-body text-white/40 hover:text-white/70 transition-colors duration-200 cursor-pointer">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
