"use client";

import React, { createContext, useState, useCallback, useEffect } from "react";
import {
  Direction,
  SectionColors,
  SectionContextType,
  Sections,
} from "@/lib/types";
import { SECTION_THEME_MAP, SECTIONS, WORK_SUBSECTIONS } from "@/lib/constants";

export const SectionContext = createContext<SectionContextType | undefined>(
  undefined
);

const TRANSITION_DURATION = 800;

export const SectionProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [sectionIndex, setSectionIndex] = useState(Sections.Home);
  const [subsectionIndex, setSubsectionIndex] = useState(0);
  const [canScroll, setCanScroll] = useState(true);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [navigationDirection, setNavigationDirection] =
    useState<Direction>("down");
  const [touchStartY, setTouchStartY] = useState<number | null>(null);

  const handleMainSectionChange = useCallback((direction: Direction) => {
    setSectionIndex((prevIndex) => {
      const newIndex =
        direction === "down"
          ? Math.min(prevIndex + 1, SECTIONS.length - 1)
          : Math.max(prevIndex - 1, 0);
      return newIndex;
    });
  }, []);

  const updateCurrentSection = useCallback(
    (direction: Direction) => {
      if (isTransitioning) return;
      setIsTransitioning(true);

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
        handleMainSectionChange(direction);
      }

      setTimeout(() => setIsTransitioning(false), TRANSITION_DURATION);
    },
    [sectionIndex, isTransitioning, handleMainSectionChange]
  );

  const handleScroll = useCallback(
    (event: WheelEvent) => {
      if (!canScroll || isTransitioning || event.ctrlKey || event.metaKey)
        return;

      const direction = event.deltaY > 0 ? "down" : "up";
      setNavigationDirection(direction);
      updateCurrentSection(direction);
      setCanScroll(false);

      setTimeout(() => setCanScroll(true), TRANSITION_DURATION);
    },
    [canScroll, isTransitioning, updateCurrentSection]
  );

  const handleTouchStart = useCallback((event: TouchEvent) => {
    setTouchStartY(event.touches[0].clientY);
  }, []);

  const handleTouchMove = useCallback(
    (event: TouchEvent) => {
      if (!canScroll || isTransitioning || touchStartY === null) return;

      const touchEndY = event.touches[0].clientY;
      const direction = touchStartY - touchEndY > 0 ? "down" : "up";
      setNavigationDirection(direction);

      if (canScroll) {
        updateCurrentSection(direction);
        setCanScroll(false);

        setTimeout(() => setCanScroll(true), TRANSITION_DURATION);
      }

      setTouchStartY(null);
    },
    [canScroll, isTransitioning, touchStartY, updateCurrentSection]
  );

  const handleNavigation = useCallback(
    (newIndex: number) => {
      setNavigationDirection(newIndex > sectionIndex ? "down" : "up");
      setSectionIndex(newIndex);
      setSubsectionIndex(0);
    },
    [sectionIndex]
  );

  useEffect(() => {
    if (matchMedia("(pointer: fine)").matches) {
      window.addEventListener("wheel", handleScroll);
      return () => window.removeEventListener("wheel", handleScroll);
    } else {
      window.addEventListener("touchstart", handleTouchStart);
      window.addEventListener("touchmove", handleTouchMove);
      return () => {
        window.removeEventListener("touchstart", handleTouchStart);
        window.removeEventListener("touchmove", handleTouchMove);
      };
    }
  }, [handleScroll, handleTouchStart, handleTouchMove]);

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
        setSubsectionIndex,
        navigationDirection,
      }}
    >
      {children}
    </SectionContext.Provider>
  );
};
