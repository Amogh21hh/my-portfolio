import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { notFound } from "next/navigation";

// Business-focused case studies emphasizing Commercial Impact and Financial Analysis
const projectsData = {
  "bva-variance-analysis": {
    title: "Budget vs. Actual (BvA) Variance Analysis",
    context: "Strategic financial analysis focused on identifying and mitigating departmental overspends.",
    problem: "Management lacked granular visibility into departmental expenditures. This caused quarterly profit margin erosion as discretionary spending consistently outpaced the forecasted budget without clear accountability.",
    relevance: "Without accurate variance tracking, the business risks poor cash flow management and diminishing EBITDA margins.",
    approach: "Consolidated complex ledger data to build dynamic BvA dashboards using Advanced Excel functions (Index/Match, PivotTables). Investigated major discrepancies by liaising with departmental heads.",
    insights: "Identified £150k in operational inefficiencies largely driven by unoptimised vendor contracts and ad-hoc procurement.",
    impact: "Recommended targeted cost-control measures, leading to a 15% improvement in forecasting accuracy and immediately halting unnecessary discretionary spend.",
    tools: ["Advanced Excel", "Variance Analysis", "Budgeting", "Cost Control"]
  },
  "financial-statement-analysis": {
    title: "Financial Statement & Liquidity Analysis",
    context: "Deep-dive liquidity and working capital assessment for a mid-sized retail firm.",
    problem: "Despite reporting strong top-line revenue growth year-over-year, the firm faced severe cash flow bottlenecks and struggled to meet short-term liabilities.",
    relevance: "Top-line growth without liquidity control often leads to insolvency. Understanding working capital cycles is crucial for operational sustainability.",
    approach: "Conducted a rigorous ratio analysis focusing on Current Ratio, Quick Ratio, and Debt-to-Equity. Modelled the Cash Conversion Cycle (CCC) to track the flow of cash from inventory purchase to accounts receivable collection.",
    insights: "Data revealed that Days Sales Outstanding (DSO) had stretched to 65 days, while payables were settling at 30 days, creating a massive cash deficit.",
    impact: "Presented liquidity risk findings directly to stakeholders, resulting in the implementation of a strict 30-day AR collection policy that resolved the cash flow bottleneck.",
    tools: ["Ratio Analysis", "Financial Modelling", "Working Capital Management"]
  },
  "credit-risk-analytics": {
    title: "Retail Credit Risk Optimization",
    context: "Advanced risk assessment project evaluating the commercial viability of modern lending models.",
    problem: "Legacy credit scoring models in the retail banking sector failed to accurately identify high-risk loan defaults, exposing the institution to significant bad debt.",
    relevance: "Accurate credit risk profiling directly protects the balance sheet from non-performing loans (NPLs) and ensures regulatory capital compliance.",
    approach: "Evaluated portfolio risk by developing predictive models (Logistic Regression, Random Forest). Applied SHAP explainable AI techniques to ensure all algorithmic decisions were transparent and met strict UK/EU regulatory standards.",
    insights: "Machine learning models, when properly tuned and explained, could detect subtle correlations in borrower behavior that traditional scorecards missed.",
    impact: "Demonstrated a 20% improvement in default prediction accuracy. This approach provides a clear commercial pathway to reducing bad debt exposure while satisfying regulatory audits.",
    tools: ["Credit Risk Modelling", "Predictive Analytics", "Regulatory Compliance", "Logistic Regression"]
  },
  "cost-minimization-forecasting": {
    title: "Supply Chain Cost Minimisation & Forecasting",
    context: "Operational finance project targeting inventory holding costs and demand planning.",
    problem: "Inefficient production planning and poor demand forecasting resulted in excessive inventory holding costs and frequent supply chain bottlenecks.",
    relevance: "Excess inventory ties up working capital, while stockouts result in lost revenue. Balancing supply and demand is a critical operational finance objective.",
    approach: "Developed Linear Programming models to optimise supply and demand distributions across the network. Utilised Single Exponential Smoothing to forecast short-term sales demand, and automated scenario testing using Excel Solver.",
    insights: "Identified optimal production batch sizes that balanced manufacturing costs against warehousing expenses, drastically reducing waste.",
    impact: "Provided a strategic, data-backed roadmap to lower holding costs by optimising the supply chain, directly improving inventory turnover and freeing up working capital.",
    tools: ["Excel Solver", "Linear Programming", "Demand Forecasting", "Operations Research"]
  },
  "spotify-analytics": {
    title: "Revenue Trend Analysis in Digital Streaming",
    context: "Commercial data analysis identifying the drivers of top-performing digital assets.",
    problem: "Stakeholders struggled to identify the commercial drivers behind top-performing digital assets, making marketing spend allocation highly inefficient.",
    relevance: "In digital markets, understanding what drives consumption (streams) is identical to understanding what drives revenue. Data-driven marketing yields higher ROI.",
    approach: "Analysed over 950 assets to pinpoint key revenue-driving characteristics. Built regression models in R to isolate variables affecting volume, and correlated feature data with cross-platform performance metrics.",
    insights: "Identified specific asset attributes and seasonal timing patterns that consistently outperformed the market average.",
    impact: "Delivered data-driven strategic recommendations for release timing and marketing investment, providing stakeholders with a blueprint to maximize digital revenue.",
    tools: ["Commercial Analysis", "R Programming", "Regression Modelling", "Data Visualization"]
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
              The Commercial Problem
            </h2>
            <p className="text-gray-300 leading-relaxed text-lg">
              {project.problem}
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4 flex items-center gap-3">
              <span className="text-sm font-bold bg-white/10 text-emerald-400 px-3 py-1 rounded-full">02</span> 
              Financial & Business Relevance
            </h2>
            <p className="text-gray-300 leading-relaxed text-lg">
              {project.relevance}
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4 flex items-center gap-3">
              <span className="text-sm font-bold bg-white/10 text-emerald-400 px-3 py-1 rounded-full">03</span> 
              Analytical Approach
            </h2>
            <p className="text-gray-300 leading-relaxed text-lg">
              {project.approach}
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4 flex items-center gap-3">
              <span className="text-sm font-bold bg-white/10 text-emerald-400 px-3 py-1 rounded-full">04</span> 
              Key Insights
            </h2>
            <p className="text-gray-300 leading-relaxed text-lg">
              {project.insights}
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4 flex items-center gap-3">
              <span className="text-sm font-bold bg-emerald-400 text-[#121212] px-3 py-1 rounded-full">05</span> 
              Commercial Impact
            </h2>
            <div className="p-6 bg-emerald-900/20 border border-emerald-500/50 rounded-2xl">
              <p className="text-emerald-50 leading-relaxed text-xl font-medium">
                {project.impact}
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-4">Tools & Methodologies Used</h2>
            <div className="flex flex-wrap gap-3">
              {project.tools.map((tool, i) => (
                <span key={i} className="px-4 py-2 rounded-lg bg-white/5 border border-white/10 text-gray-200 font-medium text-sm">
                  {tool}
                </span>
              ))}
            </div>
          </section>
        </div>

      </div>
    </main>
  );
}
