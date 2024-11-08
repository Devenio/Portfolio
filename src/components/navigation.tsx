"use client";

import { useSection } from "@/lib/hooks";
import { useState } from "react";
import { motion, AnimatePresence, easeInOut } from "framer-motion";
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

  const indicatorVariants = {
    hidden: { opacity: 0, y: -10 },
    visible: (i: number) => ({
      opacity: 1,
      x: 0,
      y: i * 42,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 30,
        easeInOut,
        duration: 0.6,
      },
    }),
    exit: {
      opacity: 0,
      y: -10,
      transition: { duration: ANIMATION_DURATION.MEDIUM },
    },
  };

  const lineVariants = {
    hidden: { opacity: 0, x: 10 },
    visible: (i: number) => ({
      opacity: 1,
      x: 0,
      transition: {
        delay: i * 0.1,
        duration: 5,
      },
    }),
  };

  const toggle = () => {
    setIsHidden((prev) => !prev);
  };

  return (
    <div className="fixed top-5 sm:top-10 z-10 right-5 sm:right-10 transition-colors items-start flex gap-5">
      <AnimatePresence>
        {!isHidden && (
          <motion.div
            className="flex flex-col items-start gap-4"
            initial="hidden"
            animate="visible"
            exit="hidden"
          >
            <motion.div
              className="absolute left-[-16px] color-transition w-1 h-1 rounded-full bg-theme-primary"
              variants={indicatorVariants}
              initial="hidden"
              animate="visible"
              custom={sectionNavigationOptions.indexOf(
                sectionNavigationOptions.findLast(
                  (option) => option.index <= sectionIndex
                ) as (typeof sectionNavigationOptions)[number]
              )}
              exit="exit"
            />
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
                  className={`color-transition text-theme-primary`}
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
                            className="h-1 rounded-full bg-theme-primary color-transition"
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

      <div
        onClick={toggle}
        className="flex flex-col justify-around w-10 h-8 cursor-pointer group"
      >
        {[0, 1, 2].map((i) => (
          <motion.div
            key={i}
            className="h-1 rounded-full color-transition group-hover:animate-grow bg-theme-primary"
            variants={lineVariants}
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
