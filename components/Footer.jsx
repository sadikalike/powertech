// components/Footer.jsx
"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Phone, Mail, MapPin, ArrowUp } from "lucide-react";

const FacebookIcon = ({ size = 18, className = "" }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
  </svg>
);
const InstagramIcon = ({ size = 18, className = "" }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
  </svg>
);

export default function Footer() {
  const [currentYear, setCurrentYear] = useState("");

  useEffect(() => {
    setCurrentYear(new Date().getFullYear().toString());
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-[#0B1B3D] text-white pt-16 pb-8 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* ಮೇಲ್ಭಾಗದ ಮುಖ್ಯ ಭಾಗ */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* ಕಂಪನಿ ಮಾಹಿತಿ */}
          <div>
            <h2 className="text-2xl font-bold mb-2 flex items-center gap-1">
              <span className="text-[#D32F2F]">POWER</span>
              <span className="text-[#0066CC]">TECH</span>
            </h2>
            <span className="block text-xs tracking-widest text-gray-400 font-normal mb-4">BUILDCARE</span>
            <p className="text-gray-400 text-sm leading-relaxed mb-6">
              Building Solutions, Building Trust. We provide expert home maintenance and building solutions including Electrical, Plumbing, Gas Pipeline, and Waterproofing services.
            </p>
            <div className="flex space-x-4">
              <a href="https://www.instagram.com/powertech_buildcare?cnvx=NWI0ZmludjgzOGJr" target="_blank" rel="noreferrer" className="bg-white/10 p-2 rounded-full hover:bg-[#D32F2F] transition">
                <InstagramIcon size={18} />
              </a>
              <a href="#" className="bg-white/10 p-2 rounded-full hover:bg-[#D32F2F] transition">
                <FacebookIcon size={18} />
              </a>
            </div>
          </div>

          {/* ಸೇವೆಗಳು */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-[#FBC02D]">Our Services</h3>
            <ul className="space-y-2 text-sm text-gray-400">
              <li><Link href="#services" className="hover:text-white transition">Electrical Work</Link></li>
              <li><Link href="#services" className="hover:text-white transition">Plumbing Services</Link></li>
              <li><Link href="#services" className="hover:text-white transition">Gas Pipeline</Link></li>
              <li><Link href="#services" className="hover:text-white transition">Waterproofing</Link></li>
              <li><Link href="#services" className="hover:text-white transition">Home Design</Link></li>
              <li><Link href="#services" className="hover:text-white transition">CCTV & Security</Link></li>
            </ul>
          </div>

          {/* ಕ್ವಿಕ್ ಲಿಂಕ್ಸ್ */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-[#FBC02D]">Quick Links</h3>
            <ul className="space-y-2 text-sm text-gray-400">
              <li><Link href="#home" className="hover:text-white transition">Home</Link></li>
              <li><Link href="#about" className="hover:text-white transition">Why Choose Us</Link></li>
              <li><Link href="#contact" className="hover:text-white transition">Contact Us</Link></li>
              <li><Link href="#contact" className="hover:text-white transition">Book Free Consultation</Link></li>
            </ul>
          </div>

          {/* ಸಂಪರ್ಕ ಮಾಹಿತಿ */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-[#FBC02D]">Contact Us</h3>
            <ul className="space-y-4 text-sm text-gray-400">
              <li className="flex items-start gap-3">
                <MapPin size={18} className="text-[#D32F2F] shrink-0 mt-1" />
                <span>Pawaz Complex, Kallare Main Road, Puttur, D.K - Karnataka</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={18} className="text-[#D32F2F] shrink-0" />
                <div className="flex flex-col">
                  <a href="tel:+919535303137" className="hover:text-white transition">+91 95353 03137</a>
                  <a href="tel:+919740023137" className="hover:text-white transition">+91 97400 23137</a>
                </div>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={18} className="text-[#D32F2F] shrink-0" />
                <a href="mailto:powertechvittal@gmail.com" className="hover:text-white transition break-all">powertechvittal@gmail.com</a>
              </li>
            </ul>
          </div>
        </div>

        {/* ಕೆಳಗಿನ ಭಾಗ (Bottom Section) */}
        <div className="border-t border-white/10 pt-6 flex flex-col md:flex-row justify-between items-center md:items-end gap-4">
          
          {/* ಎಡಭಾಗ: ಕಾಪಿರೈಟ್ */}
          <div className="text-center md:text-left text-sm text-gray-400">
            <p>© {currentYear} PowerTech Buildcare. All rights reserved.</p>
            <p className="text-xs text-gray-500 mt-1">Building Solutions, Building Trust.</p>
          </div>

          {/* ಬಲಭಾಗ: ಡೆವಲಪರ್ ಮಾಹಿತಿ ಮತ್ತು ಸ್ಕ್ರಾಲ್ ಟು ಟಾಪ್ ಬಟನ್ */}
          <div className="flex flex-col items-center md:items-end gap-3">
            
            {/* ಡೆವಲಪರ್ ಮಾಹಿತಿ (Last line) */}
            <div className="flex flex-col items-center md:items-end text-xs md:text-sm text-gray-400">
              <span>Designed & Developed by</span>
              <div className="flex items-center gap-2 mt-1">
                <a 
                  href="https://www.instagram.com/growzy.digital?cnvx=MXNlMXhhcmhwbXZqbg==" 
                  target="_blank" 
                  rel="noreferrer"
                  className="text-[#FBC02D] hover:text-white font-bold transition"
                >
                  Growzy Digital
                </a>
                <span>|</span>
                <a 
                  href="https://wa.me/917510436350" 
                  target="_blank" 
                  rel="noreferrer"
                  className="text-[#25D366] hover:text-white font-medium transition"
                >
                  +91 7510436350
                </a>
              </div>
            </div>

            {/* ಸ್ಕ್ರಾಲ್ ಟು ಟಾಪ್ ಬಟನ್ (Small Size) */}
            <button 
              onClick={scrollToTop} 
              className="bg-white/10 p-2 rounded-full hover:bg-[#D32F2F] transition-all duration-300 group" 
              aria-label="Scroll to top"
            >
              <ArrowUp size={16} className="text-white group-hover:-translate-y-1 transition-transform" />
            </button>
          </div>

        </div>
      </div>
    </footer>
  );
}