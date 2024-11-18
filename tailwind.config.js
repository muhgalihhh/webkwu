/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ['class'],
  content: ['./pages/**/*.{js,ts,jsx,tsx,mdx}', './components/**/*.{js,ts,jsx,tsx,mdx}', './app/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    container: {
      center: true,
      padding: '15px',
    },
    screens: {
      xs: '320px',
      sm: '640px',
      md: '768px',
      lg: '968px',
      xl: '1280px',
      '2xl': '1536px',
    },
    fontFamily: {
      primary: 'var(--font-nunito)',
    },
    extend: {
      colors: {
        primary: '#F6F5F2',
        secondary: '#FFE2E2',
        accent: {
          DEFAULT: '#470031',
          hover: '#6f0044',
        },
      },

      keyframes: {
        'accordion-down': {
          from: {
            height: '0px',
          },
          to: {
            height: 'var(--radix-accordion-content-height)',
          },
        },
        'accordion-up': {
          from: {
            height: 'var(--radix-accordion-content-height)',
          },
          to: {
            height: '0px',
          },
        },
      },
      animation: {
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out',
      },
    },
  },
  plugins: [require('tailwindcss-animate')],
};
