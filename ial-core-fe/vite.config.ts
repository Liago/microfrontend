import federation from "@originjs/vite-plugin-federation";
import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    federation({
      name: "main-app",
      remotes: {
        "table-app": "http://localhost:5300/assets/remoteEntry.js",
        "login-form-app": "http://localhost:5200/assets/remoteEntry.js",
      },
      shared: ["react", "react-dom"],
    }),
  ],
  build: {
    outDir: "dist",
    rollupOptions: {
      input: {
        main: "./src/mfa.js",
      },
      external: ["react", "react-dom"],
      output: {
        globals: {
          react: "React",
          "react-dom": "ReactDOM",
        },
        dir: "dist",
        entryFileNames: "mfa.js",
      },
    },
    target: "esnext",
  },
  server: {
    port: 4000,
  },
});
