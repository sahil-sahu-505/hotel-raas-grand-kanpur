/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#B8860B',      // Dark Goldenrod - Luxury gold
        secondary: '#8B4513',    // Saddle Brown - Rich brown
        accent: '#DAA520',       // Goldenrod - Bright gold
        dark: '#1A1A1A',         // Almost black
        cream: '#FFF8DC',        // Cornsilk - Cream
      },
      fontFamily: {
        serif: ['Playfair Display', 'serif'],
        sans: ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
