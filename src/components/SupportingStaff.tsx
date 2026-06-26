import { motion } from 'framer-motion';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { BookOpen } from 'lucide-react';
import SectionTitle from './SectionTitle';

const supportingStaff = [
  {
    name: 'G. Noorul Ameen',
    role: 'Students Support, New Students Guidance, Advanced Grammar Teacher, Instant Topic & Speech Trainer, Debate Program Organizer',
    qualification: '',
    description:
      'English is not a Knowledge. It is merely a Language. If we have a Passion and Love for learning a language. Any language in the World we can certainly become highly proficient & Master in it....!',
    icon: BookOpen,
    image: '/Ameensir.jpeg',
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

        <div ref={ref} className="mx-auto grid max-w-3xl gap-6">
          {supportingStaff.map((staff, i) => (
            <motion.div
              key={staff.name}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="flex flex-col items-center gap-8 rounded-3xl border border-gray-100 bg-white p-10 shadow-xl sm:flex-row sm:text-left gradient-border"
            >
              <div className="h-36 w-36 shrink-0 overflow-hidden rounded-full shadow-xl ring-4 ring-primary/20">
                {staff.image ? (
                  <img src={staff.image} alt={staff.name} className="h-full w-full object-cover object-top" />
                ) : (
                  <div className="flex h-full w-full items-center justify-center bg-gradient-to-br from-primary to-primary-light text-4xl font-bold text-white">
                    {staff.name.charAt(0)}
                  </div>
                )}
              </div>
              <div className="flex-1">
                <h4 className="font-playfair text-2xl font-bold text-dark mb-2">{staff.name}</h4>
                <p className="font-poppins text-sm font-semibold text-primary mb-4">{staff.role}</p>
                {staff.qualification && (
                  <p className="font-inter text-sm text-gray-600 mb-3">{staff.qualification}</p>
                )}
                <p className="font-inter text-base text-gray-600 leading-relaxed italic">{staff.description}</p>
                <p className="font-inter text-right mt-3 text-sm text-gray-400">- G. Noorul Ameen</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
