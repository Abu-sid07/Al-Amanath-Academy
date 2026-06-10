import { motion } from 'framer-motion';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { Star, Award, Heart, TrendingUp, Clock } from 'lucide-react';
import SectionTitle from './SectionTitle';

const stars = [
  { title: 'Best Speaker', icon: '🎤', description: 'Outstanding communication and stage presence', color: 'from-yellow-400 to-orange-500', iconComponent: Star },
  { title: 'Best Volunteer', icon: '💝', description: 'Exceptional dedication to academy growth', color: 'from-pink-400 to-rose-500', iconComponent: Heart },
  { title: 'Best Coordinator', icon: '🏅', description: 'Outstanding leadership and organizational skills', color: 'from-blue-400 to-indigo-500', iconComponent: Award },
  { title: 'Most Improved', icon: '📈', description: 'Remarkable transformation in communication', color: 'from-green-400 to-emerald-500', iconComponent: TrendingUp },
  { title: 'Best Attendance', icon: '⏰', description: 'Consistent presence and commitment to learning', color: 'from-purple-400 to-violet-500', iconComponent: Clock },
];

export default function SupportingStars() {
  const { ref, inView } = useScrollAnimation();

  return (
    <div className="relative bg-warm py-20 lg:py-28">
      {/* Background decorations */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(15)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute text-2xl opacity-10"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{ rotate: [0, 360], scale: [1, 1.2, 1] }}
            transition={{ duration: 5 + Math.random() * 5, repeat: Infinity }}
          >
            ⭐
          </motion.div>
        ))}
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionTitle
          subtitle="Supporting Stars"
          title="Academy Supporting Stars"
          description="Recognizing students and volunteers who contribute to academy growth and excellence."
        />

        <div ref={ref} className="grid gap-6 sm:grid-cols-2 lg:grid-cols-5">
          {stars.map((star, i) => (
            <motion.div
              key={star.title}
              initial={{ opacity: 0, y: 50, rotateY: 30 }}
              animate={inView ? { opacity: 1, y: 0, rotateY: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.12 }}
              whileHover={{ y: -12, scale: 1.05 }}
              className="group relative overflow-hidden rounded-2xl bg-white p-6 text-center shadow-lg transition-all hover:shadow-2xl"
            >
              {/* Top gradient */}
              <div className={`absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r ${star.color}`} />

              <motion.div
                className="mx-auto mb-4 text-5xl"
                animate={{ rotate: [0, 5, -5, 0] }}
                transition={{ duration: 2, repeat: Infinity, delay: i * 0.3 }}
              >
                {star.icon}
              </motion.div>

              <h4 className="mb-2 font-playfair text-lg font-bold text-dark">{star.title}</h4>
              <p className="font-inter text-xs text-gray-500 leading-relaxed">{star.description}</p>

              {/* Hover overlay */}
              <div className={`absolute inset-0 bg-gradient-to-br ${star.color} opacity-0 transition-opacity group-hover:opacity-5`} />
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
