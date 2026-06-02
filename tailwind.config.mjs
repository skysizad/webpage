const color = (name) => `rgb(var(--color-${name}-rgb) / <alpha-value>)`;

/** @type {import('tailwindcss').Config} */
const config = {
  content: [
    "./app/**/*.{js,jsx}",
    "./components/**/*.{js,jsx}",
    "./config.js",
    "./theme.js"
  ],
  theme: {
    extend: {
      colors: {
        primary: color("primary"),
        secondary: color("secondary"),
        accent: color("accent"),
        highlight: color("highlight"),
        surface: color("surface"),
        "surface-strong": color("surface-strong"),
        text: color("text"),
        muted: color("muted"),
        border: color("border"),
        danger: color("danger")
      },
      boxShadow: {
        glow: "0 0 42px rgb(var(--color-primary-rgb) / 0.22)",
        "accent-glow": "0 0 36px rgb(var(--color-accent-rgb) / 0.18)"
      },
      fontFamily: {
        sans: [
          "Inter",
          "ui-sans-serif",
          "system-ui",
          "-apple-system",
          "BlinkMacSystemFont",
          "Segoe UI",
          "sans-serif"
        ]
      }
    }
  },
  plugins: []
};

export default config;
