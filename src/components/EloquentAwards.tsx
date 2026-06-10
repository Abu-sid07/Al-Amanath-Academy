import { motion } from 'framer-motion';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { Trophy, Mic, Users, Sparkles } from 'lucide-react';
import SectionTitle from './SectionTitle';

const events = [
  {
    title: '17th Eloquent Speaker Awards',
    highlights: ['12 Student Participants', 'Guest Speakers', '3 Award Categories', 'Live Audience'],
    description: 'A milestone event showcasing the speaking talents of our students.',
  },
  {
    title: '20th Eloquent Speaker Awards',
    highlights: ['20+ Participants', 'Distinguished Guests', '5 Award Categories', 'Community Recognition'],
    description: 'Our landmark 20th event featuring expanded categories and guest appearances.',
  },
];

const features = [
  { icon: Mic, label: 'Communication', description: 'Express ideas clearly' },
  { icon: Users, label: 'Leadership', description: 'Lead with confidence' },
  { icon: Sparkles, label: 'Confidence', description: 'Own the stage' },
  { icon: Trophy, label: 'Public Speaking', description: 'Master the art' },
];

export default function EloquentAwards() {
  const { ref, inView } = useScrollAnimation();

  return (
    <div className="relative bg-gradient-to-br from-dark via-primary-dark to-accent py-20 lg:py-28">
      {/* Decorative trophies */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute text-3xl opacity-5"
            style={{ left: `${Math.random() * 100}%`, top: `${Math.random() * 100}%` }}
            animate={{ rotate: [0, 10, -10, 0], scale: [1, 1.1, 1] }}
            transition={{ duration: 4 + Math.random() * 3, repeat: Infinity, delay: i * 0.5 }}
          >
            🏆
          </motion.div>
        ))}
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionTitle
          subtitle="Signature Event"
          title="Eloquent Speaker Awards"
          description="A platform where students showcase Communication, Leadership, Confidence and Public Speaking mastery."
          light
        />

        {/* Features */}
        <div ref={ref} className="mb-16 grid grid-cols-2 gap-4 md:grid-cols-4">
          {features.map((feat, i) => (
            <motion.div
              key={feat.label}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: i * 0.1 }}
              className="rounded-2xl border border-white/10 bg-white/5 p-6 text-center backdrop-blur-sm"
            >
              <div className="mx-auto mb-3 flex h-12 w-12 items-center justify-center rounded-full bg-secondary/20">
                <feat.icon className="h-6 w-6 text-secondary" />
              </div>
              <h4 className="font-poppins text-sm font-bold text-white">{feat.label}</h4>
              <p className="mt-1 font-inter text-xs text-white/50">{feat.description}</p>
            </motion.div>
          ))}
        </div>

        {/* Event Cards */}
        <div className="grid gap-8 md:grid-cols-2">
          {events.map((event, i) => (
            <motion.div
              key={event.title}
              initial={{ opacity: 0, x: i === 0 ? -40 : 40 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.3 + i * 0.2 }}
              whileHover={{ y: -8 }}
              className="group relative overflow-hidden rounded-3xl"
            >
              <div className="relative h-full">
                <img
                  src="/images/award-ceremony.jpg"
                  alt={event.title}
                  className="h-64 w-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-dark via-dark/80 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <div className="mb-2 flex items-center gap-2">
                    <Trophy className="h-5 w-5 text-secondary" />
                    <h3 className="font-playfair text-xl font-bold text-white">{event.title}</h3>
                  </div>
                  <p className="mb-4 font-inter text-sm text-white/70">{event.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {event.highlights.map((h) => (
                      <span key={h} className="rounded-full bg-white/10 px-3 py-1 text-xs font-medium text-white/80">
                        {h}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
