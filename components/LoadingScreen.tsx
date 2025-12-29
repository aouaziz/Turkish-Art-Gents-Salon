'use client';

import { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import Image from 'next/image';

export function LoadingScreen() {
  const [isLoading, setIsLoading] = useState(true);
  const loaderRef = useRef<HTMLDivElement>(null);
  const iconRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const tl = gsap.timeline({
      onComplete: () => {
        // Fade out the loader
        gsap.to(loaderRef.current, {
          opacity: 0,
          duration: 0.5,
          ease: 'power2.inOut',
          onComplete: () => setIsLoading(false)
        });
      }
    });

    // Animate scissors icon
    tl.from(iconRef.current, {
      scale: 0,
      rotation: -180,
      opacity: 0,
      duration: 0.8,
      ease: 'back.out(1.7)'
    })
    // Animate text
    .from(textRef.current, {
      y: 20,
      opacity: 0,
      duration: 0.6,
      ease: 'power2.out'
    }, '-=0.3')
    // Rotate scissors
    .to(iconRef.current, {
      rotation: 360,
      duration: 1,
      ease: 'power2.inOut'
    }, '-=0.2')
    // Hold for a moment
    .to({}, { duration: 0.3 });

  }, []);

  if (!isLoading) return null;

  return (
    <div
      ref={loaderRef}
      className="fixed inset-0 z-[9999] flex items-center justify-center bg-gradient-to-br from-[#1a0a0e] via-[#5D1822] to-[#1a0a0e]"
    >
      <div className="text-center">
        {/* Animated Icon */}
        <div ref={iconRef} className="mb-6 flex justify-center">
          <div className="relative">
            {/* Glow effect */}
            <div className="absolute inset-0 blur-2xl bg-[#E6D5B8] opacity-50 rounded-full"></div>
            {/* Logo */}
            <Image 
              src="/logo.png" 
              alt="Turkish Art Gents Salon" 
              width={80} 
              height={80} 
              className="w-20 h-20 relative z-10"
            />
          </div>
        </div>

        {/* Animated Text */}
        <div ref={textRef}>
          <h2 className="font-['Playfair_Display'] text-3xl md:text-4xl #E6D5B8 text-white mb-2">
            Turkish Art Gents Salon
          </h2>
          <div className="w-20 h-[2px] bg-[#E6D5B8] mx-auto"></div>
        </div>

        {/* Loading dots */}
        <div className="flex justify-center space-x-2 mt-8">
          <div className="w-2 h-2 bg-[#E6D5B8] rounded-full animate-bounce" style={{ animationDelay: '0ms' }}></div>
          <div className="w-2 h-2 bg-[#E6D5B8] rounded-full animate-bounce" style={{ animationDelay: '150ms' }}></div>
          <div className="w-2 h-2 bg-[#E6D5B8] rounded-full animate-bounce" style={{ animationDelay: '300ms' }}></div>
        </div>
      </div>
    </div>
  );
}
