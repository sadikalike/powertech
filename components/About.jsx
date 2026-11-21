// components/About.jsx
"use client";

import { motion } from "framer-motion";
import { ShieldCheck, Target, Users, CheckCircle2, ArrowRight, Star, Award } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function About() {
  const stats = [
    { value: "500+", label: "Projects Completed", icon: <CheckCircle2 size={24} className="text-[#D32F2F]" /> },
    { value: "10+", label: "Years Experience", icon: <Award size={24} className="text-[#D32F2F]" /> },
    { value: "50+", label: "Expert Technicians", icon: <Users size={24} className="text-[#D32F2F]" /> },
    { value: "100%", label: "Client Satisfaction", icon: <Star size={24} className="text-[#D32F2F]" /> },
  ];

  const values = [
    {
      icon: <ShieldCheck className="w-8 h-8 text-white" />,
      title: "Safety First",
      desc: "We follow strict safety standards and use BIS approved materials for every project to ensure your family's safety.",
    },
    {
      icon: <Target className="w-8 h-8 text-white" />,
      title: "Precision & Quality",
      desc: "Our expert technicians deliver high-quality workmanship with attention to detail, ensuring long-lasting solutions.",
    },
    {
      icon: <Users className="w-8 h-8 text-white" />,
      title: "Customer Centric",
      desc: "We listen to your needs, provide transparent pricing, and ensure 100% satisfaction with on-time delivery.",
    },
  ];

  return (
    <section id="about" className="bg-gray-50 overflow-hidden">
      
      {/* 1. Our Story Section */}
      <div className="py-24 bg-white relative">
        <div className="absolute top-0 right-0 -mr-20 -mt-20 w-80 h-80 bg-blue-50 rounded-full blur-3xl opacity-60"></div>
        <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-72 h-72 bg-red-50 rounded-full blur-3xl opacity-60"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            
            {/* ಎಡಭಾಗ: ಲೋಗೋ */}
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              {/* 
                ಲ್ಯಾಪ್‌ಟಾಪ್‌ನಲ್ಲಿ (md ಮತ್ತು lg) ಎತ್ತರ, ಪ್ಯಾಡಿಂಗ್ ಕಡಿಮೆ ಮಾಡಲಾಗಿದೆ 
                ಮತ್ತು ಬಾಕ್ಸ್‌ನ ಗಾತ್ರವನ್ನು ಸರಿಪಡಿಸಲಾಗಿದೆ.
              */}
              <div className="relative rounded-3xl overflow-hidden shadow-2xl bg-gradient-to-br from-gray-50 to-gray-100 border border-gray-100 flex items-center justify-center p-6 md:p-8 lg:p-10 min-h-[250px] md:min-h-[300px] lg:min-h-[350px]">
                <Image 
                  src="/logoo.png" 
                  alt="PowerTech Buildcare Logo" 
                  width={350} 
                  height={150} 
                  // ಲ್ಯಾಪ್‌ಟಾಪ್‌ನಲ್ಲಿ ಲೋಗೋದ ಗಾತ್ರವನ್ನು ಸ್ವಲ್ಪ ಕಡಿಮೆ ಮಾಡಲಾಗಿದೆ (lg:max-w-[280px])
                  className="object-contain w-full max-w-[200px] sm:max-w-[250px] md:max-w-[260px] lg:max-w-[280px] hover:scale-105 transition-transform duration-500"
                  priority
                />
              </div>
              
              {/* ಫ್ಲೋಟಿಂಗ್ ಬ್ಯಾಡ್ಜ್ */}
              <div className="absolute -bottom-4 -right-4 md:-bottom-5 md:-right-5 bg-[#D32F2F] text-white p-4 md:p-5 rounded-2xl shadow-xl flex flex-col items-center justify-center border-4 border-white">
                <p className="text-2xl md:text-3xl lg:text-4xl font-extrabold mb-0.5 md:mb-1">10+</p>
                <p className="text-xs md:text-sm font-medium tracking-wide">Years of Trust</p>
              </div>
            </motion.div>

            {/* ಬಲಭಾಗ: ಟೆಕ್ಸ್ಟ್ */}
            <motion.div 
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 text-[#0B1B3D] font-semibold text-sm mb-6">
                <span className="w-2 h-2 rounded-full bg-[#D32F2F]"></span>
                About PowerTech
              </div>

              <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-[#0B1B3D] mb-6 leading-tight">
                Your Trusted Partner for <br className="hidden md:block"/> 
                <span className="text-[#D32F2F]">Complete Building Solutions</span>
              </h2>
              
              <p className="text-gray-600 mb-6 text-lg leading-relaxed">
                At PowerTech Buildcare, we believe that a home is more than just a building; it's a sanctuary. With years of experience in the construction and maintenance industry, we have dedicated ourselves to providing top-notch services.
              </p>
              <p className="text-gray-600 mb-8 leading-relaxed">
                From complex electrical wiring and gas pipeline installations to luxurious interior designs and waterproofing, our team of certified professionals handles every project with utmost precision and care.
              </p>
              
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                {["BIS Approved Materials", "Expert & Certified Technicians", "On-Time Project Delivery", "Transparent Pricing"].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-[#0B1B3D] font-semibold bg-gray-50 p-3 rounded-xl border border-gray-100">
                    <CheckCircle2 className="text-[#FBC02D] w-5 h-5 shrink-0" />
                    <span className="text-sm">{item}</span>
                  </li>
                ))}
              </ul>

              <Link 
                href="#contact" 
                className="inline-flex items-center gap-2 bg-[#0B1B3D] text-white px-8 py-4 rounded-full font-semibold hover:bg-[#D32F2F] transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-1"
              >
                Get in Touch <ArrowRight size={18} />
              </Link>
            </motion.div>
          </div>
        </div>
      </div>

      {/* 2. Stats Section */}
      <div className="py-24 bg-[#0B1B3D] relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-white via-transparent to-transparent"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-8">
            {stats.map((stat, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white/5 backdrop-blur-md border border-white/10 p-6 md:p-8 rounded-3xl text-center hover:bg-white/10 transition-colors duration-300 group"
              >
                <div className="w-12 h-12 md:w-14 md:h-14 bg-white/10 rounded-2xl flex items-center justify-center mx-auto mb-4 md:mb-6 group-hover:scale-110 transition-transform duration-300">
                  {stat.icon}
                </div>
                <h3 className="text-3xl md:text-5xl font-extrabold text-[#FBC02D] mb-2">{stat.value}</h3>
                <p className="text-gray-300 font-medium text-xs md:text-base">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* 3. Core Values Section */}
      <div className="py-24 bg-gray-50 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-[#0B1B3D] mb-4">Our Core Values</h2>
            <div className="w-24 h-1 bg-[#D32F2F] mx-auto rounded-full mb-6"></div>
            <p className="text-gray-600 max-w-2xl mx-auto text-base md:text-lg">
              We don't just build structures; we build relationships. Our core values drive everything we do.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white p-8 rounded-3xl shadow-sm hover:shadow-2xl transition-all duration-300 border border-gray-100 relative group overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-[#0B1B3D] to-[#1a3066] opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-0"></div>
                
                <div className="relative z-10">
                  <div className="w-16 h-16 bg-[#D32F2F] rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg shadow-red-500/30 group-hover:-translate-y-2 transition-transform duration-300">
                    {value.icon}
                  </div>
                  <h3 className="text-xl font-bold text-[#0B1B3D] group-hover:text-white mb-4 text-center transition-colors duration-300">
                    {value.title}
                  </h3>
                  <p className="text-gray-600 group-hover:text-gray-300 leading-relaxed text-sm text-center transition-colors duration-300">
                    {value.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}