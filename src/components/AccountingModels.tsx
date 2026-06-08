"use client";

import { motion } from "framer-motion";
import { FileSpreadsheet, ExternalLink } from "lucide-react";

export default function AccountingModels() {
  const projects = [
    {
      title: "UK Statutory Accounting Model — Maple & Bean Coffee Co.",
      icon: <FileSpreadsheet className="text-emerald-400 mb-3" size={28} />,
      subtitle: "End-to-end SME accounting simulation",
      outcomes: [
        "Full 6-month financial cycle with complete Trial Balance reconciliation.",
        "Built-in VAT returns, Corporation Tax calculations, and Employment Allowance processing.",
        "FRS 105 micro-entity compliance incorporated into final statutory reporting.",
        "Simulated £129k revenue with precise Excel-based double-entry accounting mechanics."
      ],
      githubLink: "https://github.com/Amogh21hh/maple-bean-accounting-model" // Assuming standard naming convention based on previous repos
    }
  ];

  return (
    <section className="relative z-20 bg-[#121212] py-24 px-8 md:px-24 border-t border-white/5">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <h3 className="text-3xl font-bold mb-12 text-center text-white">Accounting Operations & Reporting</h3>
          
          <div className="grid grid-cols-1 gap-8 max-w-4xl mx-auto">
            {projects.map((project, i) => (
              <motion.div
                key={i}
                whileHover={{ y: -5 }}
                className="group relative bg-emerald-900/10 backdrop-blur-md border border-emerald-500/20 hover:border-emerald-500/50 transition-all duration-300 rounded-xl p-8 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-start gap-4 mb-4">
                    {project.icon}
                    <div>
                      <h4 className="text-xl font-bold text-white leading-tight">{project.title}</h4>
                      <p className="text-emerald-400 text-sm font-bold mt-1">{project.subtitle}</p>
                    </div>
                  </div>
                  
                  <ul className="mb-6 space-y-3">
                    {project.outcomes.map((outcome, j) => (
                      <li key={j} className="text-gray-300 text-sm flex items-start gap-3">
                        <span className="text-emerald-500 mt-0.5">•</span> {outcome}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="flex gap-4 mt-6">
                  {project.githubLink && (
                     <a 
                     href={project.githubLink}
                     target="_blank"
                     rel="noopener noreferrer"
                     className="text-sm font-bold flex items-center justify-center w-full gap-2 text-[#121212] bg-emerald-400 hover:bg-emerald-300 px-4 py-3 rounded-lg transition-colors"
                   >
                     View Accounting Model <ExternalLink size={16} />
                   </a>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
