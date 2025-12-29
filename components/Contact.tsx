'use client';

import { useState, useEffect, useRef } from 'react';
import { useRouter } from 'next/navigation';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Button } from './ui/button';
import { Input } from './ui/input';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

export function Contact() {
  const router = useRouter();
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    service: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  
  // Refs for GSAP animations
  const headerRef = useRef<HTMLDivElement>(null);
  const mapRef = useRef<HTMLDivElement>(null);
  const formRef = useRef<HTMLDivElement>(null);

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

    // Animate map
    if (mapRef.current) {
      gsap.fromTo(
        mapRef.current,
        { opacity: 0, x: -30 },
        {
          opacity: 1,
          x: 0,
          duration: 0.6,
          scrollTrigger: {
            trigger: mapRef.current,
            start: 'top 80%',
            once: true
          }
        }
      );
    }

    // Animate form
    if (formRef.current) {
      gsap.fromTo(
        formRef.current,
        { opacity: 0, x: 30 },
        {
          opacity: 1,
          x: 0,
          duration: 0.6,
          scrollTrigger: {
            trigger: formRef.current,
            start: 'top 80%',
            once: true
          }
        }
      );
    }
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Form validation
    if (!formData.name || !formData.phone) {
      alert('Please fill in all required fields');
      return;
    }
    
    setIsSubmitting(true);

    try {
      // Send email via API
      const response = await fetch('/api/send-booking', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        // Redirect to thank you page
        router.push('/thank-you');
      } else {
        alert('Failed to send booking. Please try again or call us directly.');
        setIsSubmitting(false);
      }
    } catch (error) {
      console.error('Error sending booking:', error);
      alert('Failed to send booking. Please try again or call us directly.');
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <section id="contact" className="py-20 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div
          ref={headerRef}
          className="text-center mb-12"
        >
          <div className="inline-block px-4 py-2 bg-[#E6D5B8]/20 rounded-full mb-4">
            <span className="font-['Inter'] text-[#5D1822] text-sm uppercase tracking-wide">Get In Touch</span>
          </div>
          <h2 className="font-['Playfair_Display'] text-3xl sm:text-4xl md:text-5xl text-[#5D1822] mb-4">
            Book Your <span className="text-[#5D1822]/70">Appointment</span>
          </h2>
          <div className="w-20 h-1 bg-[#E6D5B8] mx-auto mb-6"></div>
          <p className="font-['Inter'] text-gray-600 text-lg max-w-2xl mx-auto">
            Experience the finest grooming services. Reserve your spot today.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Google Maps */}
          <div ref={mapRef}>
            <div className="rounded-2xl overflow-hidden shadow-2xl border-2 border-[#E6D5B8]/30 h-full min-h-[500px]">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3612.713672913714!2d55.195797899999995!3d25.111552!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x872f3347ce47f557%3A0xe45ea5fc15acd1f9!2sTurkish%20Art%20Gents%20Salon!5e0!3m2!1sen!2sma!4v1767016468559!5m2!1sen!2sma" 
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen={true}
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full h-full min-h-[500px]"
              />
            </div>
          </div>

          {/* Booking Form */}
          <div
            ref={formRef}
            className="bg-white rounded-2xl p-8 shadow-2xl border-2 border-[#E6D5B8]/30"
          >
            <form onSubmit={handleSubmit} className="space-y-8">
                <div className="space-y-2">
                  <label htmlFor="name" className="font-['Inter'] text-gray-700 font-medium block">
                    Full Name
                  </label>
                  <Input
                    id="name"
                    name="name"
                    type="text"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Enter your name"
                    required
                    className="w-full border-[#E6D5B8]/50 focus:border-[#5D1822] h-12 text-[#5D1822]"
                  />
                </div>

                <div className="space-y-2">
                  <label htmlFor="phone" className="font-['Inter'] text-gray-700 font-medium block ">
                    Phone Number
                  </label>
                  <Input
                    id="phone"
                    name="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="+971 XXXXXXXX"
                    required
                    className="w-full border-[#E6D5B8]/50 focus:border-[#5D1822] h-12 text-[#5D1822]"
                  />
                </div>

                <div className="space-y-2">
                  <label htmlFor="service" className="font-['Inter'] text-gray-700 font-medium block">
                    Preferred Service
                  </label>
                  <select
                    id="service"
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    className="w-full h-12 px-4 py-2 border-2 border-[#E6D5B8]/50 rounded-lg focus:ring-2 focus:ring-[#5D1822] focus:border-[#5D1822] font-['Inter'] bg-white text-[#5D1822]"
                  >
                    <option value="">Select a service</option>
                    <option value="haircut">Haircut</option>
                    <option value="beard">Beard Trimming</option>
                    <option value="facial">Facial Treatment</option>
                    <option value="massage">Massage</option>
                    <option value="package">Full Package</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-gradient-to-r from-[#5D1822] to-[#7a1f2d] hover:from-[#7a1f2d] hover:to-[#5D1822] text-white py-6 shadow-xl hover:shadow-2xl transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? 'Sending...' : 'Confirm Appointment'}
                </Button>
              </form>
          </div>
        </div>
      </div>
    </section>
  );
}