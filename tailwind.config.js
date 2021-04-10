const plugin = require("tailwindcss/plugin");

module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily: {
      sans: ["Open Sans", "system-ui", "sans-serif"],
      display: ["Montserrat", "Georgia", "serif"],
      mono: ["FiraCode", "ui-monospace"],
    },
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [
    plugin(function ({ addUtilities }) {
      const newUtilities = {
        ".aspect-none": {
          aspectRatio: "none",
        },
        ".aspect-16-9": {
          aspectRatio: "16/9",
        },
        ".aspect-4-3": {
          aspectRatio: "4/3",
        },
        ".aspect-1-1": {
          aspectRatio: "1/1",
        },
      };

      addUtilities(newUtilities, ["responsive", "hover"]);
    }),
  ],
};
