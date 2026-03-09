"use client";

import { motion } from "framer-motion";
import { Mail, MapPin } from "lucide-react";

const contactInfo = [
  { icon: Mail, label: "Email", value: "nguyenvantrung2015@gmail.com", href: "mailto:nguyenvantrung2015@gmail.com" },
  { icon: MapPin, label: "Location", value: "Bac Ninh, Vietnam", href: null },
];

export default function Contact() {
  return (
    <section id="contact" className="py-24 px-6 bg-white/[0.02]">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-violet-400 text-sm font-medium tracking-widest uppercase mb-2">Let&apos;s Talk</p>
          <h2 className="text-3xl md:text-4xl font-bold text-white">Get In Touch</h2>
          <p className="text-gray-500 mt-4 max-w-md mx-auto">
            I&apos;m open to new opportunities and interesting projects.
            Feel free to reach out — my inbox is always open!
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-10 max-w-4xl mx-auto">
          {/* Contact info */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex flex-col gap-5 justify-center"
          >
            {contactInfo.map(({ icon: Icon, label, value, href }) => (
              <div key={label} className="flex items-center gap-4">
                <div className="w-11 h-11 rounded-xl bg-violet-500/10 border border-violet-500/20 flex items-center justify-center shrink-0">
                  <Icon size={18} className="text-violet-400" />
                </div>
                <div>
                  <p className="text-gray-500 text-xs">{label}</p>
                  {href ? (
                    <a href={href} className="text-gray-300 hover:text-white text-sm transition-colors">
                      {value}
                    </a>
                  ) : (
                    <p className="text-gray-300 text-sm">{value}</p>
                  )}
                </div>
              </div>
            ))}
          </motion.div>

          {/* Contact form */}
          <motion.form
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex flex-col gap-4"
            onSubmit={(e) => e.preventDefault()}
          >
            <input
              type="text"
              placeholder="Your Name"
              className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-gray-300 placeholder-gray-600 text-sm focus:outline-none focus:border-violet-500/50 transition-colors"
            />
            <input
              type="email"
              placeholder="Your Email"
              className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-gray-300 placeholder-gray-600 text-sm focus:outline-none focus:border-violet-500/50 transition-colors"
            />
            <textarea
              rows={4}
              placeholder="Your Message"
              className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-gray-300 placeholder-gray-600 text-sm focus:outline-none focus:border-violet-500/50 transition-colors resize-none"
            />
            <button
              type="submit"
              className="w-full bg-violet-600 hover:bg-violet-700 text-white rounded-xl py-3 text-sm font-medium transition-colors"
            >
              Send Message
            </button>
          </motion.form>
        </div>
      </div>
    </section>
  );
}
