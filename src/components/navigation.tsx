"use client";

import { useSection } from "@/lib/hooks";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ANIMATION_DURATION,
  SECTIONS,
  WORK_SUBSECTIONS,
} from "@/lib/constants";
import { generateUniqueTitleSections } from "@/lib/utils";
import { Sections } from "@/lib/types";

const sectionNavigationOptions = generateUniqueTitleSections(SECTIONS);

export default function Navigation() {
  const { sectionIndex, subsectionIndex, setSectionIndex, setSubsectionIndex } =
    useSection();
  const [isHidden, setIsHidden] = useState(false);

  const buttonVariants = {
    hidden: { opacity: 0, x: 20 },
    visible: (i: number) => ({
      opacity: 1,
      x: 0,
      transition: {
        delay: i * 0.2,
        duration: ANIMATION_DURATION.MEDIUM,
      },
    }),
    exit: {
      opacity: 0,
      x: 20,
      transition: { duration: ANIMATION_DURATION.MEDIUM },
    },
  };

  const toggle = () => {
    setIsHidden((prev) => !prev);
  };

  return (
    <div className="fixed top-5 sm:top-10 z-10 right-5 sm:right-10 transition-colors items-start flex gap-5">
      {/* Desktop Navigation */}
      <AnimatePresence>
        {!isHidden && (
          <motion.div
            className="hidden lg:flex flex-col items-start gap-4"
            initial="hidden"
            animate="visible"
            exit="hidden"
          >
            {sectionNavigationOptions.map((section, i) => (
              <motion.div key={section.title} className="relative">
                <motion.button
                  custom={i}
                  variants={buttonVariants}
                  initial="hidden"
                  animate="visible"
                  exit="exit"
                  type="button"
                  onClick={() => setSectionIndex(section.index)}
                  className="text-theme-primary"
                >
                  {section.title}
                </motion.button>

                <AnimatePresence>
                  {section.title === "Works" &&
                    sectionIndex === Sections.Works && (
                      <div className="flex mt-1 space-x-1 absolute">
                        {[...Array(WORK_SUBSECTIONS)].map((_, subIndex) => (
                          <motion.button
                            onClick={() => setSubsectionIndex(subIndex)}
                            key={subIndex}
                            initial={{ width: "4px", opacity: 0.5 }}
                            animate={{
                              width:
                                subsectionIndex === subIndex ? "24px" : "16px",
                              opacity: subsectionIndex === subIndex ? 1 : 0.5,
                            }}
                            exit={{ width: "4px", opacity: 0.5 }}
                            transition={{
                              duration: ANIMATION_DURATION.MEDIUM,
                              ease: "easeInOut",
                            }}
                            className="h-1 rounded-full bg-theme-primary"
                          />
                        ))}
                      </div>
                    )}
                </AnimatePresence>
              </motion.div>
            ))}
          </motion.div>
        )}
      </AnimatePresence>

      {/* Mobile Partial Overlay Navigation */}
      <AnimatePresence>
        {!isHidden && (
          <motion.div
            className="lg:hidden fixed top-0 rounded-b-3xl left-0 right-0 h-1/3 bg-theme-background flex flex-col items-center justify-center z-20 p-4 shadow-lg"
            initial={{ opacity: 0, y: -100 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -100 }}
            transition={{ duration: ANIMATION_DURATION.MEDIUM }}
          >
            <button
              onClick={toggle}
              className="absolute top-3 right-4 text-theme-primary text-xl"
            >
              Close
            </button>
            {sectionNavigationOptions.map((section, i) => (
              <motion.div key={section.title} className="relative">
                <motion.button
                  onClick={() => {
                    setSectionIndex(section.index);
                    setIsHidden(true);
                  }}
                  custom={i}
                  variants={buttonVariants}
                  initial="hidden"
                  animate="visible"
                  exit="exit"
                  type="button"
                  className="text-theme-primary text-lg my-2"
                >
                  {section.title}
                </motion.button>

                <AnimatePresence>
                  {section.title === "Works" &&
                    sectionIndex === Sections.Works && (
                      <div className="flex mt-1 space-x-1 absolute">
                        {[...Array(WORK_SUBSECTIONS)].map((_, subIndex) => (
                          <motion.button
                            onClick={() => setSubsectionIndex(subIndex)}
                            key={subIndex}
                            initial={{ width: "4px", opacity: 0.5 }}
                            animate={{
                              width:
                                subsectionIndex === subIndex ? "24px" : "16px",
                              opacity: subsectionIndex === subIndex ? 1 : 0.5,
                            }}
                            exit={{ width: "4px", opacity: 0.5 }}
                            transition={{
                              duration: ANIMATION_DURATION.MEDIUM,
                              ease: "easeInOut",
                            }}
                            className="h-1 rounded-full bg-theme-primary"
                          />
                        ))}
                      </div>
                    )}
                </AnimatePresence>
              </motion.div>
            ))}
          </motion.div>
        )}
      </AnimatePresence>

      {/* Toggle Button */}
      <div
        onClick={toggle}
        className="flex flex-col justify-around w-10 h-8 cursor-pointer group"
      >
        {[0, 1, 2].map((i) => (
          <motion.div
            key={i}
            className="h-1 rounded-full group-hover:animate-grow bg-theme-primary"
            variants={buttonVariants}
            initial="hidden"
            animate="visible"
            custom={i}
            style={{ animationDelay: `${i * 150}ms` }}
          />
        ))}
      </div>
    </div>
  );
}
