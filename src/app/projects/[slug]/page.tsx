import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { notFound } from "next/navigation";

// Pure corporate finance restructuring of the case studies.
const projectsData = {
  "bva-variance-analysis": {
    title: "Budget vs. Actual (BvA) Variance Analysis",
    context: "Departmental expenditure tracking and cost-control initiative.",
    relevance: "Unmonitored discretionary spending was eroding quarterly EBITDA margins. Establishing strict BvA tracking was necessary to restore financial control.",
    tools: "Advanced Excel (PivotTables, Index/Match), Financial Modelling.",
    insights: "Consolidated ledger data revealed £150k in operational inefficiencies, primarily driven by unoptimised vendor contracts and duplicate software subscriptions across departments.",
    impact: "Implemented strict cost-control measures and dynamic reporting dashboards, directly improving quarterly forecasting accuracy by 15% and halting unnecessary spend."
  },
  "financial-statement-analysis": {
    title: "Financial Statement & Liquidity Analysis",
    context: "Working capital assessment to identify cash flow bottlenecks in a retail firm.",
    relevance: "Despite strong top-line revenue growth, the firm faced a cash flow deficit. Ensuring liquidity is critical to avoiding short-term insolvency.",
    tools: "Ratio Analysis, Balance Sheet Reconciliation, Cash Flow Modelling.",
    insights: "Modelling the Cash Conversion Cycle (CCC) identified that Days Sales Outstanding (DSO) had stretched to 65 days, while payables were settling at 30 days.",
    impact: "Presented findings to stakeholders, resulting in a revised 30-day Accounts Receivable collection policy that immediately resolved the liquidity crisis."
  },
  "credit-risk-analytics": {
    title: "Retail Credit Risk Portfolio Assessment",
    context: "Risk mitigation strategy targeting non-performing loans (NPLs) in retail banking.",
    relevance: "Inaccurate credit scoring exposes the balance sheet to bad debt and risks non-compliance with strict capital adequacy regulations.",
    tools: "Predictive Analytics, Logistic Regression, Regulatory Compliance Frameworks.",
    insights: "Historical borrower data showed that legacy scorecards missed subtle financial risk indicators. New models accurately flagged these high-risk accounts.",
    impact: "Improved default prediction accuracy by 20%, significantly reducing the firm's exposure to bad debt while remaining fully compliant with UK/EU regulations."
  },
  "cost-minimization-forecasting": {
    title: "Supply Chain Cost Minimisation",
    context: "Operational finance project to reduce excess inventory holding costs.",
    relevance: "Excess inventory unnecessarily ties up working capital. Optimising the supply chain is a direct lever for improving cash flow and reducing warehousing costs.",
    tools: "Excel Solver, Linear Programming, Demand Forecasting.",
    insights: "Analysing historical demand against supply capabilities revealed sub-optimal batch production sizes that were inflating warehousing expenses.",
    impact: "Provided management with a data-backed roadmap to lower holding costs and increase inventory turnover, freeing up locked working capital."
  },
  "spotify-analytics": {
    title: "Revenue Trend Analysis & Forecasting",
    context: "Commercial analysis of digital streaming assets to optimise marketing spend.",
    relevance: "Marketing budgets were being allocated inefficiently. Data-driven commercial analysis was required to maximise Return on Investment (ROI).",
    tools: "R Programming, Regression Modelling, Revenue Analysis.",
    insights: "Correlating 950+ asset features with cross-platform revenue revealed specific seasonal timing patterns and asset characteristics that consistently outperformed the market.",
    impact: "Delivered actionable strategic recommendations for release timing, providing stakeholders with a clear blueprint to maximise digital revenue generation."
  }
};

export default function ProjectCaseStudy({ params }: { params: { slug: string } }) {
  const project = projectsData[params.slug as keyof typeof projectsData];

  if (!project) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-[#121212] text-white py-24 px-8 md:px-24">
      <div className="max-w-3xl mx-auto">
        
        <Link href="/" className="inline-flex items-center gap-2 text-emerald-400 hover:text-emerald-300 transition-colors mb-12 font-medium">
          <ArrowLeft size={20} /> Back to Portfolio
        </Link>

        <h1 className="text-3xl md:text-5xl font-bold mb-6 leading-tight">
          {project.title}
        </h1>
        
        <div className="space-y-12 mt-12">
          
          <section className="bg-white/5 p-6 rounded-xl border border-white/10">
            <h2 className="text-xl font-semibold mb-3 text-emerald-400 flex items-center gap-2">
              <span className="bg-emerald-900/50 text-emerald-300 px-2 py-0.5 rounded text-sm">01</span>
              Business Context
            </h2>
            <p className="text-gray-300 leading-relaxed">
              {project.context}
            </p>
          </section>

          <section className="bg-white/5 p-6 rounded-xl border border-white/10">
            <h2 className="text-xl font-semibold mb-3 text-emerald-400 flex items-center gap-2">
              <span className="bg-emerald-900/50 text-emerald-300 px-2 py-0.5 rounded text-sm">02</span>
              Financial Relevance
            </h2>
            <p className="text-gray-300 leading-relaxed">
              {project.relevance}
            </p>
          </section>

          <section className="bg-white/5 p-6 rounded-xl border border-white/10">
            <h2 className="text-xl font-semibold mb-3 text-emerald-400 flex items-center gap-2">
              <span className="bg-emerald-900/50 text-emerald-300 px-2 py-0.5 rounded text-sm">03</span>
              Tools Utilised
            </h2>
            <p className="text-gray-300 leading-relaxed font-medium">
              {project.tools}
            </p>
          </section>

          <section className="bg-white/5 p-6 rounded-xl border border-white/10">
            <h2 className="text-xl font-semibold mb-3 text-emerald-400 flex items-center gap-2">
              <span className="bg-emerald-900/50 text-emerald-300 px-2 py-0.5 rounded text-sm">04</span>
              Key Insights
            </h2>
            <p className="text-gray-300 leading-relaxed">
              {project.insights}
            </p>
          </section>

          <section className="bg-emerald-900/20 p-8 rounded-xl border border-emerald-500/50 shadow-[0_0_30px_rgba(16,185,129,0.1)]">
            <h2 className="text-2xl font-bold mb-4 text-emerald-400 flex items-center gap-2">
              <span className="bg-emerald-500 text-[#121212] px-2 py-0.5 rounded text-sm">05</span>
              Business Impact
            </h2>
            <p className="text-emerald-50 leading-relaxed text-lg font-medium">
              {project.impact}
            </p>
          </section>

        </div>

      </div>
    </main>
  );
}
