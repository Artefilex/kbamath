/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      dropShadow:{
        "dark" : [
          '0 25px 25px rgb(255, 255, 255, 0.01)',
          '0 25px 25px rgb(255, 255, 255, 0.10 )'
        ]
        ,
        "light": [
          '0 25px 25px rgba(0, 0, 0, 0.35)',
          '0 25px 25px rgba(0, 0, 0, 0.25)'
      ],
      "text" : [
        '1px 1px 2px rgba(0, 0, 0, 1)'
      ]
      },
      rotate:{
        "50": "50deg",
        "55": "56deg"
      }
      ,
      colors:{
          "blog-bg" : " rgba(125, 236, 255, 0.34)"
          
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

