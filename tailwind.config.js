module.exports = {
  content: [
    './assets/**/*.{css,js,vue}',
    './components/**/*.{css,js,vue}',
    './pages/**/*.{css,js,vue}',
    './layout/**/*.{css,js,vue}',
  ],
  theme: {
    fontFamily: {
      mono: ['VT323', 'Consolas, Courier, Courier New'],
    },
    extend: {},
  },
  plugins: [require('daisyui'), require('tailwind-scrollbar')],

  daisyui: {
    // themes: ["dark, synthwave"]
    themes: [
      {
        slaystation: {
          primary: '#3d2267',

          secondary: '#BF95F9',

          accent: '#eb1e24',

          neutral: '#FFFFFF',

          'base-100': '#000000',

          info: '#8BE8FD',

          success: '#52FA7C',

          warning: '#F1FA89',

          error: '#FF5757',
        },
      },
    ],
  },
}
