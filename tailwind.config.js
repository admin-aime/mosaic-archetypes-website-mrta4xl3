/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'mosaic-gold': '#a67718',
        'mosaic-black': '#000000',
        'mosaic-white': '#ffffff',
      },
      fontFamily: {
        header: ['"Adobe Jenson Pro"', 'Georgia', 'serif'],
        subheader: ['Montserrat', 'sans-serif'],
        body: ['Montserrat', 'sans-serif'],
      },
      backgroundImage: {
        'header-gradient': 'linear-gradient(to bottom, rgba(0,0,0,0.8), rgba(0,0,0,0.4))',
      },
    },
  },
  plugins: [],
}
