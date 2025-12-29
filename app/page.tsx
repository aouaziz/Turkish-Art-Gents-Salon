'use client';

import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { LoadingScreen } from '../components/LoadingScreen';
import { Navbar } from '../components/Navbar';
import { Hero } from '../components/Hero';
import { About } from '../components/About';
import { Services } from '../components/Services';
import { Testimonials } from '../components/Testimonials';
import { Contact } from '../components/Contact';
import { Footer } from '../components/Footer';

// Register GSAP plugins
if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

export default function Home() {
  const aboutRef = useRef<HTMLDivElement>(null);
  const servicesRef = useRef<HTMLDivElement>(null);
  const testimonialsRef = useRef<HTMLDivElement>(null);
  const contactRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Ensure animations only run on client side
    if (typeof window === 'undefined') return;

    // About Section - Fade + Slide Up
    if (aboutRef.current) {
      gsap.fromTo(
        aboutRef.current,
        { opacity: 0, y: 80 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: aboutRef.current,
            start: 'top 75%',
            end: 'top 40%',
            toggleActions: 'play none none reverse'
          }
        }
      );
    }

    // Services Section - Scale + Fade
    if (servicesRef.current) {
      gsap.fromTo(
        servicesRef.current,
        { opacity: 0, scale: 0.9 },
        {
          opacity: 1,
          scale: 1,
          duration: 1,
          ease: 'back.out(1.2)',
          scrollTrigger: {
            trigger: servicesRef.current,
            start: 'top 75%',
            end: 'top 40%',
            toggleActions: 'play none none reverse'
          }
        }
      );
    }

    // Testimonials Section - Rotate + Fade
    if (testimonialsRef.current) {
      gsap.fromTo(
        testimonialsRef.current,
        { opacity: 0, rotateX: 15 },
        {
          opacity: 1,
          rotateX: 0,
          duration: 1.2,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: testimonialsRef.current,
            start: 'top 75%',
            end: 'top 40%',
            toggleActions: 'play none none reverse'
          }
        }
      );
    }

    // Contact Section - Slide from Left
    if (contactRef.current) {
      gsap.fromTo(
        contactRef.current,
        { opacity: 0, x: -100 },
        {
          opacity: 1,
          x: 0,
          duration: 1,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: contactRef.current,
            start: 'top 75%',
            end: 'top 40%',
            toggleActions: 'play none none reverse'
          }
        }
      );
    }

    // Cleanup
    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  return (
    <>
      <LoadingScreen />
      <div className="min-h-screen">
        <Navbar />
        <Hero />
        <div ref={aboutRef}>
          <About />
        </div>
        <div ref={servicesRef}>
          <Services />
        </div>
        <div ref={testimonialsRef}>
          <Testimonials />
        </div>
        <div ref={contactRef}>
          <Contact />
        </div>
        <Footer />
      </div>
    </>
  );
}
