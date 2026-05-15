import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { notFound } from "next/navigation";

// Corporate finance restructuring of the 6 case studies.
const projectsData = {
  "zara-cost-analysis": {
    title: "Strategic Cost & Operational Risk Analysis: Zara",
    context: "Financial evaluation of Zara's supply chain cost structures vs. capital efficiency.",
    relevance: "Understanding the financial trade-off between higher Unit Costs and Total Cost efficiency is critical for working capital optimisation.",
    tools: "Cost Management, Operational Risk Assessment, Financial Modelling.",
    insights: "Accepting 30-40% higher manufacturing costs in Europe allowed Zara to drastically minimise inventory write-offs. Small batch production cycles directly improved the Cash Conversion Cycle.",
    impact: "Demonstrated how optimising Total Cost over Unit Cost drives superior Asset Turnover and Gross Margin, mitigating financial vulnerabilities in centralised distribution models."
  },
  "banking-stocks-risk-analysis": {
    title: "Equity Risk & Return Analysis (Banking Sector)",
    context: "Comprehensive market volatility and investment performance assessment of Indian banking stocks.",
    relevance: "Accurately measuring risk-adjusted returns is essential for robust portfolio construction and mitigating exposure to market volatility.",
    tools: "Risk Analysis, Return Analysis, Variance, Beta Calculation.",
    insights: "Analysing secondary market data for public and private sector banks revealed clear distinctions in systematic vs. unsystematic risk. Benchmarking against the Bank Nifty index provided clear sensitivity metrics.",
    impact: "Provided actionable equity selection insights to guide portfolio diversification, highlighting the exact trade-offs between risk and return across different banking equities."
  },
  "credit-risk-analytics": {
    title: "Retail Credit Risk Portfolio Assessment",
    context: "Risk mitigation strategy targeting non-performing loans (NPLs) in retail banking.",
    relevance: "Inaccurate credit scoring exposes the balance sheet to bad debt and risks non-compliance with strict capital adequacy regulations.",
    tools: "Predictive Analytics, Logistic Regression, Random Forest, Regulatory Compliance Frameworks.",
    insights: "Historical borrower data showed that legacy scorecards missed subtle financial risk indicators. New machine learning models accurately flagged these high-risk accounts while using SHAP explainable AI for transparency.",
    impact: "Improved default prediction accuracy, significantly reducing the firm's exposure to bad debt while remaining fully compliant with UK/EU regulations."
  },
  "cost-minimization-forecasting": {
    title: "Operational Cost Minimisation & Forecasting",
    context: "Quantitative modelling coursework to optimise production planning and minimise holding costs.",
    relevance: "Excess inventory unnecessarily ties up working capital. Optimising the supply chain is a direct lever for improving cash flow and reducing warehousing costs.",
    tools: "Excel Solver, Linear Programming, Demand Forecasting (SES).",
    insights: "Analysing historical demand against supply capabilities using Linear Programming revealed sub-optimal batch production sizes. Short-term sales forecasting further isolated inefficiencies.",
    impact: "Delivered management reports with a data-backed roadmap to lower holding costs and increase inventory turnover, freeing up locked working capital."
  },
  "hornsea-one-wind-farm": {
    title: "Project Financial Analysis: Hornsea One Wind Farm",
    context: "Financial and risk assessment for the 1.2GW Hornsea One Offshore Wind Farm.",
    relevance: "Large-scale infrastructure projects require rigorous risk management and capital expenditure control to navigate the 'Energy Trilemma' and supply chain volatility.",
    tools: "Risk Management, Critical Path Method (CPM), GanttProject, Microsoft Excel.",
    insights: "Analysing Contract for Difference (CfD) mechanisms and decomposing the project via a Work Breakdown Structure (WBS) isolated key vulnerabilities. Modelling discontinuous critical paths mitigated North Sea weather risks.",
    impact: "Provided a robust risk assessment framework (VUC factors) to mitigate supply chain bottlenecks and protect capital expenditure during complex renewable infrastructure development."
  },
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
