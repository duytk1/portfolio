import fs from "node:fs";
import path from "node:path";
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

function copyDir(src, dest) {
  if (!fs.existsSync(src)) return;
  fs.mkdirSync(dest, { recursive: true });
  for (const name of fs.readdirSync(src)) {
    const from = path.join(src, name);
    const to = path.join(dest, name);
    if (fs.statSync(from).isDirectory()) copyDir(from, to);
    else fs.copyFileSync(from, to);
  }
}

/** Copy repo-root assets into `dist/` (same layout as the old static site). */
function copyRootAssets() {
  return {
    name: "copy-root-assets",
    closeBundle() {
      const out = path.resolve("dist");
      copyDir("images", path.join(out, "images"));
      copyDir("public/images", path.join(out, "images"));
      copyDir("videos", path.join(out, "videos"));
      copyDir("public/videos", path.join(out, "videos"));
      const nojekyll = path.resolve(".nojekyll");
      if (fs.existsSync(nojekyll)) {
        fs.copyFileSync(nojekyll, path.join(out, ".nojekyll"));
      }
    },
  };
}

export default defineConfig({
  plugins: [react(), copyRootAssets()],
  base: "./",
});
