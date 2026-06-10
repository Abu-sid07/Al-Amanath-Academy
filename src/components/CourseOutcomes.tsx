import { motion } from 'framer-motion';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { CheckCircle2 } from 'lucide-react';
import SectionTitle from './SectionTitle';

const outcomes = [
  'Speak English confidently',
  'Attend interviews successfully',
  'Deliver public speeches',
  'Participate in group discussions',
  'Improve pronunciation',
  'Increase self-confidence',
  'Build leadership qualities',
  'Communicate professionally',
];

export default function CourseOutcomes() {
  const { ref, inView } = useScrollAnimation();

  return (
    <div className="relative bg-warm py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionTitle
          subtitle="Course Outcomes"
          title="After Completing The Course"
          description="Students will gain comprehensive communication skills and confidence to succeed."
        />

        <div ref={ref} className="mx-auto max-w-4xl">
          <div className="grid gap-4 sm:grid-cols-2">
            {outcomes.map((outcome, i) => (
              <motion.div
                key={outcome}
                initial={{ opacity: 0, x: i % 2 === 0 ? -30 : 30 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                whileHover={{ x: 10, scale: 1.02 }}
                className="group flex items-center gap-4 rounded-xl bg-white p-5 shadow-md transition-all hover:shadow-lg"
              >
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary/10 transition-colors group-hover:bg-primary">
                  <CheckCircle2 className="h-5 w-5 text-primary transition-colors group-hover:text-white" />
                </div>
                <span className="font-inter font-medium text-gray-700">{outcome}</span>
              </motion.div>
            ))}
          </div>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-12 text-center"
          >
            <motion.a
              href="#admissions"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-primary to-primary-light px-8 py-4 font-inter font-bold text-white shadow-xl"
              onClick={(e) => {
                e.preventDefault();
                document.querySelector('#admissions')?.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              Start Your Transformation Today
            </motion.a>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
