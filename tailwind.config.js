module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        canvas: "#fafaf9",
        surface: "#ffffff",
        ink: {
          DEFAULT: "#0a0a0a",
          soft: "#1f1f1f",
          muted: "#525252",
          dim: "#a3a3a3",
          faint: "#d4d4d4",
        },
        line: {
          DEFAULT: "#e7e5e4",
          strong: "#d6d3d1",
          soft: "#efece9",
        },
        accent: {
          DEFAULT: "#2563eb",
          soft: "#93c5fd",
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
          "radial-gradient(ellipse at top, #ffffff 0%, #fafaf9 55%, #f5f5f4 100%)",
      },
      boxShadow: {
        card: "0 1px 2px rgba(15,15,20,0.04), 0 1px 3px rgba(15,15,20,0.05)",
        soft: "0 30px 60px -30px rgba(15,15,20,0.15)",
        ring: "0 0 0 1px rgba(15,15,20,0.06)",
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
