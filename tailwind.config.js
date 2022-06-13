module.exports = {
   content: ["./**/*.html"],
   darkMode: "class",
   theme: {
      extend: {
         colors: {
            Gunmetal: "#243441",
            "Cadmium-Orange": "#ed7f2d",
            "Yankees-Blue": "#202f3b",
            "Bright-Gray": "#EBEBEB",
         },
         boxShadow: {
            "neumorphism-dark": "5px 5px 10px #1d2a34,-5px -5px 10px #2b3e4e",
            "neumorphism-light":
               "5px 5px 10px #bcbcbc, -5px -5px 10px #ffffff;",
         },
         fontFamily: {
            poppins: "Poppins, 'sans-serif'",
         },
      },
   },
   plugins: [],
};
