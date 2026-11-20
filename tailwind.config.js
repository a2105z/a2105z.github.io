module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        canvas: "#070708",
        surface: "#121214",
        ink: {
          DEFAULT: "#f5f5f7",
          soft: "#e7e7ea",
          muted: "#a1a1aa",
          dim: "#71717a",
          faint: "#3f3f46",
        },
        line: {
          DEFAULT: "#2a2a2e",
          strong: "#3f3f46",
          soft: "#1c1c1f",
        },
        accent: {
          DEFAULT: "#f5f5f7",
          soft: "#a1a1aa",
        },
      },
      fontFamily: {
        sans: [
          "Inter",
          "ui-sans-serif",
          "system-ui",
          "-apple-system",
          "Segoe UI",
          "Helvetica Neue",
          "Arial",
          "sans-serif",
        ],
        display: [
          "Inter",
          "ui-sans-serif",
          "system-ui",
          "-apple-system",
          "Segoe UI",
          "Helvetica Neue",
          "Arial",
          "sans-serif",
        ],
      },
      letterSpacing: {
        eyebrow: "0.14em",
        display: "-0.035em",
        tightest: "-0.05em",
      },
      transitionTimingFunction: {
        premium: "cubic-bezier(0.22, 1, 0.36, 1)",
        soft: "cubic-bezier(0.65, 0.05, 0.36, 1)",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: 0 },
          "100%": { opacity: 1 },
        },
        marquee: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
        pulseDot: {
          "0%, 100%": { opacity: 0.6, transform: "scale(1)" },
          "50%": { opacity: 1, transform: "scale(1.15)" },
        },
        blink: {
          "0%, 100%": { opacity: 1 },
          "50%": { opacity: 0.2 },
        },
      },
      animation: {
        fade: "fadeIn 0.3s ease-in-out 1 forwards",
        marquee: "marquee 40s linear infinite",
        pulseDot: "pulseDot 2.4s ease-in-out infinite",
        blink: "blink 1.6s ease-in-out infinite",
      },
      backgroundImage: {
        "canvas-radial":
          "radial-gradient(ellipse at top, #141416 0%, #070708 55%, #000000 100%)",
      },
      boxShadow: {
        card: "0 1px 2px rgba(0,0,0,0.4)",
        soft: "0 30px 60px -30px rgba(0,0,0,0.6)",
        ring: "0 0 0 1px rgba(255,255,255,0.08)",
      },
      screens: {
        mobile: { max: "960px" },
        md: { min: "760px" },
        nonlg: { max: "1000px" },
        lg: { min: "1000px" },
        micro: { max: "750px" },
      },
    },
  },
  plugins: [
    require("tailwindcss-animate"),
    require("@tailwindcss/aspect-ratio"),
  ],
};
