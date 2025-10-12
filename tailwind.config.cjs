/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{astro,html,js,jsx,ts,tsx,vue,svelte,md,mdx}'
  ],
  theme: {
    extend: {
      // Custom z-index hodnoty
      zIndex: {
        '800': '800',
        '900': '900',
        '1000': '1000',
        '1050': '1050',
        '1100': '1100',
        '10000': '10000'
      },
      // Extended breakpoints (ak potrebuješ)
      screens: {
        'xs': '480px',
        'sm': '640px',
        'md': '768px',
        'lg': '1024px',
        'xl': '1280px',
        '2xl': '1536px'
      },
      // Custom colors (ak používaš v projekte)
      colors: {
        'zinc': {
          '900': '#18181b',
          '950': '#09090b'
        }
      },
      // Custom animations
      keyframes: {
        'pulse': {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0.5' }
        },
        'ping': {
          '75%, 100%': {
            transform: 'scale(2)',
            opacity: '0'
          }
        }
      },
      animation: {
        'pulse': 'pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'ping': 'ping 1s cubic-bezier(0, 0, 0.2, 1) infinite'
      }
    }
  },
  plugins: []
}