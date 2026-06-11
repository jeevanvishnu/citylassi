import React from 'react';
import { motion } from 'framer-motion';
import { Leaf, Camera, Globe, Send, MapPin, Phone, Mail, Clock } from 'lucide-react';

const quickLinks = ['Home', 'About', 'Menu', 'Blog', 'Contact'];

const hours = [
  { day: 'Monday – Friday', time: '8:00 AM – 10:00 PM' },
  { day: 'Saturday', time: '7:00 AM – 11:00 PM' },
  { day: 'Sunday', time: '9:00 AM – 9:00 PM' },
];

const columnVariant = {
  hidden: { y: 40, opacity: 0 },
  show: { y: 0, opacity: 1, transition: { duration: 0.6, ease: 'easeOut' } },
};

const containerVariant = {
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
            <p className="font-body text-white/60 text-sm leading-relaxed max-w-[240px]">
              Blending freshness &amp; tradition in every sip. Pure, handcrafted, and made with love since 2010.
            </p>
            <div className="flex items-center gap-3 mt-1">
              {[
                { Icon: Camera, label: 'Instagram' },
                { Icon: Globe, label: 'Facebook' },
                { Icon: Send, label: 'WhatsApp' },
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

          {/* Col 3 — Opening Hours */}
          <motion.div variants={columnVariant}>
            <h4 className="font-heading font-semibold text-white text-base mb-5 flex items-center gap-2">
              <Clock className="w-4 h-4 text-brand-yellow" />
              We're Open
            </h4>
            <ul className="flex flex-col gap-3">
              {hours.map((h) => (
                <li key={h.day} className="flex flex-col gap-0.5">
                  <span className="font-body text-white/80 text-sm">{h.day}</span>
                  <span className="font-accent text-brand-yellow text-base">{h.time}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Col 4 — Contact */}
          <motion.div variants={columnVariant}>
            <h4 className="font-heading font-semibold text-white text-base mb-5">Get in Touch</h4>
            <address className="not-italic flex flex-col gap-4">
              <a
                href="https://maps.google.com"
                className="flex items-start gap-3 text-white/60 hover:text-brand-yellow transition-colors duration-200 cursor-pointer group"
                target="_blank"
                rel="noopener noreferrer"
              >
                <MapPin className="w-4 h-4 mt-0.5 flex-shrink-0 text-brand-yellow" />
                <span className="font-body text-sm leading-relaxed">
                  12, MG Road, Matunga,<br />Mumbai, Maharashtra 400019
                </span>
              </a>
              <a
                href="tel:+912212345678"
                className="flex items-center gap-3 text-white/60 hover:text-brand-yellow transition-colors duration-200 cursor-pointer"
              >
                <Phone className="w-4 h-4 flex-shrink-0 text-brand-yellow" />
                <span className="font-body text-sm">+91 22 1234 5678</span>
              </a>
              <a
                href="mailto:hello@citylassi.com"
                className="flex items-center gap-3 text-white/60 hover:text-brand-yellow transition-colors duration-200 cursor-pointer"
              >
                <Mail className="w-4 h-4 flex-shrink-0 text-brand-yellow" />
                <span className="font-body text-sm">hello@citylassi.com</span>
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
