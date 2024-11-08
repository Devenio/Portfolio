import { Section, SectionWithIndex } from "./types";
import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function generateUniqueTitleSections(
  sections: Section[]
): SectionWithIndex[] {
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

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
