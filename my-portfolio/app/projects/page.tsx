"use client";

import { motion } from "framer-motion";

const projects = [
  {
    title: "Mitigating Model Inversion Attacks in Healthcare ML",
    date: "Dec 2025",
    badge: "AI Security",
    description:
      "End-to-end privacy-preserving ML framework that protects patient data from model inversion attacks using Differential Privacy. Built for healthcare deployment with HIPAA and GDPR compliance in mind.",
    bullets: [
      "Simulated gradient-based MIA across 308 diabetic patients — DP reduced attack effectiveness by 42.7% on average (best case: +571.4%)",
      "Maintained 76% classification accuracy while substantially reducing privacy leakage",
      "Deployed via Flask REST API and Docker container with CI/CD pipeline and 6 passing unit tests",
    ],
    tags: ["Python", "Differential Privacy", "Flask", "Docker", "Neo4j", "Scikit-learn", "Healthcare ML"],
    color: "cyan",
    link: null,
    linkLabel: null,
    github: "https://github.com/begimaibb/healthcare-dp-mia",
  },
  {
    title: "Housing Price Prediction in Taiwan",
    date: "Jun 2024",
    badge: "MBA Thesis",
    description:
      "MBA thesis predicting housing prices in Taiwan using multiple machine learning models. Comparative evaluation across traditional and advanced ML techniques.",
    bullets: [
      "Compared MLR, Random Forest, and XGBoost across 32 property features",
      "Achieved R² of 0.77 with best performing model",
      "Built in R with full data preprocessing and feature engineering pipeline",
    ],
    tags: ["R", "XGBoost", "Random Forest", "MLR", "ggplot2", "caret"],
    color: "blue",
    link: "https://hdl.handle.net/11296/5ugse9",
    linkLabel: "View Thesis",
    github: "https://github.com/begimaibb/housing-price-prediction-taiwan",
  },
  {
    title: "Diabetes Risk Prediction",
    date: "Jan 2024",
    badge: null,
    description:
      "Machine learning project using CDC BRFSS survey data to predict diabetes risk. Deployed as a live Streamlit web application for real-time risk assessment.",
    bullets: [
      "Built XGBoost classifier on 22 health & demographic features from CDC BRFSS data",
      "Achieved 80% accuracy with hyperparameter tuning via Optuna",
      "Handled class imbalance and deployed live app on Streamlit",
    ],
    tags: ["Python", "XGBoost", "Optuna", "Streamlit", "Scikit-learn"],
    color: "red",
    link: "https://diabetes-risk-prediction-bfrss.streamlit.app/",
    linkLabel: "Live App",
    github: "https://github.com/begimaibb/diabetes-risk-prediction",
  },
];

const colorMap: Record<string, string> = {
  cyan: "bg-cyan-400",
  green: "bg-green-400",
  blue: "bg-blue-400",
  red: "bg-red-400",
};

const borderMap: Record<string, string> = {
  cyan: "hover:border-cyan-800",
  green: "hover:border-green-800",
  blue: "hover:border-blue-800",
  red: "hover:border-red-800",
};

const badgeMap: Record<string, string> = {
  "AI Security": "border-cyan-500/40 text-cyan-400 bg-cyan-500/10",
  "In Progress": "border-green-500/40 text-green-400 bg-green-500/10",
  "MBA Thesis": "border-blue-500/40 text-blue-400 bg-blue-500/10",
};

export default function ProjectsPage() {
  return (
    <main className="min-h-screen bg-zinc-950 px-6 py-12">
      <div className="max-w-4xl mx-auto">

        <div className="flex items-center justify-between mb-12">
          <div>
            <p className="text-zinc-500 font-mono text-sm mb-1">BB</p>
            <h1 className="text-4xl font-bold text-white font-mono">Projects</h1>
            <p className="text-zinc-400 font-mono text-sm mt-2">
              Personal and academic data science work
            </p>
          </div>
          <a
            href="/"
            className="px-4 py-2 rounded border border-zinc-700 text-zinc-400 font-mono text-sm hover:border-zinc-500 hover:text-white transition-colors"
          >
            Back Home
          </a>
        </div>

        <div className="space-y-6">
          {projects.map((project, i) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className={`border border-zinc-800 bg-zinc-900/30 rounded-lg p-6 transition-colors ${borderMap[project.color]}`}
            >
              <div className="flex items-start justify-between mb-3">
                <div className="flex items-center gap-3 flex-wrap">
                  <h2 className="text-xl font-bold text-white font-mono">
                    {project.title}
                  </h2>
                  {project.badge && (
                    <span className={`px-2 py-0.5 text-xs font-mono rounded border ${badgeMap[project.badge]}`}>
                      {project.badge}
                    </span>
                  )}
                </div>
                <span className="text-zinc-500 font-mono text-sm shrink-0 ml-4">
                  {project.date}
                </span>
              </div>

              <p className="text-zinc-300 leading-relaxed mb-4 font-mono text-sm">
                {project.description}
              </p>

              <ul className="space-y-2 mb-5">
                {project.bullets.map((bullet) => (
                  <li key={bullet} className="flex items-start gap-2 font-mono text-sm text-zinc-400">
                    <span className={`mt-1.5 h-1.5 w-1.5 rounded-full shrink-0 ${colorMap[project.color]}`} />
                    {bullet}
                  </li>
                ))}
              </ul>

              <div className="flex flex-wrap gap-2 mb-4">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-2.5 py-1 text-xs font-mono rounded border border-zinc-700 text-zinc-400 bg-zinc-900"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <div className="flex gap-3">
                {project.link && (
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block px-3 py-1.5 text-xs font-mono rounded border border-zinc-700 text-zinc-400 hover:border-zinc-500 hover:text-white transition-colors"
                  >
                    {project.linkLabel} →
                  </a>
                )}
                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block px-3 py-1.5 text-xs font-mono rounded border border-zinc-700 text-zinc-400 hover:border-zinc-500 hover:text-white transition-colors"
                  >
                    GitHub →
                  </a>
                )}
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-12 pt-6 border-t border-zinc-800 flex items-center justify-between">
          <p className="text-zinc-600 font-mono text-xs">
            more projects coming soon
          </p>
          <a
            href="/chat"
            className="px-4 py-2 rounded bg-white text-black font-mono text-sm font-semibold hover:bg-zinc-200 transition-colors"
          >
            Ask Begim<span className="text-blue-600">AI</span> →
          </a>
        </div>

      </div>
    </main>
  );
}