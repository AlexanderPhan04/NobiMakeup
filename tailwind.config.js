module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
      },
      colors: {
        "pink-pastel": "#FFD6EC",
        "pink-light": "#FFC4E0",
        "pink-main": "#FFB0D6",
        "pink-accent": "#FF85C0",
        "pink-primary": "#e64c98",
        "pink-dark": "#c73880",
        "pink-deep": "#a52a6a",
        "pink-rose": "#FF69B4",
        "white-soft": "#FFF5F9",
        "pink-bg": "#FFE8F0",
        cream: "#FFF8F0",
        gold: "#FFD700",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-pink":
          "linear-gradient(135deg, #FFE4F0 0%, #FFD6EC 50%, #FFB6D5 100%)",
      },
      boxShadow: {
        soft: "0 4px 20px rgba(230, 76, 152, 0.1)",
        pink: "0 8px 32px rgba(246, 120, 176, 0.25)",
        glow: "0 0 20px rgba(230, 76, 152, 0.3)",
      },
      animation: {
        float: "float 3s ease-in-out infinite",
        "fade-in": "fadeIn 0.5s ease-in",
        "slide-up": "slideUp 0.5s ease-out",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-10px)" },
        },
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        slideUp: {
          "0%": { transform: "translateY(20px)", opacity: "0" },
          "100%": { transform: "translateY(0)", opacity: "1" },
        },
      },
    },
  },
  plugins: [],
};
