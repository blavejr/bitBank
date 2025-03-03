/** @type {import('tailwindcss').Config} */
module.exports = {
  // NOTE: Update this to include the paths to all of your component files.
  darkMode: 'media',
  content: ["./app/**/*.{js,jsx,ts,tsx}", "./components/**/*.{js,jsx,ts,tsx}"],
  presets: [require("nativewind/preset")],
  plugins: [],
  theme: {
    extend: {
      colors: {
        typography: {
          primary: "rgb(var(--color-typography-primary)/<alpha-value>)",
          secondary: "rgb(var(--color-typography-secondary)/<alpha-value>)",
        },
        background: {
          primary: "rgb(var(--color-background-primary)/<alpha-value>)",
          secondary: "rgb(var(--color-background-secondary)/<alpha-value>)",
        },
        button: {
          primary: "rgb(var(--color-button-primary)/<alpha-value>)",
        },
      },
    },
  },
}