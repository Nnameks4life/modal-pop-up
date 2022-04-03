module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  media: false,
  theme: {
    colors:{'primary-orange':'#DD4F05',
  'primary-black':'#282828',
'primary-white':'#ffffff',
'secondary-white':'#F5F5F5',
},
  fontSize:{
   '3tl':'32px',
   '1tl':'16px'
  },
  fontWeight:{
    'extrabold':800,
    'light':300
  },
  screens: {
    'sm': '640px',

      'md': '768px',
      

      'lg': '1024px',
      

      'xl': '1280px',
      
      '2xl': '1536px',
    
  },
    extend: {}
  },
  plugins: [],
}
