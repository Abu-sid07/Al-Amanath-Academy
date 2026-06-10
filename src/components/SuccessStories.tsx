import { motion } from 'framer-motion';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { ArrowDown, Quote } from 'lucide-react';
import SectionTitle from './SectionTitle';

const stories = [
  {
    name: 'Fathima R.',
    role: 'College Student',
    before: 'Struggled with basic English conversations',
    journey: 'Completed 4-month program with consistent practice',
    after: 'Now speaks confidently in college presentations',
    emoji: '👩‍🎓',
    quote: 'Al Amanath changed my life. I went from being afraid to speak to winning a debate competition!',
  },
  {
    name: 'Mohammed A.',
    role: 'Job Seeker',
    before: 'Failed multiple interviews due to communication',
    journey: 'Focused on interview skills and professional communication',
    after: 'Secured a job in a multinational company',
    emoji: '👨‍💼',
    quote: 'The interview training module was a game-changer. I got my dream job within 2 months of completing the course.',
  },
  {
    name: 'Priya S.',
    role: 'Working Professional',
    before: 'Lacked confidence in workplace communication',
    journey: 'Improved through public speaking and personality development',
    after: 'Promoted to team lead with excellent communication reviews',
    emoji: '👩‍💻',
    quote: 'The public speaking sessions gave me the confidence to present in front of my entire company.',
  },
];

export default function SuccessStories() {
  const { ref, inView } = useScrollAnimation();

  return (
    <div className="relative bg-gradient-to-br from-primary-dark via-dark to-accent py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionTitle
          subtitle="Transformations"
          title="Student Success Stories"
          description="Real stories of transformation from students who dared to speak."
          light
        />

        <div ref={ref} className="grid gap-8 lg:grid-cols-3">
          {stories.map((story, i) => (
            <motion.div
              key={story.name}
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.2 }}
              whileHover={{ y: -8 }}
              className="group rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-sm transition-all hover:bg-white/10"
            >
              {/* Avatar & Info */}
              <div className="mb-6 flex items-center gap-4">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br from-secondary/20 to-primary/20 text-3xl">
                  {story.emoji}
                </div>
                <div>
                  <h4 className="font-playfair text-lg font-bold text-white">{story.name}</h4>
                  <p className="font-inter text-sm text-secondary">{story.role}</p>
                </div>
              </div>

              {/* Journey */}
              <div className="mb-6 space-y-3">
                <div className="rounded-xl bg-red-500/10 p-3">
                  <p className="font-inter text-xs font-semibold text-red-400 uppercase">Before Joining</p>
                  <p className="mt-1 font-inter text-sm text-white/70">{story.before}</p>
                </div>

                <div className="flex justify-center">
                  <ArrowDown className="h-5 w-5 text-secondary animate-bounce" />
                </div>

                <div className="rounded-xl bg-yellow-500/10 p-3">
                  <p className="font-inter text-xs font-semibold text-yellow-400 uppercase">Training Journey</p>
                  <p className="mt-1 font-inter text-sm text-white/70">{story.journey}</p>
                </div>

                <div className="flex justify-center">
                  <ArrowDown className="h-5 w-5 text-secondary animate-bounce" />
                </div>

                <div className="rounded-xl bg-green-500/10 p-3">
                  <p className="font-inter text-xs font-semibold text-green-400 uppercase">Current Success</p>
                  <p className="mt-1 font-inter text-sm text-white/70">{story.after}</p>
                </div>
              </div>

              {/* Quote */}
              <div className="rounded-xl border border-white/10 bg-white/5 p-4">
                <Quote className="mb-2 h-4 w-4 text-secondary" />
                <p className="font-inter text-sm text-white/70 italic">"{story.quote}"</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
