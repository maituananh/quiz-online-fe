/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/primereact/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        logo: "url('assets/imgs/logo.jpg')",
        // "banner-freeship": "url('assets/img/Freeship_t5_310x210.webp')",
        // "menu-first": "url('assets/img/Icon_0505_120x120_1.webp')",
        // suggestion: "url('assets/img/banner_personalization.webp')",
        // "item-image": "url('assets/img/item-image.jpg')",
        // "flash-sale-image":
        //   "url('assets/img/flash_sale_background_image.webp')",
        // "badge-percent": "url('assets/icons/badge-percent.svg')",
      },

      colors: {
        // "red-201": "rgb(201, 32, 38)",
        // "red-212": "rgb(212, 63, 96)",
        // "orange-235": "rgb(235, 92, 21)",
        // "blue-201": "rgb(201, 240, 255)",
        // modal: "rgba(0, 0, 0, 0.3)",
        // "while-blue": "rgb(250, 252, 255)",
      },

      width: {
        // 123: "123px",
        // 232: "232px",
        // 310: "310px",
        // 584: "584px",
        // 1230: "1230px",
        // container: "1230px",
      },

      height: {
        // 336: "336px",
        // 340: "340px",
      },

      backgroundColor: {
        // "while-240": "rgb(240, 240, 240)",
      },
    },
  },
  plugins: [],
  important: false,
};
