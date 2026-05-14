"use client";

import { motion } from "framer-motion";

export default function Skills() {
  const skillCategories = [
    {
      category: "Commercial & Financial Analysis",
      skills: [
        "Financial Statement Analysis",
        "Budgeting & Variance Analysis",
        "Financial Modelling & Forecasting",
        "Business Performance Insights",
        "Credit Risk Assessment"
      ]
    },
    {
      category: "Accounting & Operational Control",
      skills: [
        "Financial Reporting",
        "High-Volume Bank Reconciliations",
        "Accounts Payable (AP) & Receivable (AR)",
        "Internal Controls & Compliance",
        "Cash Flow Management"
      ]
    },
    {
      category: "Data & Technical Proficiencies",
      skills: [
        "Microsoft Excel (Advanced, Power Query, Solver)",
        "R Programming & Predictive Analytics",
        "SQL (Data Extraction & Validation)",
        "Xero Cloud Accounting (Level 1 & 2 Certified)",
        "Data-driven Decision Making"
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
    hidden: { opacity: 0, y: 20 },
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
          <h3 className="text-4xl font-bold mb-16 text-center text-white">Core Strengths & Technical Competencies</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {skillCategories.map((group, i) => (
              <motion.div 
                key={i}
                variants={containerVariants}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8"
              >
                <h4 className="text-xl font-semibold mb-6 text-emerald-400 border-b border-white/10 pb-4">
                  {group.category}
                </h4>
                
                <ul className="flex flex-col gap-3">
                  {group.skills.map((skill, j) => (
                    <motion.li 
                      key={j}
                      variants={itemVariants}
                      className="text-gray-300 font-medium text-sm flex items-start gap-2"
                    >
                      <span className="text-emerald-500 mt-1">•</span> {skill}
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
