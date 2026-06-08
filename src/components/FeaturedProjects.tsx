"use client";

import { motion } from "framer-motion";
import { ExternalLink, Github, Database, Calculator, LineChart, AlertCircle, TrendingUp, PieChart, ShieldCheck, FileSpreadsheet } from "lucide-react";

export default function FeaturedProjects() {
  const flagshipProjects = [
    {
      title: "UK Statutory Accounting Model — Maple & Bean Coffee Co.",
      icon: <FileSpreadsheet className="text-emerald-400 mb-3" size={28} />,
      subtitle: "End-to-end UK statutory accounting & SME financial reporting system",
      outcomes: [
        "Full SME accounting cycle simulation, trial balance reconciliation (balanced to the penny).",
        "Automated UK VAT returns compliance simulation, FRS 105 micro-entity accounting treatment.",
        "Corporation tax accrual logic, and statutory Employment Allowance processing.",
        "Metrics: £129,180 revenue model, 69.9% gross margin, and a £19,965/month operational break-even baseline. Excel-based accounting engine."
      ],
      githubLink: "https://github.com/Amogh21hh/uk-coffee-shop-accounting",
      githubLabel: "Access General Ledger Codebase →"
    },
    {
      title: "IFRS 9 Expected Credit Loss Model — UK SME Portfolio",
      icon: <Database className="text-emerald-400 mb-3" size={28} />,
      subtitle: "Simulated institutional credit risk framework",
      outcomes: [
        "Probability of Default (PD) credit scorecard construction.",
        "Loss Given Default (LGD) calibration, Exposure at Default (EAD) tracking.",
        "IFRS 9 structural staging logic adjusting for multi-scenario forward macroeconomic overlays.",
        "Metrics: Evaluated across a £973m SME portfolio. PD Scorecard validated via holdout with AUC: 0.77, Gini: 0.54, and KS: 0.42."
      ],
      githubLink: "https://github.com/Amogh21hh/uk-sme-credit-risk-ifrs9-ecl",
      githubLabel: "View Repository →"
    },
    {
      title: "Rolls-Royce DCF Valuation Model",
      icon: <LineChart className="text-emerald-400 mb-3" size={28} />,
      subtitle: "Fundamental equity research terminal",
      outcomes: [
        "5-year Free Cash Flow (FCF) forecast model.",
        "CAPM-anchored WACC calibration.",
        "Terminal value modelling.",
        "Interactive valuation stress-testing framework."
      ],
      liveLink: "https://rolls-royce-valuation-model.streamlit.app/",
      liveLabel: "Launch Live Dashboard →",
      githubLink: "https://github.com/Amogh21hh/rolls-royce-valuation-model",
      githubLabel: "View Repository →"
    },
    {
      title: "FP&A Commercial Variance Engine",
      icon: <Calculator className="text-emerald-400 mb-3" size={28} />,
      subtitle: "Multi-site leisure operations performance simulation",
      outcomes: [
        "Ingestion of 6,860 unstructured journal entries.",
        "Budget vs. Actual analysis, multi-factor EBITDA variance bridge isolating 5 key performance drivers (Price, Volume, Mix, Wages, and OPEX).",
        "Time-series demand forecasting models.",
        "Metrics: ARIMA + Holt-Winters demand forecasting algorithms achieving a group-level MAPE of 10.95%. Excel and Python integration."
      ],
      githubLink: "https://github.com/Amogh21hh/FPA-Commercial-Variance-Engine",
      githubLabel: "View Repository →"
    },
    {
      title: "UK Credit Restructuring — Ascent Retail Plc",
      icon: <AlertCircle className="text-emerald-400 mb-3" size={28} />,
      subtitle: "Corporate distress & recapitalization simulation",
      outcomes: [
        "Structural 3-statement financial forecasting model (4,518 formulas) for a distressed retail operator.",
        "Simulates balance sheet covenant breaches, maps near-term liquidity run-rates.",
        "Structures an optimal Scheme of Arrangement debt-for-equity exchange.",
        "Metrics: Restructuring model executes a 47% senior debt haircut, lifting baseline capital recovery metrics from 50% to 76%."
      ],
      githubLink: "https://github.com/Amogh21hh/uk-credit-restructuring-ascent",
      githubLabel: "View Repository →"
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
    <section className="relative z-20 bg-[#121212] py-24 px-8 md:px-24 border-t border-white/5">
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
          
          <div className="grid grid-cols-1 gap-8 mb-16 max-w-5xl mx-auto">
            {flagshipProjects.map((project, i) => (
              <motion.div
                key={i}
                whileHover={{ y: -2 }}
                className="group relative bg-white/5 backdrop-blur-md border border-white/10 hover:border-emerald-500/40 transition-all duration-300 rounded-xl p-8 flex flex-col md:flex-row gap-8 justify-between"
              >
                <div className="flex-1">
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
                        <span className="text-emerald-500 mt-0.5">•</span> 
                        <span dangerouslySetInnerHTML={{ __html: outcome.replace(/Metrics:/g, '<strong class="text-white">Metrics:</strong>') }} />
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="flex flex-col gap-4 mt-2 md:mt-0 md:min-w-[280px] justify-center">
                  {project.liveLink && (
                    <a 
                      href={project.liveLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm font-bold flex items-center justify-center w-full gap-2 text-[#121212] bg-emerald-400 hover:bg-emerald-300 px-4 py-3 rounded-lg transition-colors"
                    >
                      {project.liveLabel} <ExternalLink size={16} />
                    </a>
                  )}
                  {project.githubLink && (
                    <a 
                      href={project.githubLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm font-bold flex items-center justify-center w-full gap-2 text-white bg-white/10 hover:bg-white/20 border border-white/20 px-4 py-3 rounded-lg transition-colors"
                    >
                      {project.githubLabel} <Github size={16} />
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
                className="group relative bg-white/5 border border-white/10 transition-all duration-300 rounded-xl p-8 flex flex-col justify-between opacity-80"
              >
                <div>
                  <div className="flex items-start gap-4 mb-4">
                    {project.icon}
                    <div>
                      <h4 className="text-lg font-bold text-white leading-tight">{project.title}</h4>
                      <p className="text-emerald-400/80 text-sm font-medium mt-1">{project.subtitle}</p>
                    </div>
                  </div>
                  
                  <ul className="space-y-3">
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
