"use client";

import { motion } from "framer-motion";
import { ShieldCheck, TrendingUp, GraduationCap, FileCheck } from "lucide-react";

export default function About() {
  const hireReasons = [
    {
      icon: <TrendingUp className="text-emerald-400 mb-3" size={24} />,
      title: "Finance + Analytics Hybrid",
      description: "A rare combination of traditional accounting knowledge (BCom/MBA) paired with modern data manipulation skills (MSc Analytics). I don't just report numbers; I uncover the 'why' behind them."
    },
    {
      icon: <FileCheck className="text-emerald-400 mb-3" size={24} />,
      title: "Hands-On Financial Experience",
      description: "Proven capability in managing high-volume transaction processing, daily cash reconciliations, and stringent regulatory compliance (HIPAA/ERISA)."
    },
    {
      icon: <ShieldCheck className="text-emerald-400 mb-3" size={24} />,
      title: "Low Risk & Immediate Impact",
      description: "Fully certified (Xero L1 & L2), equipped with advanced Excel, and based in London with a full Right to Work (Graduate Visa)—ensuring zero sponsorship hurdles."
    }
  ];

  return (
    <section className="relative z-20 bg-[#121212] py-24 px-8 md:px-24 border-t border-white/5">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          
          {/* Professional Profile - Bulleted & Scannable */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-3xl font-bold mb-8 text-white border-b border-white/10 pb-4">Professional Profile</h3>
            
            <ul className="space-y-4 text-gray-300 text-lg mb-8">
              <li className="flex items-start gap-3">
                <span className="text-emerald-500 mt-1.5">•</span>
                <span><strong className="text-white">Career Direction:</strong> Seeking entry-level Finance Assistant, Financial Analyst, or Accounts Assistant roles in London.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-emerald-500 mt-1.5">•</span>
                <span><strong className="text-white">Core Focus:</strong> Specialising in financial reporting, variance analysis, and internal controls to drive operational efficiency.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-emerald-500 mt-1.5">•</span>
                <span><strong className="text-white">Analytical Mindset:</strong> Leveraging robust data analytics to support fundamental accounting principles, ensuring accuracy in forecasting and month-end close.</span>
              </li>
            </ul>

            <h4 className="text-xl font-semibold mb-6 text-emerald-400">Academic Foundation</h4>
            <div className="flex flex-col gap-3">
              <div className="flex items-center gap-3 text-gray-200 bg-white/5 p-4 rounded-lg border border-white/10">
                <GraduationCap className="text-emerald-400 min-w-[24px]" size={24} />
                <div>
                  <p className="font-semibold leading-tight">MSc Business Analytics (Distinction)</p>
                  <p className="text-sm text-gray-400">University of Essex (2025 - 2026)</p>
                </div>
              </div>
              <div className="flex items-center gap-3 text-gray-200 bg-white/5 p-4 rounded-lg border border-white/10">
                <GraduationCap className="text-emerald-400 min-w-[24px]" size={24} />
                <div>
                  <p className="font-semibold leading-tight">MBA Finance & Marketing</p>
                  <p className="text-sm text-gray-400">REVA University (2022 - 2023)</p>
                </div>
              </div>
              <div className="flex items-center gap-3 text-gray-200 bg-white/5 p-4 rounded-lg border border-white/10">
                <GraduationCap className="text-emerald-400 min-w-[24px]" size={24} />
                <div>
                  <p className="font-semibold leading-tight">BCom Taxation & Accounting</p>
                  <p className="text-sm text-gray-400">Sapient College of Commerce (2018 - 2021)</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Why Hire Me - Risk Reduction */}
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
                  <div className="flex items-center gap-4 mb-2">
                    {item.icon}
                    <h4 className="text-lg font-semibold text-white mb-3">{item.title}</h4>
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
