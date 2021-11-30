module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily: {
      'rubik': ['Rubik']
    },
    extend: {
      colors: {
        azul: {
          base: 'hsl(246, 80%, 60%)',
          bluePlay: 'hsl(195, 74%, 62%)',
          veryDarkBlue: 'hsl(226, 43%, 10%)',
          darkBlue: 'hsl(235, 46%, 20%)',
          paleBlue: 'hsl(236, 100%, 87%)',
          desaturado: 'hsl(235, 45%, 61%)',
        },
        vermelho: {
          redWork: 'hsl(15, 100%, 70%)',
          redStudy: 'hsl(348, 100%, 68%)',
        },
        exercicio: {
          green: 'hsl(145, 58%, 55%)',
        },
        social70: {
          violet: 'hsl(264, 64%, 52%)',
        },
        selfcare70: {
          orange: 'hsl(43, 84%, 65%)',
        },
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
