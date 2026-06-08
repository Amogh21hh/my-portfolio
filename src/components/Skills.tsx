"use client";

import { motion } from "framer-motion";

export default function Skills() {
  const skillCategories = [
    {
      category: "Accounting & Reporting",
      skills: [
        "Xero L1 + L2 Certified",
        "Bank Reconciliation",
        "Month-End Close Support",
        "Financial Reporting (P&L, BS, CF)",
        "Variance Analysis",
        "Cash Flow Monitoring"
      ]
    },
    {
      category: "Credit & Financial Modelling",
      skills: [
        "IFRS 9 ECL Modelling",
        "PD / LGD / EAD Frameworks",
        "DCF Valuation",
        "WACC Modelling",
        "ARIMA Forecasting",
        "Stress Testing"
      ]
    },
    {
      category: "Technical Tools",
      skills: [
        "Excel (Advanced Modelling)",
        "Python (pandas, sklearn, statsmodels)",
        "R (Forecasting, Scorecards)",
        "SQL",
        "Power BI",
        "Streamlit",
        "GitHub"
      ]
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 15 },
    show: { opacity: 1, y: 0 }
  };

  return (
    <section className="relative z-20 bg-[#121212] py-24 px-8 md:px-24 border-t border-white/5">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <h3 className="text-3xl font-bold mb-12 text-center text-white">Core Finance Competencies</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {skillCategories.map((group, i) => (
              <motion.div 
                key={i}
                variants={containerVariants}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-8"
              >
                <h4 className="text-lg font-bold mb-6 text-emerald-400 border-b border-white/10 pb-4 tracking-wide uppercase">
                  {group.category}
                </h4>
                
                <ul className="flex flex-col gap-4">
                  {group.skills.map((skill, j) => (
                    <motion.li 
                      key={j}
                      variants={itemVariants}
                      className="text-gray-300 font-medium text-sm flex items-start gap-3"
                    >
                      <span className="text-emerald-500 mt-0.5">✔</span> {skill}
                    </motion.li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
