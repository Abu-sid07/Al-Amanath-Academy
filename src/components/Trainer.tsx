import { motion } from 'framer-motion';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { GraduationCap, Award, Mic, Users } from 'lucide-react';
import SectionTitle from './SectionTitle';

const qualifications = [
  'M.Com', 'M.A (English)', 'PGDSE', 'B.Ed', 'D.A.T',
];

const specializations = [
  { icon: Mic, label: 'Spoken English' },
  { icon: Users, label: 'Public Speaking' },
  { icon: Award, label: 'Personality Development' },
  { icon: GraduationCap, label: 'Interview Training' },
];

export default function Trainer() {
  const { ref, inView } = useScrollAnimation();

  return (
    <div className="relative bg-gradient-to-br from-dark via-dark-light to-accent py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionTitle
          subtitle="Meet Our Trainer"
          title="The Guide Behind Your Success"
          light
        />

        <div ref={ref} className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
          {/* Photo */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7 }}
            className="relative flex justify-center"
          >
            <div className="relative">
              <motion.div
                whileHover={{ scale: 1.02 }}
                className="relative h-[450px] w-[350px] overflow-hidden rounded-3xl shadow-2xl"
              >
                <img
                  src="/KAJA SIR.png"
                  alt="S.M. Khaja Mohideen"
                  className="h-full w-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary-dark/80 via-transparent to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <h3 className="font-playfair text-2xl font-bold text-white">S.M. Khaja Mohideen</h3>
                  <p className="font-inter text-sm text-secondary-light">English Fluency Guide</p>
                </div>
              </motion.div>

              {/* Floating badge */}
              <motion.div
                animate={{ y: [-5, 5, -5] }}
                transition={{ duration: 3, repeat: Infinity }}
                className="absolute -top-4 -right-4 rounded-xl bg-secondary px-4 py-2 shadow-xl"
              >
                <p className="font-poppins text-sm font-bold text-dark">5+ Degrees</p>
              </motion.div>

              {/* Decorative border */}
              <div className="absolute -inset-3 -z-10 rounded-3xl border-2 border-secondary/20" />
              <div className="absolute -inset-6 -z-20 rounded-3xl border border-white/5" />
            </div>
          </motion.div>

          {/* Info */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <h3 className="mb-2 font-playfair text-3xl font-bold text-white">S.M. Khaja Mohideen</h3>
            <p className="mb-6 font-poppins text-lg font-medium text-secondary">English Fluency Guide</p>

            {/* Qualifications */}
            <div className="mb-8">
              <h4 className="mb-4 font-poppins text-sm font-bold tracking-wider text-white/50 uppercase">Qualifications</h4>
              <div className="flex flex-wrap gap-2">
                {qualifications.map((q) => (
                  <span key={q} className="rounded-full border border-white/20 bg-white/5 px-4 py-2 font-inter text-sm text-white/80">
                    {q}
                  </span>
                ))}
              </div>
            </div>

            {/* Specializations */}
            <div className="mb-8">
              <h4 className="mb-4 font-poppins text-sm font-bold tracking-wider text-white/50 uppercase">Specialization</h4>
              <div className="grid grid-cols-2 gap-3">
                {specializations.map((spec, i) => (
                  <motion.div
                    key={spec.label}
                    initial={{ opacity: 0, y: 20 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ delay: 0.4 + i * 0.1 }}
                    className="flex items-center gap-3 rounded-xl border border-white/10 bg-white/5 p-4"
                  >
                    <spec.icon className="h-5 w-5 text-secondary" />
                    <span className="font-inter text-sm text-white/80">{spec.label}</span>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Trainer message */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.6 }}
              className="rounded-2xl border border-secondary/20 bg-secondary/5 p-6"
            >
              <p className="font-inter text-white/80 leading-relaxed italic">
                "Education is not about filling a bucket, but lighting a fire. Every student who walks through our doors has the potential to become a confident leader. My mission is to unlock that potential through the power of English communication."
              </p>
              <p className="mt-3 font-poppins text-sm font-semibold text-secondary">— Khaja Sir</p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
