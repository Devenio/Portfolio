"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useEffect } from "react";
import { useSection } from "@/lib/hooks";
import { ANIMATION_DURATION, SECTIONS } from "@/lib/constants";
import { Direction } from "@/lib/types";

export default function Section() {
  const { sectionIndex, scrollDirection, handleScroll } = useSection();

  const hasMouse = () => {
    return matchMedia("(pointer: fine)").matches;
  };

  useEffect(() => {
    if (hasMouse()) {
      window.addEventListener("wheel", handleScroll);
      return () => window.removeEventListener("wheel", handleScroll);
    }
  }, [handleScroll]);

  const variants = {
    enter: (direction: Direction) => ({
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
    <div className="h-full flex items-center justify-center color-transition bg-theme-background">
      <AnimatePresence mode="wait" custom={scrollDirection}>
        <motion.main
          key={sectionIndex}
          variants={variants}
          initial="enter"
          animate="center"
          exit="exit"
          custom={scrollDirection}
          transition={{
            duration: ANIMATION_DURATION.MEDIUM,
            damping: 10,
            stiffness: 100,
          }}
          className="flex items-center justify-center h-full"
        >
          {SECTIONS[sectionIndex].content}
        </motion.main>
      </AnimatePresence>
    </div>
  );
}
