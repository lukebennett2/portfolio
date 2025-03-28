import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        sm: "640px",
        md: "768px",
        lg: "1024px",
        xl: "1280px",
        "2xl": "1400px",
      },
    },
    extend: {
      fontFamily: {
        sans: ["Inter", "sans-serif"],
        display: ["Cabinet Grotesk", "sans-serif"],
      },
      colors: {
        dark: "#1A1A1A", // your text-dark / bg-dark
        cream: "#FAF5EF", // your background
        border: "#e5e5e5",
        foreground: "hsl(var(--foreground))",
        background: "hsl(var(--background))",
        card: "hsl(var(--card))",
        muted: "hsl(var(--muted))",
        primary: "hsl(var(--primary))",
        "primary-foreground": "hsl(var(--primary-foreground))",
        secondary: "hsl(var(--secondary))",
        "secondary-foreground": "hsl(var(--secondary-foreground))",
        accent: "hsl(var(--accent))",
        "accent-foreground": "hsl(var(--accent-foreground))",
        destructive: "hsl(var(--destructive))",
        "destructive-foreground": "hsl(var(--destructive-foreground))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
      },
      ringColor: {
        primary: "hsl(var(--primary))",
      },
      typography: (theme) => ({
        DEFAULT: {
          css: {
            color: theme("colors.dark"),
            a: {
              color: "#5D7AFF",
              textDecoration: "none",
              fontWeight: "500",
              "&:hover": {
                textDecoration: "underline",
              },
            },
            h1: {
              fontFamily: theme("fontFamily.display"),
            },
            h2: {
              fontFamily: theme("fontFamily.display"),
            },
            h3: {
              fontFamily: theme("fontFamily.display"),
            },
            strong: { fontWeight: "600" },
            "ul > li::before": { backgroundColor: "#5D7AFF" },
            blockquote: {
              borderLeftColor: "#5D7AFF",
              fontStyle: "normal",
              fontWeight: "500",
              color: theme("colors.dark"),
            },
            img: {
              borderRadius: theme("borderRadius.lg"),
            },
          },
        },
      }),
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        float: "float 6s ease-in-out infinite",
        "blob-spin": "blob-spin 20s linear infinite",
        "blob-bounce": "blob-bounce 8s ease-in-out infinite",
        "fade-in-up": "fade-in-up 0.7s ease-out forwards",
        "fade-in": "fade-in 0.7s ease-out forwards",
      },
    },
  },
  plugins: [require("tailwindcss-animate"), require("@tailwindcss/typography")],
} satisfies Config;
