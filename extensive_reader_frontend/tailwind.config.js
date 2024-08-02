/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        dark: {
          primary: '#1E1E1E', // Your dark primary color
          secondary: '#333333', // Your dark secondary color
          background: '#121212', // Your dark background color
        },
        'gray-800': '#2d3748',
        'yellow-500': '#ecc94b',
        'purple-400': '#9f7aea',
        'blue-400': '#4299e1',
        'purple-200': '#e9d8fd',
        'purple-700': '#6b46c1',
        'red-500': '#f56565',
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
};
