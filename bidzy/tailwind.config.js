// tailwind.config.js
module.exports = {
    content: [
      "./app/**/*.{js,ts,jsx,tsx,mdx}", // For App Router
      "./pages/**/*.{js,ts,jsx,tsx,mdx}", // For Pages Router
      "./components/**/*.{js,ts,jsx,tsx,mdx}",
      "./src/**/*.{js,ts,jsx,tsx}",   
      // Add any other directories where you use Tailwind classes
    ],
    theme: {
      extend: {},
    },
    plugins: [],
  };