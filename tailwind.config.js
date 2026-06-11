/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          yellow:  '#FB9D25',
          amber:   '#E0A800',
          lemon:   '#FFF3B0',
          cream:   '#FFFBF0',
          dark:    '#1A1200',
          muted:   '#7A6520',
          orange:  '#FF8C00',
        },
      },
      fontFamily: {
        display: ['Playfair Display', 'Georgia', 'serif'],
        heading: ['Fraunces', 'Georgia', 'serif'],
        body:    ['DM Sans', 'system-ui', 'sans-serif'],
        accent:  ['Caveat', 'cursive'],
      },
      fontSize: {
        hero: ['clamp(3.5rem, 8vw, 6.5rem)', { lineHeight: '1.05', letterSpacing: '-0.03em' }],
      },
      animation: {
        float:   'float 4s ease-in-out infinite',
        marquee: 'marquee 25s linear infinite',
        halo:    'halo 2.5s ease-in-out infinite',
        drift:   'drift 8s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%,100%': { transform: 'translateY(0px)' },
          '50%':     { transform: 'translateY(-22px)' },
        },
        marquee: {
          '0%':   { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        halo: {
          '0%,100%': { boxShadow: '0 0 0 0px rgba(251,157,37,0.33)' },
          '50%':     { boxShadow: '0 0 0 28px rgba(251,157,37,0)' },
        },
        drift: {
          '0%,100%': { transform: 'translateY(0) rotate(0deg)' },
          '50%':     { transform: 'translateY(-30px) rotate(15deg)' },
        },
      },
      backgroundImage: {
        'hero-grain': "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='0.03'/%3E%3C/svg%3E\")",
      },
    },
  },
  plugins: [],
}
