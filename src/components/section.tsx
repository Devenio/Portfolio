"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useEffect } from "react";
import { useSection } from "@/lib/providers/SectionProvider";

export default function Section() {
  const { sectionIndex, scrollDirection, handleScroll, sections } =
    useSection();

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
    <div
      className={`h-full flex items-center justify-center color-transition bg-theme-background`}
    >
      <AnimatePresence mode="wait" custom={scrollDirection}>
        <motion.main
          key={sectionIndex}
          variants={variants}
          initial="enter"
          animate="center"
          exit="exit"
          custom={scrollDirection}
          transition={{ duration: 0.5, damping: 10, stiffness: 100 }}
          className="flex items-center justify-center h-full"
        >
          {sections[sectionIndex].content}
        </motion.main>
      </AnimatePresence>
    </div>
  );
}
