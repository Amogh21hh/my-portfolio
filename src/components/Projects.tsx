"use client";

import { motion } from "framer-motion";
import { ArrowRight, TrendingUp, AlertCircle, BarChart3, LineChart, PieChart } from "lucide-react";
import Link from "next/link";

export default function Projects() {
  const projects = [
    {
      title: "Budget vs. Actual (BvA) Variance Analysis",
      slug: "bva-variance-analysis",
      icon: <LineChart className="text-emerald-400 mb-3" size={28} />,
      context: "Departmental expenditure tracking and cost-control initiative.",
      outcomes: [
        "Consolidated ledger data to track monthly departmental expenditures against forecasted budgets.",
        "Identified £150k in operational inefficiencies driven by unoptimised vendor contracts.",
        "Built dynamic Excel dashboards for management to monitor ongoing BvA discrepancies."
      ],
      impact: "Reduced discretionary spending and improved quarterly forecasting accuracy by 15%.",
      tags: ["Variance Analysis", "Budgeting", "Excel"]
    },
    {
      title: "Financial Statement & Liquidity Analysis",
      slug: "financial-statement-analysis",
      icon: <PieChart className="text-emerald-400 mb-3" size={28} />,
      context: "Working capital assessment to identify cash flow bottlenecks in a retail firm.",
      outcomes: [
        "Conducted ratio analysis on Balance Sheet data (Current Ratio, Quick Ratio, Debt-to-Equity).",
        "Modelled the Cash Conversion Cycle to pinpoint a 65-day delay in Accounts Receivable.",
        "Presented liquidity risk findings to stakeholders with actionable debt-recovery strategies."
      ],
      impact: "Triggered a revised 30-day AR collection policy, resolving the short-term cash deficit.",
      tags: ["Financial Reporting", "Working Capital", "P&L"]
    },
    {
      title: "Retail Credit Risk Portfolio Assessment",
      slug: "credit-risk-analytics",
      icon: <AlertCircle className="text-emerald-400 mb-3" size={28} />,
      context: "Risk mitigation strategy targeting non-performing loans (NPLs) in retail banking.",
      outcomes: [
        "Analysed historical borrower data to assess default probabilities.",
        "Built predictive models to flag high-risk accounts that traditional scorecards missed.",
        "Ensured all risk assessments complied with strict UK/EU financial regulations."
      ],
      impact: "Improved default prediction accuracy by 20%, directly reducing potential bad debt exposure.",
      tags: ["Credit Risk", "Predictive Analytics", "Compliance"]
    },
    {
      title: "Supply Chain Cost Minimisation",
      slug: "cost-minimization-forecasting",
      icon: <TrendingUp className="text-emerald-400 mb-3" size={28} />,
      context: "Operational finance project to reduce excess inventory holding costs.",
      outcomes: [
        "Analysed supply chain cost structures and historical demand data.",
        "Developed Linear Programming models in Excel Solver to optimise batch production sizes.",
        "Aligned short-term sales forecasts with warehousing capacity limits."
      ],
      impact: "Provided a data-backed roadmap to lower holding costs and increase inventory turnover.",
      tags: ["Cost Analysis", "Excel Solver", "Forecasting"]
    },
    {
      title: "Revenue Trend Analysis & Forecasting",
      slug: "spotify-analytics",
      icon: <BarChart3 className="text-emerald-400 mb-3" size={28} />,
      context: "Commercial analysis of digital streaming assets to optimise marketing spend.",
      outcomes: [
        "Analysed revenue-driving characteristics across 950+ digital assets.",
        "Built regression models to correlate specific asset features with cross-platform revenue.",
        "Identified seasonal timing patterns that consistently yielded higher ROI."
      ],
      impact: "Delivered actionable strategies for release timing, maximising digital revenue generation.",
      tags: ["Revenue Modelling", "Commercial Finance", "R"]
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
          <h3 className="text-3xl font-bold mb-12 text-center text-white">Featured Finance Projects</h3>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {projects.map((project, i) => (
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
                      <p className="text-emerald-400 text-sm font-medium mt-1">{project.context}</p>
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

                <div>
                  <div className="bg-emerald-900/20 border border-emerald-500/30 p-4 rounded-lg mb-6">
                    <p className="text-sm text-emerald-50 font-medium">
                      <strong className="text-emerald-400">Business Impact:</strong> {project.impact}
                    </p>
                  </div>

                  <div className="flex gap-4">
                    <Link 
                      href={`/projects/${project.slug}`}
                      className="text-sm font-semibold flex items-center justify-center w-full gap-2 text-[#121212] bg-emerald-400 hover:bg-emerald-300 px-4 py-3 rounded-lg transition-colors"
                    >
                      Read Financial Report <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
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
