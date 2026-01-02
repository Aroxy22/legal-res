/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Legal professional color scheme - deep blues and grays
        primary: "#1E3A8A", // Deep professional blue
        primaryHover: "#1E40AF", // Slightly lighter blue
        textPrimary: "#1F2937", // Dark gray for text
        textSecondary: "#4B5563", // Medium gray
        borderSubtle: "#D1D5DB", // Light gray border
        accent: "#0F4C75", // Navy blue accent
        success: "#059669", // Professional green
        warning: "#D97706", // Amber warning
        legalGold: "#B8860B", // Legal document gold
        legalNavy: "#1E3A8A", // Professional navy
        legalCharcoal: "#374151", // Charcoal gray
      },
    },
  },
  plugins: [],
};
