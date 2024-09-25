/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'selector',
  content: [
    "./index.html",
    "./src/**/*.{svelte,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'my-light': '#FDFDFD',
        'my-dark': '#1E1E1E',
      },
    },
  },
  plugins: [],
}

