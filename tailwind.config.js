/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./public/index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        info: 'var(--info)',
        light: 'var(--light)',
        danger: 'var(--danger)',
        'white-bis': 'var(--white-bis)',
        'grey-dark': 'var(--grey-dark)',
      },
    },
  },
  plugins: [],
};
