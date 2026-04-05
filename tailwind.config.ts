import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        brand: {
          red: "#C41E3A",
          "red-dark": "#9B1530",
          yellow: "#F5A623",
          "yellow-light": "#FFD166",
          black: "#0D0D0D",
          "gray-dark": "#1A1A1A",
          "gray-mid": "#2A2A2A",
          "gray-light": "#F5F5F0",
        },
      },
      fontFamily: {
        display: ["'Bebas Neue'", "cursive"],
        heading: ["'Oswald'", "sans-serif"],
        body: ["'DM Sans'", "sans-serif"],
      },
    },
  },
  plugins: [],
};
export default config;
