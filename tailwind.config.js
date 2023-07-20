/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{html,js}"],
  theme: {
    extend: {
      boxShadow: {
        "5xl": "rgba(0,0,0,1) 0px 22px 70px 40px",
      },
      backgroundImage: {
        desktop: "url('/desktop.jpg')",
        tablet: "url('/tablet.jpg')",
        mobile: "url('/mobile.jpg')",
      },
    },
  },
  plugins: [],
};
