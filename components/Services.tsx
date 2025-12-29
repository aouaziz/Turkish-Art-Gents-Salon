'use client';

import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useState } from 'react';
import { Scissors, Sparkles, Palette, Smile, Heart, Hand, Droplet, Gift } from 'lucide-react';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

export function Services() {
  const [activeCategory, setActiveCategory] = useState('haircare');
  const headerRef = useRef<HTMLDivElement>(null);
  const servicesGridRef = useRef<HTMLDivElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Animate header
    if (headerRef.current) {
      gsap.fromTo(
        headerRef.current,
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.6,
          scrollTrigger: {
            trigger: headerRef.current,
            start: 'top 80%',
            once: true
          }
        }
      );
    }

    // Animate CTA
    if (ctaRef.current) {
      gsap.fromTo(
        ctaRef.current,
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.6,
          scrollTrigger: {
            trigger: ctaRef.current,
            start: 'top 80%',
            once: true
          }
        }
      );
    }
  }, []);

  useEffect(() => {
    // Animate services grid when category changes
    if (servicesGridRef.current) {
      gsap.fromTo(
        servicesGridRef.current,
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.4 }
      );

      // Animate service items with stagger
      const serviceItems = servicesGridRef.current.querySelectorAll('.service-item');
      gsap.fromTo(
        serviceItems,
        { opacity: 0, x: -20 },
        {
          opacity: 1,
          x: 0,
          duration: 0.3,
          stagger: 0.05
        }
      );
    }
  }, [activeCategory]);

  const services = {
    haircare: {
      icon: Scissors,
      title: 'Hair Care',
      services: [
        { name: 'Adult Haircut', price: 75 },
        { name: 'Junior Haircut', price: 65 },
        { name: 'Hair Styling', price: 40 },
        { name: 'Hair Oil Bath', price: 120 },
        { name: 'Hair Straightening', price: 120 },
        { name: 'Hair Protein', price: 350 },
        { name: 'Brazilian Keratin - Front Hair Only', price: 350 },
        { name: 'Brazilian Keratin - Normal Hair', price: 500 },
        { name: 'Brazilian Keratin - Medium Hair', price: 750 },
        { name: 'Brazilian Keratin - Long Hair', price: 1000 },
        { name: 'Highlight (Yellow Colour)', price: 250 },
        { name: 'Highlight (Hair Gray)', price: 400 },
        { name: 'Gray Hair Dye', price: 400 }
      ]
    },
    beardcare: {
      icon: Sparkles,
      title: 'Beard Care',
      services: [
        { name: 'Beard Trimming (Shave)', price: 50 },
        { name: 'Mustache Trimming', price: 30 },
        { name: 'Beard Straightening', price: 70 }
      ]
    },
    dyecare: {
      icon: Palette,
      title: 'Dye Care',
      services: [
        { name: 'Mustache Color Dye', price: 30 },
        { name: 'Adult Hair Dye', price: 110 },
        { name: 'Adult Hair Dye (Long)', price: 160 }
      ]
    },
    facialcare: {
      icon: Smile,
      title: 'Facial Care',
      services: [
        { name: 'Facial Express', price: 150 },
        { name: 'Facial Deep Cleaning', price: 250 },
        { name: 'Face Mask & Scrub', price: 50 }
      ]
    },
    relaxation: {
      icon: Heart,
      title: 'Relaxation (30 min)',
      services: [
        { name: 'Head Massage', price: 50 },
        { name: 'Back Massage', price: 80 },
        { name: 'Foot Massage', price: 60 }
      ]
    },
    nailcare: {
      icon: Hand,
      title: 'Nail Care',
      services: [
        { name: 'Manicure', price: 60 },
        { name: 'Pedicure', price: 70 },
        { name: 'Foot Spa', price: 80 }
      ]
    },
    waxing: {
      icon: Droplet,
      title: 'Waxing & Trimming',
      services: [
        { name: 'Underarm - Wax', price: 35 },
        { name: 'Underarm - Trim', price: 25 },
        { name: 'Chest - Wax', price: 100 },
        { name: 'Chest - Trim', price: 40 },
        { name: 'Arms - Wax', price: 60 },
        { name: 'Arms - Trim', price: 45 },
        { name: 'Full Back - Wax', price: 100 },
        { name: 'Full Back - Trim', price: 40 },
        { name: 'Full Leg - Wax', price: 80 },
        { name: 'Full Leg - Trim', price: 50 },
        { name: 'Full Body - Wax', price: 400 },
        { name: 'Full Body - Trim', price: 160 },
        { name: 'Nose Wax', price: 15 },
        { name: 'Ear Wax', price: 20 },
        { name: 'Neck Waxing', price: 30 },
        { name: 'Cheek Wax', price: 25 },
        { name: 'Hair Line Design', price: 20 },
        { name: 'Full Face Wax', price: 50 },
        { name: 'Threading', price: 20 },
        { name: 'Neck Clean', price: 30 },
        { name: 'Nose Strips', price: 20 }
      ]
    },
    packages: {
      icon: Gift,
      title: 'Packages',
      services: [
        { name: 'Manicure + Pedicure + Foot Spa', price: 130 },
        { name: 'Hair Cut + Hair Oil Bath', price: 150 },
        { name: 'Hair Cut + Facial Express', price: 200 },
        { name: 'Hair Cut + Facial Scrub', price: 200 },
        { name: 'Beard Trimming + Face Scrub', price: 90 },
        { name: 'Face Scrub + Special Face Mask', price: 70 }
      ]
    }
  };

  const categories = Object.entries(services);

  return (
    <section id="services" className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div
          ref={headerRef}
          className="text-center mb-12"
        >
          <div className="inline-block px-4 py-2 bg-[#E6D5B8]/20 rounded-full mb-4">
            <span className="font-['Inter'] text-[#5D1822] text-sm uppercase tracking-wide">Our Services</span>
          </div>
          <h2 className="font-['Playfair_Display'] text-3xl sm:text-4xl md:text-5xl text-[#5D1822] mb-4">
            Premium <span className="text-[#5D1822]/70">Grooming Services</span>
          </h2>
          <div className="w-20 h-1 bg-[#E6D5B8] mx-auto mb-6"></div>
          <p className="font-['Inter'] text-gray-600 text-lg max-w-2xl mx-auto">
            Discover our comprehensive range of grooming services, each designed to perfection.
          </p>
        </div>

        {/* Category Navigation */}
        <div className="flex flex-wrap justify-center gap-2 md:gap-3 mb-12 px-2">
          {categories.map(([key, category]) => {
            const Icon = category.icon;
            return (
              <button
                key={key}
                onClick={() => setActiveCategory(key)}
                className={`flex items-center space-x-2 px-4 md:px-6 py-2.5 md:py-3 rounded-xl transition-all duration-300 font-['Inter'] text-sm md:text-base ${
                  activeCategory === key
                    ? 'bg-gradient-to-r from-[#5D1822] to-[#7a1f2d] text-white shadow-lg scale-105'
                    : 'bg-white text-gray-700 hover:bg-[#E6D5B8]/20 hover:text-[#5D1822] shadow-md'
                }`}
              >
                <Icon className="w-4 h-4 md:w-5 md:h-5" />
                <span className="whitespace-nowrap">{category.title}</span>
              </button>
            );
          })}
        </div>

        {/* Services Grid */}
        <div
          key={activeCategory}
          ref={servicesGridRef}
          className="bg-white rounded-2xl shadow-2xl p-4 sm:p-6 md:p-12 max-w-4xl mx-auto border-2 border-[#E6D5B8]/30"
        >
          <div className="flex items-center space-x-3 mb-6 md:mb-8 pb-4 md:pb-6 border-b-2 border-[#E6D5B8]">
            {(() => {
              const Icon = services[activeCategory as keyof typeof services].icon;
              return (
                <div className="bg-gradient-to-br from-[#5D1822] to-[#3d0f16] p-2.5 md:p-3 rounded-xl">
                  <Icon className="w-6 h-6 md:w-8 md:h-8 text-[#E6D5B8]" />
                </div>
              );
            })()}
            <h3 className="font-['Playfair_Display'] text-xl md:text-2xl lg:text-3xl text-[#5D1822]">
              {services[activeCategory as keyof typeof services].title}
            </h3>
          </div>

          <div className="space-y-3 md:space-y-4">
            {services[activeCategory as keyof typeof services].services.map((service, index) => (
              <div
                key={index}
                className="flex justify-between items-center py-3 md:py-4 px-2 md:px-4 rounded-xl hover:bg-gradient-to-r hover:from-[#E6D5B8]/10 hover:to-transparent transition-all duration-300 border-b border-gray-100 last:border-0 group service-item"
              >
                <span className="font-['Inter'] text-sm md:text-base text-gray-700 group-hover:text-[#5D1822] transition-colors flex-1 pr-2">{service.name}</span>
                <span className="font-['Inter'] text-sm md:text-base text-[#5D1822] whitespace-nowrap px-2 md:px-3 py-1 bg-[#E6D5B8]/20 rounded-lg group-hover:bg-[#E6D5B8]/40 transition-colors font-semibold">
                  AED {service.price}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div
          ref={ctaRef}
          className="text-center mt-16"
        >
          <p className="font-['Inter'] text-gray-600 mb-6 text-lg">
            Ready to experience the finest in grooming?
          </p>
          <button
            onClick={() => {
              const element = document.getElementById('contact');
              if (element) {
                const offset = 80;
                const bodyRect = document.body.getBoundingClientRect().top;
                const elementRect = element.getBoundingClientRect().top;
                const elementPosition = elementRect - bodyRect;
                const offsetPosition = elementPosition - offset;
                window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
              }
            }}
            className="bg-gradient-to-r from-[#5D1822] to-[#7a1f2d] hover:from-[#7a1f2d] hover:to-[#5D1822] text-white px-10 py-4 rounded-xl transition-all duration-300 font-['Inter'] shadow-xl hover:shadow-2xl"
          >
            Book Your Appointment
          </button>
        </div>
      </div>
    </section>
  );
}