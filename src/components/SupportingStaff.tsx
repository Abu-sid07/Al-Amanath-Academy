import { motion } from 'framer-motion';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { BookOpen } from 'lucide-react';
import SectionTitle from './SectionTitle';

const supportingStaff = [
  {
    name: 'G. Noorul Ameen',
    role: 'Spoken Tutor & Supportive Teacher',
    qualification: 'B.A. English Literature',
    description:
      'A dedicated educator with expertise in English Literature. Serves as a Spoken Tutor and Supportive Teacher at Al Amanath English Academy, committed to helping students master English communication and develop strong language foundations.',
    icon: BookOpen,
    image: '/ameen sir.jpeg',
  },
];

export default function SupportingStaff() {
  const { ref, inView } = useScrollAnimation();

  return (
    <div className="relative bg-warm py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionTitle
          subtitle="Our Team"
          title="Supporting Staff"
          description="Dedicated team members who support students and strengthen the academy every day."
        />

        <div ref={ref} className="mx-auto grid max-w-2xl gap-6">
          {supportingStaff.map((staff, i) => (
            <motion.div
              key={staff.name}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="flex flex-col items-center gap-4 rounded-2xl border border-gray-100 bg-white p-8 text-center shadow-md sm:flex-row sm:text-left"
            >
              <div className="h-20 w-20 shrink-0 overflow-hidden rounded-full shadow-lg">
                {staff.image ? (
                  <img src={staff.image} alt={staff.name} className="h-full w-full object-cover object-center" />
                ) : (
                  <div className="flex h-full w-full items-center justify-center bg-gradient-to-br from-primary to-primary-light text-2xl font-bold text-white">
                    {staff.name.charAt(0)}
                  </div>
                )}
              </div>
              <div>
                <h4 className="font-playfair text-xl font-bold text-dark">{staff.name}</h4>
                <p className="font-poppins text-xs font-semibold text-primary">{staff.role}</p>
                {staff.qualification && (
                  <p className="font-inter text-xs text-gray-600 mt-1">{staff.qualification}</p>
                )}
                <p className="mt-2 font-inter text-sm text-gray-500 leading-relaxed">{staff.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
