/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#6B46C1", // Seu roxo
        secondary: "#2DD4BF", // Seu verde-água
      }
    },
  },
  plugins: [],
}