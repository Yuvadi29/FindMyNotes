/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      spacing: {
        heightWithoutNavbar: "calc(100vh - 60px)",
      },
      backgroundImage: {
        unsplashBgImage: "url('/img/bgImg.jpg')",
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
