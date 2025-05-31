import type { Config } from 'tailwindcss';
import tailwindcssAnimate from 'tailwindcss-animate';
import defaultTheme from 'tailwindcss/defaultTheme';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        background: 'var(--background)',
        foreground: 'var(--foreground)',
      },
      fontFamily: {
        pretendard: ['var(--font-pretendard)', ...defaultTheme.fontFamily.sans],
      },
      boxShadow: {
        'custom-shadow': '0px 4px 20px 0px #00000014',
      },
      screens: {
        '2xl': '1440px',
      },
    },
  },
  plugins: [tailwindcssAnimate, require('@tailwindcss/line-clamp')],
};
export default config;
