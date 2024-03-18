import federation from "@originjs/vite-plugin-federation";
import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    federation({
      name: "table-app",
      filename: "remoteEntry.js",
      exposes: {
        "./Table": "./src/components/Table",
      },
    }),
  ],
  build: {
    target: "esnext", // needed to final build
    minify: false,
    cssCodeSplit: false,
  },
  server: {
    port: 5300,
  },
});
