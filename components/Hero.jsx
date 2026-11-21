// components/Hero.jsx
"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ShieldCheck, ArrowRight, PhoneCall } from "lucide-react";
import Link from "next/link";

const backgroundImages = [
  "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80",
  "https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80",
  "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80",
];

export default function Hero() {
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % backgroundImages.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    // ಲ್ಯಾಪ್‌ಟಾಪ್‌ನಲ್ಲಿ (lg) ಎತ್ತರವನ್ನು ಸರಿಪಡಿಸಲಾಗಿದೆ (lg:min-h-screen) ಮತ್ತು ಕೆಳಗಿನ ಪ್ಯಾಡಿಂಗ್ ತೆಗೆದುಹಾಕಲಾಗಿದೆ
    <div className="relative min-h-screen lg:min-h-screen flex items-center overflow-hidden bg-[#0B1B3D] pt-24 lg:pt-28 pb-0 lg:pb-0">
      
      {/* ಹಿನ್ನೆಲೆ ಸ್ಲೈಡರ್ */}
      <div className="absolute inset-0 z-0">
        <AnimatePresence mode="wait">
          <motion.img
            key={currentImage}
            src={backgroundImages[currentImage]}
            alt="PowerTech Services"
            initial={{ opacity: 0, scale: 1.05 }}
            animate={{ opacity: 0.5, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.5 }}
            className="w-full h-full object-cover"
          />
        </AnimatePresence>
        <div className="absolute inset-0 bg-gradient-to-r from-[#0B1B3D]/95 via-[#0B1B3D]/80 to-transparent"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          
          {/* ಎಡಭಾಗದ ಟೆಕ್ಸ್ಟ್ */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center lg:text-left flex flex-col items-center lg:items-start"
          >
            <span className="inline-flex items-center gap-2 bg-white/10 border border-white/20 backdrop-blur-md px-4 py-2 rounded-full text-xs sm:text-sm font-medium mb-4 text-[#FBC02D]">
              <ShieldCheck size={16} /> Building Solutions, Building Trust
            </span>
            
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold leading-tight mb-4 text-white tracking-tight">
              Design Your <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FBC02D] to-[#D32F2F]">
                Dream Home
              </span> <br />
              with PowerTech
            </h1>
            
            <p className="text-gray-200 text-sm sm:text-base mb-6 max-w-lg leading-relaxed mx-auto lg:mx-0">
              Expert solutions for Electrical, Plumbing, Gas Pipelines, Waterproofing, and Complete Home Maintenance. Safe. Reliable. Professional.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
              <Link 
                href="#contact" 
                className="w-full sm:w-auto bg-[#D32F2F] hover:bg-red-700 text-white px-6 py-3 sm:px-7 sm:py-3.5 rounded-full font-semibold flex items-center justify-center gap-2 transition-all duration-300 shadow-[0_0_15px_rgba(211,47,47,0.3)] hover:-translate-y-0.5 text-sm sm:text-base"
              >
                Book Free Consultation <ArrowRight size={18} />
              </Link>
              
              <a 
                href="tel:+919740023137" 
                className="w-full sm:w-auto bg-white/10 hover:bg-white/20 border border-white/20 backdrop-blur-md text-white px-6 py-3 sm:px-7 sm:py-3.5 rounded-full font-semibold flex items-center justify-center gap-2 transition-all duration-300 hover:-translate-y-0.5 text-sm sm:text-base"
              >
                <PhoneCall size={18} /> Call Us Now
              </a>
            </div>
          </motion.div>

          {/* ಬಲಭಾಗದ ಇಮೇಜ್ ಕಾರ್ಡ್ (Laptop ನಲ್ಲಿ ಮಾತ್ರ) */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="hidden lg:block relative"
          >
            <div className="relative rounded-3xl overflow-hidden border border-white/10 shadow-2xl">
               <img 
                 src="https://images.unsplash.com/photo-1621905251189-08b45d6a269e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                 alt="Professional Electrical Work" 
                 className="w-full h-[400px] object-cover"
               />
               <div className="absolute inset-0 bg-gradient-to-t from-[#0B1B3D]/90 via-transparent to-transparent"></div>
               
               <div className="absolute bottom-5 left-5 right-5 bg-white/10 backdrop-blur-md border border-white/20 p-3 rounded-2xl flex items-center justify-between">
                  <div>
                    <p className="text-[#FBC02D] font-bold text-lg">100%</p>
                    <p className="text-[10px] text-gray-200">Safe & Secure</p>
                  </div>
                  <div className="w-px h-6 bg-white/20"></div>
                  <div>
                    <p className="text-[#FBC02D] font-bold text-lg">BIS</p>
                    <p className="text-[10px] text-gray-200">Approved</p>
                  </div>
                  <div className="w-px h-6 bg-white/20"></div>
                  <div>
                    <p className="text-[#FBC02D] font-bold text-lg">24/7</p>
                    <p className="text-[10px] text-gray-200">Support</p>
                  </div>
               </div>
            </div>
          </motion.div>

        </div>
      </div>
    </div>
  );
}