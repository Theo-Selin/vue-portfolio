/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue, js}"
  ],
  theme: {
    extend: {
      animation: {
        'fast-pulse': 'pulse .8s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
      keyframes: {
        pulse: {
          '0%, 100%': { opacity: 1 },
          '50%': { opacity: .3 },
        }
      }
    },
  },
  plugins: [],
}
