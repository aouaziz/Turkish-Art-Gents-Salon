'use client';

import { useEffect, useRef } from 'react';
import { useRouter } from 'next/navigation';
import { gsap } from 'gsap';
import { CheckCircle, Phone, Mail, MapPin } from 'lucide-react';
import { Button } from '../../components/ui/button';
import Image from 'next/image';

export default function ThankYou() {
  const router = useRouter();
  const containerRef = useRef<HTMLDivElement>(null);
  const logoRef = useRef<HTMLDivElement>(null);
  const iconRef = useRef<HTMLDivElement>(null);
  const messageRef = useRef<HTMLDivElement>(null);
  const contactRef = useRef<HTMLDivElement>(null);
  const buttonsRef = useRef<HTMLDivElement>(null);
  const footerRef = useRef<HTMLParagraphElement>(null);

  useEffect(() => {
    // Optional: Auto-redirect to home after 10 seconds
    const timer = setTimeout(() => {
      // router.push('/');
    }, 10000);

    // Animate entrance sequence
    const tl = gsap.timeline();

    if (containerRef.current) {
      tl.fromTo(
        containerRef.current,
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 0.6 }
      );
    }

    if (logoRef.current) {
      tl.fromTo(
        logoRef.current,
        { scale: 0 },
        { scale: 1, duration: 0.5 },
        '-=0.4'
      );
    }

    if (iconRef.current) {
      tl.fromTo(
        iconRef.current,
        { scale: 0 },
        { scale: 1, duration: 0.5, ease: 'back.out(1.7)' },
        '-=0.2'
      );
    }

    if (messageRef.current) {
      tl.fromTo(
        messageRef.current,
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.6 },
        '-=0.2'
      );
    }

    if (contactRef.current) {
      tl.fromTo(
        contactRef.current,
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.6 },
        '-=0.1'
      );
    }

    if (buttonsRef.current) {
      tl.fromTo(
        buttonsRef.current,
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.6 },
        '-=0.1'
      );
    }

    if (footerRef.current) {
      tl.fromTo(
        footerRef.current,
        { opacity: 0 },
        { opacity: 1, duration: 0.6 },
        '-=0.1'
      );
    }

    return () => clearTimeout(timer);
  }, [router]);

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white flex items-center justify-center px-4 py-12">
      <div className="max-w-2xl w-full">
        <div
          ref={containerRef}
          className="bg-white rounded-2xl shadow-2xl p-8 md:p-12 text-center border-2 border-[#E6D5B8]/30"
        >
          {/* Logo */}
          <div
            ref={logoRef}
            className="flex justify-center mb-6"
          >
            <Image 
              src="/logo.png" 
              alt="Turkish Art Gents Salon" 
              width={80} 
              height={80} 
              className="w-20 h-20"
            />
          </div>

          {/* Success Icon */}
          <div
            ref={iconRef}
            className="flex justify-center mb-6"
          >
            <div className="w-24 h-24 bg-gradient-to-br from-[#5D1822] to-[#7a1f2d] rounded-full flex items-center justify-center shadow-xl">
              <CheckCircle className="w-12 h-12 text-[#E6D5B8]" strokeWidth={2.5} />
            </div>
          </div>

          {/* Thank You Message */}
          <div ref={messageRef}>
            <h1 className="font-['Playfair_Display'] text-3xl md:text-4xl text-[#5D1822] mb-4">
              Thank You for Your Booking!
            </h1>
            <div className="w-20 h-1 bg-[#E6D5B8] mx-auto mb-6"></div>
            <p className="font-['Inter'] text-gray-600 text-lg mb-8 leading-relaxed">
              We've received your appointment request and will contact you shortly to confirm your booking.
            </p>
          </div>

          {/* Contact Information */}
          <div
            ref={contactRef}
            className="bg-gradient-to-br from-gray-50 to-white rounded-xl p-6 mb-8 border border-[#E6D5B8]/20"
          >
            <h2 className="font-['Playfair_Display'] text-xl text-[#5D1822] mb-4">
              We'll Be In Touch Soon
            </h2>
            <div className="space-y-3 text-left">
              <div className="flex items-center space-x-3">
                <div className="bg-gradient-to-br from-[#5D1822] to-[#7a1f2d] p-2 rounded-lg">
                  <Phone className="w-4 h-4 text-[#E6D5B8]" />
                </div>
                <div>
                  <p className="font-['Inter'] text-sm text-gray-500">Call us</p>
                  <p className="font-['Inter'] text-gray-700 font-medium">+971 4 339 5088</p>
                </div>
              </div>

              <div className="flex items-center space-x-3">
                <div className="bg-gradient-to-br from-[#5D1822] to-[#7a1f2d] p-2 rounded-lg">
                  <Mail className="w-4 h-4 text-[#E6D5B8]" />
                </div>
                <div>
                  <p className="font-['Inter'] text-sm text-gray-500">Email us</p>
                  <p className="font-['Inter'] text-gray-700 font-medium">contact@turkishartgentssalon.com</p>
                </div>
              </div>

              <div className="flex items-center space-x-3">
                <div className="bg-gradient-to-br from-[#5D1822] to-[#7a1f2d] p-2 rounded-lg">
                  <MapPin className="w-4 h-4 text-[#E6D5B8]" />
                </div>
                <div>
                  <p className="font-['Inter'] text-sm text-gray-500">Visit us</p>
                  <p className="font-['Inter'] text-gray-700 font-medium"> Al Barsha 1, Ascana 2, Shop 1– Dubai, UAE</p>
                </div>
              </div>
            </div>
          </div>

          {/* Action Buttons */}
          <div
            ref={buttonsRef}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Button
              onClick={() => router.push('/')}
              className="bg-gradient-to-r from-[#5D1822] to-[#7a1f2d] hover:from-[#7a1f2d] hover:to-[#5D1822] text-white px-8 py-6 shadow-xl hover:shadow-2xl transition-all duration-300"
            >
              Return to Home
            </Button>
            <Button
              onClick={() => router.push('/#services')}
              variant="outline"
              className="border-2 border-[#5D1822]  hover:bg-[#5D1822] text-white px-8 py-6 shadow-md transition-all duration-300"
            >
              View Services
            </Button>
          </div>
        </div>

        {/* Additional Info */}
        <p
          ref={footerRef}
          className="text-center text-gray-500 text-sm mt-6 font-['Inter']"
        >
          Didn't receive a confirmation? Please check your spam folder or contact us directly.
        </p>
      </div>
    </div>
  );
}
