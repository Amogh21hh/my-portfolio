"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

export default function Projects() {
  const projects = [
    {
      title: "Predictive Analytics in Credit Risk Assessment",
      slug: "credit-risk-analytics",
      description: "Comparing traditional credit scoring models with advanced machine learning approaches to evaluate improvements in prediction accuracy, utilizing SHAP for explainable AI.",
      tags: ["Predictive Analytics", "Credit Risk", "Logistic Regression", "Random Forest"],
    },
    {
      title: "Business Analytics: Spotify's Top Tracks",
      slug: "spotify-analytics",
      description: "An end-to-end analytics study of 950+ tracks using descriptive and predictive techniques to identify factors influencing global streaming success.",
      tags: ["R", "Data Visualization", "Linear Regression", "Business Analytics"],
    },
    {
      title: "Cost Minimization & Demand Forecasting",
      slug: "cost-minimization-forecasting",
      description: "Advanced analytics modeling to optimize supply chain costs and predict demand using Excel Solver, Linear Programming, and Single Exponential Smoothing.",
      tags: ["Excel Solver", "Linear Programming", "Forecasting", "Operations Research"],
    },
    {
      title: "Global Project Management: Hornsea One",
      slug: "hornsea-one-wind-farm",
      description: "A comprehensive project management analysis of the 1.2GW offshore wind farm, featuring risk matrices, Work Breakdown Structures, and PERT/CPM modeling.",
      tags: ["Risk Management", "GanttProject", "Critical Path Method", "Project Planning"],
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
          <h3 className="text-4xl font-bold mb-16 text-center">Selected Analytics Projects</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {projects.map((project, i) => (
              <motion.div
                key={i}
                whileHover={{ y: -10 }}
                className="group relative bg-white/5 backdrop-blur-md border border-white/10 hover:border-white/20 transition-all duration-300 rounded-2xl p-8 flex flex-col justify-between min-h-[300px] overflow-hidden"
              >
                {/* Subtle hover glow effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

                <div>
                  <h4 className="text-2xl font-semibold mb-4 pr-4">{project.title}</h4>
                  <p className="text-gray-400 mb-8 leading-relaxed">
                    {project.description}
                  </p>
                </div>

                <div>
                  <div className="flex flex-wrap gap-2 mb-8">
                    {project.tags.map((tag, j) => (
                      <span key={j} className="text-xs font-medium px-3 py-1 rounded-full bg-white/10 text-gray-300">
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="flex gap-4">
                    <Link 
                      href={`/projects/${project.slug}`}
                      className="text-sm font-medium flex items-center gap-2 text-white bg-white/10 hover:bg-white/20 px-4 py-2 rounded-lg transition-colors border border-white/5"
                    >
                      Read Case Study <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
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
