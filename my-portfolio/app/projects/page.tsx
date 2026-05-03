"use client";

import { motion } from "framer-motion";

const projects = [
  {
    title: "Diabetes Risk Prediction",
    date: "Jan 2024",
    description:
      "Machine learning project using CDC BRFSS survey data to predict diabetes risk. Deployed as a live Streamlit web application for real-time risk assessment.",
    bullets: [
      "Built XGBoost classifier on 22 health & demographic features from CDC BRFSS data",
      "Achieved 80% accuracy with hyperparameter tuning via Optuna",
      "Handled class imbalance and deployed live app on Streamlit",
    ],
    tags: ["Python", "XGBoost", "Optuna", "Streamlit", "Scikit-learn", "CDC BRFSS"],
    color: "red",
    link: "https://diabetes-risk-prediction-bfrss.streamlit.app/",
    linkLabel: "Live App",
    github: "https://github.com/begimaibb/diabetes-risk-prediction",
  },
  {
    title: "Housing Price Prediction",
    date: "Jun 2024",
    description:
      "MBA thesis project predicting housing prices in Taiwan using multiple machine learning models. Conducted comparative evaluation to identify the best performing approach.",
    bullets: [
      "Compared MLR, Random Forest, and XGBoost models",
      "Achieved R² of 0.77 with best performing model",
      "Applied feature engineering and model evaluation techniques",
    ],
    tags: ["Python", "XGBoost", "Random Forest", "Scikit-learn", "Statistics"],
    color: "blue",
    link: "https://ndltd.ncl.edu.tw/cgi-bin/gs32/gsweb.cgi/ccd=.s2CQy/record?r1=1&h1=0#XXX",
    linkLabel: "View Thesis",
    github: null,
  },
  {
    title: "Bike-Sharing Route Optimization",
    date: "Feb–Jun 2023",
    description:
      "Engineered a route optimization framework for bike-sharing systems in Taipei using graph theory and shortest path algorithms.",
    bullets: [
      "Implemented Dijkstra's Algorithm for route optimization",
      "Achieved 20% improvement in route efficiency",
      "Applied Graph Theory concepts in Python",
    ],
    tags: ["Python", "Graph Theory", "Dijkstra's Algorithm", "Optimization"],
    color: "green",
    link: null,
    linkLabel: null,
    github: null,
  },
  {
    title: "CRM Data Migration & Analytics",
    date: "Aug 2023–Aug 2024",
    description:
      "Led end-to-end data migration to a new CRM at Faria Education Group, serving 100+ international schools with zero data loss.",
    bullets: [
      "Reduced data retrieval time by 88% (4 hours to 30 minutes)",
      "Ensured 100% data fidelity across high-volume upload cycles",
      "Managed academic reporting data lifecycle for 100+ schools",
    ],
    tags: ["SQL", "Data Migration", "CRM", "Data Quality"],
    color: "purple",
    link: null,
    linkLabel: null,
    github: null,
  },
  {
    title: "Retail A/B Testing & Merchandising Analysis",
    date: "2019–2022",
    description:
      "Designed and executed a large-scale A/B analysis across 200 retail locations at Coca-Cola to evaluate merchandising strategies.",
    bullets: [
      "Identified variables driving 50% increase in total brand sales",
      "Achieved 100–200% sales lift in targeted stores",
      "Led RED Project — highest country RED score since 2016 launch",
    ],
    tags: ["Python", "SQL", "A/B Testing", "Statistical Analysis", "Tableau"],
    color: "orange",
    link: null,
    linkLabel: null,
    github: null,
  },
];

const colorMap: Record<string, string> = {
  red: "bg-red-400",
  blue: "bg-blue-400",
  green: "bg-green-400",
  purple: "bg-purple-400",
  orange: "bg-orange-400",
};

const borderMap: Record<string, string> = {
  red: "hover:border-red-800",
  blue: "hover:border-blue-800",
  green: "hover:border-green-800",
  purple: "hover:border-purple-800",
  orange: "hover:border-orange-800",
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
              Data science work across industry and academia
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
                <h2 className="text-xl font-bold text-white font-mono">
                  {project.title}
                </h2>
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