"use client";

import { motion } from "framer-motion";

const skills = [
  "Python",
  "SQL",
  "R",
  "Machine Learning",
  "XGBoost",
  "Random Forest",
  "Tableau",
  "Power BI",
  "GCP",
  "Git",
];

export default function Hero() {
  return (
    <section className="min-h-screen bg-zinc-950 flex items-center px-8">
      <div className="max-w-2xl">

        <motion.p
          className="text-zinc-500 font-mono text-sm mb-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.1 }}
        >
          open to opportunities
        </motion.p>

        <motion.h1
          className="text-5xl font-bold text-white font-mono mb-2"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          Begimai Bolotbekova
        </motion.h1>

        <motion.p
          className="text-blue-400 font-mono text-xl mb-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          Data Scientist
        </motion.p>

        <motion.p
          className="text-zinc-400 leading-relaxed mb-8 text-lg"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
        >
          5+ years turning large-scale data into measurable business impact.
          I specialize in{" "}
          <span className="text-white">machine learning</span>,{" "}
          <span className="text-white">experimentation</span>, and{" "}
          <span className="text-white">data storytelling</span>.
        </motion.p>

        <motion.div
          className="flex flex-wrap gap-2 mb-10"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          {skills.map((skill) => (
            <span
              key={skill}
              className="px-3 py-1 text-xs font-mono rounded border border-zinc-700 text-zinc-300 bg-zinc-900"
            >
              {skill}
            </span>
          ))}
        </motion.div>

        <motion.div
          className="flex flex-wrap gap-3 mb-12"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
        >
          <a href="/chat" className="px-5 py-2.5 rounded bg-white text-black font-mono text-sm font-semibold hover:bg-zinc-200 transition-colors">
            Chat with Begim<span className="text-blue-400">AI</span> →
          </a>
          <a href="/resume" className="px-5 py-2.5 rounded border border-zinc-600 text-zinc-300 font-mono text-sm hover:border-zinc-400 hover:text-white transition-colors">
            Resume
          </a>
          <a href="https://github.com/YOUR_GITHUB" target="_blank" className="px-5 py-2.5 rounded border border-zinc-600 text-zinc-300 font-mono text-sm hover:border-zinc-400 hover:text-white transition-colors">
            GitHub
          </a>
          <a href="mailto:begimai.bolotbekova.b@gmail.com" className="px-5 py-2.5 rounded border border-zinc-600 text-zinc-300 font-mono text-sm hover:border-zinc-400 hover:text-white transition-colors">
            Contact
          </a>
        </motion.div>

        <motion.div
          className="flex gap-8 pt-6 border-t border-zinc-800"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.7 }}
        >
          {[
            { label: "Years Experience", value: "5+" },
            { label: "Industries", value: "3+" },
            { label: "MS Data Science", value: "GPA 3.88" },
          ].map(({ label, value }) => (
            <div key={label} className="font-mono">
              <div className="text-2xl font-bold text-white">{value}</div>
              <div className="text-xs text-zinc-500 mt-0.5">{label}</div>
            </div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}
