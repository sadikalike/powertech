// components/Services.jsx
"use client";

import { motion } from 'framer-motion';
import Image from 'next/image';

// ನಿಮ್ಮ public ಫೋಲ್ಡರ್‌ನಲ್ಲಿರುವ ಇಮೇಜ್ ಹೆಸರುಗಳನ್ನು ಇಲ್ಲಿ ಸೇರಿಸಲಾಗಿದೆ
const services = [
  { title: "Electrical Work", image: "/elect.png", desc: "Safe wiring, rewiring, switchboards & CCTV installation." },
  { title: "Plumbing Services", image: "/plumb.png", desc: "Leak detection, pipe installation, bathroom & kitchen plumbing." },
  { title: "Gas Pipeline", image: "/gas.png", desc: "100% safe, BIS approved gas pipeline installation & maintenance." },
  { title: "Waterproofing", image: "/water.png", desc: "Roof, terrace, bathroom, and exterior wall waterproofing solutions." },
  { title: "Design & Build", image: "/design.png", desc: "Architectural design, 3D visualization, and Vastu compliant layouts." },
  { title: "Carpentry & POP", image: "/carpop.png", desc: "False ceiling (POP), fiber doors, windows, and custom carpentry." },
  { title: "Painting Work", image: "/paint.png", desc: "Interior and exterior painting for a fresh, long-lasting look." },
  { title: "Solar & Inverter", image: "/solar.png", desc: "Solar water heater sales, service, and battery/inverter solutions." },
  { title: "Aluminium Partition", image: "/Aluminium.png", desc: "Modern aluminium partitions for homes and offices." },
  { title: "Gas Geyser", image: "/Gass.png", desc: "Sales, installation, and servicing of gas geysers." },
  { title: "Kitchen Plans", image: "/Kitchen.png", desc: "Custom modular kitchen designs and gas pipe line fitting." },
  { title: "CCTV & Security", image: "/CCTV.png", desc: "CC camera service, door bell installation, and safety solutions." },
];

export default function Services() {
  return (
    <div className="py-24 bg-gray-50 relative overflow-hidden">
      
      {/* ಹಿನ್ನೆಲೆ ಅಲಂಕಾರ */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-blue-100 rounded-full blur-3xl opacity-50 -translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-red-100 rounded-full blur-3xl opacity-40 translate-x-1/3 translate-y-1/3"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* ಶೀರ್ಷಿಕೆ ಭಾಗ */}
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <span className="text-[#D32F2F] font-bold tracking-widest uppercase text-sm mb-2 block">What We Offer</span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-[#0B1B3D] mb-6">
              Our Premium Services
            </h2>
            <div className="w-24 h-1.5 bg-[#FBC02D] mx-auto rounded-full mb-6"></div>
            <p className="text-gray-600 text-lg">
              From home maintenance to complete building solutions, we provide expert services with quality workmanship and BIS approved materials.
            </p>
          </motion.div>
        </div>

        {/* ಸರ್ವೀಸ್ ಕಾರ್ಡ್‌ಗಳು */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {services.map((service, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05, duration: 0.4 }}
              className="bg-white rounded-3xl shadow-[0_4px_20px_-4px_rgba(0,0,0,0.05)] hover:shadow-[0_20px_40px_-10px_rgba(11,27,61,0.15)] transition-all duration-300 border border-gray-100 group overflow-hidden flex flex-col"
            >
              
              {/* ಇಮೇಜ್ ಭಾಗ (Image Section) */}
              <div className="relative w-full h-56 overflow-hidden">
                <Image 
                  src={service.image} 
                  alt={service.title} 
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-700 ease-in-out"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>

              {/* ಟೆಕ್ಸ್ಟ್ ಭಾಗ (Text Section) */}
              <div className="p-6 md:p-8 flex flex-col flex-grow">
                <h3 className="text-xl font-bold text-[#0B1B3D] mb-3 group-hover:text-[#D32F2F] transition-colors duration-300">
                  {service.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {service.desc}
                </p>
              </div>

            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}