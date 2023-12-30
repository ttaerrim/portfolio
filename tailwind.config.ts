import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        'main-blue': '#2E6FF2',
        'sub-blue': '#F3F5FA',
        'point-blue': '#5C8EF2',
      },
      borderRadius: {
        custom: '40% 60% 40% 60% / 40% 40% 60% 60%',
      },
    },
  },
  plugins: [],
};
export default config;
