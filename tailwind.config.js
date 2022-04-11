module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  media: false,
  theme: {
    colors:{'primary-orange':'#DD4F05',
  'primary-black':'#282828',
'primary-white':'#ffffff',
'secondary-white':'#F5F5F5',
'primary-red':"#D50000",
'footer-black':'#1B1B1B'
},
  fontSize:{
   '3tl':'28px',
   '1tl':'16px',
   '2tl':'14px'
  },
  fontWeight:{
    'extrabold':900,
    'light':300
  },
  screens: {
    'sm': '640px',

      'md': '768px',
      

      'lg': '1024px',
      

      'xl': '1280px',
      
      '2xl': '1536px',
    
  },
  fontFamily:{
    "Mulish":['Mulish','sans-serif']
  },
    extend: {}
  },
  plugins: [],
}
