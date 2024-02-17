
// noinspection ES6ConvertModuleExportToExport
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {},
  },
  daisyui:{
      themes: ["light", "dark", "cupcake"],
  },
  plugins: [require("@tailwindcss/typography"),require("daisyui")],
}