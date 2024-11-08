"use client";

import React, { createContext, useState, useCallback, useEffect } from "react";
import {
  Direction,
  SectionColors,
  SectionContextType,
  Sections,
} from "../types";
import { SECTION_THEME_MAP, SECTIONS, WORK_SUBSECTIONS } from "../constants";

export const SectionContext = createContext<SectionContextType | undefined>(
  undefined
);

export const SectionProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [sectionIndex, setSectionIndex] = useState(Sections.Home);
  const [subsectionIndex, setSubsectionIndex] = useState(0);
  const [canScroll, setCanScroll] = useState(true);
  const [scrollDirection, setScrollDirection] = useState<Direction>("down");

  const updateCurrentSection = useCallback(
    (direction: Direction) => {
      if (sectionIndex === Sections.Works) {
        setSubsectionIndex((prevSubIndex) => {
          const newSubIndex =
            direction === "down" ? prevSubIndex + 1 : prevSubIndex - 1;

          if (newSubIndex >= WORK_SUBSECTIONS) {
            setSubsectionIndex(0);
            setSectionIndex(Sections.Experience);
            return 0;
          } else if (newSubIndex < 0) {
            setSubsectionIndex(WORK_SUBSECTIONS - 1);
            setSectionIndex(Sections.Home);
            return WORK_SUBSECTIONS - 1;
          }

          return newSubIndex;
        });
      } else if (sectionIndex === Sections.Experience && direction === "up") {
        setSectionIndex(Sections.Works);
        setSubsectionIndex(WORK_SUBSECTIONS - 1);
      } else {
        setSubsectionIndex(0);
        setSectionIndex((prevIndex) => {
          const newIndex =
            direction === "down"
              ? Math.min(prevIndex + 1, SECTIONS.length - 1)
              : Math.max(prevIndex - 1, 0);
          return newIndex;
        });
      }
    },
    [sectionIndex]
  );

  const handleScroll = useCallback(
    (event: WheelEvent) => {
      if (!canScroll || event.ctrlKey || event.metaKey) return;

      const direction = event.deltaY > 0 ? "down" : "up";
      setScrollDirection(direction);
      updateCurrentSection(direction);
      setCanScroll(false);

      setTimeout(() => setCanScroll(true), 700);
    },
    [canScroll, updateCurrentSection]
  );

  const handleNavigation = useCallback(
    (newIndex: number) => {
      setScrollDirection(newIndex > sectionIndex ? "down" : "up");
      setSectionIndex(newIndex);
      setSubsectionIndex(0);
    },
    [sectionIndex]
  );

  useEffect(() => {
    const colorsMap = SECTION_THEME_MAP[sectionIndex];
    let colors: SectionColors;

    if (
      typeof colorsMap === "object" &&
      sectionIndex === Sections.Works &&
      subsectionIndex in colorsMap
    ) {
      colors = (colorsMap as { [subKey: number]: SectionColors })[
        subsectionIndex
      ];
    } else {
      colors = colorsMap as SectionColors;
    }

    if (colors) {
      document.documentElement.style.setProperty(
        "--theme-background",
        colors.background
      );
      document.documentElement.style.setProperty(
        "--theme-primary",
        colors.primary
      );
      document.documentElement.style.setProperty(
        "--theme-secondary",
        colors.secondary
      );
      document.documentElement.style.setProperty(
        "--theme-accent",
        colors.accent
      );
    }
  }, [sectionIndex, subsectionIndex]);

  return (
    <SectionContext.Provider
      value={{
        sectionIndex,
        subsectionIndex,
        setSectionIndex: handleNavigation,
        handleScroll,
        setSubsectionIndex,
        scrollDirection,
      }}
    >
      {children}
    </SectionContext.Provider>
  );
};
