"use client";

import { motion } from "framer-motion";
import { ShieldCheck, TrendingUp, Target, Database } from "lucide-react";

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
            <h3 className="text-3xl font-bold mb-8 text-white border-b border-white/10 pb-4">Professional Identity</h3>
            
            <p className="text-gray-300 text-base mb-8 leading-relaxed">
              I am a finance, accounting, and analytics professional who bridges ledger-level general accounting integrity with script-driven mathematical risk and forecasting models. My focus is on producing reliable, evidence-based financial insights that drive corporate decision-making and operational efficiency.
            </p>

            <h4 className="text-xl font-semibold mb-6 text-emerald-400">Prior Commercial Evidence</h4>
            <div className="bg-white/5 p-6 rounded-xl border border-white/10 mb-8">
              <h5 className="font-bold text-lg text-white mb-1">Carelon Global Solutions (Elevance Health)</h5>
              <p className="text-emerald-400 text-sm font-medium mb-4">Operations & Data Processing (9 Months)</p>
              <ul className="space-y-3 text-gray-300 text-sm">
                <li className="flex items-start gap-3">
                  <span className="text-emerald-500 mt-0.5">✔</span>
                  <span>Processed over <strong className="text-white">500 regulated corporate operational records weekly</strong> with a verified <strong className="text-white">98% accuracy baseline</strong>.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-emerald-500 mt-0.5">✔</span>
                  <span>Executed high-volume transaction processing under strict <strong className="text-white">HIPAA/ERISA compliance environments</strong>, functioning as a direct analogue to a financial services shared-services data infrastructure.</span>
                </li>
              </ul>
            </div>

            <h4 className="text-xl font-semibold mb-6 text-emerald-400">Day-to-Day Operations Integration</h4>
            <ul className="space-y-3 text-gray-300 text-base mb-8">
              <li className="flex items-start gap-3">
                <span className="text-emerald-500 mt-1">•</span>
                <span>Explicit competency in executing <strong className="text-white">month-end close support processes</strong>.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-emerald-500 mt-1">•</span>
                <span>Managing high-volume <strong className="text-white">bank and balance sheet reconciliations</strong>.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-emerald-500 mt-1">•</span>
                <span>Structuring <strong className="text-white">variance tracking reports</strong> and implementing <strong className="text-white">risk-modeling mechanics</strong>.</span>
              </li>
            </ul>

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
