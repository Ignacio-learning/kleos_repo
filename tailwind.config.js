/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        dark: '#1E2D3D',
        cream: '#F5F0E8',
        footer: '#111C26',
        gold: '#C9A84C',
        'gold-dark': '#A07830',
        olive: '#8A9A5B',
        'text-light': '#EDE8DC',
        'text-muted': '#9BA8A0',
        'text-main': '#1C1C1A',
      },
      fontFamily: {
        display: ['"Cormorant Garamond"', 'serif'],
        cormorant: ['"Cormorant Garamond"', 'serif'],
        sans: ['"DM Sans"', 'sans-serif'],
      },
      backgroundImage: {
        'meander': "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='40' height='40'%3E%3Cpath d='M0 20h10v10H0V20zm10-10h10v10H10V10zm10 10h10v-10H20v10zm10 10h10V20H30v10z' fill='none' stroke='%23C9A84C' stroke-width='1'/%3E%3C/svg%3E\")",
      },
    },
  },
  plugins: [],
}
