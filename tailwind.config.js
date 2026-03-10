/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        rust: {
          DEFAULT: '#C8451A',
          light: '#D94F22',
          dark: '#A83815',
        },
        amber: '#E8890C',
        steel: {
          50: '#F9FAFB',
          100: '#F3F4F6',
          200: '#E5E7EB',
          300: '#D1D5DB',
          400: '#9CA3AF',
          500: '#6B7280',
          600: '#4B5563',
          700: '#374151',
          800: '#252A30',
          900: '#1C1F24',
          950: '#111214',
          1000: '#0A0A0A',
        }
      },
      fontFamily: {
        display: ['var(--font-barlow-condensed)', 'sans-serif'],
        body: ['var(--font-barlow)', 'sans-serif'],
      },
      backgroundImage: {
        'industrial-lines': "repeating-linear-gradient(-55deg, transparent, transparent 60px, rgba(200,69,26,0.03) 60px, rgba(200,69,26,0.03) 61px)",
      },
      animation: {
        'ticker': 'ticker 35s linear infinite',
        'fade-up': 'fadeUp 0.7s ease forwards',
        'pulse-dot': 'pulseDot 2s ease-in-out infinite',
      },
      keyframes: {
        ticker: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        fadeUp: {
          from: { opacity: '0', transform: 'translateY(24px)' },
          to: { opacity: '1', transform: 'translateY(0)' },
        },
        pulseDot: {
          '0%, 100%': { opacity: '1', transform: 'scale(1)' },
          '50%': { opacity: '0.4', transform: 'scale(0.8)' },
        }
      }
    },
  },
  plugins: [],
}
