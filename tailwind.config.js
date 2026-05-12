/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,jsx,ts,tsx}',
    './components/**/*.{js,jsx,ts,tsx}',
    './pages/**/*.{js,jsx,ts,tsx}',
    './src/**/*.{js,jsx,ts,tsx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: '#0EA5E9', // Ocean Blue
        accent: '#F59E0B', // Saffron Gold
        darkBg: '#0F172A',
        cardBg: '#1E293B',
        success: '#10B981',
        danger: '#EF4444',
        textLight: '#F8FAFC',
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        arabic: ['Cairo', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
