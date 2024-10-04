// /** @type {import('tailwindcss').Config} */
// module.exports = {
//   content: [
//     "./app/**/*.{js,ts,jsx,tsx,mdx}",
//     "./pages/**/*.{js,ts,jsx,tsx,mdx}",
//     "./components/**/*.{js,ts,jsx,tsx,mdx}",

//     // Or if using `src` directory:
//     "./src/**/*.{js,ts,jsx,tsx,mdx}",
//   ],
//   theme: {
//     extend: {},
//   },
//   plugins: [],
// };

const { default: flattenColorPalette } = require("tailwindcss/lib/util/flattenColorPalette");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}", // If you have any pages
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}", // Components
    "./src/hooks/**/*.{js,ts,jsx,tsx,mdx}", // Hooks
    "./src/lib/**/*.{js,ts,jsx,tsx,mdx}", // Library files
    "./src/**/*.{js,ts,jsx,tsx,mdx}", // Catch-all for src directory
  ],
  darkMode: "class", // Enable dark mode with class strategy
  theme: {
    extend: {}, // Extend the theme here if needed
  },
  plugins: [addVariablesForColors], // Include the custom plugin
};

// This plugin adds each Tailwind color as a global CSS variable, e.g. var(--gray-200).
function addVariablesForColors({ addBase, theme }) {
  let allColors = flattenColorPalette(theme("colors"));
  let newVars = Object.fromEntries(
    Object.entries(allColors).map(([key, val]) => [`--${key}`, val])
  );

  addBase({
    ":root": newVars, // Adds CSS variables to the root
  });
}
