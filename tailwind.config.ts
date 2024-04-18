import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        productSans: ["var(--product-sans)"],
      },
      colors: {
        backgorundSurface: "#f2f3f5",
        borderColor: "#dadce0",

        subtleBtnSurface: "#1a73e81a",
        subtleBtnText: "var(--subtle-btn-text)",
        // subtleBtnText: "#1565cf",

        outlineBtnText: "#1a73e8",

        inactiveText: "#0000008a",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
};
export default config;
