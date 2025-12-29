'use client';

import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Sparkles, Award, Clock } from 'lucide-react';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

export function About() {
  const imageRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const featuresRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Animate image section
    if (imageRef.current) {
      gsap.fromTo(
        imageRef.current,
        { opacity: 0, x: -30 },
        {
          opacity: 1,
          x: 0,
          duration: 0.6,
          scrollTrigger: {
            trigger: imageRef.current,
            start: 'top 80%',
            once: true
          }
        }
      );
    }

    // Animate content section
    if (contentRef.current) {
      gsap.fromTo(
        contentRef.current,
        { opacity: 0, x: 30 },
        {
          opacity: 1,
          x: 0,
          duration: 0.6,
          scrollTrigger: {
            trigger: contentRef.current,
            start: 'top 80%',
            once: true
          }
        }
      );
    }

    // Animate feature items with stagger
    if (featuresRef.current) {
      const featureItems = featuresRef.current.querySelectorAll('.feature-item');
      gsap.fromTo(
        featureItems,
        { opacity: 0, y: 20 },
        {
          opacity: 1,
          y: 0,
          duration: 0.5,
          stagger: 0.1,
          scrollTrigger: {
            trigger: featuresRef.current,
            start: 'top 80%',
            once: true
          }
        }
      );
    }
  }, []);

  const features = [
    {
      icon: Sparkles,
      title: 'Master Craftsmanship',
      description: 'Our skilled barbers combine time-honored Turkish techniques with modern precision.'
    },
    {
      icon: Award,
      title: 'Premium Experience',
      description: 'Every service is a luxurious experience designed for the discerning gentleman.'
    },
    {
      icon: Clock,
      title: 'Attention to Detail',
      description: 'We take pride in perfecting every cut, every line, every detail.'
    }
  ];

  return (
    <section id="about" className="py-20 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Image Side */}
          <div ref={imageRef} className="relative">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1621605815971-fbc98d665033?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiYXJiZXIlMjBncm9vbWluZyUyMGJlYXJkfGVufDF8fHx8MTc2NjgyOTc4OXww&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Premium Grooming Service"
                className="w-full h-[500px] object-cover"
              />
              {/* Gold Accent Overlay */}
              <div className="absolute inset-0 border-4 border-[#E6D5B8]/30 rounded-2xl"></div>
            </div>
            {/* Decorative Background Element */}
            <div className="absolute -bottom-6 -right-6 w-64 h-64 bg-gradient-to-br from-[#5D1822] to-[#3d0f16] rounded-2xl -z-10 opacity-90"></div>
            <div className="absolute -top-6 -left-6 w-32 h-32 border-4 border-[#E6D5B8] rounded-2xl -z-10"></div>
          </div>

          {/* Content Side */}
          <div ref={contentRef}>
            {/* Section Label */}
            <div className="inline-block px-4 py-2 bg-[#E6D5B8]/20 rounded-full mb-4">
              <span className="font-['Inter'] text-[#5D1822] text-sm uppercase tracking-wide">About Us</span>
            </div>
            
            <h2 className="font-['Playfair_Display'] text-3xl sm:text-4xl md:text-5xl text-[#5D1822] mb-6 leading-tight">
              The Art of <br/><span className="text-[#5D1822]/70">Turkish Grooming</span>
            </h2>
            
            <div className="w-20 h-1 bg-[#E6D5B8] mb-6"></div>
            
            <p className="font-['Inter'] text-gray-700 mb-6 text-lg leading-relaxed">
              At Turkish Art Gents Salon, we believe grooming is an art form. Our master barbers 
              bring centuries of Turkish tradition to every service, combined with modern techniques 
              and premium products to deliver an unparalleled experience.
            </p>
            <p className="font-['Inter'] text-gray-600 mb-10 text-lg leading-relaxed">
              From precision haircuts to traditional hot towel shaves, every detail is crafted with 
              care and expertise. Step into our sanctuary and discover the difference of true craftsmanship.
            </p>

            {/* Features */}
            <div ref={featuresRef} className="space-y-6">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="flex items-start space-x-4 group feature-item"
                >
                  <div className="bg-gradient-to-br from-[#5D1822] to-[#3d0f16] p-3 rounded-xl shadow-md group-hover:shadow-lg transition-shadow">
                    <feature.icon className="w-6 h-6 text-[#E6D5B8]" />
                  </div>
                  <div>
                    <h3 className="font-['Inter'] text-[#5D1822] mb-1">{feature.title}</h3>
                    <p className="font-['Inter'] text-gray-600 leading-relaxed">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}