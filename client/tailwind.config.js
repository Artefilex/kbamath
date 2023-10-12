/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      boxShadow:{
        "custom-box-shadow": "var(--box-shadow)"
      }
    },
    screens: {
      'mobile': "600px",
      'tablet': "640px",
      'laptop': '1024px',
      'deskop': '1280px'
    },
    
  },
  plugins: [],
}

