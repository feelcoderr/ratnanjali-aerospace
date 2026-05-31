/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        // Dark surfaces
        ink: '#0a0c10',
        'ink-2': '#0d0f14',
        panel: '#14161d',
        'panel-2': '#181b22',
        // Gold palette sampled from the Ratnanjali logo
        'gold-pale': '#F0E4C0',
        'gold-light': '#E4D8A8',
        gold: '#D8C090',
        'gold-mid': '#CCB484',
        'gold-deep': '#927D50',
        muted: '#9aa0a8',
        'muted-2': '#7d838c',
      },
      fontFamily: {
        display: ['Orbitron', 'sans-serif'],
        sans: ['Montserrat', 'system-ui', 'sans-serif'],
      },
      backgroundImage: {
        'gold-grad':
          'linear-gradient(135deg,#927D50 0%,#CCB484 32%,#F0E4C0 55%,#D8C090 78%,#927D50 100%)',
        'gold-grad-soft': 'linear-gradient(135deg,#E4D8A8,#CCB484)',
      },
      boxShadow: {
        gold: '0 0 30px rgba(216,192,144,.35)',
        'gold-sm': '0 0 18px rgba(216,192,144,.2)',
        card: '0 20px 40px rgba(0,0,0,.45)',
      },
      borderColor: {
        'gold-border': 'rgba(216,192,144,.42)',
        'gold-soft': 'rgba(216,192,144,.18)',
      },
      keyframes: {
        rise: {
          '0%': { opacity: '0', transform: 'translateY(26px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        float: {
          '0%,100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-12px)' },
        },
      },
      animation: {
        rise: 'rise .9s cubic-bezier(.2,.7,.2,1) both',
        'rise-1': 'rise .9s .1s cubic-bezier(.2,.7,.2,1) both',
        'rise-2': 'rise .9s .2s cubic-bezier(.2,.7,.2,1) both',
        'rise-3': 'rise .9s .3s cubic-bezier(.2,.7,.2,1) both',
        float: 'float 6s ease-in-out infinite',
      },
    },
  },
  plugins: [],
}
