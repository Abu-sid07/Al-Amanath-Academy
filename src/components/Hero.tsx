import { motion } from 'framer-motion';
import { CheckCircle, MessageCircle, Download, ArrowRight } from 'lucide-react';
import { WHATSAPP_URL } from '../constants/contact';

const features = [
  'Spoken English',
  'Public Speaking',
  'Interview Skills',
  'Personality Development',
  'Career Guidance',
  'Confidence Building',
];

export default function Hero() {
  return (
    <div className="relative min-h-screen overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <img
          src="/images/hero-bg.jpg.jpeg"
          alt="Academy"
          className="h-full w-full object-cover"
        />
        <div className="hero-gradient absolute inset-0" />
      </div>

      {/* Animated particles */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(30)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full bg-white/10"
            style={{
              width: Math.random() * 6 + 2,
              height: Math.random() * 6 + 2,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [-20, 20, -20],
              opacity: [0.2, 0.8, 0.2],
            }}
            transition={{
              duration: 3 + Math.random() * 4,
              repeat: Infinity,
              delay: Math.random() * 3,
            }}
          />
        ))}
      </div>

      {/* Content */}
      <div className="relative z-10 mx-auto flex min-h-screen max-w-7xl items-center px-4 sm:px-6 lg:px-8">
        <div className="grid w-full gap-12 pt-20 pb-12 lg:grid-cols-2 lg:gap-16 lg:pt-0">
          {/* Left Column */}
          <div className="flex flex-col justify-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="mb-6 inline-flex w-fit items-center gap-2 rounded-full border border-secondary/30 bg-white/10 px-4 py-2 backdrop-blur-sm"
            >
              <span className="h-2 w-2 animate-pulse rounded-full bg-secondary" />
            
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="mb-4 font-playfair text-4xl font-bold leading-tight text-white sm:text-5xl md:text-6xl lg:text-7xl"
            >
              Speak English
              <br />
              <span className="bg-gradient-to-r from-secondary to-secondary-light bg-clip-text text-transparent">
                With Confidence
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="mb-8 max-w-lg font-inter text-lg text-white/80 md:text-xl"
            >
              Join Melapalayam's Award-Winning Spoken English Academy. Build confidence. Transform your future.
            </motion.p>

            {/* Feature Tags */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="mb-10 flex flex-wrap gap-3"
            >
              {features.map((feature, i) => (
                <motion.div
                  key={feature}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.6 + i * 0.1 }}
                  className="flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 backdrop-blur-sm"
                >
                  <CheckCircle className="h-4 w-4 text-secondary" />
                  <span className="font-inter text-sm font-medium text-white/90">{feature}</span>
                </motion.div>
              ))}
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="flex flex-wrap gap-4"
            >
              <motion.a
                href="#admissions"
                whileHover={{ scale: 1.05, boxShadow: '0 20px 40px rgba(212, 168, 67, 0.3)' }}
                whileTap={{ scale: 0.95 }}
                className="group flex items-center gap-2 rounded-full bg-gradient-to-r from-secondary to-secondary-light px-8 py-4 font-inter font-bold text-dark shadow-xl transition-all"
                onClick={(e) => {
                  e.preventDefault();
                  document.querySelector('#admissions')?.scrollIntoView({ behavior: 'smooth' });
                }}
              >
                Join Free Demo Class
                <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
              </motion.a>

              <motion.a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="flex items-center gap-2 rounded-full border-2 border-white/30 bg-white/10 px-8 py-4 font-inter font-semibold text-white backdrop-blur-sm transition-all hover:bg-white/20"
              >
                <MessageCircle className="h-5 w-5" />
                WhatsApp Us
              </motion.a>

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="flex items-center gap-2 rounded-full border-2 border-white/20 px-6 py-4 font-inter font-medium text-white/80 transition-all hover:border-white/40 hover:text-white"
              >
                <Download className="h-5 w-5" />
                Brochure
              </motion.button>
            </motion.div>
          </div>

          {/* Right Column - Decorative Card */}
          <motion.div
            initial={{ opacity: 0, x: 50, scale: 0.9 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="hidden items-center justify-center lg:flex"
          >
            <div className="relative">
              {/* Floating badges */}
              <motion.div
                animate={{ y: [-10, 10, -10] }}
                transition={{ duration: 4, repeat: Infinity }}
                className="absolute -top-6 -left-6 z-20 rounded-2xl bg-white/95 px-5 py-3 shadow-xl backdrop-blur-sm"
              >
                <p className="font-poppins text-2xl font-bold text-primary">1000+</p>
                <p className="font-inter text-xs text-gray-500">Students Trained</p>
              </motion.div>

              <motion.div
                animate={{ y: [10, -10, 10] }}
                transition={{ duration: 5, repeat: Infinity }}
                className="absolute -right-6 top-1/4 z-20 rounded-2xl bg-white/95 px-5 py-3 shadow-xl backdrop-blur-sm"
              >
                <p className="font-poppins text-2xl font-bold text-secondary-light">20+</p>
                <p className="font-inter text-xs text-gray-500">Award Events</p>
              </motion.div>

              <motion.div
                animate={{ y: [-8, 8, -8] }}
                transition={{ duration: 3.5, repeat: Infinity }}
                className="absolute -bottom-4 right-8 z-20 rounded-2xl bg-white/95 px-5 py-3 shadow-xl backdrop-blur-sm"
              >
                <p className="font-poppins text-lg font-bold text-primary">🏆 Award Winning</p>
                <p className="font-inter text-xs text-gray-500">Academy</p>
              </motion.div>

              {/* Main card */}
              <div className="relative h-[400px] w-[350px] overflow-hidden rounded-3xl border border-white/20 shadow-2xl">
                <img
                  src="/images/students-speaking.jpg"
                  alt="Students"
                  className="h-full w-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary-dark/80 via-transparent to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <p className="font-playfair text-xl font-bold text-white">Free Education</p>
                  <p className="font-inter text-sm text-white/80">Quality English for Everyone</p>
                </div>
              </div>

              {/* Glow effect */}
              <div className="absolute -inset-4 -z-10 rounded-3xl bg-gradient-to-r from-primary/20 to-secondary/20 blur-3xl" />
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 12, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="flex flex-col items-center gap-2"
        >
          <span className="font-inter text-xs tracking-wider text-white/50">SCROLL DOWN</span>
          <div className="h-8 w-5 rounded-full border-2 border-white/30">
            <motion.div
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              className="mx-auto mt-1 h-2 w-1 rounded-full bg-white/60"
            />
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
}
