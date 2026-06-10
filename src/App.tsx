import { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Stats from './components/Stats';

import About from './components/About';
import Timeline from './components/Timeline';
import Courses from './components/Courses';
import CourseOutcomes from './components/CourseOutcomes';
import Trainer from './components/Trainer';
import SupportingStaff from './components/SupportingStaff';
import Coordinators from './components/Coordinators';


import AwardsRecognition from './components/AwardsRecognition';
import SuccessStories from './components/SuccessStories';
import Gallery from './components/Gallery';

import Admissions from './components/Admissions';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import WhatsAppFloat from './components/WhatsAppFloat';
import Preloader from './components/Preloader';

export default function App() {
  const [loading, setLoading] = useState(true);

  if (loading) {
    return <Preloader onComplete={() => setLoading(false)} />;
  }

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main>
        <section id="home"><Hero /></section>
        <section id="stats"><Stats /></section>
        <section id="about"><About /></section>
        <section id="timeline"><Timeline /></section>
        <section id="courses"><Courses /></section>
        <section id="outcomes"><CourseOutcomes /></section>
        <section id="trainer"><Trainer /></section>
        <section id="supporting-staff"><SupportingStaff /></section>
        <section id="coordinators"><Coordinators /></section>

        <section id="awards"><AwardsRecognition /></section>
        <section id="success-stories"><SuccessStories /></section>
        <section id="gallery"><Gallery /></section>
        <section id="admissions"><Admissions /></section>
        <section id="contact"><Contact /></section>
      </main>
      <Footer />
      <ScrollToTop />
      <WhatsAppFloat />
    </div>
  );
}
