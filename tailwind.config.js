/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{html,js}"],
  theme: {
    extend: {
      backgroundImage: {
        "hero-desktop": "url('/desktop.jpeg')",
        "hero-mobile": "url('/mobile.jpeg')",
      },
    },
  },
  plugins: [],
};
