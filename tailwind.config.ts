import type { Config } from "tailwindcss";

export default {
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

        "primary-extra-light": "#FAFFFB",
        "primary-light": "#D7F5DC",
        "primary-pure": "#19BD5F",
        "primary-dark": "#0DAC51",
        "low-pure": "#000000",
        "low-medium": "#1E1E1E",
        "low-light": "#c4c4c4",
        "high-pure": "#FFFFFF",
      },
    },
  },
  plugins: [],
} satisfies Config;
