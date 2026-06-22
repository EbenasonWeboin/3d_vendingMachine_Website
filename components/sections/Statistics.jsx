"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useEffect, useState } from "react";

function Counter({ from, to, duration = 2 }) {
  const nodeRef = useRef(null);
  const inView = useInView(nodeRef, { once: true });
  const [value, setValue] = useState(from);

  useEffect(() => {
    if (!inView) return;
    
    let startTime;
    let animationFrame;

    const update = (currentTime) => {
      if (!startTime) startTime = currentTime;
      const progress = Math.min((currentTime - startTime) / (duration * 1000), 1);
      
      const easeProgress = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress);
      
      setValue(Math.floor(from + (to - from) * easeProgress));

      if (progress < 1) {
        animationFrame = requestAnimationFrame(update);
      }
    };

    animationFrame = requestAnimationFrame(update);
    return () => cancelAnimationFrame(animationFrame);
  }, [inView, from, to, duration]);

  return <span ref={nodeRef}>{value}</span>;
}

const stats = [
  { value: 1000, suffix: "+", label: "Machines Installed" },
  { value: 98, suffix: "%", label: "Customer Satisfaction" },
  { value: 24, suffix: "/7", label: "Monitoring Active" },
  { value: 50, suffix: "+", label: "Cities Served" },
];

export default function Statistics() {
  return (
    <section className="relative py-24 z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-12">
        <div className="section-card p-4 sm:p-6 md:p-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((stat, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                className="text-center py-6"
              >
                <div className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-2 flex items-center justify-center">
                  <Counter from={0} to={stat.value} />
                  <span className="text-primary">{stat.suffix}</span>
                </div>
                <p className="text-sm md:text-base text-gray-400 font-medium tracking-wide uppercase">
                  {stat.label}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
