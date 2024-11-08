import { Section, SectionColors, Sections } from "./types";
import Home from "@/components/home";
import Works from "@/components/works";
import MjolnirCover from "@/assets/images/mjolnir-cover.png";
import AinurCover from "@/assets/images/ainur-cover.png";
import JetonCover from "@/assets/images/jeton-cover.png";

export const ANIMATION_DURATION = {
  SHORT: 0.2,
  MEDIUM: 0.4,
  LONG: 0.8,
};

export const WORK_SUBSECTIONS = 3;

export const SECTIONS: Section[] = [
  { content: <Home />, title: "Home" },
  { content: <Works />, title: "Works" },
  { content: <Home />, title: "Experiences" },
  { content: <Home />, title: "Contact" },
];

export const THEMES: Record<string, SectionColors> = {
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

export const SECTION_THEME_MAP: {
  [key: number]: SectionColors | { [subKey: number]: SectionColors };
} = {
  [Sections.Home]: THEMES.main,
  [Sections.Works]: {
    0: THEMES.mjolnir,
    1: THEMES.ainur,
    2: THEMES.jeton,
  },
  [Sections.Experience]: THEMES.experiences,
  [Sections.Contact]: THEMES.main,
};

export const WORKS_ITEMS = [
  {
    cover: MjolnirCover,
    title: "Mjolnir",
    subject: "Design and Implementation",
    description:
      "Potter ipsum wand elf parchment wingardium. Trace hedwig seven expecto scales.",
    link: "https://mjolnir.ainurhq.cloud",
  },
  {
    cover: AinurCover,
    title: "Ainur",
    subject: "Prototyping and Design",
    description:
      "Potter ipsum wand elf parchment wingardium. Trace hedwig seven expecto scales.",
    link: "https://link-to-project-2.com",
  },
  {
    cover: JetonCover,
    title: "Jeton",
    subject: "Design and Implementation",
    description:
      "Potter ipsum wand elf parchment wingardium. Trace hedwig seven expecto scales.",
    link: "https://jeton.pages.dev/",
  },
];
