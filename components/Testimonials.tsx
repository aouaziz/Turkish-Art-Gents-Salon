'use client';

import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Star, Quote } from 'lucide-react';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

export function Testimonials() {
  const headerRef = useRef<HTMLDivElement>(null);
  const testimonialsRef = useRef<HTMLDivElement>(null);

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

    // Animate testimonial cards with stagger
    if (testimonialsRef.current) {
      const cards = testimonialsRef.current.querySelectorAll('.testimonial-card');
      gsap.fromTo(
        cards,
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.6,
          stagger: 0.1,
          scrollTrigger: {
            trigger: testimonialsRef.current,
            start: 'top 80%',
            once: true
          }
        }
      );
    }
  }, []);

  const testimonials = [
    {
      name: 'Ahmed Al-Mansouri',
      service: 'Premium Haircut & Beard Trim',
      text: 'Exceptional service and attention to detail. The barbers truly understand the art of grooming. This is not just a haircut, it\'s an experience.',
      rating: 5
    },
    {
      name: 'Omar Hassan',
      service: 'Turkish Hot Shave',
      text: 'The traditional Turkish shave is unlike anything I\'ve experienced. The hot towels, the precision, the atmosphere - absolutely premium. Highly recommended!',
      rating: 5
    },
    {
      name: 'Khalid Rahman',
      service: 'Full Grooming Package',
      text: 'I\'ve been coming here for months and the quality never drops. Professional, luxurious, and worth every dirham. Turkish Art Gents Salonis the best in the business.',
      rating: 5
    },
    {
      name: 'Youssef Ibrahim',
      service: 'Beard Styling & Hair Color',
      text: 'The perfect blend of traditional techniques and modern style. The team is skilled, friendly, and truly dedicated to making you look your best.',
      rating: 5
    }
  ];

  return (
    <section id="testimonials" className="py-20 bg-gradient-to-br from-[#5D1822] via-[#7a1f2d] to-[#5D1822] relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-96 h-96 bg-[#E6D5B8] rounded-full -translate-x-1/2 -translate-y-1/2 blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#E6D5B8] rounded-full translate-x-1/2 translate-y-1/2 blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div
          ref={headerRef}
          className="text-center mb-12"
        >
          <div className="inline-block px-4 py-2 bg-white/10 rounded-full mb-4 backdrop-blur-sm">
            <span className="font-['Inter'] text-[#E6D5B8] text-sm uppercase tracking-wide">Testimonials</span>
          </div>
          <h2 className="font-['Playfair_Display'] text-3xl sm:text-4xl md:text-5xl text-white mb-4">
            What Our <span className="text-[#E6D5B8]">Clients Say</span>
          </h2>
          <div className="w-20 h-1 bg-[#E6D5B8] mx-auto mb-6"></div>
          <p className="font-['Inter'] text-white/90 text-lg max-w-2xl mx-auto">
            Trust and excellence reflected in every review.
          </p>
        </div>

        <div ref={testimonialsRef} className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border-2 border-white/20 hover:bg-white/15 hover:border-[#E6D5B8]/50 transition-all duration-300 shadow-xl testimonial-card"
            >
              <Quote className="w-12 h-12 text-[#E6D5B8] mb-6 opacity-80" />
              
              <p className="font-['Inter'] text-white/95 text-lg mb-6 leading-relaxed italic">
                "{testimonial.text}"
              </p>

              <div className="flex items-center mb-6">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-[#E6D5B8] fill-[#E6D5B8]" />
                ))}
              </div>

              <div className="border-t border-white/20 pt-6">
                <p className="font-['Inter'] text-white">{testimonial.name}</p>
                <p className="font-['Inter'] text-[#E6D5B8] text-sm mt-1">{testimonial.service}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}