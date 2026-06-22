"use client";

import { motion } from "framer-motion";
import { BadgeCheck, ArrowRight } from "lucide-react";

export default function HeroSection() {
  return (
    <section id="home" className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12 w-full flex flex-col md:flex-row items-center relative z-10">
        {/* Left side spacer for 3D Machine (Desktop) */}
        <div className="hidden md:block w-1/2" />

        {/* Right side content — no card on hero */}
        <div className="w-full md:w-1/2 flex flex-col items-start pt-32 md:pt-0">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex items-center gap-2 px-4 py-2 rounded-full border border-white/10 glass mb-6 w-fit"
          >
            <BadgeCheck className="text-primary" size={16} />
            <span className="text-sm font-medium text-gray-300">AI Powered Vending Solutions</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-5xl md:text-7xl font-bold tracking-tighter mb-6 text-white"
          >
            Future-Ready <br />
            <span className="text-gradient">Smart Vending</span> <br />
            Experience
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-lg md:text-xl text-gray-400 mb-10 max-w-lg"
          >
            AI-powered vending machines designed for offices, schools, hospitals, and commercial environments.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto"
          >
            <button className="w-full sm:w-auto px-8 py-4 rounded-full bg-primary hover:bg-accent text-white font-medium flex items-center justify-center gap-2 transition-all purple-glow">
              Explore Machines
              <ArrowRight size={18} />
            </button>
            <button className="w-full sm:w-auto px-8 py-4 rounded-full glass hover:bg-white/5 border border-white/10 text-white font-medium transition-all">
              Get Quote
            </button>
          </motion.div>

          {/* Stats strip */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1.2 }}
            className="mt-16 flex items-center gap-8 border-t border-white/10 pt-8 w-full"
          >
            <div>
              <p className="text-3xl font-bold text-white mb-1">1000+</p>
              <p className="text-sm text-gray-400">Active Units</p>
            </div>
            <div className="w-px h-12 bg-white/10" />
            <div>
              <p className="text-3xl font-bold text-white mb-1">98%</p>
              <p className="text-sm text-gray-400">Satisfaction</p>
            </div>
            <div className="w-px h-12 bg-white/10" />
            <div>
              <p className="text-3xl font-bold text-white mb-1">24/7</p>
              <p className="text-sm text-gray-400">Monitoring</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
