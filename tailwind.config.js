/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      boxShadow: {
        neon: '0 0 25px rgba(56, 189, 248, 0.6), 0 0 60px rgba(147, 51, 234, 0.35)',
      },
      keyframes: {
        pulseSmoke: {
          '0%, 100%': { transform: 'scale(1)', opacity: '0.24' },
          '50%': { transform: 'scale(1.2)', opacity: '0.06' },
        },
      },
      animation: {
        pulseSmoke: 'pulseSmoke 2s ease-in-out infinite',
      },
    },
  },
  plugins: [],
};
