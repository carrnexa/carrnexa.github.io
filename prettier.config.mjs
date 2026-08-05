/** @type {import("prettier").Config} */
export default {
  printWidth: 100,
  bracketSpacing: false,
  overrides: [
    {
      files: "*.astro",
      options: {
        plugins: ["prettier-plugin-astro"],
        parser: "astro",
        tabWidth: 2,
      },
    },
    {
      files: ["*.html", "*.css", "*.js", "*.json", "*.jsonc", "*.yaml", "*.yml"],
      options: {
        tabWidth: 2,
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
