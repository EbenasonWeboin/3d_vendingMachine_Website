"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export default function Contact() {
  return (
    <section id="contact" className="relative py-20 z-10 px-4 md:px-8">
      <div className="max-w-5xl mx-auto section-card p-6 sm:p-8 md:p-16 text-center relative overflow-hidden">
        
        {/* Animated Background Gradients */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-accent/10 pointer-events-none" />
        <motion.div 
          animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          className="absolute -top-1/2 -left-1/2 w-full h-full bg-primary/20 blur-[100px] rounded-full pointer-events-none"
        />

        <div className="relative z-10">
          <h2 className="text-3xl sm:text-4xl md:text-6xl font-bold text-white mb-6">
            Ready for the <span className="text-gradient">Future?</span>
          </h2>
          <p className="text-base sm:text-lg text-gray-400 max-w-2xl mx-auto mb-10">
            Join hundreds of forward-thinking companies who have upgraded their spaces with our AI-powered vending solutions.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button className="w-full sm:w-auto px-8 py-4 rounded-full bg-white text-black hover:bg-gray-100 font-semibold flex items-center justify-center gap-2 transition-all">
              Book Demo
              <ArrowRight size={18} />
            </button>
            <button className="w-full sm:w-auto px-8 py-4 rounded-full glass hover:bg-white/5 border border-white/10 text-white font-medium transition-all">
              Contact Sales
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
