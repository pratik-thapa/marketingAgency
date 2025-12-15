/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Your Custom Brand Colors are back!

        button: "#ff0ab6",
        lightbutton: "#FFAA83",
        dark: "#0A0118",

        consulting: {
          slate: "#334155",
          gold: "#fbbf24",
        },
      },
    },
  },
  plugins: [],
};
