"use client";

import { motion } from "framer-motion";
import { ExternalLink, Github, Database, Calculator, LineChart, AlertCircle, TrendingUp, PieChart, ShieldCheck, FileSpreadsheet } from "lucide-react";

export default function FeaturedProjects() {
  const flagshipProjects = [
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
      githubLink: "https://github.com/Amogh21hh"
    },
    {
      title: "IFRS 9 Expected Credit Loss Model - UK SME Portfolio",
      icon: <Database className="text-emerald-400 mb-3" size={28} />,
      subtitle: "Bank-grade credit risk + financial reporting model",
      outcomes: [
        "£973m simulated UK SME loan book portfolio.",
        "PD via WoE binning and logistic regression (AUC 0.77); LGD and EAD by collateral and CCF.",
        "IFRS 9 staging (SICR, Stage 1/2/3) with a probability-weighted three-scenario macro overlay."
      ],
      githubLink: "https://github.com/Amogh21hh"
    },
    {
      title: "Rolls-Royce Holdings plc - DCF Valuation",
      icon: <LineChart className="text-emerald-400 mb-3" size={28} />,
      subtitle: "Comprehensive equity research and valuation model",
      outcomes: [
        "5-year Free Cash Flow (FCF) forecast based on detailed revenue and margin drivers.",
        "WACC sensitivity analysis and terminal value derivation.",
        "Investment thesis formulation based on fundamental intrinsic value."
      ],
      githubLink: "https://github.com/Amogh21hh"
    },
    {
      title: "FP&A Variance Engine",
      icon: <Calculator className="text-emerald-400 mb-3" size={28} />,
      subtitle: "Commercial finance and performance reporting system",
      outcomes: [
        "Automated EBITDA bridge generating clear variance commentary.",
        "Detailed price, volume, and mix breakdown for revenue analysis.",
        "ARIMA forecasting integration combining Excel reporting with Python analytics."
      ],
      githubLink: "https://github.com/Amogh21hh"
    },
    {
      title: "UK Credit Restructuring Model",
      icon: <AlertCircle className="text-emerald-400 mb-3" size={28} />,
      subtitle: "Distressed finance and corporate turnaround model",
      outcomes: [
        "Covenant breach simulation under stressed macro scenarios.",
        "Liquidity crisis modelling and cash flow runway assessment.",
        "Debt restructuring plan and recovery improvement analysis."
      ],
      githubLink: "https://github.com/Amogh21hh"
    }
  ];

  const secondaryProjects = [
    {
      title: "Strategic Cost & Operational Risk Analysis: Zara",
      icon: <PieChart className="text-emerald-400 mb-3" size={28} />,
      subtitle: "Supply chain cost structures vs. capital efficiency",
      outcomes: [
        "Financial trade-off analysis between European manufacturing costs and reduced inventory write-offs.",
        "Modelled how 'small batch' production cycles improve Working Capital and Cash Conversion Cycles."
      ]
    },
    {
      title: "Project Financial Analysis: Hornsea One Wind Farm",
      icon: <ShieldCheck className="text-emerald-400 mb-3" size={28} />,
      subtitle: "Financial assessment for a 1.2GW infrastructure project",
      outcomes: [
        "Analysed Contract for Difference (CfD) financial mechanisms.",
        "Developed a comprehensive Work Breakdown Structure (WBS) and PERT/CPM models."
      ]
    }
  ];

  return (
    <section className="relative z-20 bg-[#121212] py-24 px-8 md:px-24">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <div className="mb-12">
            <h3 className="text-3xl font-bold text-white mb-2">Featured Financial Models & Engines</h3>
            <p className="text-gray-400 text-lg">Institutional-grade portfolio demonstrating practical application in credit risk, valuation, and FP&A.</p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
            {flagshipProjects.map((project, i) => (
              <motion.div
                key={i}
                whileHover={{ y: -5 }}
                className="group relative bg-white/5 backdrop-blur-md border border-white/10 hover:border-emerald-500/30 transition-all duration-300 rounded-xl p-8 flex flex-col justify-between"
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
                      className="text-sm font-bold flex items-center justify-center w-full gap-2 text-white bg-white/10 hover:bg-white/20 border border-white/20 px-4 py-3 rounded-lg transition-colors"
                    >
                      View on GitHub <Github size={16} />
                    </a>
                  )}
                </div>
              </motion.div>
            ))}
          </div>

          <h4 className="text-2xl font-bold text-white mb-8 border-b border-white/10 pb-4">Secondary Analysis Projects</h4>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {secondaryProjects.map((project, i) => (
              <motion.div
                key={i}
                whileHover={{ y: -5 }}
                className="group relative bg-white/5 border border-white/10 hover:border-white/30 transition-all duration-300 rounded-xl p-8 flex flex-col justify-between opacity-80 hover:opacity-100"
              >
                <div>
                  <div className="flex items-start gap-4 mb-4">
                    {project.icon}
                    <div>
                      <h4 className="text-lg font-bold text-white leading-tight">{project.title}</h4>
                      <p className="text-emerald-400/80 text-sm font-medium mt-1">{project.subtitle}</p>
                    </div>
                  </div>
                  
                  <ul className="mb-6 space-y-3">
                    {project.outcomes.map((outcome, j) => (
                      <li key={j} className="text-gray-400 text-sm flex items-start gap-3">
                        <span className="text-emerald-500/50 mt-0.5">•</span> {outcome}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
