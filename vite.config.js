import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// User site: repo named <user>.github.io → https://<user>.github.io/  → base "/"
// Project site: other repo names → https://<user>.github.io/<repo>/  → base "/<repo>/"
// CI always sets GITHUB_REPOSITORY=owner/repo. For local prod builds without it, default "/".
function productionBase() {
  const repo = process.env.GITHUB_REPOSITORY?.split("/")[1];
  if (!repo) return "/";
  if (repo.endsWith(".github.io")) return "/";
  return `/${repo}/`;
}

export default defineConfig(({ command }) => ({
  base: command === "serve" ? "/" : productionBase(),
  plugins: [react({ include: "**/*.{js,jsx,ts,tsx}" })],
  // Required for JSX inside .js: `vite:import-analysis` runs before React transform (dev + build).
  esbuild: {
    include: /src\/.*\.js$/,
    exclude: [],
    loader: "jsx",
    jsx: "automatic",
  },
}));
