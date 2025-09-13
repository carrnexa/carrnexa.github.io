import {resolve} from "node:path";
import {defineConfig} from "vite";
import sitemap from "vite-plugin-sitemap";

export default defineConfig({
  root: resolve(__dirname, "src"),
  publicDir: resolve(__dirname, "public"),
  build: {
    outDir: resolve(__dirname, "dist"),
    emptyOutDir: true,
    rollupOptions: {
      input: {
        index: resolve(__dirname, "src/index.html"),
        notfound: resolve(__dirname, "src/404.html"),
      },
    },
  },
  plugins: [
    sitemap({
      hostname: "https://carrnexa.com",
    }),
  ],
});
