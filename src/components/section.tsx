"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useEffect } from "react";
import { useSection, sections } from "@/lib/providers/SectionProvider";

export default function Section() {
  const { sectionIndex, scrollDirection, handleScroll } = useSection();

  useEffect(() => {
    window.addEventListener("wheel", handleScroll);
    return () => window.removeEventListener("wheel", handleScroll);
  }, [handleScroll]);

  const variants = {
    enter: (direction: "up" | "down") => ({
      opacity: 0,
      y: direction === "down" ? 50 : -50,
    }),
    center: { opacity: 1, y: 0 },
    exit: (direction: "up" | "down") => ({
      opacity: 0,
      y: direction === "down" ? -50 : 50,
    }),
  };

  return (
    <AnimatePresence mode="wait" custom={scrollDirection}>
      <motion.main
        key={sectionIndex}
        variants={variants}
        initial="enter"
        animate="center"
        exit="exit"
        custom={scrollDirection}
        transition={{ duration: 0.5 }}
        className="h-screen flex items-center justify-center"
      >
        <h1 className="text-4xl text-white">
          {sections[sectionIndex].content}
        </h1>
      </motion.main>
    </AnimatePresence>
  );
}
