"use client";

import { motion } from "framer-motion";
import { ClipboardList, Wrench, PlayCircle, ShieldCheck } from "lucide-react";

const steps = [
  { icon: ClipboardList, title: "Consultation", desc: "We assess your space, foot traffic, and specific needs." },
  { icon: Wrench, title: "Customization", desc: "Your machine is configured with requested products and branding." },
  { icon: PlayCircle, title: "Installation", desc: "Plug-and-play deployment by our certified technicians." },
  { icon: ShieldCheck, title: "Monitoring", desc: "24/7 AI telemetry ensures your machine is always stocked." },
];

export default function InstallationProcess() {
  return (
    <section className="relative py-32 z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-12">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 text-white"
          >
            Seamless <span className="text-gradient">Deployment</span>
          </motion.h2>
        </div>

        <div className="relative max-w-4xl mx-auto">
          {/* Vertical Progress Line (Desktop) */}
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-px bg-white/10" />
          
          <div className="space-y-12 md:space-y-0">
            {steps.map((step, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.2 }}
                className={`flex flex-col md:flex-row items-center justify-between w-full gap-4 ${idx % 2 !== 0 ? 'md:flex-row-reverse' : ''}`}
              >
                {/* Content Side */}
                <div className={`w-full md:w-5/12 ${idx % 2 !== 0 ? 'md:text-left' : 'md:text-right'} text-center`}>
                  <div className="glass p-4 sm:p-6 rounded-2xl inline-block w-full hover:border-primary/50 transition-colors">
                    <h3 className="text-xl font-bold text-white mb-2">{step.title}</h3>
                    <p className="text-gray-400 text-sm">{step.desc}</p>
                  </div>
                </div>

                {/* Center Node */}
                <div className="hidden md:flex w-2/12 justify-center relative my-4 md:my-0">
                  <div className="w-12 h-12 rounded-full glass border-2 border-primary flex items-center justify-center z-10 purple-glow">
                    <step.icon size={20} className="text-white" />
                  </div>
                </div>

                {/* Empty Side for alignment */}
                <div className="hidden md:block w-5/12" />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
