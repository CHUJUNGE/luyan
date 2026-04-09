/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        bg: {
          primary: '#FFFDF8',
          secondary: '#EAF8F3',
          tertiary: '#EAF4FF',
        },
        accent: {
          blue: '#7CB7FF',
          green: '#8DDFC3',
          orange: '#FFC97A',
          light: '#5BA8FF',
        },
        neutral: {
          400: '#6E7A8F',
          300: '#4A5568',
          100: '#2F3A4F',
        },
        card: {
          white: '#FFFFFF',
        },
        glow: {
          cyan: '#8DDFC3',
          mist: '#EAF4FF',
        },
      },
      fontFamily: {
        sans: ['"Noto Sans SC"', 'Inter', 'system-ui', 'sans-serif'],
      },
      backgroundImage: {
        'radial-glow': 'radial-gradient(ellipse at 50% 0%, rgba(124,183,255,0.12) 0%, transparent 70%)',
        'card-glass': 'linear-gradient(135deg, rgba(255,255,255,0.9) 0%, rgba(255,255,255,0.7) 100%)',
      },
    },
  },
  plugins: [],
}
