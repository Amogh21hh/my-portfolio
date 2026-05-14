"use client";

import { motion } from "framer-motion";
import { ArrowRight, TrendingUp, AlertCircle, BarChart3, LineChart, PieChart } from "lucide-react";
import Link from "next/link";

export default function Projects() {
  const projects = [
    {
      title: "Budget vs. Actual (BvA) Variance Analysis",
      slug: "bva-variance-analysis",
      icon: <LineChart className="text-emerald-400 mb-4" size={32} />,
      problem: "Management lacked visibility into departmental overspends, causing quarterly profit margin erosion.",
      outcomes: [
        "Consolidated ledger data to identify £150k in operational inefficiencies.",
        "Built dynamic BvA dashboards using Advanced Excel (Index/Match, PivotTables).",
        "Recommended cost-control measures for underperforming cost centres."
      ],
      impact: "Improved forecasting accuracy by 15% and delivered actionable insights to reduce discretionary spending.",
      tags: ["Variance Analysis", "Budgeting", "Excel", "Cost Control"]
    },
    {
      title: "Financial Statement & Liquidity Analysis",
      slug: "financial-statement-analysis",
      icon: <PieChart className="text-emerald-400 mb-4" size={32} />,
      problem: "A mid-sized retail firm faced cash flow bottlenecks despite reporting strong top-line revenue growth.",
      outcomes: [
        "Conducted deep-dive ratio analysis (Current Ratio, Quick Ratio, D/E).",
        "Modelled Cash Conversion Cycles to identify delayed receivables.",
        "Presented liquidity risk findings directly to stakeholders."
      ],
      impact: "Highlighted critical working capital gaps, leading to a revised 30-day AR collection policy.",
      tags: ["Financial Analysis", "Liquidity Modelling", "Working Capital"]
    },
    {
      title: "Retail Credit Risk Optimization",
      slug: "credit-risk-analytics",
      icon: <AlertCircle className="text-emerald-400 mb-4" size={32} />,
      problem: "Legacy credit scoring models failed to accurately identify high-risk retail loan defaults.",
      outcomes: [
        "Evaluated portfolio risk using predictive modelling (Logistic Regression, Random Forest).",
        "Applied SHAP explainable AI to ensure models met strict UK/EU regulatory standards.",
        "Benchmarked model accuracy against traditional scorecards."
      ],
      impact: "Demonstrated a 20% improvement in default prediction accuracy, reducing potential bad debt exposure.",
      tags: ["Credit Risk", "Predictive Analytics", "Regulatory Compliance"]
    },
    {
      title: "Supply Chain Cost Minimisation & Forecasting",
      slug: "cost-minimization-forecasting",
      icon: <TrendingUp className="text-emerald-400 mb-4" size={32} />,
      problem: "Inefficient production planning and poor demand forecasting resulted in excess inventory holding costs.",
      outcomes: [
        "Developed Linear Programming models to optimise supply/demand distributions.",
        "Utilised Single Exponential Smoothing to forecast short-term sales demand.",
        "Automated scenario testing using Excel Solver."
      ],
      impact: "Provided a strategic, data-backed roadmap to lower holding costs and improve inventory turnover.",
      tags: ["Cost Minimisation", "Demand Forecasting", "Excel Solver"]
    },
    {
      title: "Revenue Trend Analysis in Digital Streaming",
      slug: "spotify-analytics",
      icon: <BarChart3 className="text-emerald-400 mb-4" size={32} />,
      problem: "Stakeholders struggled to identify the commercial drivers behind top-performing digital assets.",
      outcomes: [
        "Analysed over 950 assets to pinpoint key revenue-driving characteristics.",
        "Built regression models in R to isolate variables affecting streaming volume.",
        "Correlated feature data with cross-platform performance metrics."
      ],
      impact: "Delivered data-driven strategic recommendations for asset release timing and marketing investment.",
      tags: ["Commercial Analysis", "Revenue Modelling", "R Programming"]
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
          <h3 className="text-4xl font-bold mb-16 text-center text-white">Featured Business Cases</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, i) => (
              <motion.div
                key={i}
                whileHover={{ y: -5 }}
                className="group relative bg-white/5 backdrop-blur-md border border-white/10 hover:border-emerald-500/30 transition-all duration-300 rounded-2xl p-8 flex flex-col justify-between"
              >
                <div>
                  {project.icon}
                  <h4 className="text-xl font-bold mb-3 text-white leading-tight pr-4">{project.title}</h4>
                  <p className="text-emerald-400 font-medium text-sm mb-4 border-l-2 border-emerald-500 pl-3">
                    {project.problem}
                  </p>
                  
                  <ul className="mb-6 space-y-2">
                    {project.outcomes.map((outcome, j) => (
                      <li key={j} className="text-gray-400 text-sm flex items-start gap-2">
                        <span className="text-white mt-0.5">•</span> {outcome}
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <div className="bg-emerald-900/20 border border-emerald-500/20 p-4 rounded-xl mb-6">
                    <p className="text-sm text-emerald-100 font-medium">
                      <strong className="text-white">Business Impact:</strong> {project.impact}
                    </p>
                  </div>

                  <div className="flex gap-4">
                    <Link 
                      href={`/projects/${project.slug}`}
                      className="text-sm font-semibold flex items-center justify-center w-full gap-2 text-[#121212] bg-emerald-400 hover:bg-emerald-300 px-4 py-3 rounded-lg transition-colors"
                    >
                      Read Commercial Case <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
