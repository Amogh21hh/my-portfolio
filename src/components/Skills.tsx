"use client";

import { motion } from "framer-motion";

export default function Skills() {
  // To add more detailed skills in the future, simply add them to these arrays!
  const skillCategories = [
    {
      category: "Finance & Accounting",
      skills: [
        "Financial Analysis",
        "Bank Reconciliation",
        "Financial Reporting",
        "Financial Modeling",
        "Accounts Payable (AP) & Receivable (AR)",
        "Cost Management",
        "Operational Risk"
      ]
    },
    {
      category: "Data Analytics & Modeling",
      skills: [
        "Predictive Analytics",
        "Linear Regression & Logistic Regression",
        "Excel Solver & Linear Programming",
        "Financial Forecasting",
        "Statistical Data Analysis",
        "Data Visualization"
      ]
    },
    {
      category: "Tools & Technologies",
      skills: [
        "Xero Cloud Accounting (Certified Level 1 & 2)",
        "Microsoft Excel (Advanced)",
        "R (Programming Language)",
        "GanttProject",
        "CRM Systems"
      ]
    },
    {
      category: "Business & Management",
      skills: [
        "Project Planning & Critical Path Method",
        "Stakeholder Management",
        "HIPAA & ERISA Compliance",
        "Quality Control & Data Validation",
        "Cash Handling & Operations"
      ]
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
          <h3 className="text-4xl font-bold mb-16 text-center text-white">Technical & Professional Skills</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {skillCategories.map((group, i) => (
              <motion.div 
                key={i}
                variants={containerVariants}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8"
              >
                <h4 className="text-2xl font-semibold mb-6 text-emerald-400">
                  {group.category}
                </h4>
                
                <div className="flex flex-wrap gap-3">
                  {group.skills.map((skill, j) => (
                    <motion.span 
                      key={j}
                      variants={itemVariants}
                      className="px-4 py-2 bg-white/10 hover:bg-emerald-500/20 hover:text-emerald-300 hover:border-emerald-500/30 transition-colors border border-white/5 rounded-lg text-sm font-medium text-gray-200"
                    >
                      {skill}
                    </motion.span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
