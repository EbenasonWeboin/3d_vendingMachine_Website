"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";

const faqs = [
  { q: "How does the AI predictive maintenance work?", a: "Our machines use edge computing and IoT sensors to track component temperatures, motor resistance, and dispense times. It alerts our technicians before a part fails." },
  { q: "What are the power requirements?", a: "VendAI machines use 40% less energy than standard models. They require a standard 120V outlet and feature an AI-driven deep sleep mode during off-hours." },
  { q: "Can we customize the branding?", a: "Yes. Both the physical exterior and the digital touchscreen UI can be fully customized with your brand guidelines." },
  { q: "How is inventory managed?", a: "The machine tracks every item dispensed. You get access to a cloud dashboard showing real-time inventory, sales analytics, and automated restocking schedules." },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="relative py-32 z-10">
      <div className="max-w-3xl mx-auto px-6 md:px-12">
        <h2 className="text-4xl md:text-5xl font-bold text-center text-white mb-12">
          Frequently Asked <span className="text-gradient">Questions</span>
        </h2>
        <div className="section-card p-6 md:p-8">
          <div className="space-y-3">
            {faqs.map((faq, idx) => (
              <div key={idx} className="rounded-2xl overflow-hidden" style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.06)' }}>
                <button 
                  onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
                  className="w-full px-6 py-5 flex items-center justify-between text-left focus:outline-none"
                >
                  <span className="text-lg font-medium text-white">{faq.q}</span>
                  <ChevronDown 
                    className={`text-primary transition-transform duration-300 ${openIndex === idx ? "rotate-180" : ""}`} 
                    size={20} 
                  />
                </button>
                <AnimatePresence>
                  {openIndex === idx && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <div className="px-6 pb-5 text-gray-400 text-sm leading-relaxed border-t border-white/5 pt-4">
                        {faq.a}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
