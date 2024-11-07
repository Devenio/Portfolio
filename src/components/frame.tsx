"use client";

import { sections, useSection } from "@/lib/providers/SectionProvider";
import Navigation from "./navigation";
import Curves from "./curves";
import { AnimatePresence, motion } from "framer-motion";
import Socials from "./socials";

export default function Frame() {
  const { sectionIndex } = useSection();

  return (
    <div className="w-full h-screen absolute">
      <motion.h1
        initial={{ y: -20, opacity: 0 }}
        animate={{
          y: 0,
          opacity: 1,
        }}
        transition={{ duration: 0.5, ease: "easeInOut" }}
        className={`fixed top-5 sm:top-10 text-lg left-5 sm:left-10 sm:text-4xl z-20 color-transition text-white`}
      >
        Mahziyar Erfani
      </motion.h1>

      <motion.p className="2xl:mt-5 fixed bottom-5 sm:bottom-10 left-5 sm:left-10 text-theme-secondary text-lg font-semibold color-transition">
        Frontend Developer
      </motion.p>

      <motion.div
        initial={{ scaleY: 0.5, opacity: 0 }}
        animate={{
          scaleY: 1 - (sectionIndex + 1) / 10,
          opacity: 1,
        }}
        transition={{ duration: 0.5, ease: "easeInOut" }}
        className={`fixed top-[calc(50dvh-(176px/2))] z-20 hidden md:block left-5 sm:left-10 h-44 w-1 rounded-lg color-transition bg-theme-primary`}
      />

      <Socials />
      <Curves />
      <Navigation />
      <AnimatePresence>
        {sectionIndex > 0 && (
          <motion.h2
            key={sectionIndex}
            initial={{ x: 20, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: 20, opacity: 0 }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
            className="fixed right-5 sm:right-10 top-[50%] text-6xl translate-y-[-50%] text-theme-primary font-semibold color-transition z-20"
          >
            {sections[sectionIndex].title}
          </motion.h2>
        )}
      </AnimatePresence>
    </div>
  );
}
