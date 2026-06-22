"use client";

import { motion } from "framer-motion";
import { Coffee, Snowflake, Package } from "lucide-react";

const machines = [
  {
    title: "Snack Machine",
    icon: Package,
    specs: ["500+ Items Capacity", "Smart Inventory", "Touchless Pay"],
    color: "from-blue-500/20 to-purple-500/20",
    border: "group-hover:border-blue-500/50",
  },
  {
    title: "Beverage Machine",
    icon: Snowflake,
    specs: ["Dual Temperature", "Energy Saver mode", "Liquid Sensors"],
    color: "from-purple-500/20 to-pink-500/20",
    border: "group-hover:border-purple-500/50",
  },
  {
    title: "Combo Machine",
    icon: Coffee,
    specs: ["Modular Trays", "AI Analytics", "Remote Monitoring"],
    color: "from-accent/20 to-primary/20",
    border: "group-hover:border-accent/50",
  },
];

export default function FeaturedMachines() {
  return (
    <section id="machines" className="relative py-32 z-10">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold mb-6 text-white"
          >
            Featured <span className="text-gradient">Models</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-gray-400 max-w-2xl mx-auto text-lg"
          >
            Discover our lineup of intelligent vending machines tailored for any environment.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {machines.map((machine, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              whileHover={{ y: -10, scale: 1.02 }}
              className={`group relative p-8 rounded-3xl glass transition-all duration-500 border border-white/5 ${machine.border} overflow-hidden`}
            >
              {/* Background Glow */}
              <div className={`absolute inset-0 bg-gradient-to-br ${machine.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
              
              <div className="relative z-10 flex flex-col h-full">
                <div className="w-16 h-16 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500">
                  <machine.icon className="text-white" size={32} />
                </div>
                
                <h3 className="text-2xl font-semibold text-white mb-4">{machine.title}</h3>
                
                <ul className="flex-1 space-y-3 mb-8">
                  {machine.specs.map((spec, i) => (
                    <li key={i} className="flex items-center text-gray-400 text-sm">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary mr-3" />
                      {spec}
                    </li>
                  ))}
                </ul>

                <button className="w-full py-3 rounded-xl border border-white/10 hover:bg-white/10 text-white font-medium transition-colors">
                  View Details
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
