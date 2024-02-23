import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      transitionProperty: {
        cursor: 'width, height, mix-blend-mode',
      },
      animation: {
        wavy: 'wavy 1.3s ease ',
        'cursor-blink': 'cursor-blink 1s ease infinite',
        loopText: 'loop 7s linear infinite',
      },
      keyframes: {
        wavy: {
          '0%': { top: '0px' },
          '50%': { top: '-15px' },
          '100%': { top: '0px' },
        },
        'cursor-blink': {
          '0%': { transform: 'scale(1.0)' },
          '50%': { transform: 'scale(1.3)' },
          '100%': { transform: 'scale(1.0)' },
        },
        loop: {
          from: { transform: 'translateX(0%)' },
          to: { transform: 'translateX(-100%)' },
        },
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        'main-blue': '#274CBD',
        'sub-blue': '#D8DCF3',
        'point-blue': '#5C8EF2',
        'sub-yellow': '#F2F1E5',
      },
      borderRadius: {
        custom: '40% 60% 40% 60% / 40% 40% 60% 60%',
      },
    },
  },
  plugins: [],
};
export default config;
