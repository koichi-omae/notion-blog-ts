module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    backgroundImage: (theme) => ({
      'about-pattern': "url('/introduction/bg-hero.png')",
    }),
    extend: {
      listStyleType: {
        disc: 'disc',
        decimal: 'decimal',
        square: 'square',
        roman: 'upper-roman',
      },
      colors: {
        'primary-base': '#06bbbc',
        'primary-dark': '#008c8b',
        'primary-black': '#262c3a',
        'primary-gray': '#C0C0C0',
      },
    },
  },
  plugins: [],
};
