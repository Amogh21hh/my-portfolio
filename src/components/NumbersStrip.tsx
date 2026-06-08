"use client";

import { motion } from "framer-motion";
import { Github, PlayCircle, Briefcase, Award, CheckCircle2 } from "lucide-react";

export default function NumbersStrip() {
  const stats = [
    {
      icon: <Briefcase className="text-emerald-400" size={24} />,
      value: "£1bn+",
      label: "Modelled Portfolio Exposure"
    },
    {
      icon: <Github className="text-emerald-400" size={24} />,
      value: "7+",
      label: "GitHub Finance Projects"
    },
    {
      icon: <PlayCircle className="text-emerald-400" size={24} />,
      value: "3+",
      label: "Live Demos"
    },
    {
      icon: <Award className="text-emerald-400" size={24} />,
      value: "L1 & L2",
      label: "Xero Certified"
    },
    {
      icon: <CheckCircle2 className="text-emerald-400" size={24} />,
      value: "Yes",
      label: "UK Right to Work"
    }
  ];

  return (
    <section className="relative z-20 bg-[#121212] py-12 px-8 border-y border-white/5">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8 items-center justify-center">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="flex flex-col items-center text-center group"
            >
              <div className="mb-3 bg-white/5 p-4 rounded-full border border-white/10 group-hover:border-emerald-500/50 group-hover:bg-emerald-900/20 transition-all duration-300">
                {stat.icon}
              </div>
              <div className="text-2xl md:text-3xl font-bold text-white mb-1 tracking-tight">
                {stat.value}
              </div>
              <div className="text-xs md:text-sm text-gray-400 font-medium uppercase tracking-wider">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
