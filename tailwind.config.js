/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}', './public/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {},
    colors: {
      blue_border: '#273231',
      title: '#406561',
      title_hover: '#6bb0a8',
      primary_color: '#a5f3fc ',
      bg_card: '#111827',
      bg_card_hover: '#4b5563',
      border_card: '#27272a',
    },
  },
  plugins: [],
  darkMode: 'selector',
};
