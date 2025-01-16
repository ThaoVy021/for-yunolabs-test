import type { Config } from "tailwindcss"

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      textColor: {
        primary: "rgba(88, 88, 88, 1)",
        secondary: "rgba(67, 67, 67, 1)",
      },
    },
  },
  plugins: [],
} satisfies Config
