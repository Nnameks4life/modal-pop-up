module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  media: false,
  theme: {
    colors:{'primary-orange':'#DD4F05',
  'primary-black':'#282828',
'primary-white':'#ffffff',
'dull-white':'#E5E5E5',
'secondary-white':'#F5F5F5',
'primary-red':"#D50000",
'footer-black':'#1B1B1B',
'dull-black':'#8692A6',
'primary-blue':'#0083D3'

},
  fontSize:{
   '3tl':'28px',
   '1tl':'17px',
   '4tl':'22px',
   '2tl':'14px'
   
  },
  fontWeight:{
    'extrabold':900,
    'xbold':700,
    'bold':500,
    'light':400
  },
  screens: {
    'sm': '640px',

      'md': '748px',
      

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
