/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{html,js}"],
  theme: {
    extend: {
      backgroundImage: {
        desktop: "url('/desktop.jpg')",
        tablet: "url('/tablet.jpg')",
        mobile: "url('/mobile.jpg')",
      },
    },
  },
  plugins: [],
};
