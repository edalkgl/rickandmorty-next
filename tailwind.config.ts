import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    container: {
      center: true,
      screens: {
        lg: "1140px",
      },
    },
    extend: {
      colors: {
        base: {
          black: "#000",
          white: "#fff",
          brand: "#000",
          transparent: "transparent",
        },
      },
    },
  },
  plugins: [],
};

export default config;
