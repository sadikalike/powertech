import { CheckCircle2, Users, Award, Clock } from 'lucide-react';

export default function WhyChooseUs() {
  const features = [
    { icon: <CheckCircle2 />, title: "100% Safe & Secure", desc: "We follow strict standard procedures for every installation." },
    { icon: <Users />, title: "Expert Technicians", desc: "Trained & experienced professionals for quality work." },
    { icon: <Award />, title: "BIS Approved Materials", desc: "We use only high-quality, certified pipes and accessories." },
    { icon: <Clock />, title: "On-Time Service", desc: "On-time completion with 100% customer satisfaction." },
  ];

  return (
    <div className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          <div className="lg:w-1/2">
            <img 
              src="https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
              alt="Expert Worker" 
              className="rounded-3xl shadow-2xl"
            />
          </div>
          <div className="lg:w-1/2">
            <h2 className="text-4xl font-bold text-[#0B1B3D] mb-4">Why Choose PowerTech?</h2>
            <div className="w-20 h-1 bg-[#FBC02D] mb-8 rounded-full"></div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
              {features.map((feature, i) => (
                <div key={i}>
                  <div className="text-[#D32F2F] mb-3">{feature.icon}</div>
                  <h4 className="font-bold text-lg mb-2 text-[#0B1B3D]">{feature.title}</h4>
                  <p className="text-gray-600 text-sm">{feature.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}