import { motion } from 'framer-motion';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { Download, BookOpen, FileText, Mic, Briefcase, MessageCircle } from 'lucide-react';
import SectionTitle from './SectionTitle';

const resources = [
  { icon: BookOpen, title: 'Vocabulary Lists', description: '1000+ essential English words with meanings and usage examples.', color: 'from-blue-500 to-blue-700' },
  { icon: FileText, title: 'Grammar Notes', description: 'Comprehensive grammar rules, tenses, and sentence structures.', color: 'from-green-500 to-emerald-700' },
  { icon: Mic, title: 'Public Speaking Guide', description: 'Tips, techniques and frameworks for effective public speaking.', color: 'from-purple-500 to-violet-700' },
  { icon: Briefcase, title: 'Interview Prep Guide', description: 'Common questions, STAR method, and confidence-building techniques.', color: 'from-orange-500 to-red-600' },
  { icon: MessageCircle, title: 'Daily Speaking Challenge', description: '30-day challenge to practice English speaking every day.', color: 'from-pink-500 to-rose-600' },
];

export default function StudentResources() {
  const { ref, inView } = useScrollAnimation();

  return (
    <div className="relative bg-warm py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionTitle
          subtitle="Free Downloads"
          title="Student Resources"
          description="Access free learning materials to accelerate your English learning journey."
        />

        <div ref={ref} className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {resources.map((resource, i) => (
            <motion.div
              key={resource.title}
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              whileHover={{ y: -8 }}
              className="group relative overflow-hidden rounded-2xl bg-white p-6 shadow-lg transition-all hover:shadow-2xl"
            >
              <div className={`mb-4 flex h-14 w-14 items-center justify-center rounded-xl bg-gradient-to-br ${resource.color} shadow-lg`}>
                <resource.icon className="h-7 w-7 text-white" />
              </div>

              <h3 className="mb-2 font-playfair text-lg font-bold text-dark">{resource.title}</h3>
              <p className="mb-6 font-inter text-sm text-gray-500 leading-relaxed">{resource.description}</p>

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="flex items-center gap-2 rounded-full bg-gray-100 px-5 py-2 font-inter text-sm font-semibold text-gray-700 transition-all hover:bg-primary hover:text-white"
              >
                <Download className="h-4 w-4" />
                Download Free
              </motion.button>

              {/* Corner decoration */}
              <div className={`absolute -top-10 -right-10 h-24 w-24 rounded-full bg-gradient-to-br ${resource.color} opacity-5 transition-opacity group-hover:opacity-10`} />
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
