module.exports = {
  content: ['index.html'],
  darkMode: 'class',
  theme: {
    container: {
      center: true,
      padding: '16px',
    },
    extend: {
      fontFamily: {
        montserrat: ['montserrat', 'sans'], // Ganti "Nama Font" dengan nama font yang Anda pilih
        poppins: ['poppins', 'sans'],
      },
      colors: {
        bgdark: '#0b0e2f',
        bgbiru: '#64428e',
        aksen1: '#44a1fe',
        aksen2: '#14c2f7',
        biru: '#3f5bfa',
        primary: '#ffffff',
        secondary: '#777777',
        textdark: '#0f172a',
        card1: '#64428e',
        card2: '#2b417a',
        mail1: '#f62a4b',
        mail2: '#ff5800',
        wa1: '#b5cf47',
        wa2: '#e0de20',
        fb1: '#5a71be',
        fb2: '#2fbee1',
        ig1: '#d42374',
        ig2: '#f62a4b',
        tw1: '#2fbee1',
        tw2: '#17eef5',
        dc1: '#7749ac',
        dc2: '#5a71be',

      },
      screens: {
        '2xl': '1320px',
      },
    },
  },
  plugins: [],
};