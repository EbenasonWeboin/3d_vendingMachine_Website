"use client";

import { motion } from "framer-motion";

const testimonials = [
  { name: "Sarah J.", role: "Facility Manager", company: "TechCorp", text: "VendAI reduced our restocking downtime to zero. The analytics dashboard is a game changer." },
  { name: "Michael T.", role: "Operations Dir.", company: "EduSpace", text: "Students love the cashless payments and the futuristic look. It actually elevated our campus aesthetic." },
  { name: "Elena R.", role: "HR Head", company: "Innovate Inc", text: "The predictive maintenance means I never have to deal with complaints about broken machines." },
  { name: "David L.", role: "Building Admin", company: "Skyline Towers", text: "It's not just a vending machine; it's a piece of modern art that serves fresh food." },
];

export default function Testimonials() {
  // Duplicate array to create infinite scroll effect
  const marqueeItems = [...testimonials, ...testimonials];

  return (
    <section className="relative py-20 z-10 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 md:px-8 mb-10">
        <div className="section-card backdrop-blur-lg p-4 sm:p-8 md:p-10 text-center">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-3">
            Trusted by <span className="text-gradient">Innovators</span>
          </h2>
          <p className="text-gray-400 text-lg">Real stories from real customers</p>
        </div>
      </div>

      <div className="relative w-full flex overflow-hidden group">
        <motion.div 
          className="flex gap-6 px-3"
          animate={{ x: ["0%", "-50%"] }}
          transition={{ duration: 40, ease: "linear", repeat: Infinity }}
        >
          {marqueeItems.map((item, idx) => (
            <div key={idx} className="w-[280px] sm:w-[350px] shrink-0 glass-panel p-6 sm:p-8 rounded-3xl group-hover:opacity-50 hover:!opacity-100 transition-opacity duration-300">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center text-white font-bold">
                  {item.name[0]}
                </div>
                <div>
                  <h4 className="text-white font-medium">{item.name}</h4>
                  <p className="text-xs text-gray-400">{item.role}, {item.company}</p>
                </div>
              </div>
              <p className="text-gray-300 text-sm leading-relaxed">&quot;{item.text}&quot;</p>
            </div>
          ))}
        </motion.div>
        
        {/* Gradients to fade edges */}
        <div className="absolute top-0 bottom-0 left-0 w-16 sm:w-32 bg-gradient-to-r from-[#050507] to-transparent z-10 pointer-events-none" />
        <div className="absolute top-0 bottom-0 right-0 w-16 sm:w-32 bg-gradient-to-l from-[#050507] to-transparent z-10 pointer-events-none" />
      </div>
    </section>
  );
}
