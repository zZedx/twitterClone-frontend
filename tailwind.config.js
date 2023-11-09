/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        secondary: "#181818",
        brand: "#1a8cd8",
        brandDisabled : "0f4e78"
      },
    },
  },
  plugins: [],
};
