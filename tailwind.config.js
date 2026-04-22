/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        bg: '#F5F0E8',
        'bg-card': '#FDFAF4',
        'green-dark': '#2D4A22',
        'green-mid': '#4A6B35',
        'green-light': '#8BA870',
        'text-main': '#1C1C1A',
        'text-body': '#4A4A42',
        'text-muted': '#8A8A7A',
        border: '#E0D9C8',
        gold: '#C9A84C',
      },
      fontFamily: {
        display: ['"Playfair Display"', 'serif'],
        cormorant: ['"Cormorant Garamond"', 'serif'],
        sans: ['"DM Sans"', 'sans-serif'],
        mono: ['"DM Mono"', 'monospace'],
      },
    },
  },
  plugins: [],
}
