"use client";

import Home from "@/components/home";
import Works from "@/components/works";
import React, {
  createContext,
  useState,
  useCallback,
  useContext,
  useEffect,
} from "react";

type Direction = "up" | "down";

export enum Sections {
  Home = 0,
  Works = 1,
  Experience = 2,
  Contact = 3,
}

export const WORK_SUBSECTIONS = 3;

export type Section = {
  content: React.ReactNode;
  title: string;
};

interface SectionContextType {
  sectionIndex: number;
  subsectionIndex: number;
  setSectionIndex: (index: number) => void;
  handleScroll: (event: WheelEvent) => void;
  scrollDirection: Direction;
  sections: Section[];
  setSubsectionIndex: (index: number) => void;
}

type SectionColors = {
  background: string;
  primary: string;
  secondary: string;
  accent: string;
};

const sectionColors: Record<string, SectionColors> = {
  main: {
    background: "var(--theme-1-background)",
    primary: "var(--theme-1-primary)",
    secondary: "var(--theme-1-secondary)",
    accent: "var(--theme-1-accent)",
  },
  mjolnir: {
    background: "var(--theme-2-background)",
    primary: "var(--theme-2-primary)",
    secondary: "var(--theme-2-secondary)",
    accent: "var(--theme-2-accent)",
  },
  ainur: {
    background: "var(--theme-3-background)",
    primary: "var(--theme-3-primary)",
    secondary: "var(--theme-3-secondary)",
    accent: "var(--theme-3-accent)",
  },
  jeton: {
    background: "var(--theme-4-background)",
    primary: "var(--theme-4-primary)",
    secondary: "var(--theme-4-secondary)",
    accent: "var(--theme-4-accent)",
  },
  experiences: {
    background: "var(--theme-5-background)",
    primary: "var(--theme-5-primary)",
    secondary: "var(--theme-5-secondary)",
    accent: "var(--theme-5-accent)",
  },
};

const sectionColorsMap: {
  [key: number]: SectionColors | { [subKey: number]: SectionColors };
} = {
  [Sections.Home]: sectionColors.main,
  [Sections.Works]: {
    0: sectionColors.mjolnir,
    1: sectionColors.ainur,
    2: sectionColors.jeton,
  },
  [Sections.Experience]: sectionColors.experiences,
  [Sections.Contact]: sectionColors.main,
};

const SectionContext = createContext<SectionContextType | undefined>(undefined);

export const sections: Section[] = [
  { content: <Home />, title: "Home" },
  { content: <Works />, title: "Works" },
  { content: <div>Experience Content</div>, title: "Experiences" },
  { content: <div>Contact Content</div>, title: "Contact" },
];

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
              ? Math.min(prevIndex + 1, sections.length - 1)
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
    const colorsMap = sectionColorsMap[sectionIndex];
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
        sections,
      }}
    >
      {children}
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

interface SectionWithIndex {
  title: string;
  index: number;
}

function generateUniqueTitleSections(sections: Section[]): SectionWithIndex[] {
  const titleIndexSet = new Set<string>();
  const uniqueSections: SectionWithIndex[] = [];

  sections.forEach((section, index) => {
    if (!titleIndexSet.has(section.title)) {
      titleIndexSet.add(section.title);
      uniqueSections.push({ title: section.title, index });
    }
  });

  return uniqueSections;
}

export const sectionNavigationOptions = generateUniqueTitleSections(sections);
