"use client";

import { motion } from "framer-motion";
import { ShieldCheck, TrendingUp, FileCheck, Target, Database, Calculator } from "lucide-react";

export default function About() {
  const hireReasons = [
    {
      icon: <Target className="text-emerald-400 mb-3" size={24} />,
      title: "1. Finance & Accounting Alignment",
      description: "Dedicated to building a career in corporate finance. Combining traditional accounting foundations (MBA/BCom) with strong intent for FP&A, month-end close, and credit risk roles in the UK market."
    },
    {
      icon: <Database className="text-emerald-400 mb-3" size={24} />,
      title: "2. Technical Proof & Modelling",
      description: "Proven capability to build institutional-grade models from scratch. Developed an end-to-end IFRS 9 ECL model, a comprehensive Rolls-Royce DCF valuation, an FP&A variance engine, and distressed debt simulations."
    },
    {
      icon: <ShieldCheck className="text-emerald-400 mb-3" size={24} />,
      title: "3. Hiring Readiness & Low Risk",
      description: "Xero L1 & L2 certified, highly proficient in advanced Excel & Python. Full Right to Work in the UK (Graduate Visa) and available immediately with zero sponsorship hurdles or delays."
    }
  ];

  return (
    <section className="relative z-20 bg-[#121212] py-24 px-8 md:px-24">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          
          {/* Professional Profile */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-3xl font-bold mb-8 text-white border-b border-white/10 pb-4">Professional Identity & Focus</h3>
            
            <p className="text-gray-300 text-lg mb-8 leading-relaxed">
              I am a finance and analytics hybrid professional bridging the gap between <strong className="text-white">routine accounting operations</strong> and <strong className="text-white">advanced financial modelling</strong>. My focus is on producing reliable, evidence-based financial insights that drive corporate decision-making.
            </p>

            <ul className="space-y-4 text-gray-300 text-base mb-8">
              <li className="flex items-start gap-3">
                <span className="text-emerald-500 mt-1">•</span>
                <span><strong className="text-white">Career Goal:</strong> UK entry-level Finance, FP&A, or Credit Risk roles.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-emerald-500 mt-1">•</span>
                <span><strong className="text-white">Finance Skill Direction:</strong> Month-end close, balance sheet reconciliation, variance analysis, FP&A reporting, and credit risk modelling.</span>
              </li>
            </ul>

            <h4 className="text-xl font-semibold mb-6 text-emerald-400">Professional Experience</h4>
            <div className="bg-white/5 p-6 rounded-xl border border-white/10">
              <h5 className="font-bold text-lg text-white mb-1">Carelon Global Solutions</h5>
              <p className="text-emerald-400 text-sm font-medium mb-4">Operations & Data Processing</p>
              <ul className="space-y-2 text-gray-300 text-sm">
                <li className="flex items-start gap-3">
                  <span className="text-emerald-500 mt-0.5">✔</span>
                  <span>Processed <strong className="text-white">500+ financial records weekly</strong> within strict Service Level Agreements.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-emerald-500 mt-0.5">✔</span>
                  <span>Maintained a <strong className="text-white">98% accuracy rate</strong> in high-volume transaction processing.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-emerald-500 mt-0.5">✔</span>
                  <span>Executed compliance-driven work in a highly regulated environment (HIPAA/ERISA equivalent structure), ensuring zero audit failures.</span>
                </li>
              </ul>
            </div>
          </motion.div>

          {/* Why Hire Me */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-col"
          >
            <h3 className="text-3xl font-bold mb-8 text-white border-b border-white/10 pb-4">Why Hire Me?</h3>
            <div className="grid grid-cols-1 gap-5">
              {hireReasons.map((item, i) => (
                <div key={i} className="bg-white/5 p-6 rounded-xl border border-white/10 hover:border-emerald-500/30 transition-colors">
                  <div className="flex items-center gap-4 mb-3">
                    {item.icon}
                    <h4 className="text-lg font-bold text-white">{item.title}</h4>
                  </div>
                  <p className="text-gray-400 leading-relaxed text-sm">{item.description}</p>
                </div>
              ))}
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
