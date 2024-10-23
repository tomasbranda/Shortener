/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "custom-cyan": {
          300: "#7CE4E4",
          500: "#2ACFCF",
        },
        "custom-dark-violet": {
          300: "#8370AD",
          500: "#3B3054",
        },
        "custom-red": "#f46262",
        "custom-gray": "#bfbfbf",
        "custom-grayish-violet": "#9e9aa7",
        "custom-very-dark-violet": "#35323e",
        "custom-very-dark-violet-2": "#232127",
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
      },
      animation: {
        shake: "shake 0.4s ease-in-out 3 forwards",
        show: "show 0.5s 100ms ease forwards",
      },
      keyframes: {
        shake: {
          "0%, 100%": { transform: "translateX(-2px)" },
          "50%": { transform: "translateX(2px)" },
        },
        show: {
          "100%": { opacity: "1" },
        },
      },
    },
  },
  plugins: [],
};
