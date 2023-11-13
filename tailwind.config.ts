import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: ["./src/components/**/*.{js,ts,jsx,tsx,mdx}", "./src/app/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        "dark-primary": "#27272B",
        "dark-secondary": "#2C2C31",
        "dark-tertiary": "#36363A",
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
export default config;
