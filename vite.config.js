import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig(({ mode }) => ({
  plugins: [react()],

  // Local development uses "/".
  // Production and preview use the GitHub Pages repository path.
  base: mode === "production" ? "/Portfolio/" : "/",
}));