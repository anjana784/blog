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
      primaryGold: '#CDA434',
      primaryWhite: '#D3D3D3',
      customGray: '#393939'
    },
    extend: {
      backgroundImage: {
        'profile': "url('/public/images/profile.svg')",
      },
      screens: {
        'xsm': '320px',
      }
    },
  },
  plugins: [],
}

// 2xl: '1536px - 1920px',
// xl: '1280px - 1535px',
// lg: '1024px - 1279px',
// md: '768px - 1023px',
// sm: '640px - 767px',
// xs: '320px - 639px',
