/** @type {import("prettier").Config} */
export default {
  printWidth: 100,
  bracketSpacing: false,
  tabWidth: 2,
  overrides: [
    {
      files: "*.astro",
      options: {
        plugins: ["prettier-plugin-astro"],
      },
    },
    {
      files: "*.md",
      options: {
        tabWidth: 4,
      },
    },
  ],
};
