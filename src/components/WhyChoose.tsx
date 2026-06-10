import { motion } from 'framer-motion';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { Heart, Award, BookOpen, Users } from 'lucide-react';
import SectionTitle from './SectionTitle';

const reasons = [
  {
    icon: Heart,
    title: 'Free Education Initiative',
    description: 'Providing quality English education to students regardless of financial background.',
    gradient: 'from-rose-500 to-pink-600',
    bg: 'bg-rose-50',
  },
  {
    icon: Award,
    title: 'Award Winning Academy',
    description: 'Recipient of educational excellence recognition and multiple community awards.',
    gradient: 'from-yellow-500 to-orange-500',
    bg: 'bg-yellow-50',
  },
  {
    icon: BookOpen,
    title: 'Practical Learning',
    description: 'Students learn by speaking, presenting, debating and participating in real scenarios.',
    gradient: 'from-blue-500 to-indigo-600',
    bg: 'bg-blue-50',
  },
  {
    icon: Users,
    title: 'Community Development',
    description: 'Building confident leaders for society through communication and leadership skills.',
    gradient: 'from-green-500 to-emerald-600',
    bg: 'bg-green-50',
  },
];

export default function WhyChoose() {
  const { ref, inView } = useScrollAnimation();

  return (
    <div className="relative overflow-hidden bg-warm py-20 lg:py-28">
      {/* Decorative elements */}
      <div className="absolute top-0 right-0 h-72 w-72 rounded-full bg-primary/5 blur-3xl" />
      <div className="absolute bottom-0 left-0 h-72 w-72 rounded-full bg-secondary/5 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionTitle
          subtitle="Why Choose Us"
          title="Why Choose Al Amanath?"
          description="Discover what makes our academy the preferred choice for English learners in Melapalayam and Tirunelveli."
        />

        <div ref={ref} className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {reasons.map((reason, i) => (
            <motion.div
              key={reason.title}
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.15 }}
              whileHover={{ y: -12, scale: 1.02 }}
              className="group relative rounded-2xl bg-white p-8 shadow-lg transition-all hover:shadow-2xl"
            >
              {/* Top gradient bar */}
              <div className={`absolute top-0 left-0 right-0 h-1 rounded-t-2xl bg-gradient-to-r ${reason.gradient}`} />

              <div className={`mb-6 flex h-16 w-16 items-center justify-center rounded-2xl ${reason.bg} transition-transform group-hover:scale-110`}>
                <reason.icon className={`h-8 w-8 bg-gradient-to-br ${reason.gradient} bg-clip-text`} style={{ color: reason.gradient.includes('rose') ? '#f43f5e' : reason.gradient.includes('yellow') ? '#eab308' : reason.gradient.includes('blue') ? '#3b82f6' : '#22c55e' }} />
              </div>

              <h3 className="mb-3 font-playfair text-xl font-bold text-dark">{reason.title}</h3>
              <p className="font-inter text-sm leading-relaxed text-gray-600">{reason.description}</p>

              {/* Hover glow */}
              <div className={`absolute -inset-1 -z-10 rounded-2xl bg-gradient-to-r ${reason.gradient} opacity-0 blur-xl transition-opacity group-hover:opacity-10`} />
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
