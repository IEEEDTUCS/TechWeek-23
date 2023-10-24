module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    screens:{
      'mmd':{'max':'800px'},
      'sm':{'min':'587px'},
      'msm':{'max':'587px'},
      'ssm':{'max':'400px'},
      'sl':{'min':'900px'},
      'sml':{'max':'899px'}
    },
    extend: {
      fontFamily: {
        nunito: ['Nunito'],
        poppins: ['Poppins'],
        raleway: ['Raleway'],
        prompt: ['Prompt'],
        inter: ['Inter'],
        spaceMono: ['Space Mono'],
      }
    },
  },
  plugins: [
    require('tailwind-scrollbar-hide'),
  ],
}