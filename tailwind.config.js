/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        Syne : ["Syne Tactile", "system-ui"],
        Roboto: ["Roboto", "sans-serif"],
      },
    },
  },
  plugins: [],
}