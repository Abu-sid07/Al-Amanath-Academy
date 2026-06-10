import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { BookOpen, MessageCircle, Briefcase, Mic, Star, ChevronRight } from 'lucide-react';
import SectionTitle from './SectionTitle';

const modules = [
  {
    id: 1,
    icon: BookOpen,
    title: 'English Foundation',
    subtitle: 'Module 1',
    color: 'from-blue-500 to-blue-700',
    items: ['Parts of Speech', 'Basic Grammar', 'Tenses', 'Vocabulary Building'],
    duration: '4 Weeks',
  },
  {
    id: 2,
    icon: MessageCircle,
    title: 'Daily Communication',
    subtitle: 'Module 2',
    color: 'from-green-500 to-emerald-700',
    items: ['Daily Conversations', 'Introductions', 'Social Communication', 'Public Interactions'],
    duration: '4 Weeks',
  },
  {
    id: 3,
    icon: Briefcase,
    title: 'Professional Communication',
    subtitle: 'Module 3',
    color: 'from-purple-500 to-purple-700',
    items: ['Interview Skills', 'Resume Presentation', 'Group Discussion', 'Workplace Communication'],
    duration: '4 Weeks',
  },
  {
    id: 4,
    icon: Mic,
    title: 'Public Speaking Mastery',
    subtitle: 'Module 4',
    color: 'from-orange-500 to-red-600',
    items: ['Stage Confidence', 'Speech Delivery', 'Debate', 'Impromptu Speech', 'Storytelling'],
    duration: '4 Weeks',
  },
];

const bonusItems = ['Personality Development', 'Career Guidance', 'Leadership Skills', 'Confidence Building'];

export default function Courses() {
  const { ref, inView } = useScrollAnimation();
  const [activeModule, setActiveModule] = useState(0);

  return (
    <div className="relative bg-white py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionTitle
          subtitle="Our Program"
          title="4-Month Spoken English Mastery"
          description="A comprehensive, structured program designed to transform you from a beginner to a confident English speaker."
        />

        {/* Module Cards */}
        <div ref={ref} className="mb-16 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {modules.map((mod, i) => (
            <motion.div
              key={mod.id}
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              whileHover={{ y: -8 }}
              onClick={() => setActiveModule(i)}
              className={`group cursor-pointer rounded-2xl border-2 p-6 transition-all ${
                activeModule === i
                  ? 'border-primary bg-primary/5 shadow-xl'
                  : 'border-gray-100 bg-white shadow-md hover:border-primary/30 hover:shadow-lg'
              }`}
            >
              <div className={`mb-4 flex h-14 w-14 items-center justify-center rounded-xl bg-gradient-to-br ${mod.color} shadow-lg`}>
                <mod.icon className="h-7 w-7 text-white" />
              </div>

              <span className="font-poppins text-xs font-bold tracking-wider text-gray-400 uppercase">
                {mod.subtitle}
              </span>
              <h3 className="mt-1 mb-1 font-playfair text-lg font-bold text-dark">{mod.title}</h3>
              <p className="mb-4 font-inter text-xs text-gray-400">{mod.duration}</p>

              <ul className="space-y-2">
                {mod.items.map((item) => (
                  <li key={item} className="flex items-center gap-2 font-inter text-sm text-gray-600">
                    <ChevronRight className="h-3 w-3 text-primary" />
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Active Module Detail */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeModule}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className={`rounded-3xl bg-gradient-to-r ${modules[activeModule].color} p-8 text-white shadow-2xl md:p-12`}
          >
            <div className="grid items-center gap-8 md:grid-cols-2">
              <div>
                <span className="mb-2 inline-block rounded-full bg-white/20 px-4 py-1 text-sm font-semibold">
                  {modules[activeModule].subtitle}
                </span>
                <h3 className="mt-3 font-playfair text-3xl font-bold">{modules[activeModule].title}</h3>
                <p className="mt-3 text-white/80">{modules[activeModule].duration} of focused training</p>
              </div>
              <div className="grid grid-cols-2 gap-3">
                {modules[activeModule].items.map((item, i) => (
                  <motion.div
                    key={item}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: i * 0.1 }}
                    className="rounded-xl bg-white/15 p-3 text-center backdrop-blur-sm"
                  >
                    <span className="font-inter text-sm font-medium">{item}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Bonus Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-12 rounded-2xl border-2 border-dashed border-secondary/40 bg-secondary/5 p-8"
        >
          <div className="flex items-center gap-3 mb-6">
            <Star className="h-6 w-6 text-secondary" />
            <h3 className="font-playfair text-2xl font-bold text-dark">Bonus Training</h3>
          </div>
          <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
            {bonusItems.map((item) => (
              <div key={item} className="flex items-center gap-2 rounded-xl bg-white p-4 shadow-sm">
                <Star className="h-4 w-4 text-secondary" />
                <span className="font-inter text-sm font-medium text-gray-700">{item}</span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
}
