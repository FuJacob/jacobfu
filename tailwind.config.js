/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'selector',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      // This overwrites all default fonts
      'manrope': ['Manrope', 'sans-serif'],
      // Or extend existing fonts
    },
  },
  plugins: [],
}