import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { useScrollNavbar } from '../../hooks/useScrollNavbar';
import Button from '../ui/Button';
import { useLocation, useNavigate } from 'react-router-dom';

const navLinks = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/about' },
  { label: 'Menu', href: '/menu' },
  { label: 'Blog', href: '/blog' },
  { label: 'Contact', href: '/contact' },
];

// Pages with dark hero backgrounds where nav text should be white
const darkHeroRoutes = ['/about'];

const Navbar: React.FC = () => {
  const isScrolled = useScrollNavbar(60);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  // Determine if the current page has a dark hero
  const hasDarkHero = darkHeroRoutes.includes(location.pathname) || location.pathname === '/';

  useEffect(() => {
    if (location.hash) {
      setTimeout(() => {
        const el = document.querySelector(location.hash);
        if (el) el.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }, [location]);

  const handleNavClick = (href: string) => {
    setIsMenuOpen(false);
    if (href.startsWith('/#')) {
      const hash = href.substring(1);
      if (location.pathname !== '/') {
        navigate(href);
      } else {
        const el = document.querySelector(hash);
        if (el) el.scrollIntoView({ behavior: 'smooth' });
        // Also update url hash without triggering scroll jump
        window.history.pushState(null, '', href);
      }
    } else {
      navigate(href);
    }
  };

  return (
    <>
      <motion.nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled
          ? 'bg-white/95 backdrop-blur-md shadow-md shadow-brand-yellow/10'
          : 'bg-transparent'
          }`}
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
      >
        <div className="max-w-7xl mx-auto px-5 md:px-10 flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <a
            href="/"
            className="flex items-center gap-2 cursor-pointer"
            onClick={(e) => { e.preventDefault(); handleNavClick('/'); }}
          >
            <img src="/hero/logo.webp" alt="City Lassi Logo" className="h-12 md:h-16 w-auto object-contain flex-shrink-0" />
          </a>

          {/* Desktop links */}
          <ul className="hidden md:flex items-center gap-8">
            {navLinks.map((link, i) => (
              <motion.li
                key={link.label}
                initial={{ y: -20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.1 + i * 0.07, duration: 0.4, ease: 'easeOut' }}
              >
                <a
                  href={link.href}
                  onClick={(e) => { e.preventDefault(); handleNavClick(link.href); }}
                  className={`font-body text-sm font-medium transition-colors duration-200 cursor-pointer relative group ${isScrolled ? 'text-brand-dark hover:text-brand-orange' : hasDarkHero ? 'text-white/90 hover:text-brand-yellow' : 'text-brand-dark hover:text-brand-orange'}`}
                >
                  {link.label}
                  <span className="absolute -bottom-0.5 left-0 w-0 h-0.5 bg-brand-yellow rounded-full transition-all duration-300 group-hover:w-full" />
                </a>
              </motion.li>
            ))}
          </ul>

          {/* Desktop CTA */}
          <div className="hidden md:flex items-center gap-3">
            <motion.div
              initial={{ y: -20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.4 }}
            >
              <a href="https://api.whatsapp.com/send/?phone=971521064442&text&type=phone_number&app_absent=0" target="_blank" rel="noopener noreferrer">
                <Button variant="primary" size="sm">Order Now</Button>
              </a>
            </motion.div>
          </div>

          {/* Mobile hamburger */}
          <button
            className={`flex md:hidden items-center justify-center w-10 h-10 rounded-full transition-colors duration-200 cursor-pointer ${isScrolled ? 'hover:bg-brand-lemon' : hasDarkHero ? 'hover:bg-white/10' : 'hover:bg-brand-lemon'}`}
            onClick={() => setIsMenuOpen((v) => !v)}
            aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
          >
            {isMenuOpen ? (
              <X className={`w-5 h-5 ${isScrolled || !hasDarkHero ? 'text-brand-dark' : 'text-white'}`} />
            ) : (
              <Menu className={`w-5 h-5 ${isScrolled || !hasDarkHero ? 'text-brand-dark' : 'text-white'}`} />
            )}
          </button>
        </div>
      </motion.nav>

      {/* Mobile overlay menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            className="fixed inset-0 z-40 bg-brand-cream/98 backdrop-blur-sm flex flex-col items-center justify-center gap-8"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.25 }}
          >
            <ul className="flex flex-col items-center gap-6">
              {navLinks.map((link, i) => (
                <motion.li
                  key={link.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.07, duration: 0.3 }}
                >
                  <a
                    href={link.href}
                    onClick={(e) => { e.preventDefault(); handleNavClick(link.href); }}
                    className="font-display text-3xl font-semibold text-brand-dark hover:text-brand-orange transition-colors duration-200 cursor-pointer"
                  >
                    {link.label}
                  </a>
                </motion.li>
              ))}
            </ul>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.3 }}
            >
              <a href="https://api.whatsapp.com/send/?phone=971521064442&text&type=phone_number&app_absent=0" target="_blank" rel="noopener noreferrer">
                <Button variant="primary" size="lg" onClick={() => setIsMenuOpen(false)}>
                  Order Now
                </Button>
              </a>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
