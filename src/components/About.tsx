"use client";

import { motion } from "framer-motion";
import { Briefcase, GraduationCap, TrendingUp, Search } from "lucide-react";

export default function About() {
  const offerings = [
    {
      icon: <TrendingUp className="text-emerald-400 mb-4" size={28} />,
      title: "Commercial Acumen",
      description: "Proven ability to translate raw data into strategic insights that optimise costs, manage risk, and support revenue growth."
    },
    {
      icon: <Search className="text-emerald-400 mb-4" size={28} />,
      title: "Analytical Rigor",
      description: "Advanced proficiency in Excel, R, and financial modelling to execute high-volume reconciliations and variance analyses with absolute precision."
    },
    {
      icon: <Briefcase className="text-emerald-400 mb-4" size={28} />,
      title: "Operational Excellence",
      description: "Hands-on experience in cash management, strict regulatory compliance (HIPAA/ERISA), and maintaining robust internal controls."
    }
  ];

  return (
    <section className="relative z-20 bg-[#121212] py-24 px-8 md:px-24 border-t border-white/5">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          
          {/* Professional Summary */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-4xl font-bold mb-8 text-white">Professional Profile</h3>
            <p className="text-gray-300 text-lg leading-relaxed mb-6">
              I am a proactive and detail-oriented <strong className="text-white">Finance & Data Analyst</strong> equipped with an MBA in Finance and an MSc in Business Analytics (Distinction) from the University of Essex.
            </p>
            <p className="text-gray-300 text-lg leading-relaxed mb-6">
              With a foundation in operational finance, high-volume bank reconciliations, and compliance-driven data management, I specialise in bridging the gap between traditional accounting processes and modern predictive analytics.
            </p>
            <p className="text-gray-300 text-lg leading-relaxed mb-8">
              Currently seeking entry-level Analyst and Finance Associate roles in London to apply my commercial awareness, Xero certification, and rigorous analytical mindset to drive financial control and business performance.
            </p>

            <div className="flex flex-col gap-4">
              <div className="flex items-center gap-3 text-gray-200 bg-white/5 p-4 rounded-xl border border-white/10">
                <GraduationCap className="text-emerald-400" size={24} />
                <div>
                  <p className="font-semibold">MSc Business Analytics (Distinction)</p>
                  <p className="text-sm text-gray-400">University of Essex</p>
                </div>
              </div>
              <div className="flex items-center gap-3 text-gray-200 bg-white/5 p-4 rounded-xl border border-white/10">
                <GraduationCap className="text-emerald-400" size={24} />
                <div>
                  <p className="font-semibold">MBA Finance & Marketing</p>
                  <p className="text-sm text-gray-400">REVA University</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* What I Bring */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-col justify-center"
          >
            <h3 className="text-3xl font-bold mb-8 text-white">What I Bring</h3>
            <div className="grid grid-cols-1 gap-6">
              {offerings.map((item, i) => (
                <div key={i} className="bg-white/5 p-6 rounded-2xl border border-white/10 hover:border-emerald-500/30 transition-colors">
                  {item.icon}
                  <h4 className="text-xl font-semibold text-white mb-2">{item.title}</h4>
                  <p className="text-gray-400 leading-relaxed">{item.description}</p>
                </div>
              ))}
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
