"use client";

import { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { CheckCircle2 } from "lucide-react";

const benefits = [
  "Energy Efficient",
  "Cloud Connected",
  "Fast Support",
  "Easy Maintenance",
  "Secure Payments",
  "Custom Branding",
];

export default function WhyChooseUs() {
  const sectionRef = useRef(null);
  const sliderRef = useRef(null);
  const animRef = useRef(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    
    if (sectionRef.current && sliderRef.current) {
      const slider = sliderRef.current;
      
      const anim = gsap.to(slider, {
        x: () => -(slider.scrollWidth - window.innerWidth + 100),
        ease: "none",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top top",
          end: () => `+=${slider.scrollWidth}`,
          scrub: 1,
          pin: true,
          invalidateOnRefresh: true,
        }
      });

      animRef.current = anim;
    }

    return () => {
      if (animRef.current) {
        animRef.current.scrollTrigger?.kill();
        animRef.current.kill();
        animRef.current = null;
      }
    };
  }, []);

  return (
    <section ref={sectionRef} id="solutions" className="relative h-screen flex items-center bg-transparent overflow-hidden z-10 border-t border-white/5">
      <div className="absolute top-16 sm:top-24 md:top-32 left-4 sm:left-12 md:left-24 right-4 sm:right-auto">
        <h2 className="text-3xl sm:text-5xl md:text-6xl font-bold text-white mb-4">
          Why Choose <span className="text-gradient">VendAI</span>
        </h2>
        <p className="text-gray-400 text-sm sm:text-lg max-w-md">
          Unmatched reliability combined with cutting-edge artificial intelligence.
        </p>
      </div>

      <div ref={sliderRef} className="flex gap-4 sm:gap-8 px-4 sm:px-12 md:px-24 mt-32 w-max">
        {benefits.map((benefit, i) => (
          <div 
            key={i} 
            className="w-[240px] sm:w-[300px] h-[320px] sm:h-[400px] glass-panel rounded-3xl p-6 sm:p-8 flex flex-col justify-end shrink-0 relative overflow-hidden group"
          >
            <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <div className="relative z-10">
              <CheckCircle2 className="text-accent mb-4" size={32} />
              <h3 className="text-2xl font-bold text-white mb-2">{benefit}</h3>
              <p className="text-gray-400 text-sm">
                Built from the ground up to ensure maximum efficiency and ease of use for both operators and consumers.
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
