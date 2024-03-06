/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      screens: {
        xss: "320px",
        xsi: "375px",
        xs: "425px",
        sm: "640px", // Small screens
        md: "768px", // Medium screens
        lg: "1024px", // Large screens
        xl: "1280px", // Extra large screens
        xxl: "1536px", // 2x large screens
      },
    },
  },
  plugins: [],
  darkMode:"class",
};
