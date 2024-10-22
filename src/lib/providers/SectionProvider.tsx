"use client";

import Home from "@/components/home";
import React, { createContext, useState, useCallback, useContext } from "react";

type Direction = "up" | "down";

interface SectionContextType {
  sectionIndex: number;
  setSectionIndex: (index: number) => void;
  handleScroll: (event: WheelEvent) => void;
  scrollDirection: Direction;
}

const SectionContext = createContext<SectionContextType | undefined>(undefined);

export const sections = [
  { content: <Home />, title: "Home" },
  { content: "Section 2", title: "Works" },
  { content: "Section 3", title: "Experiences" },
];

const getScrollDirection = (event: WheelEvent): Direction => {
  return event.deltaY > 0 ? "down" : "up";
};

export const SectionProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
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
      if (!canScroll || event.ctrlKey || event.metaKey) return;

      const direction = getScrollDirection(event);
      setScrollDirection(direction);
      updateCurrentSection(direction);
      setCanScroll(false);

      setTimeout(() => setCanScroll(true), 1000);
    },
    [canScroll, updateCurrentSection]
  );

  return (
    <SectionContext.Provider
      value={{ sectionIndex, setSectionIndex, handleScroll, scrollDirection }}
    >
      <div
        className={`transition-colors h-screen overflow-y-hidden delay-300 ${
          sectionIndex === 0
            ? "bg-theme-4"
            : sectionIndex === 1
            ? "bg-theme-5"
            : "bg-theme-1"
        }`}
      >
        {children}
      </div>
    </SectionContext.Provider>
  );
};

export const useSection = () => {
  const context = useContext(SectionContext);
  if (!context) {
    throw new Error("useSection must be used within a SectionProvider");
  }
  return context;
};
