/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'inter': ['Inter', 'sans-serif'],
      },
      colors: {
        'dark-bg': '#0a0a0a',
        'dark-card': 'rgba(23, 23, 23, 0.8)',
        'dark-border': 'rgba(63, 63, 70, 0.5)',
        'text-primary': '#ffffff',
        'text-secondary': '#a1a1aa',
        'accent-blue': '#0ea5e9',
        'success-green': '#22c55e',
      },
      spacing: {
        '15': '3.75rem',
        '18': '4.5rem',
        '75': '18.75rem',
      },
      backdropBlur: {
        '10': '10px',
      },
      animation: {
        'blink': 'blink 1s infinite',
      },
      keyframes: {
        blink: {
          '0%, 50%': { opacity: '1' },
          '51%, 100%': { opacity: '0' },
        },
      },
    },
  },
  plugins: [],
}
