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
                  src="/images/academy-logo.png"
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
