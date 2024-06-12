import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      fontFamily: {
        poppins: ['Poppins'],
      },
      colors: {
        jwhite: '#ffffff',
        jblack: '#111827',
        jgreen: '#099f84',
        jbgrey: '#fafafa',
        jsgrey: '#f3f3f3',
        jcgrey: '#fafafa',
      }
    },
  },
  plugins: [],
};
export default config;
