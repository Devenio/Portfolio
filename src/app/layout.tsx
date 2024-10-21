"use client";

import "./globals.css";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect, useCallback } from "react";
import { Roboto } from "next/font/google";
import Introduction from "./components/introduction";

const roboto = Roboto({
  weight: ["300", "400", "500", "700"],
  subsets: ["latin"],
  variable: "--font-roboto",
});

type Direction = "up" | "down";

function getScrollDirection(event: WheelEvent): Direction {
  return event.deltaY > 0 ? "down" : "up";
}

const sections = [
  { content: <Introduction />, title: "Home" },
  { content: "Section 2", title: "Works" },
  { content: "Section 3", title: "Experiences" },
];

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [sectionIndex, setSectionIndex] = useState(0);
  const [canScroll, setCanScroll] = useState(true);
  const [scrollDirection, setScrollDirection] = useState<Direction>("down");

  const updateCurrentSection = useCallback((direction: Direction) => {
    setSectionIndex((prevIndex) => {
      if (direction === "down") {
        return prevIndex < sections.length - 1 ? prevIndex + 1 : prevIndex;
      } else {
        return prevIndex > 0 ? prevIndex - 1 : prevIndex;
      }
    });
  }, []);

  const handleScroll = useCallback(
    (event: WheelEvent) => {
      if (!canScroll) return;

      const direction = getScrollDirection(event);
      setScrollDirection(direction);
      updateCurrentSection(direction);
      setCanScroll(false);

      setTimeout(() => {
        setCanScroll(true);
      }, 1000);
    },
    [canScroll, updateCurrentSection]
  );

  useEffect(() => {
    window.addEventListener("wheel", handleScroll);
    return () => window.removeEventListener("wheel", handleScroll);
  }, [handleScroll]);

  const variants = {
    enter: (direction: Direction) => ({
      opacity: 0,
      y: direction === "down" ? 50 : -50,
    }),
    center: {
      opacity: 1,
      y: 0,
    },
    exit: (direction: Direction) => ({
      opacity: 0,
      y: direction === "down" ? -50 : 50,
    }),
  };

  return (
    <html lang="en">
      <body
        className={`${
          roboto.variable
        } antialiased transition-colors delay-300 ${
          sectionIndex === 0
            ? "bg-theme-4"
            : sectionIndex === 1
            ? "bg-theme-5"
            : "bg-theme-1"
        }`}
      >
        <div className="h-screen overflow-y-hidden">
          <div
            className={`fixed top-14 left-14 transition-colors delay-300 text-4xl ${
              sectionIndex === 0
                ? "text-white"
                : sectionIndex === 1
                ? "text-white"
                : "text-theme-3"
            }`}
          >
            Mahziyar Erfani
          </div>

          <div
            className={`fixed top-[50%] translate-y-[-50%] left-14 h-44 w-1 rounded-lg transition-colors delay-300 text-4xl ${
              sectionIndex === 0
                ? "bg-white"
                : sectionIndex === 1
                ? "bg-white"
                : "bg-theme-3"
            }`}
          />

          <div
            className={`fixed top-14 z-10 right-14 transition-colors items-start delay-300 flex flex-col gap-4 ${
              sectionIndex === 0
                ? "text-white"
                : sectionIndex === 1
                ? "text-white"
                : "text-theme-3"
            }`}
          >
            {sections.map((section, i) => (
              <button
                type="button"
                onClick={() => {
                  setSectionIndex(i);
                }}
                key={section.title}
              >
                {section.title}
              </button>
            ))}
          </div>

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
              {children}
            </motion.main>
          </AnimatePresence>
        </div>
      </body>
    </html>
  );
}
