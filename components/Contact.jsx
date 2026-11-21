// components/Contact.jsx
"use client";

import { useState } from "react";
import { Phone, Mail, MapPin, Send } from "lucide-react";

// ಇನ್‌ಲೈನ್ SVG Instagram ಐಕಾನ್
const InstagramIcon = ({ size = 22, className = "" }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
  </svg>
);

export default function Contact() {
  // ಫಾರ್ಮ್ ಡೇಟಾವನ್ನು ಇಲ್ಲಿ ಸ್ಟೋರ್ ಮಾಡುತ್ತೇವೆ (message ಸೇರಿಸಲಾಗಿದೆ)
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    service: "Electrical Work",
    message: "",
  });

  const whatsappNumber = "919740023137"; 
  const instagramLink = "https://www.instagram.com/powertech_buildcare?cnvx=NWI0ZmludjgzOGJr";

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // WhatsApp ಗೆ ಕಳುಹಿಸಬೇಕಾದ ಮೆಸೇಜ್ ಫಾರ್ಮ್ಯಾಟ್ (Message ಕೂಡ ಸೇರಿಸಲಾಗಿದೆ)
    const message = `*New Inquiry from Website*%0A%0A*Name:* ${formData.name}%0A*Phone:* ${formData.phone}%0A*Service Needed:* ${formData.service}%0A*Message:* ${formData.message}`;
    
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${message}`;
    window.open(whatsappUrl, "_blank");
  };

  return (
    <div id="contact" className="py-24 bg-[#0B1B3D] relative overflow-hidden">
      
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#D32F2F] rounded-full blur-3xl opacity-10 translate-x-1/3 -translate-y-1/3"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="bg-white rounded-[2.5rem] overflow-hidden shadow-2xl flex flex-col lg:flex-row">
          
          {/* ಎಡಭಾಗ: ಸಂಪರ್ಕ ಮಾಹಿತಿ */}
          <div className="lg:w-5/12 p-8 md:p-12 bg-gray-50 relative">
            <h2 className="text-3xl md:text-4xl font-extrabold text-[#0B1B3D] mb-4">Get in Touch</h2>
            <p className="text-gray-600 mb-10 text-lg">Ready to start your project? Contact us today for a free consultation and quote.</p>
            
            <div className="space-y-8">
              {/* ಫೋನ್ */}
              <div className="flex items-start gap-5">
                <div className="bg-[#D32F2F] p-3.5 rounded-2xl text-white shadow-lg shadow-red-500/30">
                  <Phone size={22} />
                </div>
                <div>
                  <h4 className="font-bold text-[#0B1B3D] text-lg mb-1">Call Us Now</h4>
                  <a href="tel:+919535303137" className="block text-gray-600 hover:text-[#D32F2F] transition font-medium">+91 95353 03137</a>
                  <a href="tel:+919740023137" className="block text-gray-600 hover:text-[#D32F2F] transition font-medium mt-1">+91 97400 23137</a>
                </div>
              </div>

              {/* ವಿಳಾಸ */}
              <div className="flex items-start gap-5">
                <div className="bg-[#0B1B3D] p-3.5 rounded-2xl text-white shadow-lg shadow-blue-900/30">
                  <MapPin size={22} />
                </div>
                <div>
                  <h4 className="font-bold text-[#0B1B3D] text-lg mb-1">Location</h4>
                  <p className="text-gray-600 font-medium leading-relaxed">Pawaz Complex, Kallare Main Road,<br/>Puttur, D.K - Karnataka</p>
                </div>
              </div>

              {/* ಇಮೇಲ್ */}
              <div className="flex items-start gap-5">
                <div className="bg-[#FBC02D] p-3.5 rounded-2xl text-white shadow-lg shadow-yellow-500/30">
                  <Mail size={22} />
                </div>
                <div>
                  <h4 className="font-bold text-[#0B1B3D] text-lg mb-1">Email</h4>
                  <a href="mailto:powertechvittal@gmail.com" className="text-gray-600 hover:text-[#D32F2F] transition font-medium">powertechvittal@gmail.com</a>
                </div>
              </div>

              {/* ಇನ್‌ಸ್ಟಾಗ್ರಾಮ್ */}
              <div className="flex items-start gap-5">
                <div className="bg-gradient-to-tr from-[#f09433] via-[#dc2743] to-[#bc1888] p-3.5 rounded-2xl text-white shadow-lg shadow-pink-500/30">
                  <InstagramIcon size={22} />
                </div>
                <div>
                  <h4 className="font-bold text-[#0B1B3D] text-lg mb-1">Follow Us</h4>
                  <a href={instagramLink} target="_blank" rel="noreferrer" className="text-gray-600 hover:text-[#D32F2F] transition font-medium">
                    @powertech_buildcare
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* ಬಲಭಾಗ: ಫಾರ್ಮ್ */}
          <div className="lg:w-7/12 p-8 md:p-12 bg-white">
            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-2">Full Name</label>
                  <input 
                    type="text" 
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-5 py-4 rounded-xl bg-gray-50 border border-gray-200 focus:ring-2 focus:ring-[#D32F2F] focus:border-transparent outline-none transition" 
                    placeholder="Your Name" 
                  />
                </div>
                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-2">Phone Number</label>
                  <input 
                    type="tel" 
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    className="w-full px-5 py-4 rounded-xl bg-gray-50 border border-gray-200 focus:ring-2 focus:ring-[#D32F2F] focus:border-transparent outline-none transition" 
                    placeholder="Your Phone" 
                  />
                </div>
              </div>
              
              <div>
                <label className="block text-sm font-bold text-gray-700 mb-2">Service Needed</label>
                <select 
                  name="service"
                  value={formData.service}
                  onChange={handleChange}
                  className="w-full px-5 py-4 rounded-xl bg-gray-50 border border-gray-200 focus:ring-2 focus:ring-[#D32F2F] focus:border-transparent outline-none transition cursor-pointer"
                >
                  <option value="Electrical Work">Electrical Work</option>
                  <option value="Plumbing">Plumbing</option>
                  <option value="Gas Pipeline">Gas Pipeline</option>
                  <option value="Waterproofing">Waterproofing</option>
                  <option value="Home Design">Home Design</option>
                  <option value="Other">Other</option>
                </select>
              </div>

              {/* ಹೊಸ ಮೆಸೇಜ್ ಆಪ್ಶನ್ */}
              <div>
                <label className="block text-sm font-bold text-gray-700 mb-2">Your Message (Optional)</label>
                <textarea 
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows="3"
                  className="w-full px-5 py-4 rounded-xl bg-gray-50 border border-gray-200 focus:ring-2 focus:ring-[#D32F2F] focus:border-transparent outline-none transition resize-none" 
                  placeholder="Tell us briefly about your requirement..." 
                ></textarea>
              </div>

              {/* ಸಬ್ಮಿಟ್ ಬಟನ್ */}
              <button 
                type="submit" 
                className="w-full flex items-center justify-center gap-2 bg-[#25D366] text-white font-bold py-4 rounded-xl hover:bg-[#1EBE5D] transition-all duration-300 shadow-lg shadow-green-500/30 hover:-translate-y-1 mt-2"
              >
                <Send size={20} />
                Submit via WhatsApp
              </button>
              
              <p className="text-center text-sm text-gray-500 mt-3">
                Clicking submit will open WhatsApp to send your inquiry directly to our team.
              </p>
            </form>
          </div>

        </div>
      </div>
    </div>
  );
}