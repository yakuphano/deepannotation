import type { Config } from "tailwindcss"

const config: Config = {
  content: ["./app/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      keyframes: {
        gridMove: {
          "0%": { backgroundPosition: "0 0" },
          "100%": { backgroundPosition: "400px 400px" },
        },
      },
      animation: {
        gridMove: "gridMove 40s linear infinite",
      },
    },
  },
  plugins: [],
}

export default config
