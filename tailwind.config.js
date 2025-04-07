/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: '#FF6600',
        secondary: '#535bf2',
      },
      fontSize: {
        xxs: "0.625rem", // 10px
      },
    },
  },
  plugins: [],
}

