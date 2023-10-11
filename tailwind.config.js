/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        medium: { max: "768px" },
        small: { max: "425px" },
      },
    },
  },
  plugins: [],
}

// medium 769 to 1440

// small 320 to 768