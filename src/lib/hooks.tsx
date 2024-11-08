"use client";

import { useContext } from "react";
import { SectionContext } from "./providers/SectionProvider";

export const useSection = () => {
  const context = useContext(SectionContext);
  if (!context) {
    throw new Error("useSection must be used within a SectionProvider");
  }
  return context;
};
