/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens:{
        sm: "500px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",

      // custom 
      tablet: "840px",
      laptop: "1200px",
      desktop: "1400px",
    },
    extend: {
      fontFamily: {
        Syne : ["Syne Tactile", "system-ui"],
        Roboto: ["Roboto", "sans-serif"],
      },
    },
  },
  plugins: [],
}