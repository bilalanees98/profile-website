const colors = {
  "primary-one": "#303030",
  "primary-two": "#F5F5F5",
  "secondary-one": "#606A8B",
  "tertiary-one": "#A9A9A9",
};
const fontFamily = {
  jost: ["Jost", "-apple-system", "Helvetica Neue", "Helvetica", "sans-serif"],
  montserrat: [
    "Montserrat",
    "-apple-system",
    "Helvetica Neue",
    "Helvetica",
    "sans-serif",
  ],
};

const fontSize = {
  s: "0.5rem",
  "2s": "1rem",
  "3s": "1.125rem",
  m: "1.25rem",
  "2m": "1.5rem",
  l: "1.75rem",
};

const screens = {
  mobile: "320px",
  // => @media (min-width: 320px) { ... }

  tablet: "480px",
  // => @media (min-width: 480px) { ... }

  laptop: "1024px",
  // => @media (min-width: 1024px) { ... }
};
/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js,svelte,ts}"],
  theme: {
    fontFamily,
    fontSize,
    screens,
    extend: {
      colors,
    },
  },
  plugins: [],
};
