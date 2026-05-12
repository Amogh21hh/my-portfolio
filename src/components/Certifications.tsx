"use client";

import { motion } from "framer-motion";
import { Award, CheckCircle2 } from "lucide-react";

export default function Certifications() {
  const certifications = [
    {
      name: "L2 Xero Certified Professional",
      issuer: "Xero",
      date: "Jan 2026",
      credentialId: "14731626"
    },
    {
      name: "L1 Xero Certified Associate",
      issuer: "Xero",
      date: "Jan 2026",
      credentialId: "14676565"
    },
    {
      name: "Investment Banking Job Simulation",
      issuer: "Citi / Forage",
      date: "Nov 2025",
      credentialId: "iBo5GjJXcswtKZEao"
    },
    {
      name: "Data Analytics Job Simulation",
      issuer: "KPMG AU / Forage",
      date: "Nov 2023",
      credentialId: "bSPqKkAYbrjyfhMcZ"
    },
    {
      name: "Financial Modeling and Forecasting",
      issuer: "LinkedIn Learning",
      date: "Nov 2023"
    },
    {
      name: "Learning Excel: Data Analysis & Management",
      issuer: "LinkedIn Learning",
      date: "Jul 2025"
    },
    {
      name: "Accounting Foundations",
      issuer: "LinkedIn Learning",
      date: "Aug 2023"
    },
    {
      name: "Learning Data Analytics: Foundations",
      issuer: "LinkedIn Learning",
      date: "Aug 2023"
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    show: { opacity: 1, x: 0 }
  };

  return (
    <section className="relative z-20 bg-[#121212] py-24 px-8 md:px-24 border-t border-white/5">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex items-center justify-center gap-4 mb-16">
            <Award className="text-emerald-400" size={36} />
            <h3 className="text-4xl font-bold text-center text-white">Licenses & Certifications</h3>
          </div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 gap-6"
          >
            {certifications.map((cert, i) => (
              <motion.div
                key={i}
                variants={itemVariants}
                className="bg-white/5 backdrop-blur-sm border border-white/10 hover:border-emerald-500/30 transition-all rounded-2xl p-6 flex items-start gap-4"
              >
                <div className="mt-1">
                  <CheckCircle2 className="text-emerald-400" size={24} />
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-gray-100 mb-1 leading-tight">
                    {cert.name}
                  </h4>
                  <p className="text-emerald-400/80 font-medium text-sm mb-2">
                    {cert.issuer}
                  </p>
                  <div className="flex flex-col gap-1 text-xs text-gray-400">
                    <span>Issued {cert.date}</span>
                    {cert.credentialId && (
                      <span className="font-mono bg-white/5 px-2 py-0.5 rounded border border-white/5 inline-block w-fit mt-1">
                        ID: {cert.credentialId}
                      </span>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
