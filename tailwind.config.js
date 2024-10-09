import { space } from 'postcss/lib/list';

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        Blue: "#0079FF",
        Lightmode_Text_subHeader: "#697C9A",
        Lightmode_Text_Paragraph: "#4B6A9B",
        Lightmode_Text_Header: "#2B3442",
        Lightmode_backgroundMain: "#F6F8FF",
        Lightmode_backgroundContainer: "#FEFEFE",
        Lightmode_Shadow: "rgb(70 96 187 / .1986)",
        Darkmode_Primary: "#141D2F",
        Darkmode_Secondary: "#1E2A47",
        Darkmode_Tertiary: "#FFFFFF",
      },
      fontFamily: {
        sans: ['Space Mono', 'sans-serif'],
      },
    },
    plugins: [],
  },
};
