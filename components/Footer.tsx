import { Facebook, Instagram } from 'lucide-react';
import { Music } from 'lucide-react';
import Image from 'next/image';

export function Footer() {
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
    <footer className="bg-gradient-to-b from-[#1a0a0e] to-black text-white py-12 md:py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 md:gap-8 mb-12">
          {/* Logo & Description */}
          <div className="md:col-span-2 text-center md:text-left">
            <div className="flex items-center justify-center md:justify-start space-x-2 mb-6">
              <Image src="/logo.png" alt="Turkish Art Gents Salon" width={32} height={32} className="w-8 h-8" />
              <span className="font-['Playfair_Display'] text-2xl text-white">
                Turkish Art <span className="text-[#E6D5B8]">Gents Salon</span>
              </span>
            </div>
            <p className="font-['Inter'] text-white/70 max-w-md mb-6 leading-relaxed mx-auto md:mx-0">
              Where Turkish tradition meets modern grooming. Premium services crafted for the modern gentleman.
            </p>
            
            {/* Social Media */}
            <div className="flex justify-center md:justify-start space-x-4">
              <a
                href="https://www.facebook.com/people/Turkish-Art-Gents-Salon/61584197567027/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 bg-gradient-to-br from-[#5D1822] to-[#7a1f2d] rounded-xl flex items-center justify-center hover:scale-110 transition-transform shadow-lg"
                aria-label="Facebook"
              >
                <Facebook className="w-5 h-5 text-[#E6D5B8]" />
              </a>
              <a
                href="https://www.instagram.com/turkishartsalon/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 bg-gradient-to-br from-[#5D1822] to-[#7a1f2d] rounded-xl flex items-center justify-center hover:scale-110 transition-transform shadow-lg"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5 text-[#E6D5B8]" />
              </a>
              <a
                href="https://www.tiktok.com/@turkish.art.gents"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 bg-gradient-to-br from-[#5D1822] to-[#7a1f2d] rounded-xl flex items-center justify-center hover:scale-110 transition-transform shadow-lg"
                aria-label="TikTok"
              >
                <Music className="w-5 h-5 text-[#E6D5B8]" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="text-center md:text-left">
            <h3 className="font-['Playfair_Display'] text-xl text-[#E6D5B8] mb-6">Quick Links</h3>
            <ul className="space-y-3 font-['Inter']">
              <li>
                <button
                  onClick={() => scrollToSection('hero')}
                  className="text-white/70 hover:text-[#E6D5B8] transition-colors"
                >
                  Home
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('services')}
                  className="text-white/70 hover:text-[#E6D5B8] transition-colors"
                >
                  Services
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('about')}
                  className="text-white/70 hover:text-[#E6D5B8] transition-colors"
                >
                  About
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('testimonials')}
                  className="text-white/70 hover:text-[#E6D5B8] transition-colors"
                >
                  Testimonials
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('contact')}
                  className="text-white/70 hover:text-[#E6D5B8] transition-colors"
                >
                  Contact
                </button>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="text-center md:text-left">
            <h3 className="font-['Playfair_Display'] text-xl text-[#E6D5B8] mb-6">Contact</h3>
            <ul className="space-y-3 font-['Inter'] text-white/70">
              <li className="hover:text-[#E6D5B8] transition-colors"> Al Barsha 1, Ascana 2, Shop 1– Dubai, UAE</li>
              <li className="hover:text-[#E6D5B8] transition-colors">+971 4 339 5088</li>
              <li className="hover:text-[#E6D5B8] transition-colors">contact@turkishartgentssalon.com</li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-white/10 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="font-['Inter'] text-white/50 text-center md:text-left">
              © {new Date().getFullYear()} Turkish Art Gents Salon. All rights reserved.
            </p>
            <div className="h-1 w-20 bg-gradient-to-r from-transparent via-[#E6D5B8] to-transparent"></div>
          </div>
        </div>
      </div>
    </footer>
  );
}