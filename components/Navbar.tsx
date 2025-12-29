import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { Button } from './ui/button';
import Image from 'next/image';

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

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
    setIsMobileMenuOpen(false);
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-[#1a0a0e] shadow-lg' : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-center lg:justify-between h-20">
          {/* Logo container - Balanced on Desktop, Natural flow on Mobile */}
          <div 
            className="lg:flex-1 flex items-center space-x-2 cursor-pointer" 
            onClick={() => scrollToSection('hero')}
          >
            <Image src="/logo.png" alt="Turkish Art Gents Salon" width={40} height={40} className="w-10 h-10" />
            <span className="font-['Playfair_Display'] text-xl sm:text-2xl text-white whitespace-nowrap">
              Turkish Art Gents Salon
            </span>
          </div>

          {/* Desktop Menu - Center */}
          <div className="hidden lg:flex items-center justify-center space-x-8 flex-1">
            <button onClick={() => scrollToSection('hero')} className="text-white hover:text-[#E6D5B8] transition-colors font-['Inter']">Home</button>
            <button onClick={() => scrollToSection('services')} className="text-white hover:text-[#E6D5B8] transition-colors font-['Inter']">Services</button>
            <button onClick={() => scrollToSection('about')} className="text-white hover:text-[#E6D5B8] transition-colors font-['Inter']">About</button>
            <button onClick={() => scrollToSection('testimonials')} className="text-white hover:text-[#E6D5B8] transition-colors font-['Inter']">Testimonials</button>
            <button onClick={() => scrollToSection('contact')} className="text-white hover:text-[#E6D5B8] transition-colors font-['Inter']">Contact</button>
          </div>

          {/* CTA Button - Right (Desktop) */}
          <div className="hidden lg:flex lg:flex-1 justify-end">
            <Button
              onClick={() => scrollToSection('contact')}
              className="bg-[#5D1822] hover:bg-[#7a1f2d] text-white px-6 py-2"
            >
              Book Now
            </Button>
          </div>

          {/* Mobile Menu Button - Now part of flex flow for balanced centering */}
          <button
            className="lg:hidden text-white ml-4"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden bg-[#1a0a0e] border-t border-[#5D1822]/30 py-4">
            <div className="flex flex-col space-y-4 items-center">
              <button
                onClick={() => scrollToSection('hero')}
                className="text-white hover:text-[#E6D5B8] transition-colors font-['Inter'] py-2 px-6"
              >
                Home
              </button>
              <button
                onClick={() => scrollToSection('services')}
                className="text-white hover:text-[#E6D5B8] transition-colors font-['Inter'] py-2 px-6"
              >
                Services
              </button>
              <button
                onClick={() => scrollToSection('about')}
                className="text-white hover:text-[#E6D5B8] transition-colors font-['Inter'] py-2 px-6"
              >
                About
              </button>
              <button
                onClick={() => scrollToSection('testimonials')}
                className="text-white hover:text-[#E6D5B8] transition-colors font-['Inter'] py-2 px-6"
              >
                Testimonials
              </button>
              <button
                onClick={() => scrollToSection('contact')}
                className="text-white hover:text-[#E6D5B8] transition-colors font-['Inter'] py-2 px-6"
              >
                Contact
              </button>
              <div className="pt-2">
                <Button
                  onClick={() => scrollToSection('contact')}
                  className="bg-[#5D1822] hover:bg-[#7a1f2d] text-white px-8 py-2"
                >
                  Book Now
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}