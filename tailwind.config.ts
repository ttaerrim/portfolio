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
        'text-rainbow': 'text-rainbow 1.3s linear;',
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
        'text-rainbow': {
          '100%,0%': {
            color: 'rgba(255,0,0,0.7)',
            top: '0px',
          },
          '8%': {
            color: 'rgba(255,127,0,0.7)',
          },
          '16%': {
            color: 'rgba(255,255,0,0.7)',
          },
          '25%': {
            color: 'rgba(127,255,0,0.7)',
          },
          '33%': {
            color: 'rgba(0,255,0,0.7)',
          },
          '41%': {
            color: 'rgba(0,255,127,0.7)',
          },
          '50%': {
            color: 'rgba(0,255,255,0.7)',
            top: '-15px',
          },
          '58%': {
            color: 'rgba(0,127,255,0.7)',
          },
          '66%': {
            color: 'rgba(0,0,255,0.7)',
          },
          '75%': {
            color: 'rgba(127,0,255,0.7)',
          },
          '83%': {
            color: 'rgba(255,0,255,0.7)',
          },
          '91%': {
            color: 'rgba(255,0,127,0.7)',
          },
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
