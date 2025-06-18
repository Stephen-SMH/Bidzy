// postcss.config.js
module.exports = {
    plugins: {
      // OLD: tailwindcss: {},
      // NEW:
      '@tailwindcss/postcss': {}, // <-- Change this line
      autoprefixer: {},
    },
  };