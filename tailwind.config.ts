import { type Config } from "tailwindcss";

export default {
  content: [
    "{routes,islands,components}/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "markdown-text": "#111827", // Dark gray for text
        "markdown-heading": "#2563EB", // Blue for headings
        "markdown-link": "#10B981", // Green for links
        // Add more custom colors as needed
      },
    },
  },
  darkMode: "class",
} satisfies Config;
