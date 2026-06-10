import { motion } from 'framer-motion';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { MapPin, Mail, Phone, MessageCircle, Clock } from 'lucide-react';
import SectionTitle from './SectionTitle';
import { PHONE_DISPLAY, PHONE_TEL, WHATSAPP_URL } from '../constants/contact';

const contactInfo = [
  { icon: MapPin, label: 'Location', value: 'Melapalayam, Tirunelveli – 627005', color: 'text-red-500' },
  { icon: Mail, label: 'Email', value: 'alamanath0713@gmail.com', href: 'mailto:alamanath0713@gmail.com', color: 'text-blue-500' },
  { icon: Phone, label: 'Phone', value: PHONE_DISPLAY, href: `tel:${PHONE_TEL}`, color: 'text-green-500' },
  { icon: Clock, label: 'Timings', value: 'Mon–Sat, 5:00 PM – 8:00 PM', color: 'text-purple-500' },
];

export default function Contact() {
  const { ref, inView } = useScrollAnimation();

  return (
    <div className="relative bg-gradient-to-br from-dark via-dark-light to-accent py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionTitle
          subtitle="Get In Touch"
          title="Contact Us"
          description="Ready to start your English learning journey? We'd love to hear from you."
          light
        />

        <div ref={ref} className="grid gap-12 lg:grid-cols-2">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7 }}
          >
            <div className="space-y-6">
              {contactInfo.map((info, i) => (
                <motion.div
                  key={info.label}
                  initial={{ opacity: 0, x: -20 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: i * 0.1 }}
                  className="flex items-center gap-4 rounded-xl border border-white/10 bg-white/5 p-4 backdrop-blur-sm"
                >
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-white/10">
                    <info.icon className={`h-5 w-5 ${info.color}`} />
                  </div>
                  <div>
                    <p className="font-inter text-xs font-semibold text-white/50 uppercase">{info.label}</p>
                    {info.href ? (
                      <a href={info.href} className="font-inter text-sm text-white hover:text-secondary transition-colors">
                        {info.value}
                      </a>
                    ) : (
                      <p className="font-inter text-sm text-white">{info.value}</p>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>

            {/* WhatsApp CTA */}
            <motion.a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.5 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="mt-8 flex w-full items-center justify-center gap-3 rounded-2xl bg-gradient-to-r from-green-500 to-green-600 py-4 font-inter font-bold text-white shadow-xl shadow-green-500/20"
            >
              <MessageCircle className="h-6 w-6" />
              Chat on WhatsApp
            </motion.a>
          </motion.div>

          {/* Map */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="overflow-hidden rounded-2xl border border-white/10"
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3944.5!2d77.71!3d8.71!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zOMKwNDInMzYuMCJOIDc3wrA0MiczNi4wIkU!5e0!3m2!1sen!2sin!4v1234567890"
              width="100%"
              height="400"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Academy Location"
              className="rounded-2xl"
            />
          </motion.div>
        </div>
      </div>
    </div>
  );
}
