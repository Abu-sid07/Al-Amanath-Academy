import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface PreloaderProps {
  onComplete: () => void;
}

export default function Preloader({ onComplete }: PreloaderProps) {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(timer);
          setTimeout(onComplete, 500);
          return 100;
        }
        return prev + 2;
      });
    }, 30);
    return () => clearInterval(timer);
  }, [onComplete]);

  return (
    <AnimatePresence>
      <motion.div
        className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-gradient-to-br from-primary-dark via-dark to-accent"
        exit={{ opacity: 0, scale: 1.1 }}
        transition={{ duration: 0.5 }}
      >
        {/* Animated background particles */}
        <div className="absolute inset-0 overflow-hidden">
          {[...Array(20)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute h-2 w-2 rounded-full bg-secondary/30"
              initial={{
                x: Math.random() * (typeof window !== 'undefined' ? window.innerWidth : 1000),
                y: Math.random() * (typeof window !== 'undefined' ? window.innerHeight : 800),
              }}
              animate={{
                y: [null, -100],
                opacity: [0, 1, 0],
              }}
              transition={{
                duration: 2 + Math.random() * 2,
                repeat: Infinity,
                delay: Math.random() * 2,
              }}
            />
          ))}
        </div>

        {/* Logo with Abu Photo */}
        <motion.div
          initial={{ scale: 0, rotate: -180 }}
          animate={{ scale: 1, rotate: 0 }}
          transition={{ type: 'spring', stiffness: 200, damping: 15 }}
          className="relative mb-8 flex items-center justify-center gap-4"
        >
          <div className="h-24 w-24 overflow-hidden rounded-full shadow-2xl ring-4 ring-secondary/30">
            <img
              src="/images/academy-logo.png"
              alt="Al Amanath English Academy"
              className="h-full w-full object-cover"
            />
          </div>
          
          <motion.div
            className="absolute -inset-2 rounded-full border-2 border-secondary/50"
            animate={{ rotate: 360 }}
            transition={{ duration: 3, repeat: Infinity, ease: 'linear' }}
          />
        </motion.div>

        {/* Academy name */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="mb-2 font-playfair text-3xl font-bold text-white md:text-4xl"
        >
          Al Amanath
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="mb-8 font-poppins text-sm tracking-[0.3em] text-secondary-light"
        >
          ENGLISH ACADEMY
        </motion.p>

        {/* Progress bar */}
        <motion.div
          initial={{ opacity: 0, width: 0 }}
          animate={{ opacity: 1, width: 200 }}
          transition={{ delay: 0.7 }}
          className="h-1 overflow-hidden rounded-full bg-white/10"
          style={{ width: 200 }}
        >
          <motion.div
            className="h-full rounded-full bg-gradient-to-r from-secondary to-primary-light"
            style={{ width: `${progress}%` }}
            transition={{ duration: 0.1 }}
          />
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="mt-4 font-inter text-xs text-white/60"
        >
          Loading Excellence...
        </motion.p>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="mt-6 font-inter text-xs text-white/40 text-center"
        >
          This webpage created by Abu Software Developer
        </motion.p>
      </motion.div>
    </AnimatePresence>
  );
}
