"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { CheckCircle2 } from "lucide-react";

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
      <div className="sticky top-0 h-screen w-full flex items-center justify-center p-8">
        
        {/* Section 1: Center - Elite Hero Section */}
        <motion.div 
          style={{ opacity: opacity1, y: y1 }}
          className="absolute text-center max-w-4xl w-full"
        >
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-4 text-white">
            Amogh H H<br />
          </h1>
          <h2 className="text-2xl md:text-3xl font-semibold mb-8 text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-blue-400">
            Finance & Accounting Graduate
          </h2>

          {/* Hard Recruiter Triggers */}
          <div className="flex flex-col items-center justify-center gap-3 mb-8">
            <div className="bg-emerald-900/40 border border-emerald-400/30 px-6 py-3 rounded-xl flex items-center gap-3 backdrop-blur-md">
              <CheckCircle2 className="text-emerald-400" size={20} />
              <span className="text-emerald-50 font-semibold text-lg">Full Right to Work in the UK (Graduate Visa)</span>
            </div>
            <div className="flex flex-wrap items-center justify-center gap-4 text-gray-200 font-medium">
              <span className="bg-white/10 px-4 py-2 rounded-lg border border-white/10">📍 London, UK</span>
              <span className="bg-white/10 px-4 py-2 rounded-lg border border-white/10">🎯 Actively seeking Entry-Level Finance / Accounting Roles</span>
            </div>
          </div>

          <p className="text-lg text-gray-300 max-w-2xl mx-auto leading-relaxed">
            Delivering precise financial reporting, variance analysis, and decision support.<br />
            Supported by an MSc in Business Analytics (Essex) and an MBA in Finance.
          </p>
        </motion.div>

        {/* Section 2: Left Aligned - Value Prop */}
        <motion.div 
          style={{ opacity: opacity2, y: y2 }}
          className="absolute left-8 md:left-24 max-w-2xl"
        >
          <h2 className="text-4xl md:text-5xl font-bold leading-tight mb-6 text-white">
            Financial Precision.<br />
            Data-Backed Decisions.
          </h2>
          <p className="text-xl text-gray-300 leading-relaxed mb-6">
            Translating complex financial datasets into clear corporate reporting. Focused on cost control, revenue analysis, and mitigating operational risk.
          </p>
          <div className="flex flex-col gap-2 text-gray-400 font-medium">
            <span>• BCom Taxation & Accounting</span>
            <span>• MBA Finance & Marketing</span>
            <span>• MSc Business Analytics</span>
          </div>
        </motion.div>

        {/* Section 3: Right Aligned - Ready to Work */}
        <motion.div 
          style={{ opacity: opacity3, y: y3 }}
          className="absolute right-8 md:right-24 max-w-xl text-right"
        >
          <h2 className="text-4xl md:text-5xl font-bold leading-tight mb-6 text-white">
            Ready to Drive Value<br />
            From Day One.
          </h2>
          <p className="text-xl text-gray-300 leading-relaxed mb-6">
            Equipped with advanced Excel, Xero certification, and hands-on reconciliation experience to seamlessly integrate into your finance team.
          </p>
          <div className="inline-block bg-white/10 border border-white/20 px-6 py-3 rounded-lg text-emerald-400 font-semibold">
            Available Immediately
          </div>
        </motion.div>

      </div>
    </div>
  );
}
