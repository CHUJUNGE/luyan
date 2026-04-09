/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        bg: {
          primary: '#0B0F17',
          secondary: '#101826',
        },
        accent: {
          blue: '#4F72C9',
          light: '#6EA8FF',
        },
        neutral: {
          400: '#A9B8C8',
          300: '#C9D3DD',
          100: '#EEF3F8',
        },
        glow: {
          cyan: '#8FD6FF',
          mist: '#B8BFD9',
        },
      },
      fontFamily: {
        sans: ['"Noto Sans SC"', 'Inter', 'system-ui', 'sans-serif'],
      },
      backgroundImage: {
        'radial-glow': 'radial-gradient(ellipse at 50% 0%, rgba(79,114,201,0.18) 0%, transparent 70%)',
        'card-glass': 'linear-gradient(135deg, rgba(255,255,255,0.04) 0%, rgba(255,255,255,0.01) 100%)',
      },
    },
  },
  plugins: [],
}
