/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,jsx,ts,tsx}", "./components/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        Jakarta: ["Jakarta", "sans-serif"],
        JakartaBold: ["Jakarta-Bold", "sans-serif"],
        JakartaExtraBold: ["Jakarta-ExtraBold", "sans-serif"],
        JakartaExtraLight: ["Jakarta-ExtraLight", "sans-serif"],
        JakartaLight: ["Jakarta-Light", "sans-serif"],
        JakartaMedium: ["Jakarta-Medium", "sans-serif"],
        JakartaSemiBold: ["Jakarta-SemiBold", "sans-serif"],
      },
      colors: {
        primaryBg: {
          100: "#bc96ff",
        },
        indigo: {
          100: "#371f7d",
        },
        pinkRed: {
          100: "#ff4365",
        },
        primary: {
          500: "#0286FF",
        },
        secondary: {
          900: "#333333",
        },
        success: {
          500: "#38A169",
        },
        general: {
          100: "#fe3c72",
          200: "#858585",
          300: "#EEEEEE",
        },
      },
    },
  },
  plugins: [],
};
