/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{html,js}"],
  theme: {
    extend: {
      boxShadow: {
        "5xl": "rgba(0,0,0,0.7) 0px 22px 70px 4px",
      },
    },
  },
  plugins: [],
};
