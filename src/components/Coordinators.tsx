import { motion } from 'framer-motion';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { UserCheck, Users, Calendar, MessageSquare, ClipboardList, Monitor, Code } from 'lucide-react';
import SectionTitle from './SectionTitle';
import { WHATSAPP_URL } from '../constants/contact';

const responsibilities = [
  { icon: Users, label: 'Student Support' },
  { icon: UserCheck, label: 'New Student Guidance' },
  { icon: Calendar, label: 'Event Coordination' },
  { icon: MessageSquare, label: 'Communication Support' },
  { icon: ClipboardList, label: 'Attendance Monitoring' },
];

const coordinators = [
  {
    name: 'Abubacker Siddique',
    position: 'Coordinator',
    qualification: 'BCA',
    role: 'Software Developer',
    responsibility: 'IT Wing Management',
    image: '/abu.jpeg',
  },
  {
    name: 'Mujahith',
    position: 'Student Coordinator',
    qualification: '',
    role: '19th Batch Leader',
    responsibility: 'Student Leadership',
    image: '/Muja.jpeg',
  },
];

export default function Coordinators() {
  const { ref, inView } = useScrollAnimation();

  return (
    <div className="relative bg-white py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionTitle
          subtitle="Student Leadership"
          title="Student Coordinators"
          description="Meet the student leaders who help run the academy and support fellow learners."
        />

        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="mx-auto mb-16 max-w-3xl"
        >
          <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-primary to-primary-dark p-1">
            <div className="rounded-[calc(1.5rem-4px)] bg-white p-8 md:p-10">
              <div className="flex flex-col items-center gap-8 md:flex-row">
                <div className="relative shrink-0">
                  <div className="h-36 w-36 overflow-hidden rounded-full shadow-xl ring-4 ring-primary/20">
                    <img
                      src="/uwais.jpeg"
                      alt="R. Mohamed Uvaiz"
                      className="h-full w-full object-cover object-[center_20%] scale-110"
                    />
                  </div>
                  <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 rounded-full bg-secondary px-3 py-1 text-xs font-bold text-dark shadow-md">
                    CHIEF
                  </div>
                </div>

                <div className="flex-1 text-center md:text-left">
                  <span className="mb-2 inline-block rounded-full bg-primary/10 px-4 py-1 font-poppins text-xs font-bold tracking-wider text-primary uppercase">
                    Chief Student Coordinator
                  </span>
                  <h3 className="mt-2 font-playfair text-2xl font-bold text-dark">R. Mohamed Uvaiz</h3>
                  <p className="mt-1 font-poppins text-sm font-semibold text-primary">B.Com, MBA</p>
                  <p className="mt-2 font-inter text-sm text-gray-500">
                    Students Coordinator of Al Amanath · Social Media Manager
                  </p>

                  <div className="mt-6 flex flex-wrap justify-center gap-2 md:justify-start">
                    {responsibilities.map((resp) => (
                      <div key={resp.label} className="flex items-center gap-1.5 rounded-full bg-gray-50 px-3 py-1.5 text-xs font-medium text-gray-600">
                        <resp.icon className="h-3.5 w-3.5 text-primary" />
                        {resp.label}
                      </div>
                    ))}
                  </div>

                  <motion.a
                    href={WHATSAPP_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="mt-6 inline-flex items-center gap-2 rounded-full bg-primary px-6 py-2.5 font-inter text-sm font-semibold text-white shadow-lg"
                  >
                    <MessageSquare className="h-4 w-4" />
                    Contact
                  </motion.a>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {coordinators.map((coord, i) => (
            <motion.div
              key={coord.name}
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.3 + i * 0.1 }}
              whileHover={{ y: -8 }}
              className="group rounded-2xl border border-gray-100 bg-white p-6 text-center shadow-md transition-all hover:border-primary/20 hover:shadow-xl"
            >
              <div className="mx-auto mb-4 h-32 w-32 overflow-hidden rounded-full shadow-md ring-2 ring-primary/10 transition-transform group-hover:scale-105">
                <img
                  src={coord.image}
                  alt={coord.name}
                  className="h-full w-full object-cover object-[center_15%] scale-110"
                />
              </div>
              <h4 className="font-playfair text-lg font-bold text-dark">{coord.name}</h4>
              <p className="font-poppins text-xs font-semibold text-primary">{coord.position}</p>
              <p className="mt-1 font-inter text-xs text-gray-500">{coord.qualification}</p>
              <div className="mt-3 flex items-center justify-center gap-1.5 text-xs text-gray-500">
                <Code className="h-3.5 w-3.5 text-primary" />
                {coord.role}
              </div>
              <div className="mt-2 flex items-center justify-center gap-1.5 text-xs text-gray-400">
                <Monitor className="h-3.5 w-3.5 text-primary" />
                {coord.responsibility}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
