import { useState } from 'react';
import { motion } from 'framer-motion';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { ClipboardList, Users, FileCheck, BookOpen, Send } from 'lucide-react';
import SectionTitle from './SectionTitle';
import { WHATSAPP_URL } from '../constants/contact';

const initialFormData = { name: '', email: '', phone: '', course: '', message: '' };

const steps = [
  { icon: ClipboardList, title: 'Fill Registration Form', description: 'Complete the online registration form with your details.', step: 1 },
  { icon: Users, title: 'Attend Orientation', description: 'Join our orientation session to understand the program.', step: 2 },
  { icon: FileCheck, title: 'Assessment', description: 'Take a simple assessment to determine your current level.', step: 3 },
  { icon: BookOpen, title: 'Start Learning', description: 'Begin your transformation journey with us!', step: 4 },
];

export default function Admissions() {
  const { ref, inView } = useScrollAnimation();
  const [formData, setFormData] = useState(initialFormData);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const whatsappMsg = `Hello! I'm interested in joining Al Amanath English Academy.\n\nName: ${formData.name}\nEmail: ${formData.email}\nPhone: ${formData.phone}\nCourse: ${formData.course}\nMessage: ${formData.message}`;
    window.open(`${WHATSAPP_URL}?text=${encodeURIComponent(whatsappMsg)}`, '_blank');
    setFormData(initialFormData);
  };

  return (
    <div className="relative bg-white py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionTitle
          subtitle="Join Us"
          title="Admission Process"
          description="Start your English learning journey in just 4 simple steps."
        />

        {/* Steps */}
        <div ref={ref} className="mb-20 grid gap-8 md:grid-cols-4">
          {steps.map((step, i) => (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.15 }}
              className="relative text-center"
            >
              {/* Connector line */}
              {i < steps.length - 1 && (
                <div className="absolute top-10 left-[60%] hidden h-0.5 w-[80%] bg-gradient-to-r from-primary to-primary/20 md:block" />
              )}

              <motion.div
                whileHover={{ scale: 1.1 }}
                className="relative mx-auto mb-4 flex h-20 w-20 items-center justify-center rounded-full bg-gradient-to-br from-primary to-primary-light shadow-xl shadow-primary/20"
              >
                <step.icon className="h-8 w-8 text-white" />
                <div className="absolute -top-2 -right-2 flex h-7 w-7 items-center justify-center rounded-full bg-secondary font-poppins text-xs font-bold text-dark shadow-md">
                  {step.step}
                </div>
              </motion.div>

              <h3 className="mb-2 font-playfair text-lg font-bold text-dark">{step.title}</h3>
              <p className="font-inter text-sm text-gray-500">{step.description}</p>
            </motion.div>
          ))}
        </div>

        {/* Registration Form */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mx-auto max-w-2xl"
        >
          <div className="overflow-hidden rounded-3xl bg-gradient-to-br from-primary to-primary-dark p-1">
            <div className="rounded-[calc(1.5rem-4px)] bg-white p-8 md:p-10">
              <h3 className="mb-2 text-center font-playfair text-2xl font-bold text-dark">Register Now</h3>
              <p className="mb-8 text-center font-inter text-sm text-gray-500">Join our free spoken English program today</p>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid gap-4 md:grid-cols-2">
                  <div>
                    <label className="mb-1 block font-inter text-sm font-medium text-gray-700">Full Name</label>
                    <input
                      type="text"
                      value={formData.name}
                      onChange={e => setFormData({ ...formData, name: e.target.value })}
                      className="w-full rounded-xl border border-gray-200 px-4 py-3 font-inter text-sm transition-all focus:border-primary focus:ring-2 focus:ring-primary/20 focus:outline-none"
                      placeholder="Your name"
                      required
                    />
                  </div>
                  <div>
                    <label className="mb-1 block font-inter text-sm font-medium text-gray-700">Email</label>
                    <input
                      type="email"
                      value={formData.email}
                      onChange={e => setFormData({ ...formData, email: e.target.value })}
                      className="w-full rounded-xl border border-gray-200 px-4 py-3 font-inter text-sm transition-all focus:border-primary focus:ring-2 focus:ring-primary/20 focus:outline-none"
                      placeholder="Your email"
                    />
                  </div>
                </div>

                <div className="grid gap-4 md:grid-cols-2">
                  <div>
                    <label className="mb-1 block font-inter text-sm font-medium text-gray-700">Phone</label>
                    <input
                      type="tel"
                      value={formData.phone}
                      onChange={e => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full rounded-xl border border-gray-200 px-4 py-3 font-inter text-sm transition-all focus:border-primary focus:ring-2 focus:ring-primary/20 focus:outline-none"
                      placeholder="Your phone number"
                      required
                    />
                  </div>
                  <div>
                    <label className="mb-1 block font-inter text-sm font-medium text-gray-700">Course Interest</label>
                    <select
                      value={formData.course}
                      onChange={e => setFormData({ ...formData, course: e.target.value })}
                      className="w-full rounded-xl border border-gray-200 px-4 py-3 font-inter text-sm transition-all focus:border-primary focus:ring-2 focus:ring-primary/20 focus:outline-none"
                    >
                      <option value="">Select Course</option>
                      <option value="spoken-english">Spoken English</option>
                      <option value="public-speaking">Public Speaking</option>
                      <option value="interview-skills">Interview Skills</option>
                      <option value="full-program">Full 4-Month Program</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="mb-1 block font-inter text-sm font-medium text-gray-700">Message</label>
                  <textarea
                    value={formData.message}
                    onChange={e => setFormData({ ...formData, message: e.target.value })}
                    rows={3}
                    className="w-full rounded-xl border border-gray-200 px-4 py-3 font-inter text-sm transition-all focus:border-primary focus:ring-2 focus:ring-primary/20 focus:outline-none"
                    placeholder="Any questions or requirements..."
                  />
                </div>

                <motion.button
                  type="submit"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-primary to-primary-light py-4 font-inter font-bold text-white shadow-xl shadow-primary/25 transition-shadow hover:shadow-2xl"
                >
                  <Send className="h-5 w-5" />
                  Submit & WhatsApp Us
                </motion.button>
              </form>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
