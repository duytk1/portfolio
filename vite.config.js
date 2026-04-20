import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// GitHub Pages project sites are served from https://<user>.github.io/<repo>/.
// `base` must match that repo segment. Dev server keeps base "/" so you open localhost:5173/ as usual.
const GITHUB_PAGES_BASE = "/portfolio/";

export default defineConfig(({ command }) => ({
  base: command === "serve" ? "/" : GITHUB_PAGES_BASE,
  plugins: [react()],
}));
