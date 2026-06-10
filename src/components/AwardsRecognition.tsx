import { motion } from 'framer-motion';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { Award, Star, Medal } from 'lucide-react';
import SectionTitle from './SectionTitle';

const awards = [
  {
    title: 'Educational Excellence Award',
    description: 'Recognized for outstanding contribution to English education in the community.',
    icon: '🏆',
    year: '2023',
  },
  {
    title: 'Moulana Abul Kalam Azad Award',
    description: 'Prestigious recognition for promoting education and empowering youth.',
    icon: '🎖️',
    year: '2022',
  },
  {
    title: 'Community Service Recognition',
    description: 'Awarded for free education initiative benefiting hundreds of students.',
    icon: '🌟',
    year: '2023',
  },
];

const trainerAwards = [
  { src: '/sir%20pics/481246831_634567542627835_1014038968035866771_n.jpg', title: 'Trainer Excellence' },
  { src: '/sir%20pics/481660449_634567545961168_1693354527378387303_n.jpg', title: 'Leadership' },
  { src: '/sir%20pics/481918591_634567422627847_6682496788093571593_n.jpg', title: 'Dedication' },
  { src: '/sir%20pics/482246911_639560925461830_2891638049363833823_n.jpg', title: 'Excellence in Teaching' },
  { src: '/sir%20pics/482345266_639560785461844_4201294739384801495_n.jpg', title: 'Inspirational Trainer' },
  { src: '/sir%20pics/482360234_639561052128484_7298897603517648716_n.jpg', title: 'Student Advocate' },
  { src: '/sir%20pics/483487961_639068305511092_440859942640669885_n.jpg', title: 'Mentor Excellence' },
  { src: '/sir%20pics/483576924_639561048795151_1896818042193643701_n.jpg', title: 'Community Builder' },
];

export default function AwardsRecognition() {
  const { ref, inView } = useScrollAnimation();

  return (
    <div className="relative bg-white py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionTitle
          subtitle="Recognition"
          title="Academy Awards"
          description="Our commitment to educational excellence has been recognized by prestigious organizations and our trainers have received numerous accolades."
        />

        <div ref={ref} className="grid gap-8 lg:grid-cols-3">
          {awards.map((award, i) => (
            <motion.div
              key={award.title}
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.15 }}
              whileHover={{ y: -10, scale: 1.02 }}
              className="group relative overflow-hidden rounded-3xl bg-gradient-to-br from-gray-50 to-white p-8 shadow-lg transition-all hover:shadow-2xl"
            >
              {/* Gold accent */}
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-secondary to-yellow-400" />

              <motion.div
                className="mb-6 text-6xl"
                animate={{ rotate: [0, 5, -5, 0] }}
                transition={{ duration: 3, repeat: Infinity, delay: i * 0.5 }}
              >
                {award.icon}
              </motion.div>

              <span className="inline-block rounded-full bg-secondary/10 px-3 py-1 font-poppins text-xs font-bold text-secondary">
                {award.year}
              </span>

              <h3 className="mt-3 font-playfair text-xl font-bold text-dark">{award.title}</h3>
              <p className="mt-3 font-inter text-sm text-gray-500 leading-relaxed">{award.description}</p>

              {/* Decorative */}
              <div className="absolute -bottom-4 -right-4 opacity-5 transition-opacity group-hover:opacity-10">
                <Award className="h-32 w-32 text-secondary" />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Trainer/Teacher Awards Section */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mt-16"
        >
          <h3 className="mb-8 text-center font-playfair text-2xl font-bold text-dark md:text-3xl">
            Trainer Awards & Recognition
          </h3>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {trainerAwards.map((award, i) => (
              <motion.div
                key={award.title}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                whileHover={{ y: -8 }}
                className="group relative overflow-hidden rounded-2xl shadow-lg transition-all hover:shadow-2xl"
              >
                <div className="relative h-64 overflow-hidden bg-gray-100">
                  <img
                    src={award.src}
                    alt={award.title}
                    className="h-full w-full object-cover transition-transform group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-dark via-transparent to-transparent" />
                </div>
                <div className="absolute bottom-0 left-0 right-0 p-4">
                  <h4 className="font-playfair text-lg font-bold text-white">{award.title}</h4>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Certificate Gallery hint */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 flex items-center justify-center gap-4 rounded-2xl border border-secondary/20 bg-secondary/5 p-6"
        >
          <Medal className="h-8 w-8 text-secondary" />
          <div>
            <h4 className="font-playfair text-lg font-bold text-dark">Certificate Gallery</h4>
            <p className="font-inter text-sm text-gray-500">View our complete collection of awards and certificates</p>
          </div>
          <Star className="h-6 w-6 text-secondary" />
        </motion.div>
      </div>
    </div>
  );
}
