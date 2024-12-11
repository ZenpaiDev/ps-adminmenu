module.exports = {
  darkmode: false,
  content: [
    "./index.html",
    "./src/**/*.{svelte,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#101113',
        secondary: '#1A1B1E',
        tertiary: '#2C2E33',
        accent: '#40c057',
        border_primary: '#373A40',
        hover_secondary: '#5c5f66',
      }
    },
  },
  plugins: [],
};
