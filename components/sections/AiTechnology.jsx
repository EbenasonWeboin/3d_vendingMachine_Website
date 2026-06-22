"use client";

import { motion } from "framer-motion";
import { Activity, ShieldCheck, Smartphone, Zap, BarChart, Bell } from "lucide-react";

const features = [
  { icon: Activity, title: "Remote Monitoring", desc: "Track sales, inventory, and machine health from anywhere." },
  { icon: Zap, title: "IoT Integration", desc: "Seamless connection to smart building networks and APIs." },
  { icon: Smartphone, title: "Cashless Payments", desc: "Accept Apple Pay, Google Wallet, crypto, and all major cards." },
  { icon: ShieldCheck, title: "Predictive Maintenance", desc: "AI detects hardware anomalies before failures occur." },
  { icon: BarChart, title: "Inventory Analytics", desc: "Predictive restocking based on local consumption patterns." },
  { icon: Bell, title: "Smart Alerts", desc: "Instant notifications for low stock or power interruptions." },
];

export default function AiTechnology() {
  return (
    <section id="technology" className="relative py-20 z-10">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="section-card backdrop-blur-lg p-4 sm:p-8 md:p-12">
          <div className="text-center mb-12">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 text-white"
            >
              Powered by <span className="text-gradient">Intelligence</span>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-gray-400 max-w-2xl mx-auto text-base sm:text-lg"
            >
              The brain behind the machine. Our proprietary AI engine optimizes every aspect of the vending experience.
            </motion.p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {features.map((feature, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.08 }}
                whileHover={{ scale: 1.02 }}
                className="group p-6 rounded-2xl relative overflow-hidden transition-all duration-300"
                style={{ background: "rgba(255,255,255,0.06)", border: "1px solid rgba(255,255,255,0.10)" }}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
                <div className="w-11 h-11 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center mb-5 text-primary group-hover:text-accent transition-colors">
                  <feature.icon size={22} />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">{feature.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{feature.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
