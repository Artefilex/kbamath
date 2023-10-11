/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    screens: {
      'mobile': "500px",
      'tablet': "640px",
      'laptop': '1024px',
      'deskop': '1280px'
    }
  },
  plugins: [],
}

