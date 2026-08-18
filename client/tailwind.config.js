/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#0f766e',
        accent: '#f59e0b',
        ink: '#0f172a',
        paper: '#f8fafc',
      },
    },
  },
  plugins: [],
}
