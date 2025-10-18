/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,ts}"],
  theme: {
    extend: {
      colors: {
        gold: {
          50: "#fef9f0",
          100: "#fdf3e1",
          200: "#fce6c3",
          300: "#fad8a0",
          400: "#f5c457",
          500: "#D4AF37",
          600: "#c19b30",
          700: "#a68428",
          800: "#8b6d20",
          900: "#705618",
          950: "#552e0b",
        },
        luxe: {
          black: {
            DEFAULT: "#0a0a0a",       // base black
            50: "rgba(10,10,10,0.05)",
            75: "rgba(10,10,10,0.75)",
            90: "rgba(10,10,10,0.90)",
            95: "rgba(10,10,10,0.95)",
            98: "rgba(10,10,10,0.98)",
          },
          dark: "#1a1a1a",
          white: "#ffffff",
          light: "#f5f5f5",
        },
      },
      fontFamily: {
        playfair: ["Playfair Display", "serif"],
        poppins: ["Poppins", "sans-serif"],
      },
      backgroundImage: {
        "gold-gradient": "linear-gradient(135deg, rgba(0,0,0,1) 0%, rgba(212,175,55,0.15) 100%)",
      },
      animation: {
        "fade-in": "fadeIn 0.8s ease-out forwards",
        "fade-in-up": "fadeInUp 0.8s ease-out forwards",
        "glow": "glow 2s ease-in-out infinite",
        "shimmer": "shimmer 3s ease-in-out infinite",
        "float": "float 6s ease-in-out infinite",
        "sparkle": "sparkle 1.5s ease-in-out infinite",
        "pulse-glow": "pulseGlow 3s ease-in-out infinite",
        "slide-up": "slideUp 0.8s ease-out forwards",
        "scale-in": "scaleIn 0.8s ease-out forwards",
        "bounce-in": "bounceIn 0.8s cubic-bezier(0.68, -0.55, 0.265, 1.55) forwards",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        fadeInUp: {
          "0%": { opacity: "0", transform: "translateY(30px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        slideUp: {
          "0%": { opacity: "0", transform: "translateY(50px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        scaleIn: {
          "0%": { opacity: "0", transform: "scale(0.9)" },
          "100%": { opacity: "1", transform: "scale(1)" },
        },
        bounceIn: {
          "0%": { opacity: "0", transform: "scale(0.3)" },
          "50%": { opacity: "1", transform: "scale(1.05)" },
          "70%": { transform: "scale(0.9)" },
          "100%": { transform: "scale(1)" },
        },
        glow: {
          "0%, 100%": { textShadow: "0 0 10px rgba(212, 175, 55, 0.5), 0 0 20px rgba(212, 175, 55, 0.3)" },
          "50%": { textShadow: "0 0 20px rgba(212, 175, 55, 0.8), 0 0 40px rgba(212, 175, 55, 0.5)" },
        },
        pulseGlow: {
          "0%, 100%": { opacity: "1", boxShadow: "0 0 20px rgba(212, 175, 55, 0.4)" },
          "50%": { opacity: "0.8", boxShadow: "0 0 40px rgba(212, 175, 55, 0.6)" },
        },
        shimmer: {
          "0%, 100%": { backgroundPosition: "0% center" },
          "50%": { backgroundPosition: "100% center" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-20px)" },
        },
        sparkle: {
          "0%, 100%": { opacity: "0.2" },
          "50%": { opacity: "1" },
        },
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
