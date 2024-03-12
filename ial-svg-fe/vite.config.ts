import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import federation from "@originjs/vite-plugin-federation";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    federation({
      name: "login-form-app",
      filename: "remoteEntry.js",
      exposes: {
        "./LoginForm": "./src/components/LoginForm",
      },
    }),
  ],
  build: {
    target: "esnext", // needed to final build
    minify: false,
    cssCodeSplit: false,
  },
  server: {
    port: 5003,
  },
});
