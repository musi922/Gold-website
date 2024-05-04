/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["public/index.html"],
    theme: {
      extend: {colors: {
        redish: '#c30a17',
        gold: "#ff5800"
        
      },
    width:{
      
        width: "100%"
    },
  height:{
    height: "100vh",
  }
  ,backgroundColor:{
    redish: '#c30a17',
    grayi: "#f6f7f7"
  }
}, scale:{
    200:"2",
    250: "2.5"
},
    },
    plugins: [],
  }
  