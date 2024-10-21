import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        theme: {
          1: "var(--theme-1)",
          2: "var(--theme-2)",
          3: "var(--theme-3)",
          4: "var(--theme-4)",
          5: "var(--theme-5)",
        },
      },
    },
  },
  plugins: [],
};
export default config;
