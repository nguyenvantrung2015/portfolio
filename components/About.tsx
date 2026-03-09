"use client";

import { motion } from "framer-motion";

const stats = [
  { value: "5+", label: "Years of Experience" },
  { value: "OIDC", label: "Identity Platform Specialist" },
  { value: "MFJ", label: "MoneyForward Japan" },
];

export default function About() {
  return (
    <section id="about" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-violet-400 text-sm font-medium tracking-widest uppercase mb-2">Who I Am</p>
          <h2 className="text-3xl md:text-4xl font-bold text-white">About Me</h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Text */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-gray-400 text-lg leading-relaxed mb-6">
              I&apos;m a Full-Stack Developer based in Bac Ninh, Vietnam, currently working at
              <span className="text-violet-400 font-medium"> MoneyForward Japan</span>.
            </p>
            <p className="text-gray-400 text-lg leading-relaxed mb-6">
              Over the past 5+ years, I have been dedicated to building and maintaining an
              <span className="text-violet-400 font-medium"> Identity Platform (OIDC)</span> that
              powers authentication and authorization across company-wide services — ensuring
              security, reliability, and scalability at scale.
            </p>
            <p className="text-gray-400 text-lg leading-relaxed">
              My core stack is <span className="text-white font-medium">React</span>,{" "}
              <span className="text-white font-medium">TypeScript</span>,{" "}
              <span className="text-white font-medium">Ruby on Rails</span>, and{" "}
              <span className="text-white font-medium">Go</span> — from crafting responsive
              frontends to designing robust backend services.
            </p>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="grid grid-cols-1 gap-6"
          >
            {stats.map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-white/5 border border-white/10 rounded-2xl p-6 flex items-center gap-5"
              >
                <span className="text-4xl font-bold text-violet-400">{stat.value}</span>
                <span className="text-gray-400 text-sm">{stat.label}</span>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
