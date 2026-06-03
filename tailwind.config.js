/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sora: ['Sora', 'sans-serif'],
        inter: ['Inter', 'sans-serif'],
      },
      colors: {
        brand: {
          dark: '#2b2118',
          cream: '#c8b89e',
          blue: '#2f4057',
          gold: '#b99663',
        },
      },
    },
  },
  plugins: [],
}
