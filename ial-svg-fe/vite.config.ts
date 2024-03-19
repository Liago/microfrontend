import federation from "@originjs/vite-plugin-federation";
import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";

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
      remotes: {
        "main-app": "http://localhost:5050/assets/remoteEntry.js",
      },
    }),
  ],
  build: {
    target: "esnext",
    minify: true,
    cssCodeSplit: true,
  },
  server: {
    port: 5200,
  },
});
