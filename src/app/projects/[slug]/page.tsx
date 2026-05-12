import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { notFound } from "next/navigation";

// Data store for the case studies highlighting Problem -> Approach -> Tools -> Impact
const projectsData = {
  "credit-risk-analytics": {
    title: "Predictive Analytics in Credit Risk Assessment",
    context: "Master's-level dissertation focused on the application of predictive analytics and machine learning techniques in retail banking credit risk assessment.",
    problem: "Traditional credit scoring models often lack the nuance required to accurately identify complex risk factors in retail banking, while modern black-box machine learning approaches raise regulatory and transparency concerns.",
    approach: "Critically compared traditional credit scoring models against advanced machine learning approaches using real-world credit datasets. Evaluated models based on accuracy, precision, recall, and ROC-AUC. Incorporated explainable AI techniques (SHAP) to address transparency and regulatory compliance across UK, EU, and US frameworks.",
    tools: ["Logistic Regression", "Random Forest", "Gradient Boosting", "Explainable AI (SHAP)", "Predictive Analytics"],
    impact: "Demonstrated how explainable machine learning models can significantly improve prediction accuracy and risk identification over traditional methods, while successfully aligning with strict financial regulatory expectations for model accountability."
  },
  "spotify-analytics": {
    title: "Business Analytics: Spotify's Top Tracks",
    context: "End-to-end business analytics study on Spotify's most streamed songs of 2023.",
    problem: "Understanding the exact musical attributes and cross-platform factors that drive global streaming success is challenging, making it difficult for stakeholders to form data-driven release strategies.",
    approach: "Analyzed a dataset of 950+ top-performing tracks. Applied exploratory data analysis (EDA) on audio features (danceability, energy, BPM, etc.) and performed cross-platform comparisons (Apple Music, Deezer, Shazam). Built predictive models to assess the impact of these features on streaming volume.",
    tools: ["R (Programming Language)", "Linear Regression", "Random Forest", "Descriptive Analytics", "Data Visualization"],
    impact: "Proved that machine learning models offer superior predictive capability over traditional statistical methods for this domain. Delivered actionable insights into listener preferences, seasonal trends, and data-driven strategies for music release timing."
  },
  "cost-minimization-forecasting": {
    title: "Cost Minimization & Demand Forecasting",
    context: "Advanced analytics coursework applying quantitative methods for business decision-making.",
    problem: "Inefficient production planning and inaccurate demand forecasting lead to excess inventory costs and supply chain bottlenecks.",
    approach: "Built Linear Programming models for cost minimization and production planning. Formulated a Transportation & Distribution model under supply-demand constraints. Developed sales forecasting models and optimized smoothing parameters, evaluating accuracy via MAD, MSE, and MAPE.",
    tools: ["Excel Solver", "Linear Programming", "Operations Research", "Single Exponential Smoothing", "Statistical Data Analysis"],
    impact: "Delivered comprehensive management reports translating complex optimization logic into strategic business recommendations, demonstrating clear pathways to reduced operational costs and improved inventory management."
  },
  "hornsea-one-wind-farm": {
    title: "Global Project Management: Hornsea One",
    context: "Comprehensive project management analysis for the 1.2GW Hornsea One Offshore Wind Farm.",
    problem: "Managing the transition from traditional construction to complex systems engineering in renewable infrastructure involves massive scale, unpredictable North Sea weather windows, and supply chain volatility.",
    approach: "Analyzed the 'Energy Trilemma' and CfD financial mechanisms. Developed a Work Breakdown Structure (WBS) across five core packages. Created a Qualitative Risk Matrix evaluating VUC factors, and utilized Parametric Estimation and Critical Path Analysis (PERT/CPM) to model discontinuous critical paths.",
    tools: ["GanttProject", "Microsoft Excel", "Critical Path Method (CPM)", "Risk Management", "Parametric Estimation"],
    impact: "Provided a strategic framework for mitigating supply chain bottlenecks and UXO hazards, and evaluated the application of Digital Twins to optimize future Operations & Maintenance logistics."
  }
};

export default function ProjectCaseStudy({ params }: { params: { slug: string } }) {
  const project = projectsData[params.slug as keyof typeof projectsData];

  if (!project) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-[#121212] text-white py-24 px-8 md:px-24">
      <div className="max-w-4xl mx-auto">
        
        <Link href="/" className="inline-flex items-center gap-2 text-emerald-400 hover:text-emerald-300 transition-colors mb-12 font-medium">
          <ArrowLeft size={20} /> Back to Portfolio
        </Link>

        <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
          {project.title}
        </h1>
        
        <p className="text-xl text-gray-400 mb-16 leading-relaxed border-l-2 border-emerald-400 pl-6">
          {project.context}
        </p>

        <div className="space-y-16">
          <section>
            <h2 className="text-2xl font-semibold mb-4 flex items-center gap-3">
              <span className="text-sm font-bold bg-white/10 text-emerald-400 px-3 py-1 rounded-full">01</span> 
              The Problem
            </h2>
            <p className="text-gray-300 leading-relaxed text-lg">
              {project.problem}
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4 flex items-center gap-3">
              <span className="text-sm font-bold bg-white/10 text-emerald-400 px-3 py-1 rounded-full">02</span> 
              The Approach
            </h2>
            <p className="text-gray-300 leading-relaxed text-lg">
              {project.approach}
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4 flex items-center gap-3">
              <span className="text-sm font-bold bg-white/10 text-emerald-400 px-3 py-1 rounded-full">03</span> 
              Tools & Technologies
            </h2>
            <div className="flex flex-wrap gap-3 mt-4">
              {project.tools.map((tool, i) => (
                <span key={i} className="px-4 py-2 rounded-lg bg-white/5 border border-white/10 text-gray-200 font-medium">
                  {tool}
                </span>
              ))}
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4 flex items-center gap-3">
              <span className="text-sm font-bold bg-white/10 text-emerald-400 px-3 py-1 rounded-full">04</span> 
              The Impact
            </h2>
            <div className="p-6 bg-emerald-900/20 border border-emerald-500/20 rounded-2xl">
              <p className="text-emerald-100 leading-relaxed text-lg">
                {project.impact}
              </p>
            </div>
          </section>
        </div>

      </div>
    </main>
  );
}
