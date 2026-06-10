import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Phone } from 'lucide-react';
import { PHONE_DISPLAY, PHONE_TEL } from '../constants/contact';

const navLinks = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  { name: 'Courses', href: '#courses' },
  { name: 'Trainer', href: '#trainer' },
  { name: 'Coordinators', href: '#coordinators' },
  { name: 'Awards', href: '#awards' },
  { name: 'Gallery', href: '#gallery' },
  { name: 'Resources', href: '#resources' },
  { name: 'Admissions', href: '#admissions' },
  { name: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollTo = (href: string) => {
    setIsOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? 'bg-white/95 shadow-lg backdrop-blur-md'
            : 'bg-transparent'
        }`}
      >
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8">
          {/* Logo */}
          <motion.a
            href="#home"
            onClick={(e) => { e.preventDefault(); scrollTo('#home'); }}
            className="flex items-center gap-3"
            whileHover={{ scale: 1.02 }}
          >
            <div className="h-10 w-10 overflow-hidden rounded-full shadow-md ring-2 ring-white/20">
              <img
                src="/images/academy-logo.png"
                alt="Al Amanath English Academy"
                className="h-full w-full object-cover"
              />
            </div>
            <div>
              <h1 className={`font-playfair text-lg font-bold leading-tight ${scrolled ? 'text-primary-dark' : 'text-white'}`}>
                Al Amanath
              </h1>
              <p className={`text-[10px] font-medium tracking-wider ${scrolled ? 'text-gray-500' : 'text-white/70'}`}>
                ENGLISH ACADEMY
              </p>
            </div>
          </motion.a>

          {/* Desktop Nav */}
          <div className="hidden items-center gap-1 lg:flex">
            {navLinks.map((link) => (
              <motion.a
                key={link.name}
                href={link.href}
                onClick={(e) => { e.preventDefault(); scrollTo(link.href); }}
                className={`rounded-lg px-3 py-2 font-inter text-sm font-medium transition-colors ${
                  scrolled
                    ? 'text-gray-700 hover:bg-primary/5 hover:text-primary'
                    : 'text-white/90 hover:bg-white/10 hover:text-white'
                }`}
                whileHover={{ y: -2 }}
                transition={{ type: 'spring', stiffness: 400 }}
              >
                {link.name}
              </motion.a>
            ))}
          </div>

          {/* CTA + Mobile Toggle */}
          <div className="flex items-center gap-3">
            <motion.a
              href={`tel:${PHONE_TEL}`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="hidden items-center gap-2 rounded-full bg-gradient-to-r from-primary to-primary-light px-5 py-2 font-inter text-sm font-semibold text-white shadow-lg shadow-primary/25 transition-shadow hover:shadow-xl sm:flex"
            >
              <Phone className="h-4 w-4" />
              Call Now
            </motion.a>

            <button
              onClick={() => setIsOpen(!isOpen)}
              className={`rounded-lg p-2 lg:hidden ${scrolled ? 'text-dark' : 'text-white'}`}
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ type: 'spring', damping: 25 }}
            className="fixed inset-0 z-40 bg-gradient-to-br from-primary-dark via-dark to-accent pt-20 lg:hidden"
          >
            <div className="flex flex-col items-center gap-2 p-6">
              {navLinks.map((link, i) => (
                <motion.a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => { e.preventDefault(); scrollTo(link.href); }}
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.05 }}
                  className="w-full rounded-xl px-6 py-3 text-center font-inter text-lg font-medium text-white/90 transition-colors hover:bg-white/10 hover:text-white"
                >
                  {link.name}
                </motion.a>
              ))}
              <motion.a
                href={`tel:${PHONE_TEL}`}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className="mt-4 flex items-center gap-2 rounded-full bg-gradient-to-r from-secondary to-secondary-light px-8 py-3 font-inter font-semibold text-dark shadow-lg"
              >
                <Phone className="h-5 w-5" />
                Call Now: {PHONE_DISPLAY}
              </motion.a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
