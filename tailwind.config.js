/** @type {import('tailwindcss').Config} */
const { nextui } = require('@nextui-org/react');

module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './stories/**/*.{js,ts,jsx,tsx,mdx}',
    './node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    fontFamily: {
      inter: ['Inter', 'sans-serif'],
      tilt: ['Tilt Prism', 'cursive']
    },
    extend: {
      gradientColorStops: {
        'yellow-orange': '#FFD700',
        'orange-red': '#FF4500'
      },
      height: {
        'bottombar-height': '70px'
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))'
      }
    }
  },
  variants: {
    fill: ['hover', 'focus']
  },
  plugins: [require('prettier-plugin-tailwindcss'), nextui(), require('@tailwindcss/typography')]
};
