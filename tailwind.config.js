/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        ink: {
          DEFAULT: '#FFFFFF',
          surface: '#F8FAFC',
          line: '#E2E8F0',
        },
        signal: {
          violet: '#2563EB',
          amber: '#D97706',
        },
        fog: '#475569',
        paper: '#0F172A',
      },
      fontFamily: {
        display: ['Outfit', 'Montserrat', 'sans-serif'],
        body: ['Outfit', 'Montserrat', 'sans-serif'],
        sans: ['Outfit', 'Montserrat', 'sans-serif'],
        montserrat: ['Outfit', 'Montserrat', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
      },
      backgroundImage: {
        'grid-fade': 'linear-gradient(180deg, rgba(37,99,235,0.05) 0%, rgba(255,255,255,0) 60%)',
      },
      keyframes: {
        stackUp: {
          '0%': { transform: 'translateY(24px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        pulseLine: {
          '0%, 100%': { opacity: '0.35' },
          '50%': { opacity: '1' },
        },
      },
      animation: {
        'stack-up': 'stackUp 0.7s cubic-bezier(0.16,1,0.3,1) both',
        'pulse-line': 'pulseLine 2.4s ease-in-out infinite',
      },
    },
  },
  plugins: [],
}
