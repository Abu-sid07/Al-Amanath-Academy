import { motion } from 'framer-motion';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { GraduationCap, Briefcase, BookOpen, Users } from 'lucide-react';
import SectionTitle from './SectionTitle';

const audiences = [
  { icon: BookOpen, label: 'School Students', color: 'text-blue-500' },
  { icon: GraduationCap, label: 'College Students', color: 'text-green-500' },
  { icon: Briefcase, label: 'Job Seekers', color: 'text-orange-500' },
  { icon: Users, label: 'Working Professionals', color: 'text-purple-500' },
];

export default function About() {
  const { ref, inView } = useScrollAnimation();

  return (
    <div className="relative bg-white py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionTitle
          subtitle="Our Journey"
          title="About Al Amanath English Academy"
          description="Founded under the guidance of Al Amanath Welfare Association, Melapalayam."
        />

        <div ref={ref} className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
          {/* Image side */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7 }}
            className="relative"
          >
            <div className="relative overflow-hidden rounded-3xl shadow-2xl">
              <img
                src="/images/classroom.jpg.jpg"
                alt="Classroom"
                className="h-[400px] w-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary-dark/60 via-transparent to-transparent" />
            </div>

            {/* Floating stat */}
            <motion.div
              animate={{ y: [-5, 5, -5] }}
              transition={{ duration: 3, repeat: Infinity }}
              className="absolute -bottom-6 -right-4 rounded-2xl bg-white p-5 shadow-xl md:-right-8"
            >
              <p className="font-poppins text-3xl font-bold text-primary">6+</p>
              <p className="font-inter text-sm text-gray-500">Years of Impact</p>
            </motion.div>

            {/* Decorative */}
            <div className="absolute -top-4 -left-4 h-24 w-24 rounded-2xl border-4 border-secondary/30" />
          </motion.div>

          {/* Content side */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <div className="mb-8 rounded-2xl border-l-4 border-primary bg-primary/5 p-6">
              <p className="font-inter text-lg leading-relaxed text-gray-700 italic">
                "To empower youth through English communication, confidence building, leadership and public speaking."
              </p>
              <p className="mt-2 font-poppins text-sm font-semibold text-primary">— Our Mission</p>
            </div>

            <p className="mb-8 font-inter text-gray-600 leading-relaxed">
              Our academy was established with a singular mission — to empower youth through English communication, confidence building, leadership and public speaking. For years we have helped hundreds of students find their voice and build a brighter future.
            </p>

            <h3 className="mb-6 font-playfair text-xl font-bold text-dark">Who We Help</h3>
            <div className="grid grid-cols-2 gap-4">
              {audiences.map((item, i) => (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.4 + i * 0.1 }}
                  whileHover={{ scale: 1.05 }}
                  className="flex items-center gap-3 rounded-xl border border-gray-100 bg-gray-50 p-4 transition-all hover:border-primary/20 hover:bg-primary/5"
                >
                  <item.icon className={`h-6 w-6 ${item.color}`} />
                  <span className="font-inter text-sm font-medium text-gray-700">{item.label}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
