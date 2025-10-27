/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './src/**/*.{astro,html,js,jsx,ts,tsx,vue,svelte,md,mdx}',
    './public/**/*.html'
  ],
  
  theme: {
    extend: {
      // 🎨 FAREBNÁ PALETA
      colors: {
        primary: {
          orange: '#FF6600',
          light: '#ff8533',
          accent: '#f19000',
          dark: '#cc5200'
        },
        neutral: {
          black: '#000000',
          white: '#ffffff',
          zinc: {
            800: '#27272a',
            900: '#18181b',
            950: '#09090b'
          }
        }
      },

      // 📏 SPACING & SIZING
      spacing: {
        '18': '4.5rem',   // 72px
        '70': '70px',     // Header scrolled
        '88': '22rem',    // 352px
        '90': '90px',     // Header default
        '128': '32rem',   // 512px
        '144': '36rem'    // 576px
      },

      // 📐 MAX WIDTH
      maxWidth: {
        '8xl': '1800px',
        '9xl': '2000px'
      },

      // 🔢 Z-INDEX
      zIndex: {
        '800': '800',
        '900': '900',
        '999': '999',
        '1000': '1000',
        '1001': '1001',
        '1050': '1050',
        '1100': '1100',
        '10000': '10000'
      },

      // 📱 BREAKPOINTS
      screens: {
        'xs': '480px',
        'sm': '640px',
        'md': '768px',
        'lg': '1024px',
        'xl': '1280px',
        '2xl': '1536px',
        '3xl': '1920px'
      },

      // 🖋️ TYPOGRAPHY
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'sans-serif'],
        display: ['Inter', 'system-ui', 'sans-serif']
      },

      fontSize: {
        'xxs': ['0.625rem', { lineHeight: '0.875rem' }],  // 10px
        '2xs': ['0.6875rem', { lineHeight: '1rem' }],     // 11px
        'xs': ['0.75rem', { lineHeight: '1rem' }],        // 12px
        'sm': ['0.875rem', { lineHeight: '1.25rem' }],    // 14px
        'base': ['1rem', { lineHeight: '1.5rem' }],       // 16px
        'lg': ['1.125rem', { lineHeight: '1.75rem' }],    // 18px
        'xl': ['1.25rem', { lineHeight: '1.75rem' }],     // 20px
        '2xl': ['1.5rem', { lineHeight: '2rem' }],        // 24px
        '3xl': ['1.875rem', { lineHeight: '2.25rem' }],   // 30px
        '4xl': ['2.25rem', { lineHeight: '2.5rem' }],     // 36px
        '5xl': ['3rem', { lineHeight: '1' }],             // 48px
        '6xl': ['3.75rem', { lineHeight: '1' }],          // 60px
        '7xl': ['4.5rem', { lineHeight: '1' }],           // 72px
        '8xl': ['6rem', { lineHeight: '1' }],             // 96px
        '9xl': ['8rem', { lineHeight: '1' }]              // 128px
      },

      fontWeight: {
        thin: '100',
        extralight: '200',
        light: '300',
        normal: '400',
        medium: '500',
        semibold: '600',
        bold: '700',
        extrabold: '800',
        black: '900'
      },

      letterSpacing: {
        tighter: '-0.05em',
        tight: '-0.025em',
        normal: '0em',
        wide: '0.025em',
        wider: '0.05em',
        widest: '0.1em',
        'ultra-wide': '0.15em'
      },

      // 🎭 BORDER RADIUS
      borderRadius: {
        'none': '0',
        'sm': '0.25rem',    // 4px
        'DEFAULT': '0.5rem', // 8px
        'md': '0.5rem',     // 8px
        'lg': '0.625rem',   // 10px
        'xl': '0.75rem',    // 12px
        '2xl': '1rem',      // 16px
        '3xl': '1.5rem',    // 24px
        '4xl': '2rem',      // 32px
        'full': '9999px'
      },

      // 🌟 BOX SHADOW
      boxShadow: {
        'sm': '0 1px 2px 0 rgb(0 0 0 / 0.05)',
        'DEFAULT': '0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1)',
        'md': '0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)',
        'lg': '0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1)',
        'xl': '0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1)',
        '2xl': '0 25px 50px -12px rgb(0 0 0 / 0.25)',
        'inner': 'inset 0 2px 4px 0 rgb(0 0 0 / 0.05)',
        'none': 'none',
        // Custom orange shadows
        'orange-sm': '0 4px 15px rgba(255, 102, 0, 0.3)',
        'orange-md': '0 6px 20px rgba(255, 102, 0, 0.5)',
        'orange-lg': '0 8px 30px rgba(255, 102, 0, 0.4)',
        'orange-xl': '0 12px 40px rgba(255, 102, 0, 0.6)',
        'orange-2xl': '0 10px 40px rgba(255, 102, 0, 0.2)',
        'orange-inner': 'inset 0 2px 10px rgba(255, 102, 0, 0.2)'
      },

      // 🌫️ BACKDROP BLUR
      backdropBlur: {
        xs: '2px',
        sm: '4px',
        DEFAULT: '8px',
        md: '12px',
        lg: '16px',
        xl: '24px',
        '2xl': '40px',
        '3xl': '64px'
      },

      // 🎬 ANIMATIONS
      keyframes: {
        // Pulse animácia
        pulse: {
          '0%, 100%': { 
            opacity: '1',
            transform: 'scale(1)'
          },
          '50%': { 
            opacity: '0.5',
            transform: 'scale(1.2)'
          }
        },
        
        // Ping animácia
        ping: {
          '75%, 100%': {
            transform: 'scale(1.5)',
            opacity: '0'
          }
        },
        
        // Feature pulse (hero sekcia)
        featurePulse: {
          '0%, 100%': {
            transform: 'scale(1)',
            opacity: '0.9'
          },
          '50%': {
            transform: 'scale(1.05)',
            opacity: '1'
          }
        },
        
        // Ring pulse (quick sidebar)
        ringPulse: {
          '0%, 100%': {
            opacity: '0',
            transform: 'scale(1)'
          },
          '50%': {
            opacity: '0.6',
            transform: 'scale(1.05)'
          }
        },
        
        // Fade in
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' }
        },
        
        // Fade out
        fadeOut: {
          '0%': { opacity: '1' },
          '100%': { opacity: '0' }
        },
        
        // Slide in from left
        slideInLeft: {
          '0%': { 
            transform: 'translateX(-100%)',
            opacity: '0'
          },
          '100%': { 
            transform: 'translateX(0)',
            opacity: '1'
          }
        },
        
        // Slide in from right
        slideInRight: {
          '0%': { 
            transform: 'translateX(100%)',
            opacity: '0'
          },
          '100%': { 
            transform: 'translateX(0)',
            opacity: '1'
          }
        },
        
        // Slide in from top
        slideInTop: {
          '0%': { 
            transform: 'translateY(-100%)',
            opacity: '0'
          },
          '100%': { 
            transform: 'translateY(0)',
            opacity: '1'
          }
        },
        
        // Slide in from bottom
        slideInBottom: {
          '0%': { 
            transform: 'translateY(100%)',
            opacity: '0'
          },
          '100%': { 
            transform: 'translateY(0)',
            opacity: '1'
          }
        },
        
        // Bounce
        bounce: {
          '0%, 100%': {
            transform: 'translateY(-25%)',
            animationTimingFunction: 'cubic-bezier(0.8, 0, 1, 1)'
          },
          '50%': {
            transform: 'translateY(0)',
            animationTimingFunction: 'cubic-bezier(0, 0, 0.2, 1)'
          }
        },
        
        // Scale up
        scaleUp: {
          '0%': { 
            transform: 'scale(0.95)',
            opacity: '0'
          },
          '100%': { 
            transform: 'scale(1)',
            opacity: '1'
          }
        },
        
        // Rotate
        rotate: {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(360deg)' }
        }
      },

      animation: {
        // Basic animations
        'spin': 'rotate 1s linear infinite',
        'ping': 'ping 2s cubic-bezier(0, 0, 0.2, 1) infinite',
        'pulse': 'pulse 2s ease-in-out infinite',
        'bounce': 'bounce 1s infinite',
        
        // Custom animations
        'feature-pulse': 'featurePulse 3s ease-in-out infinite',
        'ring-pulse': 'ringPulse 3s infinite',
        'fade-in': 'fadeIn 0.3s ease-in',
        'fade-out': 'fadeOut 0.3s ease-out',
        'slide-in-left': 'slideInLeft 0.5s ease-out',
        'slide-in-right': 'slideInRight 0.5s ease-out',
        'slide-in-top': 'slideInTop 0.5s ease-out',
        'slide-in-bottom': 'slideInBottom 0.5s ease-out',
        'scale-up': 'scaleUp 0.3s ease-out',
        
        // Custom durations
        'pulse-slow': 'pulse 3s ease-in-out infinite',
        'pulse-fast': 'pulse 1s ease-in-out infinite',
        'spin-slow': 'rotate 3s linear infinite',
        'spin-fast': 'rotate 0.5s linear infinite'
      },

      // ⏱️ TRANSITION
      transitionDuration: {
        '0': '0ms',
        '75': '75ms',
        '100': '100ms',
        '150': '150ms',
        '200': '200ms',
        '300': '300ms',
        '400': '400ms',
        '500': '500ms',
        '600': '600ms',
        '700': '700ms',
        '800': '800ms',
        '900': '900ms',
        '1000': '1000ms'
      },

      transitionTimingFunction: {
        'ease-in-out-custom': 'cubic-bezier(0.4, 0, 0.2, 1)',
        'bounce': 'cubic-bezier(0.68, -0.55, 0.265, 1.55)'
      },

      // 🎯 OPACITY
      opacity: {
        '0': '0',
        '5': '0.05',
        '10': '0.1',
        '15': '0.15',
        '20': '0.2',
        '25': '0.25',
        '30': '0.3',
        '40': '0.4',
        '50': '0.5',
        '60': '0.6',
        '70': '0.7',
        '75': '0.75',
        '80': '0.8',
        '85': '0.85',
        '90': '0.9',
        '95': '0.95',
        '100': '1'
      },

      // 📊 ASPECT RATIO
      aspectRatio: {
        auto: 'auto',
        square: '1 / 1',
        video: '16 / 9',
        '4/3': '4 / 3',
        '3/2': '3 / 2',
        '2/3': '2 / 3',
        '9/16': '9 / 16'
      }
    }
  },

  // 🔌 PLUGINS
  plugins: [
    // Pre lepšiu typografiu (optional)
    // require('@tailwindcss/typography'),
    
    // Pre forms styling (optional)
    // require('@tailwindcss/forms'),
    
    // Pre aspect ratio (optional, už je v core v Tailwind 3.4+)
    // require('@tailwindcss/aspect-ratio'),
  ],

  // ⚠️ SAFELIST - triedy ktoré sa nemajú purgovať
  safelist: [
    // Animácie
    'animate-pulse',
    'animate-ping',
    'animate-feature-pulse',
    'animate-ring-pulse',
    'animate-fade-in',
    'animate-bounce',
    
    // Z-index
    'z-800',
    'z-900',
    'z-999',
    'z-1000',
    'z-1001',
    
    // Dynamické farby
    'bg-primary-orange',
    'text-primary-orange',
    'border-primary-orange',
    
    // Shadows
    'shadow-orange-sm',
    'shadow-orange-md',
    'shadow-orange-lg',
    'shadow-orange-xl'
  ]
}