/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#2E4036", // Mousse
        accent: "#CC5833", // Argile
        background: "#F2F0E9", // Crème
        dark: "#1A1A1A", // Charbon
      },
      fontFamily: {
        title: ['"Plus Jakarta Sans"', '"Outfit"', 'sans-serif'],
        dramatic: ['"Cormorant Garamond"', 'serif'],
        data: ['"IBM Plex Mono"', 'monospace'],
        body: ['"Outfit"', 'sans-serif'],
      }
    },
  },
  plugins: [],
}
