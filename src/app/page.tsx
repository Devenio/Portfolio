"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";

const sections = [
  { content: "Section 1", color: "#FF5733" },
  { content: "Section 2", color: "#33FF57" },
  { content: "Section 3", color: "#3357FF" },
];

export default function Home() {
  const [sectionIndex, setSectionIndex] = useState(0);

  const handleScroll = () => {
    const scrollPosition = window.scrollY;
    const sectionHeight = window.innerHeight;
    const newIndex = Math.floor(scrollPosition / sectionHeight);
    setSectionIndex(newIndex);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.div
      className="section-container"
      style={{ backgroundColor: sections[sectionIndex].color }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <h1>{sections[sectionIndex].content}</h1>
    </motion.div>
  );
}
