"use client";

import { motion } from "framer-motion";
import { ArrowRight, TrendingUp, AlertCircle, BarChart3, LineChart, PieChart, ShieldCheck } from "lucide-react";
import Link from "next/link";

export default function Projects() {
  const projects = [
    {
      title: "Strategic Cost & Operational Risk Analysis: Zara",
      slug: "zara-cost-analysis",
      icon: <PieChart className="text-emerald-400 mb-3" size={28} />,
      context: "Financial evaluation of supply chain cost structures vs. capital efficiency.",
      outcomes: [
        "Analysed the financial trade-off between 30-40% higher European manufacturing costs and reduced inventory write-offs.",
        "Modelled how 'small batch' production cycles improve Working Capital and Cash Conversion Cycles.",
        "Identified key financial vulnerabilities and operational risks in centralised distribution models."
      ],
      impact: "Demonstrated how optimising Total Cost over Unit Cost drives superior Asset Turnover and Gross Margin.",
      tags: ["Cost Management", "Working Capital", "Operational Risk"]
    },
    {
      title: "Equity Risk & Return Analysis (Banking Sector)",
      slug: "banking-stocks-risk-analysis",
      icon: <LineChart className="text-emerald-400 mb-3" size={28} />,
      context: "Comprehensive market volatility and investment performance assessment.",
      outcomes: [
        "Evaluated systematic and unsystematic risk across public and private sector banks using secondary market data.",
        "Calculated standard deviation, variance, and beta to benchmark stock performance against the Bank Nifty index.",
        "Assessed market sensitivity and risk-adjusted returns to support portfolio diversification."
      ],
      impact: "Provided actionable equity selection insights to guide robust portfolio construction and risk mitigation.",
      tags: ["Risk Analysis", "Portfolio Management", "Equities"]
    },
    {
      title: "Retail Credit Risk Portfolio Assessment",
      slug: "credit-risk-analytics",
      icon: <AlertCircle className="text-emerald-400 mb-3" size={28} />,
      context: "Risk mitigation strategy targeting non-performing loans (NPLs) in retail banking.",
      outcomes: [
        "Analysed historical borrower data using Logistic Regression and Random Forest to assess default probabilities.",
        "Integrated SHAP explainable AI to ensure model transparency and compliance with UK/EU financial regulations.",
        "Benchmarked machine learning model accuracy against traditional credit scoring scorecards."
      ],
      impact: "Improved default prediction accuracy, significantly reducing the firm's potential bad debt exposure.",
      tags: ["Credit Risk", "Predictive Analytics", "Compliance"]
    },
    {
      title: "Operational Cost Minimisation & Forecasting",
      slug: "cost-minimization-forecasting",
      icon: <TrendingUp className="text-emerald-400 mb-3" size={28} />,
      context: "Quantitative modelling to optimise production and minimise holding costs.",
      outcomes: [
        "Built Linear Programming models in Excel Solver to optimise supply-demand distributions.",
        "Developed short-term sales forecasting models using Single Exponential Smoothing (SES).",
        "Evaluated forecasting accuracy by calculating MAD, MSE, and MAPE metrics."
      ],
      impact: "Delivered data-backed management reports offering strategic pathways to lower operational costs.",
      tags: ["Cost Analysis", "Excel Solver", "Forecasting"]
    },
    {
      title: "Project Financial Analysis: Hornsea One Wind Farm",
      slug: "hornsea-one-wind-farm",
      context: "Financial and risk assessment for a 1.2GW complex renewable infrastructure project.",
      icon: <ShieldCheck className="text-emerald-400 mb-3" size={28} />,
      outcomes: [
        "Analysed Contract for Difference (CfD) financial mechanisms and their impact on the 'Energy Trilemma'.",
        "Developed a comprehensive Work Breakdown Structure (WBS) across five core project phases.",
        "Modelled discontinuous critical paths using PERT/CPM to mitigate supply chain bottlenecks."
      ],
      impact: "Provided a robust risk assessment framework that mitigates volatility and protects capital expenditure.",
      tags: ["Risk Management", "CPM", "Capital Projects"]
    },
    {
      title: "Revenue Trend Analysis in Digital Streaming",
      slug: "spotify-analytics",
      icon: <BarChart3 className="text-emerald-400 mb-3" size={28} />,
      context: "Commercial analysis of digital streaming assets to optimise marketing spend.",
      outcomes: [
        "Analysed revenue-driving characteristics across 950+ digital assets using R programming.",
        "Built regression models to correlate specific audio features with cross-platform performance metrics.",
        "Evaluated actual vs. predicted streaming volumes to identify seasonal market trends."
      ],
      impact: "Delivered strategic recommendations for release timing, maximising digital revenue generation.",
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
          <h3 className="text-3xl font-bold mb-12 text-center text-white">Featured Finance Business Cases</h3>
          
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
