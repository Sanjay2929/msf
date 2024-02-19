/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        darkBlack: "#101010",
        orange: "#CD530F",
        bluePrimary: "#192335",
        lightGray: "#F4F4F5",
        extraLightBlue: "#E7EFF4",
        lightBlue: "#9BBCD0",
        lightOrange: "#CD520F0A",
      },
      backgroundImage: {
        "court-hammer":
          "url('/assets/images/sexual-abuse/court-hammer-bg.webp')",
        reception: "url('/assets/images/sexual-abuse/reception.webp')",
        "court-hammer2":
          "url('/assets/images/sexual-abuse/court-hammer-bg-2.webp')",
        "black-and-white":
          "linear-gradient(0deg, rgba(16,16,16,1) 50%, rgba(255,255,255,1) 50%)",
      },
    },
  },
  plugins: [],
};
