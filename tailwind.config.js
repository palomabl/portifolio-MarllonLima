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
        cormorant: ['Cormorant Garamond', 'serif'],
      },
      colors: {
        brand: {
          hero: '#1C130F',
          section: '#241A14',
          card: '#2B2118',
          hover: '#3A2A22',
          text: '#EFE6D8',
          secondary: '#C8B89E',
          gold: '#B99663',
          accent: '#7A3F2E',
        },
      },
    },
  },
  plugins: [],
}
