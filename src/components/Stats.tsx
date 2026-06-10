import { motion } from 'framer-motion';
import CountUp from 'react-countup';
import { useInView } from 'react-intersection-observer';
import { Award, Users, Clock, Calendar, Mic, Trophy } from 'lucide-react';

const stats = [
  { icon: Trophy, number: 20, suffix: '+', label: 'Eloquent Speaker Awards Conducted', color: 'from-yellow-400 to-orange-500' },
  { icon: Users, number: 1000, suffix: '+', label: 'Students Trained', color: 'from-blue-400 to-blue-600' },
  { icon: Clock, number: 60, suffix: '+', label: 'Hours Structured Course', color: 'from-green-400 to-emerald-600' },
  { icon: Calendar, number: 4, suffix: ' Month', label: 'Learning Program', color: 'from-purple-400 to-purple-600' },
  { icon: Mic, number: 100, suffix: '+', label: 'Public Speaking Sessions', color: 'from-red-400 to-rose-600' },
  { icon: Award, number: 10, suffix: '+', label: 'Award Winning Academy', color: 'from-secondary to-yellow-500' },
];

export default function Stats() {
  const { ref, inView } = useInView({ threshold: 0.2, triggerOnce: true });

  return (
    <div className="relative -mt-1 bg-gradient-to-br from-dark via-dark-light to-accent py-20 lg:py-28">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: 'radial-gradient(circle at 1px 1px, white 1px, transparent 0)',
          backgroundSize: '40px 40px',
        }} />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-12 text-center"
        >
          <p className="mb-2 font-poppins text-sm font-semibold tracking-[0.2em] uppercase text-secondary">
            Since Establishment
          </p>
          <h2 className="font-playfair text-3xl font-bold text-white md:text-4xl">
            Our Impact in Numbers
          </h2>
        </motion.div>

        <div ref={ref} className="grid grid-cols-2 gap-6 md:grid-cols-3 lg:grid-cols-6">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 40, scale: 0.9 }}
              animate={inView ? { opacity: 1, y: 0, scale: 1 } : {}}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              whileHover={{ y: -8, scale: 1.05 }}
              className="group relative flex flex-col items-center rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm transition-all hover:border-white/20 hover:bg-white/10"
            >
              <div className={`mb-4 flex h-14 w-14 items-center justify-center rounded-xl bg-gradient-to-br ${stat.color} shadow-lg transition-transform group-hover:scale-110`}>
                <stat.icon className="h-7 w-7 text-white" />
              </div>
              <div className="text-center">
                <p className="font-poppins text-3xl font-bold text-white">
                  {inView ? (
                    <CountUp end={stat.number} duration={2.5} suffix={stat.suffix} />
                  ) : (
                    '0'
                  )}
                </p>
                <p className="mt-1 font-inter text-xs text-white/60 leading-tight">{stat.label}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
