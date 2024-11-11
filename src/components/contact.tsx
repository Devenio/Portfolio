"use client";
import { motion } from "framer-motion";

export default function Contact() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="flex flex-col items-start p-8 mt-12 bg-theme-accent rounded-2xl mx-5 shadow-lg"
    >
      <motion.h2
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.3 }}
        className="text-3xl font-bold text-theme-primary mb-4"
      >
        Get in Touch
      </motion.h2>
      <motion.p
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, delay: 0.5 }}
        className="text-lg text-white mb-4"
      >
        {`I'm always open to discussing new projects, creative ideas, or
        opportunities to be part of your vision. Feel free to reach out!`}
      </motion.p>
      <motion.a
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, delay: 0.7 }}
        href="mailto:mhzrerfani@gmail.com"
        className="text-xl font-semibold text-theme-primary  underline"
      >
        mhzrerfani@gmail.com
      </motion.a>
    </motion.div>
  );
}
