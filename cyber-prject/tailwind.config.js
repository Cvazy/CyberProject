/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./dynamicClasses.js"],
  theme: {
    extend: {
      spacing: {
        11: "0.6875rem", // 11px
        19: "1.1875rem", // 19px
        40: "2.5rem", // 40px
        48: "3rem", // 48px
        56: "3.5rem", // 56px
      },
      boxShadow: {
        custom: "15px 15px 35px black",
      },
    },
  },
  plugins: [],
};
