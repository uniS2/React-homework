/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.jsx"],
  theme: {
    extend: {
      colors: {
        transparent: "transparent",
        yellow: "#FFBC00",
        black: "#222222",
        gray_1: "#EEEEEE",
        gray_2: "#7A7A7A",
        background: "#f7f7f7",
        Footer: "#999999",
      },
    },
  },
  plugins: [],
};
