"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { CheckCircle2, FileText, Github, Linkedin, Mail } from "lucide-react";

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
          className="absolute text-center max-w-5xl w-full flex flex-col items-center pointer-events-auto"
        >
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-4 text-white">
            Amogh H H
          </h1>
          <h2 className="text-2xl md:text-3xl font-semibold mb-8 text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-blue-400">
            Finance & Accounting | Credit Risk | FP&A
          </h2>

          {/* Hard Recruiter Triggers */}
          <div className="flex flex-col items-center justify-center gap-3 mb-8 w-full max-w-3xl">
            <div className="bg-emerald-900/40 border border-emerald-400/30 px-6 py-3 rounded-xl flex items-center gap-3 backdrop-blur-md">
              <CheckCircle2 className="text-emerald-400" size={20} />
              <span className="text-emerald-50 font-semibold text-lg">UK Full Right to Work (Graduate Visa) & Immediate Availability</span>
            </div>
            <div className="flex flex-wrap items-center justify-center gap-4 text-gray-200 font-medium">
              <span className="bg-white/10 px-4 py-2 rounded-lg border border-white/10">🎓 MSc Business Analytics (Essex)</span>
              <span className="bg-white/10 px-4 py-2 rounded-lg border border-white/10">🎓 MBA Finance</span>
              <span className="bg-white/10 px-4 py-2 rounded-lg border border-white/10">📜 Xero L1 & L2 Certified</span>
            </div>
          </div>

          <p className="text-lg text-gray-300 max-w-3xl mx-auto leading-relaxed mb-10">
            Analyst-level finance professional bridging the gap between traditional accounting operations and advanced financial modelling. 
            Delivering institutional-grade credit risk, FP&A variance, and statutory reporting solutions.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-wrap items-center justify-center gap-4">
            <a href="/Amogh_HH_CV.pdf" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 bg-emerald-500 hover:bg-emerald-400 text-[#121212] px-6 py-3 rounded-lg font-bold transition-colors">
              <FileText size={20} />
              Download CV
            </a>
            <a href="https://github.com/Amogh21hh" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 bg-white/10 hover:bg-white/20 border border-white/20 text-white px-6 py-3 rounded-lg font-semibold transition-colors">
              <Github size={20} />
              GitHub
            </a>
            <a href="https://www.linkedin.com/in/amogh-hh-34129a1b9" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 bg-[#0A66C2] hover:bg-[#004182] text-white px-6 py-3 rounded-lg font-semibold transition-colors">
              <Linkedin size={20} />
              LinkedIn
            </a>
            <a href="mailto:AMOGHMALLIKARJUN0321@GMAIL.COM" className="flex items-center gap-2 bg-white/10 hover:bg-white/20 border border-white/20 text-white px-6 py-3 rounded-lg font-semibold transition-colors">
              <Mail size={20} />
              AMOGHMALLIKARJUN0321@GMAIL.COM
            </a>
          </div>
        </motion.div>

        {/* Section 2: Left Aligned - Value Prop */}
        <motion.div 
          style={{ opacity: opacity2, y: y2 }}
          className="absolute left-8 md:left-24 max-w-2xl pointer-events-auto"
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
          className="absolute right-8 md:right-24 max-w-xl text-right pointer-events-auto"
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
