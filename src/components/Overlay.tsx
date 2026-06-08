"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { FileText, Github, Linkedin, Mail } from "lucide-react";

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
          className="absolute text-center max-w-5xl w-full flex flex-col items-center pointer-events-auto z-50"
        >
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-2 text-white">
            Amogh H H
          </h1>
          <h2 className="text-xl md:text-2xl font-semibold mb-6 text-emerald-400 tracking-wide uppercase">
            Corporate Finance, Accounting & Business Analytics Graduate
          </h2>

          <div className="flex flex-col items-center justify-center gap-4 mb-10 w-full max-w-4xl">
            {/* Credentials Block */}
            <div className="flex flex-wrap items-center justify-center gap-x-3 gap-y-2 text-gray-300 font-medium text-sm md:text-base border-b border-white/10 pb-4">
              <span>MSc Business Analytics (Distinction), University of Essex</span>
              <span className="text-emerald-500">•</span>
              <span>MBA Finance</span>
              <span className="text-emerald-500">•</span>
              <span>Xero Level 1 & Level 2 Certified</span>
            </div>

            {/* Work Authorization & Availability */}
            <div className="flex flex-wrap items-center justify-center gap-x-3 gap-y-2 text-gray-200 font-semibold bg-emerald-900/20 border border-emerald-500/30 px-6 py-2 rounded-lg">
              <span>📍 London</span>
              <span className="text-emerald-500 hidden md:inline">|</span>
              <span>Full UK Right to Work (Graduate Visa)</span>
              <span className="text-emerald-500 hidden md:inline">|</span>
              <span className="text-emerald-400">Available Immediately</span>
              <span className="text-emerald-500 hidden md:inline">|</span>
              <span>No Sponsorship Required</span>
            </div>

            {/* Target Roles Row */}
            <div className="text-gray-400 text-sm font-medium tracking-wide uppercase mt-2">
              Targeting: Finance Assistant · Accounts Assistant · Financial Analyst · Credit Risk Analyst · Junior Risk / FP&A Analyst
            </div>
          </div>

          {/* Global Contact Actions */}
          <div className="flex flex-wrap items-center justify-center gap-4 relative z-50">
            <a href="mailto:amoghmallikarjun0321@gmail.com" className="flex items-center gap-2 bg-emerald-500 hover:bg-emerald-400 text-[#121212] px-6 py-3 rounded-lg font-bold transition-colors cursor-pointer pointer-events-auto">
              <Mail size={18} />
              AMOGHMALLIKARJUN0321@GMAIL.COM
            </a>
            <a href="/Amogh_HH_CV.pdf" download="Amogh_HH_CV.pdf" className="flex items-center gap-2 bg-white/10 hover:bg-white/20 border border-white/20 text-white px-6 py-3 rounded-lg font-semibold transition-colors cursor-pointer pointer-events-auto">
              <FileText size={18} />
              Download CV (PDF)
            </a>
            <a href="https://github.com/Amogh21hh" target="_blank" rel="noreferrer" className="flex items-center gap-2 bg-white/10 hover:bg-white/20 border border-white/20 text-white px-6 py-3 rounded-lg font-semibold transition-colors cursor-pointer pointer-events-auto">
              <Github size={18} />
              GitHub
            </a>
            <a href="https://www.linkedin.com/in/amogh-hh-34129a1b9/" target="_blank" rel="noreferrer" className="flex items-center gap-2 bg-[#0A66C2] hover:bg-[#004182] text-white px-6 py-3 rounded-lg font-semibold transition-colors cursor-pointer pointer-events-auto">
              <Linkedin size={18} />
              LinkedIn
            </a>
          </div>
        </motion.div>

        {/* Section 2: Left Aligned - Value Prop */}
        <motion.div 
          style={{ opacity: opacity2, y: y2 }}
          className="absolute left-8 md:left-24 max-w-2xl pointer-events-auto z-50"
        >
          <h2 className="text-4xl md:text-5xl font-bold leading-tight mb-6 text-white">
            Evidence-Based<br />
            Financial Engineering.
          </h2>
          <p className="text-xl text-gray-300 leading-relaxed mb-6">
            Translating complex datasets into clear corporate reporting. Focused on cost control, variance analysis, and mitigating operational risk with institutional rigor.
          </p>
          <div className="flex flex-col gap-2 text-gray-400 font-medium">
            <span>• Month-End Close & Reconciliation</span>
            <span>• Credit Risk Modelling (IFRS 9)</span>
            <span>• FP&A Variance Reporting</span>
          </div>
        </motion.div>

        {/* Section 3: Right Aligned - Ready to Work */}
        <motion.div 
          style={{ opacity: opacity3, y: y3 }}
          className="absolute right-8 md:right-24 max-w-xl text-right pointer-events-auto z-50"
        >
          <h2 className="text-4xl md:text-5xl font-bold leading-tight mb-6 text-white">
            Ready to Drive Value<br />

            From Day One.
          </h2>
          <p className="text-xl text-gray-300 leading-relaxed mb-6">
            Equipped with advanced Excel, Python, SQL, and hands-on reconciliation experience to seamlessly integrate into your finance team.
          </p>
          <div className="inline-block bg-white/10 border border-emerald-500/30 px-6 py-3 rounded-lg text-emerald-400 font-bold tracking-wide shadow-[0_0_15px_rgba(52,211,153,0.1)]">
            AVAILABLE IMMEDIATELY
          </div>
        </motion.div>

      </div>
    </div>
  );
}
