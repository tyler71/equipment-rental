// Tailkit (Tailwind CSS v3 Configuration)
import plugin from "tailwindcss/plugin";
import defaultTheme from "tailwindcss/defaultTheme";
import colors from "tailwindcss/colors";

const addUtilities = ({ addUtilities }) => {
  const utilFormSwitch = {
    ".form-switch": {
      border: "transparent",
      "background-color": colors.gray[300],
      "background-image":
          "url(\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='-4 -4 8 8'%3e%3ccircle r='3' fill='%23fff'/%3e%3c/svg%3e\")",
      "background-position": "left center",
      "background-repeat": "no-repeat",
      "background-size": "contain !important",
      "vertical-align": "top",
      "&:checked": {
        border: "transparent",
        "background-color": "currentColor",
        "background-image":
            "url(\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='-4 -4 8 8'%3e%3ccircle r='3' fill='%23fff'/%3e%3c/svg%3e\")",
        "background-position": "right center",
      },
      "&:disabled, &:disabled + label": {
        opacity: ".5",
        cursor: "not-allowed",
      },
    },
  };

  addUtilities(utilFormSwitch);
}

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{html,js}", // Configure your template paths
    "./themes/**/layouts/**/*.html",
    "./content/**/layouts/**/*.html",
    "./layouts/**/*.html",
    "./content/**/*.html"
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        "primary-color": colors.green,
        "secondary-color": colors.blue,
        // "primary-color": "var(--primary-color)",
        // "primary-color-action": "var(--primary-color-action)",
        // "secondary-color": "var(--secondary-color)",
        // "secondary-color-action": "var(--secondary-color-action)"
      },
      fontFamily: {
        sans: ["Inter", ...defaultTheme.fontFamily.sans],
      },
      maxWidth: {
        "8xl": "90rem",
        "9xl": "105rem",
        "10xl": "120rem",
      },
      zIndex: {
        1: 1,
        60: 60,
        70: 70,
        80: 80,
        90: 90,
        100: 100,
      },
      typography: {
        DEFAULT: {
          css: {
            a: {
              textDecoration: "none",
              "&:hover": {
                opacity: ".75",
              },
            },
            img: {
              borderRadius: defaultTheme.borderRadius.lg,
            },
          },
        },
      },
    },
  },
  plugins: [
    require('@tailwindcss/aspect-ratio'),
    require('@tailwindcss/forms'),
    require('@tailwindcss/typography'),
    plugin(addUtilities),
  ],
};