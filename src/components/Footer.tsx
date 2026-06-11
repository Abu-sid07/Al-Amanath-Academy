import { Heart, Mail, Phone, MapPin } from 'lucide-react';
import { PHONE_DISPLAY, PHONE_TEL } from '../constants/contact';

const quickLinks = [
  { name: 'Courses', href: '#courses' },
  { name: 'Gallery', href: '#gallery' },
  { name: 'Awards', href: '#awards' },
  { name: 'Resources', href: '#resources' },
  { name: 'Admissions', href: '#admissions' },
  { name: 'Contact', href: '#contact' },
];

const highlights = [
  '🎓 Free Spoken English Training',
  '🏆 Award-Winning Academy',
  '🎤 20+ Eloquent Speaker Events',
  '👨‍🏫 Experienced Trainer',
  '👥 Student Leadership System',
];

export default function Footer() {
  const scrollTo = (href: string) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="relative bg-dark pt-16 pb-8">
      {/* Top decorative bar */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-primary via-secondary to-primary" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-12 pb-12 md:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="mb-4 flex items-center gap-3">
              <div className="h-10 w-10 overflow-hidden rounded-full ring-2 ring-white/10">
                <img
                  src="/images/academy-logo.jpeg"
                  alt="Al Amanath English Academy"
                  className="h-full w-full object-cover"
                />
              </div>
              <div>
                <h3 className="font-playfair text-lg font-bold text-white">Al Amanath</h3>
                <p className="text-[10px] tracking-wider text-white/50">ENGLISH ACADEMY</p>
              </div>
            </div>
            <p className="mb-4 font-inter text-sm text-white/50 leading-relaxed">
              Speak English. Build Confidence. Transform Your Future.
            </p>
            <div className="mb-4 flex gap-3">
              <a
                href="https://www.instagram.com/al_.amanath_english_academy"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full bg-gradient-to-br from-pink-500 via-purple-500 to-indigo-600 p-2.5 text-white transition-all hover:scale-110 hover:shadow-lg"
              >
                <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.204-.012 3.584-.07 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zM5.838 12a6.162 6.162 0 1112.324 0 6.162 6.162 0 01-12.324 0zM12 16a4 4 0 110-8 4 4 0 010 8zm4.965-10.322a1.44 1.44 0 110-2.881 1.44 1.44 0 010 2.881z"/>
                </svg>
              </a>
              <a
                href="https://www.facebook.com/alamanathwelfareassociation"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full bg-blue-600 p-2.5 text-white transition-all hover:scale-110 hover:shadow-lg"
              >
                <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
              </a>
            </div>
            <p className="font-inter text-xs text-white/30">
              Powered by Al Amanath Welfare Association, Melapalayam
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="mb-4 font-poppins text-sm font-bold tracking-wider text-white uppercase">Quick Links</h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    onClick={(e) => { e.preventDefault(); scrollTo(link.href); }}
                    className="font-inter text-sm text-white/50 transition-colors hover:text-secondary"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* What Makes Us Unique */}
          <div>
            <h4 className="mb-4 font-poppins text-sm font-bold tracking-wider text-white uppercase">Why We're Unique</h4>
            <ul className="space-y-2">
              {highlights.map((item) => (
                <li key={item} className="font-inter text-sm text-white/50">
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="mb-4 font-poppins text-sm font-bold tracking-wider text-white uppercase">Contact</h4>
            <ul className="space-y-3">
              <li className="flex items-center gap-2">
                <MapPin className="h-4 w-4 text-secondary" />
                <span className="font-inter text-sm text-white/50">Melapalayam, Tirunelveli – 627005</span>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="h-4 w-4 text-secondary" />
                <a href="mailto:alamanath0713@gmail.com" className="font-inter text-sm text-white/50 hover:text-secondary transition-colors">
                  alamanath0713@gmail.com
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="h-4 w-4 text-secondary" />
                <a href={`tel:${PHONE_TEL}`} className="font-inter text-sm text-white/50 hover:text-secondary transition-colors">
                  {PHONE_DISPLAY}
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/10 pt-8">
          <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
            <p className="font-inter text-xs text-white/30">
              © {new Date().getFullYear()} Al Amanath English Academy. All Rights Reserved.
            </p>
            <div className="flex flex-col items-center gap-2">
              <p className="flex items-center gap-1 font-inter text-xs text-white/30">
                Made with <Heart className="h-3 w-3 text-red-500" /> for Education
              </p>
              <p className="font-inter text-xs text-white/40">
                Website designed & developed by <span className="font-semibold text-secondary">Abu - Software Developer</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
