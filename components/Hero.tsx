"use client";

import { motion } from "framer-motion";
import { Github, Linkedin, Mail, ArrowDown } from "lucide-react";

export default function Hero() {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center relative px-6 text-center">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-violet-900/20 via-transparent to-blue-900/20 pointer-events-none" />

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="relative z-10 max-w-3xl"
      >
        {/* Avatar */}
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="w-28 h-28 rounded-full bg-gradient-to-br from-violet-500 to-blue-500 mx-auto mb-6 flex items-center justify-center text-4xl font-bold text-white shadow-lg shadow-violet-500/30"
        >
          N
        </motion.div>

        <p className="text-violet-400 font-medium text-sm tracking-widest uppercase mb-3">
          Hello, I&apos;m
        </p>

        <h1 className="text-5xl md:text-7xl font-bold text-white mb-4 leading-tight">
          Nguyen Van Trung
        </h1>

        <p className="text-xl md:text-2xl text-gray-400 mb-6 font-light">
          Full-Stack Developer
        </p>

        <p className="text-gray-500 text-base md:text-lg max-w-xl mx-auto mb-10 leading-relaxed">
          5+ years building and maintaining Identity Platform (OIDC) at MoneyForward Japan.
          Specializing in React, TypeScript, Ruby on Rails, and Go.
        </p>

        {/* CTA buttons */}
        <div className="flex flex-wrap gap-4 justify-center mb-12">
          <a
            href="#projects"
            className="px-6 py-3 bg-violet-600 hover:bg-violet-700 text-white rounded-full font-medium transition-colors text-sm"
          >
            View My Work
          </a>
          <a
            href="#contact"
            className="px-6 py-3 border border-gray-700 hover:border-gray-500 text-gray-300 hover:text-white rounded-full font-medium transition-colors text-sm"
          >
            Get In Touch
          </a>
        </div>

        {/* Social links */}
        <div className="flex gap-5 justify-center">
          {[
            { icon: Github, href: "https://github.com/nguyenvantrung", label: "GitHub" },
            { icon: Linkedin, href: "https://linkedin.com/in/nguyenvantrung", label: "LinkedIn" },
            { icon: Mail, href: "mailto:nguyenvantrung2015@gmail.com", label: "Email" },
          ].map(({ icon: Icon, href, label }) => (
            <a
              key={label}
              href={href}
              aria-label={label}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-500 hover:text-violet-400 transition-colors"
            >
              <Icon size={20} />
            </a>
          ))}
        </div>
      </motion.div>

      {/* Scroll hint */}
      <motion.a
        href="#about"
        animate={{ y: [0, 8, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
        className="absolute bottom-8 text-gray-600 hover:text-gray-400 transition-colors"
      >
        <ArrowDown size={20} />
      </motion.a>
    </section>
  );
}
