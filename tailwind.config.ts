import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'clr-primary': '#633CFF',
        'clr-secondary': '#BEADFF',
        'clr-tertiary': '#EFEBFF',
        'clr-off-white': '#FAFAFA',
        'clr-lightgray': '#D9D9D9',
        'clr-darkgray': '#737373',
        'clr-black': '#333333',
      },
      maxHeight: {
        'phone-preview': '631px',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [],
};
export default config;
