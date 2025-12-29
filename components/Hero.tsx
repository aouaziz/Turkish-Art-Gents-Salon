'use client';

import { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { Button } from './ui/button';

export function Hero() {
  const [mounted, setMounted] = useState(false);
  const heroRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const line1Ref = useRef<HTMLDivElement>(null);
  const line2Ref = useRef<HTMLDivElement>(null);
  const buttonsRef = useRef<HTMLDivElement>(null);
  const bgRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (typeof window === 'undefined' || !mounted) return;

    const tl = gsap.timeline({ delay: 2.5 }); // Start after loading screen

    // Parallax background effect
    if (bgRef.current) {
      gsap.to(bgRef.current, {
        yPercent: 30,
        ease: 'none',
        scrollTrigger: {
          trigger: heroRef.current,
          start: 'top top',
          end: 'bottom top',
          scrub: true
        }
      });
    }

    // Animated entrance sequence - only animate if refs exist
    if (titleRef.current) {
      tl.fromTo(
        titleRef.current,
        { opacity: 0, y: 50, scale: 0.9 },
        { opacity: 1, y: 0, scale: 1, duration: 1.2, ease: 'back.out(1.2)' }
      );
    }

    if (line2Ref.current) {
      tl.fromTo(
        line2Ref.current,
        { scaleX: 0, opacity: 0 },
        { scaleX: 1, opacity: 1, duration: 0.8, ease: 'power2.out' },
        '-=0.6'
      );
    }

    if (subtitleRef.current) {
      tl.fromTo(
        subtitleRef.current,
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 0.8, ease: 'power2.out' },
        '-=0.4'
      );
    }

    if (buttonsRef.current?.children) {
      tl.fromTo(
        buttonsRef.current.children,
        { opacity: 0, y: 30, scale: 0.8 },
        { 
          opacity: 1, 
          y: 0, 
          scale: 1, 
          duration: 0.6, 
          stagger: 0.2,
          ease: 'back.out(1.5)'
        },
        '-=0.3'
      );
    }

    // Floating animation for decorative line - only if it exists
    if (line2Ref.current) {
      gsap.to(line2Ref.current, {
        scaleX: 1.1,
        duration: 2,
        repeat: -1,
        yoyo: true,
        ease: 'sine.inOut'
      });
    }

  }, [mounted]);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section ref={heroRef} id="hero" className="relative min-h-screen h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div ref={bgRef} className="absolute inset-0 scale-110">
        <img
          src="https://images.unsplash.com/photo-1759134198561-e2041049419c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBiYXJiZXJzaG9wJTIwaW50ZXJpb3J8ZW58MXx8fHwxNzY2ODI5Nzg4fDA&ixlib=rb-4.1.0&q=80&w=1080"
          alt="Luxury Barbershop Interior"
          className="w-full h-full object-cover object-center"
        />
        {/* Dark Overlay for Better Text Contrast */}
        <div className="absolute inset-0 bg-black/60"></div>
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#5D1822]/40 via-transparent to-black/40"></div>
      </div>

      {/* Decorative Golden Lines */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#E6D5B8] to-transparent"></div>

      {/* Content - Centered */}
      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center max-w-4xl mx-auto">

          <h1 
            ref={titleRef}
            className="font-['Playfair_Display'] text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl text-white mb-4 md:mb-6 leading-tight px-4"
          >
            Turkish Art Gents Salon 
          </h1>

       

          <p
            ref={subtitleRef}
            className="font-['Inter'] text-lg sm:text-xl md:text-2xl text-white/90 mb-8 md:mb-10 max-w-2xl mx-auto px-4"
          >
            detail by detail, we shape the best version of you.
          </p>

          <div
            ref={buttonsRef}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center px-4"
          >
            <Button
              onClick={() => scrollToSection('contact')}
              className="w-full sm:w-auto bg-[#E6D5B8] hover:bg-[#d4c4a3] text-[#5D1822] px-8 md:px-10 py-5 md:py-6 text-base md:text-lg font-semibold shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-300"
            >
              Book an Appointment
            </Button>
            <Button
              onClick={() => scrollToSection('services')}
              variant="outline"
              className="w-full sm:w-auto border-2 border-white hover:bg-white hover:text-[#5D1822] px-8 md:px-10 py-5 md:py-6 text-base md:text-lg font-semibold shadow-xl hover:scale-105 transition-all duration-300"
            >
              View Services
            </Button>
          </div>
        </div>
      </div>

      {/* Decorative Bottom Border */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#E6D5B8] to-transparent"></div>
    </section>
  );
}