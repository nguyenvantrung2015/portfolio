"use client";

import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";

const projects = [
  {
    title: "E-Commerce Platform",
    description:
      "A full-stack e-commerce app with cart, payments, and admin dashboard. Built with Next.js, Stripe, and PostgreSQL.",
    tags: ["Next.js", "TypeScript", "Stripe", "PostgreSQL"],
    github: "https://github.com",
    live: "https://example.com",
    color: "from-violet-500/20 to-blue-500/20",
  },
  {
    title: "Task Management App",
    description:
      "A real-time collaborative task manager with drag-and-drop boards, team workspaces, and notifications.",
    tags: ["React", "Node.js", "Socket.io", "MongoDB"],
    github: "https://github.com",
    live: "https://example.com",
    color: "from-blue-500/20 to-cyan-500/20",
  },
  {
    title: "Developer Blog",
    description:
      "A personal blog with MDX content, syntax highlighting, dark mode, and full-text search.",
    tags: ["Next.js", "MDX", "Tailwind CSS", "Vercel"],
    github: "https://github.com",
    live: "https://example.com",
    color: "from-cyan-500/20 to-green-500/20",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-violet-400 text-sm font-medium tracking-widest uppercase mb-2">What I&apos;ve Built</p>
          <h2 className="text-3xl md:text-4xl font-bold text-white">Featured Projects</h2>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, i) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className="group bg-white/5 border border-white/10 rounded-2xl overflow-hidden hover:border-violet-500/40 transition-all duration-300 hover:-translate-y-1 flex flex-col"
            >
              {/* Gradient thumbnail */}
              <div className={`h-36 bg-gradient-to-br ${project.color} flex items-center justify-center`}>
                <span className="text-white/30 text-5xl font-bold">{project.title[0]}</span>
              </div>

              <div className="p-6 flex flex-col flex-1">
                <h3 className="text-white font-semibold text-lg mb-2">{project.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed mb-4 flex-1">
                  {project.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-5">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs px-2.5 py-1 rounded-full bg-violet-500/10 text-violet-400 border border-violet-500/20"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Links */}
                <div className="flex gap-4">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1.5 text-gray-400 hover:text-white text-sm transition-colors"
                  >
                    <Github size={15} /> Code
                  </a>
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1.5 text-gray-400 hover:text-violet-400 text-sm transition-colors"
                  >
                    <ExternalLink size={15} /> Live Demo
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
