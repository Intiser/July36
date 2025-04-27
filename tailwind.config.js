/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#FF0000',
          50: '#FFEBEB',
          100: '#FFD7D7',
          200: '#FFAFAF',
          300: '#FF8787',
          400: '#FF5F5F',
          500: '#FF0000',
          600: '#CC0000',
          700: '#990000',
          800: '#660000',
          900: '#330000',
          950: '#1A0000',
        },
        neutral: {
          DEFAULT: '#000000',
          50: '#F2F2F2',
          100: '#E6E6E6',
          200: '#CCCCCC',
          300: '#B3B3B3',
          400: '#999999',
          500: '#808080',
          600: '#666666',
          700: '#4D4D4D',
          800: '#333333',
          900: '#1A1A1A',
          950: '#0D0D0D',
        }
      },
      fontFamily: {
        'bengali': ['SolaimanLipi', 'Nikosh', 'sans-serif'],
        'sans': ['Poppins', 'system-ui', 'sans-serif'],
        'display': ['Oswald', 'system-ui', 'sans-serif'],
      },
      spacing: {
        '128': '32rem',
        '144': '36rem',
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in-out',
        'slide-up': 'slideUp 0.5s ease-in-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
      },
      transitionTimingFunction: {
        'protest': 'cubic-bezier(0.25, 0.8, 0.25, 1)',
      },
    },
  },
  plugins: [],
}