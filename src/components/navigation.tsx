"use client";

import { useSection, sections } from "@/lib/providers/SectionProvider";

export default function Navigation() {
  const { sectionIndex, setSectionIndex } = useSection();

  return (
    <div className="fixed top-14 z-10 right-14 transition-colors items-start delay-300 flex flex-col gap-4">
      {sections.map((section, i) => (
        <button
          key={section.title}
          type="button"
          onClick={() => setSectionIndex(i)}
          className={`transition-colors duration-300 ${
            sectionIndex === i ? "font-bold" : ""
          }`}
        >
          {section.title}
        </button>
      ))}
    </div>
  );
}
