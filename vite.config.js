//
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { nodePolyfills } from "vite-plugin-node-polyfills";

// vitejs.dev
export default defineConfig({
  plugins: [
    react(),
    nodePolyfills({
      // To make sure 'url' is polyfilled correctly
      include: ["url"],
      globals: {
        Buffer: true,
        global: true,
        process: true,
      },
      // other options
    }),
  ],
});
