/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        gold: {
          50: '#fbf8ee',
          100: '#f6eed6',
          200: '#edd9a8',
          300: '#e3be75',
          400: '#d9a244',
          500: '#c58522',
          600: '#a7651a',
          700: '#844a17',
          800: '#6d3c19',
          900: '#5c3318',
          goldLight: '#f6dd9f',
          goldDark: '#8c5e15',
        },
        luxury: {
          bg: '#0c0906',
          dark: '#110d09',
          card: '#18120b',
          cardHover: '#22190f',
          surface: '#1c150e',
          border: 'rgba(217, 162, 68, 0.22)',
          borderGlow: 'rgba(217, 162, 68, 0.65)',
        }
      },
      fontFamily: {
        serif: ['"Playfair Display"', '"Cinzel"', 'Georgia', 'serif'],
        sans: ['"Montserrat"', '"Inter"', 'system-ui', 'sans-serif'],
      },
      backgroundImage: {
        'gold-gradient': 'linear-gradient(135deg, #f6dd9f 0%, #d4a34b 50%, #9e6d19 100%)',
        'gold-gradient-hover': 'linear-gradient(135deg, #fff2cc 0%, #e2b45a 50%, #b27e22 100%)',
        'gold-subtle': 'linear-gradient(180deg, rgba(212, 163, 75, 0.12) 0%, rgba(212, 163, 75, 0.02) 100%)',
        'dark-radial': 'radial-gradient(circle at 50% 20%, #2a1c0d 0%, #0d0906 70%)',
      },
      boxShadow: {
        'gold-glow': '0 0 25px -5px rgba(212, 163, 75, 0.35)',
        'gold-glow-lg': '0 0 45px -5px rgba(212, 163, 75, 0.5)',
      }
    },
  },
  plugins: [],
};
