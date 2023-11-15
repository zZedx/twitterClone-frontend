/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        secondary: "rgb(22, 24, 28)",
        brand: "#1a8cd8",
        brandDisabled : "#0f4e78"
      },
      boxShadow: {
        // shadowMain: "3px 3px 10px rgba(255, 255, 255, 0.3), -3px -3px 10px rgba(255, 255, 255, 0.6)",
      },
    },
  },
  plugins: [],
};

