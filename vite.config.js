import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { visualizer } from "rollup-plugin-visualizer";
import compression from "vite-plugin-compression";
import tailwindcss from "@tailwindcss/vite";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));

export default defineConfig({
  plugins: [
    react(),

    tailwindcss(),

    // Gzip
    compression({
      algorithm: "gzip",
    }),

    // Brotli
    compression({
      algorithm: "brotliCompress",
      ext: ".br",
    }),

    // Bundle Analyzer
    process.env.ANALYZE &&
      visualizer({
        open: true,
        gzipSize: true,
        brotliSize: true,
      }),
  ].filter(Boolean),

  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },

  build: {
    rollupOptions: {
      output: {
        manualChunks(id) {
          // React
          if (
            id.includes("react") ||
            id.includes("react-dom")
          ) {
            return "react-vendor";
          }

          // Router
          if (id.includes("react-router-dom")) {
            return "router";
          }

          // Motion
          if (id.includes("framer-motion")) {
            return "motion";
          }

          // Icons
          if (id.includes("lucide-react")) {
            return "icons";
          }
        },
      },
    },
  },
});