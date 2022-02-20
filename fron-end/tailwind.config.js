module.exports = {
  content: [
    "./src/**/*.{html,ts}",
    "./src/**/**.{html,ts}"
  ],
  theme: {
    extend: {},
  },
  plugins: [
    require('daisyui'),
  ],
}
