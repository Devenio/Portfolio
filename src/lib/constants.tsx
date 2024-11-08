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
  {
    content: <div className="text-theme-primary">Under construction :)</div>,
    title: "Experiences",
  },
  {
    content: <div className="text-theme-primary">Under construction :)</div>,
    title: "Contact",
  },
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
      "Mjolnir is a platform forged in the spirit of Norse mythology, where the power of creation is placed in your hands. It's built with Svelte.",
    link: "https://mjolnir.ainurhq.cloud",
  },
  {
    cover: AinurCover,
    title: "Ainur",
    subject: "Prototyping and Design",
    description:
      "Ainur is a Constancy agency that help startups and companies implement ideas and grow their businesses. This is a prototype for its landing page design.",
    link: "https://www.figma.com/design/41igncAoFURohk6jIghEeu/Ainurhq-cloud?node-id=1-2&t=UmYufqh5Q4brfsWl-1",
  },
  {
    cover: JetonCover,
    title: "Jeton",
    subject: "Design and Implementation",
    description:
      "Aptos Code Collision Hackathon Winner, Jeton is a decentralized poker platform designed to ensure fairness and transparency in online poker games. Built on the Aptos blockchain and for the web app built with Nextjs. ",
    link: "https://jeton.pages.dev/",
  },
];
