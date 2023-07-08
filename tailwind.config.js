/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    colors: {
      darkBlack: '#1C1E21',
      lightBlack: '#242526',
      primaryGold: '#F2AE1B',
      primaryWhite: '#D3D3D3',
      customGray: '#393939'
    },
    extend: {
      backgroundImage: {
        'profile': "url('/public/images/profile.svg')",
      },
      screens: {
        'xsm': '400px',
      }
    },
  },
  plugins: [],
}
