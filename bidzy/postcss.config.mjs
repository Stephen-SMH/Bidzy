// postcss.config.mjs
export default {
    plugins: {
      // OLD: tailwindcss: {},
      // NEW:
      '@tailwindcss/postcss': {}, // <-- Change this line
      autoprefixer: {},
    },
  };