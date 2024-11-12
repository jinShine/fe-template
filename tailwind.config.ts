import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class"],
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{ts,tsx,js,jsx}",
  ],
  theme: {
    fontFamily: {
      pretendard: ["var(--font-pretendard)"],
    },
    colors: {
      primary: {
        0: "#000000",
        10: "#0A1831",
        20: "#132F62",
        30: "#183C7B",
        40: "#1D4794",
        /** BOLD */
        50: "#3E37CC",
        /** KEY (primary) */
        60: "#4E45FF",
        70: "#5992F8",
        /** DISABLE */
        80: "#958FFF",
        90: "#ACC9FB",
        95: "#D6E4FD",
        /** FILL */
        99: "#EDECFF",
        100: "#FFFFFF",
      },
      neutral: {
        0: "#000000",
        /** TEXT */
        10: "#222327",
        20: "#32343A",
        30: "#42454D",
        /** BOLD */
        40: "#535861",
        50: "#6E7481",
        /** KEY (primary) */
        60: "#8A91A1",
        70: "#A1A7B4",
        80: "#B9BDC7",
        /** LINE (border) */
        90: "#D5D7DD",
        95: "#EDEEF0",
        /** FILL */
        99: "#F6F6F8",
        100: "#FFFFFF",
      },
      custom: {},
      error: "#F35656",
      success: "#4DAC28",
      focus: "#FF6339",
      black: "#000000",
      white: "#FFFFFF",
    },
    extend: {
      colors: {
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        chart: {
          "1": "hsl(var(--chart-1))",
          "2": "hsl(var(--chart-2))",
          "3": "hsl(var(--chart-3))",
          "4": "hsl(var(--chart-4))",
          "5": "hsl(var(--chart-5))",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: {
            height: "0",
          },
          to: {
            height: "var(--radix-accordion-content-height)",
          },
        },
        "accordion-up": {
          from: {
            height: "var(--radix-accordion-content-height)",
          },
          to: {
            height: "0",
          },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};
export default config;
