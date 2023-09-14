module.exports = {
  darkMode: 'class',
  content: [
    "./themes/**/layouts/**/*.html",
    "./content/**/layouts/**/*.html",
    "./layouts/**/*.html",
    "./content/**/*.html"
  ],
  theme: {
    extend: {
      colors: {
        "primary-color": "var(--primary-color)",
        "primary-color-action": "var(--primary-color-action)",
        "alt-color": "var(--alt-color)",
        "alt-color-action": "var(--alt-color-action)"
      }
    },
  },
  plugins: [
    require('@tailwindcss/aspect-ratio'),
    require('@tailwindcss/forms'),
    require('@tailwindcss/typography'),

  ]
}
