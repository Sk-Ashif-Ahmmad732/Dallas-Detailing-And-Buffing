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
          bg: '#0B0B0D',
          surface: '#151518',
          card: '#1D1D21',
          cardHover: '#242429',
          accent: '#D62828',
          accentDeep: '#9F1717',
          silver: '#C5C8CE',
          silverLight: '#E2E4E8',
          silverDark: '#8A8D94',
          text: '#F7F7F8',
          muted: '#A5A7AD',
          border: 'rgba(197, 200, 206, 0.15)',
          borderActive: 'rgba(214, 40, 40, 0.5)',
          lightBg: '#F3F3F4',
          lightSurface: '#FFFFFF',
          lightText: '#151518',
          lightMuted: '#5C5E66',
          lightBorder: 'rgba(0, 0, 0, 0.08)',
        }
      },
      fontFamily: {
        display: ['"Space Grotesk"', 'sans-serif'],
        sans: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
      },
      boxShadow: {
        'glow-red': '0 0 25px rgba(214, 40, 40, 0.35)',
        'glow-red-lg': '0 0 40px rgba(214, 40, 40, 0.45)',
        'metallic': '0 4px 20px rgba(0, 0, 0, 0.6), inset 0 1px 0 rgba(255, 255, 255, 0.1)',
        'card-dark': '0 10px 30px -10px rgba(0, 0, 0, 0.7), 0 0 0 1px rgba(197, 200, 206, 0.08)',
        'card-dark-hover': '0 20px 40px -15px rgba(214, 40, 40, 0.2), 0 0 0 1px rgba(214, 40, 40, 0.3)',
      },
      backgroundImage: {
        'radial-gradient-hero': 'radial-gradient(circle at 50% 20%, rgba(214, 40, 40, 0.12) 0%, rgba(11, 11, 13, 0.95) 70%)',
        'carbon-mesh': 'radial-gradient(#1D1D21 1px, transparent 1px)',
      }
    },
  },
  plugins: [],
}
