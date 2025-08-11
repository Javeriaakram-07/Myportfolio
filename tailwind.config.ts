import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: ["./client/**/*.{ts,tsx}"],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        'gradient-start': "hsl(var(--gradient-start))",
        'gradient-end': "hsl(var(--gradient-end))",
        'skill-c': "hsl(var(--skill-c))",
        'skill-cpp': "hsl(var(--skill-cpp))",
        'skill-html': "hsl(var(--skill-html))",
        'skill-css': "hsl(var(--skill-css))",
        'skill-js': "hsl(var(--skill-js))",
        'skill-logic': "hsl(var(--skill-logic))",
        'skill-web': "hsl(var(--skill-web))",
        'skill-react': "hsl(var(--skill-react))",
        'skill-vibe': "hsl(var(--skill-vibe))",
        'skill-oop-silver': "hsl(var(--skill-oop-silver))",
        'skill-uiux-pink': "hsl(var(--skill-uiux-pink))",
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
        "logo-pulse": {
          "0%, 100%": {
            transform: "scale(1)",
            filter: "drop-shadow(0 0 20px hsl(var(--primary)))",
          },
          "50%": {
            transform: "scale(1.05)",
            filter: "drop-shadow(0 0 30px hsl(var(--primary)))",
          },
        },
        "float": {
          "0%, 100%": {
            transform: "translateY(0px)",
          },
          "50%": {
            transform: "translateY(-10px)",
          },
        },
        "slide-up": {
          "0%": {
            opacity: "0",
            transform: "translateY(30px)",
          },
          "100%": {
            opacity: "1",
            transform: "translateY(0)",
          },
        },
        "fade-in": {
          "0%": {
            opacity: "0",
          },
          "100%": {
            opacity: "1",
          },
        },
        "scale-in": {
          "0%": {
            opacity: "0",
            transform: "scale(0.8) rotateY(-10deg)",
          },
          "100%": {
            opacity: "1",
            transform: "scale(1) rotateY(0deg)",
          },
        },
        "text-glow": {
          "0%, 100%": {
            textShadow: "0 0 5px hsl(var(--primary)), 0 0 10px hsl(var(--primary)), 0 0 15px hsl(var(--primary))",
          },
          "50%": {
            textShadow: "0 0 10px hsl(var(--primary)), 0 0 20px hsl(var(--primary)), 0 0 30px hsl(var(--primary))",
          },
        },
        "3d-rotate": {
          "0%": {
            transform: "scale(0.3) rotateY(0deg) rotateX(0deg)",
          },
          "50%": {
            transform: "scale(1.1) rotateY(180deg) rotateX(10deg)",
          },
          "100%": {
            transform: "scale(1) rotateY(360deg) rotateX(0deg)",
          },
        },
        "sphere-rotate": {
          "0%": {
            transform: "rotateY(0deg) rotateX(0deg)",
          },
          "25%": {
            transform: "rotateY(90deg) rotateX(15deg)",
          },
          "50%": {
            transform: "rotateY(180deg) rotateX(0deg)",
          },
          "75%": {
            transform: "rotateY(270deg) rotateX(-15deg)",
          },
          "100%": {
            transform: "rotateY(360deg) rotateX(0deg)",
          },
        },
        "cube-rotate": {
          "0%": {
            transform: "rotateX(0deg) rotateY(0deg)",
          },
          "100%": {
            transform: "rotateX(360deg) rotateY(360deg)",
          },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "logo-pulse": "logo-pulse 3s ease-in-out infinite",
        "float": "float 3s ease-in-out infinite",
        "slide-up": "slide-up 0.6s ease-out",
        "fade-in": "fade-in 1s ease-out",
        "scale-in": "scale-in 0.5s ease-out",
        "text-glow": "text-glow 2s ease-in-out infinite",
        "3d-rotate": "3d-rotate 2s ease-in-out",
        "sphere-rotate": "sphere-rotate 20s linear infinite",
        "cube-rotate": "cube-rotate 10s linear infinite",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;
