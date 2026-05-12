"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

export default function Overlay() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  // Section 1: Fades out quickly
  const opacity1 = useTransform(scrollYProgress, [0, 0.1, 0.2], [1, 1, 0]);
  const y1 = useTransform(scrollYProgress, [0, 0.2], [0, -100]);

  // Section 2: Appears around 30%
  const opacity2 = useTransform(scrollYProgress, [0.2, 0.3, 0.4, 0.5], [0, 1, 1, 0]);
  const y2 = useTransform(scrollYProgress, [0.2, 0.5], [100, -100]);

  // Section 3: Appears around 60%
  const opacity3 = useTransform(scrollYProgress, [0.5, 0.6, 0.7, 0.8], [0, 1, 1, 0]);
  const y3 = useTransform(scrollYProgress, [0.5, 0.8], [100, -100]);

  return (
    <div ref={containerRef} className="absolute top-0 left-0 w-full h-[500vh] pointer-events-none z-10">
      {/* Container must be sticky to overlay correctly while scrolling the 500vh container */}
      <div className="sticky top-0 h-screen w-full flex items-center justify-center p-8">
        
        {/* Section 1: Center */}
        <motion.div 
          style={{ opacity: opacity1, y: y1 }}
          className="absolute text-center"
        >
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-4">
            Amogh H H.<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-emerald-400">
              Finance & Analytics.
            </span>
          </h1>
        </motion.div>

        {/* Section 2: Left Aligned */}
        <motion.div 
          style={{ opacity: opacity2, y: y2 }}
          className="absolute left-8 md:left-24 max-w-xl"
        >
          <h2 className="text-4xl md:text-6xl font-semibold leading-tight">
            Bridging traditional<br />
            accounting & analytics.
          </h2>
        </motion.div>

        {/* Section 3: Right Aligned */}
        <motion.div 
          style={{ opacity: opacity3, y: y3 }}
          className="absolute right-8 md:right-24 max-w-xl text-right"
        >
          <h2 className="text-4xl md:text-6xl font-semibold leading-tight">
            Driving efficiency<br />
            with data insights.
          </h2>
        </motion.div>

      </div>
    </div>
  );
}
