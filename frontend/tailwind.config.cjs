module.exports = {
  purge: {
    content: ["./src/**/*.{html,svelte}"],
  },
  theme: {
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [require("daisyui")],
};
