"use client";

import { useRef, useLayoutEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function ScrollStorytelling() {
  const containerRef = useRef(null);
  const tlRef = useRef(null);
  
  useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    
    const labels = gsap.utils.toArray(".story-label");
    
    if (containerRef.current && labels.length > 0) {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top top",
          end: "+=200%",
          scrub: 1,
          pin: true,
        }
      });
      
      labels.forEach((label, i) => {
        tl.fromTo(label, 
          { opacity: 0, x: -50 }, 
          { opacity: 1, x: 0, duration: 1 }
        ).to(label, { opacity: 0, x: 50, duration: 1 }, "+=1");
      });

      tlRef.current = tl;
    }
    
    return () => {
      if (tlRef.current) {
        tlRef.current.scrollTrigger?.kill();
        tlRef.current.kill();
        tlRef.current = null;
      }
    };
  }, []);

  return (
    <section ref={containerRef} className="relative h-screen w-full flex items-center overflow-hidden z-10 pointer-events-none">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-12 w-full flex">
        <div className="w-full md:w-1/3 flex flex-col justify-center relative h-[300px]">
          
          <div className="story-label section-card backdrop-blur-lg p-8 h-fit  absolute inset-0 flex flex-col justify-center opacity-0">
            <h3 className="text-2xl sm:text-3xl font-bold text-white mb-2">Smart Sensors</h3>
            <p className="text-gray-400">Advanced telemetry arrays monitor machine health and inventory in real-time.</p>
          </div>
          
          <div className="story-label section-card backdrop-blur-lg p-8 h-fit absolute inset-0 flex flex-col justify-center opacity-0">
            <h3 className="text-3xl font-bold text-white mb-2">Cooling Core</h3>
            <p className="text-gray-400">Energy efficient dual-climate zones keeping beverages crisp and snacks fresh.</p>
          </div>
          
          <div className="story-label section-card backdrop-blur-lg p-8 h-fit absolute inset-0 flex flex-col justify-center opacity-0">
            <h3 className="text-3xl font-bold text-white mb-2">AI Processing</h3>
            <p className="text-gray-400">On-board edge computing for predictive maintenance and dynamic pricing.</p>
          </div>
          
        </div>
      </div>
    </section>
  );
}
