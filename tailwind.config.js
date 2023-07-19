/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{html,js}"],
  theme: {
    extend: {
      backgroundImage: {
        "hero-desktop": "url('/desktop.jpg')",
        "hero-tablet": "url('/tablet.jpg')",
        "hero-mobile": "url('/mobile.jpg')",
      },
    },
  },
  plugins: [],
};
