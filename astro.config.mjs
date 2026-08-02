import {defineConfig} from "astro/config";
import sitemap from "@astrojs/sitemap";

export default defineConfig({
  site: "https://carrnexa.com",
  build: {
    format: "file",
  },
  integrations: [
    sitemap({
      filter: (page) => !page.endsWith("/404.html"),
    }),
  ],
});