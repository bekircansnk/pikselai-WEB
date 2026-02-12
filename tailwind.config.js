/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Superside'dan ilham alınan renk paleti
        'bor-background': 'var(--bor-background)',
        'bor-foreground': 'var(--bor-foreground)',
        'bor-primary': {
          DEFAULT: 'var(--bor-primary-default)',
          100: 'var(--bor-primary-100)',
          200: 'var(--bor-primary-200)',
          300: 'var(--bor-primary-300)',
          400: 'var(--bor-primary-400)',
          500: 'var(--bor-primary-500)',
          600: 'var(--bor-primary-600)',
          700: 'var(--bor-primary-700)',
          800: 'var(--bor-primary-800)',
          900: 'var(--bor-primary-900)',
        },
        'bor-secondary': {
            DEFAULT: 'var(--bor-secondary-default)',
        },
        'bor-accent': 'var(--bor-accent)',
        'glass': {
            bg: 'var(--glass-bg)',
            border: 'var(--glass-border)',
        }
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        serif: ['Instrument Serif', 'serif'],
        display: ['Outfit', 'sans-serif'],
      },
      spacing: {
        'header-height': 'var(--header-height)',
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in-out forwards',
        'slide-up': 'slideUp 0.5s ease-out forwards',
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
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
      }
    },
  },
  plugins: [],
}
