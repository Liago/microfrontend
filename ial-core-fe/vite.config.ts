import federation from "@originjs/vite-plugin-federation";
import react from "@vitejs/plugin-react";
import autoprefixer from "autoprefixer";
import tailwindcss from "tailwindcss";
import { defineConfig } from "vite";

export default defineConfig({
  plugins: [
    react(),
    federation({
      name: "main-app",
      filename: "remoteEntry.js",
      // exposes: {
      //   "./mfa.css": "./src/index.css",
      // },
      exposes: {
        "./tailwind.css": "./src/tailwind.css.js",
      },
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
      output: {
        dir: "dist",
        entryFileNames: "mfa.js",
        //assetFileNames: "mfa.[ext]",
      },
    },
    target: "esnext",
  },
  server: {
    port: 5050,
  },
  css: {
    postcss: {
      plugins: [tailwindcss, autoprefixer],
    },
  },
});
