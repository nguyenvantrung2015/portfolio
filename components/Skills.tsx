"use client";

import { motion } from "framer-motion";

const skillGroups = [
  {
    category: "Frontend",
    skills: ["React", "TypeScript", "JavaScript", "Tailwind CSS", "HTML / CSS"],
  },
  {
    category: "Backend",
    skills: ["Ruby on Rails", "Go", "REST API", "GraphQL", "OAuth 2.0 / OIDC"],
  },
  {
    category: "Identity & Security",
    skills: ["OpenID Connect", "OAuth 2.0", "SSO", "JWT", "Session Management"],
  },
  {
    category: "DevOps & Tools",
    skills: ["Docker", "Git", "GitHub Actions", "Linux", "PostgreSQL"],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="py-24 px-6 bg-white/[0.02]">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-violet-400 text-sm font-medium tracking-widest uppercase mb-2">What I Know</p>
          <h2 className="text-3xl md:text-4xl font-bold text-white">Skills & Technologies</h2>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {skillGroups.map((group, i) => (
            <motion.div
              key={group.category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className="bg-white/5 border border-white/10 rounded-2xl p-6 hover:border-violet-500/40 transition-colors"
            >
              <h3 className="text-white font-semibold mb-4 text-sm tracking-wide uppercase">
                {group.category}
              </h3>
              <ul className="flex flex-col gap-2">
                {group.skills.map((skill) => (
                  <li
                    key={skill}
                    className="flex items-center gap-2 text-gray-400 text-sm"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-violet-400 shrink-0" />
                    {skill}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
