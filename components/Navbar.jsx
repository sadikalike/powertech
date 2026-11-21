// components/Navbar.jsx
"use client";

import { useState, useEffect } from "react";
import { Phone, Menu, X } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "About Us", href: "#about" },
    { name: "Services", href: "#services" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <nav
      className={`fixed w-full top-0 z-50 transition-all duration-500 ${
        isScrolled 
          ? "bg-white/95 backdrop-blur-xl shadow-[0_8px_32px_rgba(0,0,0,0.08)] py-2 border-b border-gray-100" 
          : "py-4"
      }`}
    >
      {/* 
        ಹಿನ್ನೆಲೆ ಗ್ರೇಡಿಯಂಟ್:
        ಎಡದಿಂದ ಬಿಳಿ (ಲೋಗೋ ಸ್ಪಷ್ಟವಾಗಲು), ಬಲಕ್ಕೆ ಹೋಗುತ್ತಾ ಡಾರ್ಕ್ ಬ್ಲೂ ಬಣ್ಣಕ್ಕೆ ಬದಲಾಗುತ್ತದೆ.
      */}
      <div 
        className={`absolute inset-0 transition-opacity duration-500 pointer-events-none ${
          isScrolled ? "opacity-0" : "opacity-100 bg-gradient-to-r from-white via-white/90 to-[#0B1B3D]/90"
        }`}
      >
        <div className="absolute inset-0 backdrop-blur-[2px]"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex justify-between items-center">
          
          {/* ಲೋಗೋ */}
          <div className="flex-shrink-0 flex items-center cursor-pointer">
            <Link href="#home">
              <Image 
                src="/logoo.png" 
                alt="PowerTech Buildcare Logo" 
                width={130} 
                height={50} 
                className={`object-contain transition-all duration-300 ${
                  isScrolled ? "h-9 w-auto" : "h-11 w-auto"
                }`}
                priority
              />
            </Link>
          </div>

          {/* ಡೆಸ್ಕ್‌ಟಾಪ್ ಮೆನು */}
          <div className="hidden md:flex space-x-1 lg:space-x-2 items-center">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className={`group relative px-4 py-2 font-bold text-sm transition-colors duration-300 ${
                  // ಇಲ್ಲಿ ಬಣ್ಣವನ್ನು ಡಾರ್ಕ್ ಬ್ಲೂ (text-[#0B1B3D]) ಗೆ ಬದಲಾಯಿಸಲಾಗಿದೆ
                  isScrolled ? "text-gray-700 hover:text-[#D32F2F]" : "text-[#0B1B3D] hover:text-[#D32F2F]"
                }`}
              >
                {link.name}
                <span className={`absolute inset-x-0 bottom-0 h-0.5 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-center rounded-full ${
                  isScrolled ? "bg-[#D32F2F]" : "bg-[#D32F2F]" 
                }`}></span>
              </Link>
            ))}
            
            {/* ಕಾಲ್ ಬಟನ್ (ಇಲ್ಲಿ ಟೆಕ್ಸ್ಟ್ ಬಿಳಿಯಾಗಿಯೇ ಇರುತ್ತದೆ, ಏಕೆಂದರೆ ಬ್ಯಾಕ್‌ಗ್ರೌಂಡ್ ಕೆಂಪು) */}
            <a
              href="tel:+919740023137"
              className="ml-4 bg-gradient-to-r from-[#D32F2F] to-[#B71C1C] text-white px-6 py-2.5 rounded-full flex items-center gap-2 hover:from-[#FBC02D] hover:to-[#F5A623] hover:text-[#0B1B3D] transition-all duration-300 shadow-[0_4px_15px_rgba(211,47,47,0.3)] transform hover:-translate-y-0.5"
            >
              <Phone size={16} className="animate-pulse" />
              <span className="font-bold text-sm tracking-wide">+91 97400 23137</span>
            </a>
          </div>

          {/* ಮೊಬೈಲ್ ಮೆನು ಬಟನ್ */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className={`relative z-50 p-2 rounded-xl transition-all duration-300 ${
                isScrolled 
                  ? "text-[#0B1B3D] bg-gray-100 hover:bg-gray-200" 
                  : "text-[#0B1B3D] bg-white/50 hover:bg-white/80 backdrop-blur-md"
              }`}
            >
              {isMobileMenuOpen ? <X size={26} /> : <Menu size={26} />}
            </button>
          </div>
        </div>
      </div>

      {/* ಮೊಬೈಲ್ ಮೆನು */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsMobileMenuOpen(false)}
              className="fixed inset-0 bg-black/40 backdrop-blur-sm md:hidden z-40"
            />

            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="md:hidden bg-white/95 backdrop-blur-xl border-t border-gray-100 shadow-2xl overflow-hidden absolute w-full z-50 rounded-b-3xl"
            >
              <div className="px-6 pt-4 pb-8 space-y-2 flex flex-col">
                {navLinks.map((link) => (
                  <Link
                    key={link.name}
                    href={link.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="block px-4 py-3.5 text-[#0B1B3D] font-bold text-lg hover:bg-gray-50 hover:text-[#D32F2F] rounded-xl transition-all"
                  >
                    {link.name}
                  </Link>
                ))}
                <a
                  href="tel:+919740023137"
                  className="mt-4 bg-gradient-to-r from-[#D32F2F] to-[#B71C1C] text-white px-4 py-4 rounded-xl flex items-center justify-center gap-2 font-bold text-lg shadow-lg shadow-red-500/30"
                >
                  <Phone size={20} />
                  <span>Call Us Now</span>
                </a>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </nav>
  );
}