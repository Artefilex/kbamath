/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
          "blog-bg" : " rgba(125, 236, 255, 0.34) "
      },
      boxShadow:{
        "custom-box-shadow": "var(--box-shadow)"
      }
    },
    screens: {
      "smobile": "400px",
      'mobile': "600px",
      'tablet': "700px",
      "xtablet": "900px",
      'laptop': '1024px',
      'deskop': '1280px'
    },
    
  },
  plugins: [],
}

