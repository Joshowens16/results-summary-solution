/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend:
    {
      colors: {
        'reaction-red': '#ff5757',
        'memory-yellow': '#ffb01f',
        'verbal-green': '#00bd91',
        'visual-blue': '#1125d4',
      }
    },
  },
  plugins: [],
}
