import { motion } from 'framer-motion';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import SectionTitle from './SectionTitle';

const milestones = [
  { year: 'Year 1', title: 'Started Spoken English Program', description: 'Launched the foundation with basic spoken English classes for local youth.', icon: '🎯' },
  { year: 'Year 2', title: 'Expanded Public Speaking', description: 'Introduced public speaking activities, stage performances and debates.', icon: '🎤' },
  { year: 'Year 3', title: 'Eloquent Speaker Awards', description: 'Created the signature Eloquent Speaker Awards platform for students.', icon: '🏆' },
  { year: 'Year 4', title: 'Hundreds Trained', description: 'Reached a milestone of training hundreds of students in communication.', icon: '👥' },
  { year: 'Year 5', title: 'Excellence Recognition', description: 'Received educational excellence recognition and community awards.', icon: '🎖️' },
  { year: 'Year 6', title: 'Continuing Impact', description: 'Ongoing community development with expanding programs and events.', icon: '🚀' },
];

export default function Timeline() {
  const { ref, inView } = useScrollAnimation();

  return (
    <div className="relative bg-gradient-to-br from-primary-dark via-dark to-accent py-20 lg:py-28">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)',
          backgroundSize: '60px 60px',
        }} />
      </div>

      <div className="relative mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <SectionTitle
          subtitle="Academy Journey"
          title="Our Growth Story"
          description="From a small initiative to an award-winning English academy."
          light
        />

        <div ref={ref} className="relative">
          {/* Center line */}
          <motion.div
            initial={{ scaleY: 0 }}
            animate={inView ? { scaleY: 1 } : {}}
            transition={{ duration: 1.5 }}
            className="absolute left-1/2 top-0 bottom-0 hidden w-0.5 -translate-x-1/2 origin-top bg-gradient-to-b from-secondary via-primary-light to-secondary md:block"
          />

          {/* Mobile line */}
          <motion.div
            initial={{ scaleY: 0 }}
            animate={inView ? { scaleY: 1 } : {}}
            transition={{ duration: 1.5 }}
            className="absolute left-8 top-0 bottom-0 w-0.5 origin-top bg-gradient-to-b from-secondary via-primary-light to-secondary md:hidden"
          />

          <div className="space-y-12">
            {milestones.map((milestone, i) => (
              <motion.div
                key={milestone.year}
                initial={{ opacity: 0, x: i % 2 === 0 ? -50 : 50 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, delay: i * 0.2 }}
                className={`relative flex items-center gap-6 md:gap-0 ${i % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}
              >
                {/* Content card */}
                <div className={`flex-1 ${i % 2 === 0 ? 'md:pr-16 md:text-right' : 'md:pl-16'}`}>
                  <motion.div
                    whileHover={{ scale: 1.03 }}
                    className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm transition-all hover:bg-white/10"
                  >
                    <span className="inline-block rounded-full bg-secondary/20 px-3 py-1 font-poppins text-xs font-bold text-secondary">
                      {milestone.year}
                    </span>
                    <h3 className="mt-3 font-playfair text-xl font-bold text-white">{milestone.title}</h3>
                    <p className="mt-2 font-inter text-sm text-white/60">{milestone.description}</p>
                  </motion.div>
                </div>

                {/* Center dot */}
                <motion.div
                  initial={{ scale: 0 }}
                  animate={inView ? { scale: 1 } : {}}
                  transition={{ delay: i * 0.2 + 0.3, type: 'spring' }}
                  className="absolute left-6 z-10 flex h-5 w-5 items-center justify-center rounded-full bg-secondary shadow-lg shadow-secondary/30 md:left-1/2 md:-translate-x-1/2"
                >
                  <div className="h-2 w-2 rounded-full bg-white" />
                </motion.div>

                {/* Empty space for other side */}
                <div className="hidden flex-1 md:block" />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
