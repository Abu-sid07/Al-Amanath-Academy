import { motion } from 'framer-motion';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { Heart, Trophy, Mic, GraduationCap, Users } from 'lucide-react';

const features = [
  { icon: Heart, title: 'Free Spoken English Training', description: 'Quality education accessible to all, regardless of financial background.', color: 'bg-rose-500' },
  { icon: Trophy, title: 'Award-Winning Academy', description: 'Recognized for educational excellence and community impact.', color: 'bg-yellow-500' },
  { icon: Mic, title: '20+ Eloquent Speaker Awards', description: 'Our signature platform for showcasing student talent.', color: 'bg-blue-500' },
  { icon: GraduationCap, title: 'Experienced Trainer', description: 'S.M. Khaja Mohideen — 5 degrees, decades of experience.', color: 'bg-green-500' },
  { icon: Users, title: 'Student Leadership System', description: 'Unique coordinator system empowering student leaders.', color: 'bg-purple-500' },
];

export default function UniqueFeatures() {
  const { ref, inView } = useScrollAnimation();

  return (
    <div className="relative overflow-hidden bg-gradient-to-r from-primary via-primary-dark to-accent py-16">
      {/* Marquee-style scrolling banner */}
      <div ref={ref} className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.p
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          className="mb-8 text-center font-poppins text-xs font-bold tracking-[0.3em] text-white/50 uppercase"
        >
          What Makes Us Unique
        </motion.p>

        <div className="flex flex-wrap items-center justify-center gap-4">
          {features.map((feat, i) => (
            <motion.div
              key={feat.title}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: i * 0.1 }}
              whileHover={{ scale: 1.05, y: -4 }}
              className="flex items-center gap-3 rounded-full border border-white/10 bg-white/5 px-5 py-3 backdrop-blur-sm"
            >
              <div className={`flex h-8 w-8 items-center justify-center rounded-full ${feat.color}`}>
                <feat.icon className="h-4 w-4 text-white" />
              </div>
              <div>
                <p className="font-poppins text-sm font-semibold text-white">{feat.title}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
