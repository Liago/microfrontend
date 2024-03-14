import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import federation from "@originjs/vite-plugin-federation";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    federation({
      name: "main-app",
      remotes: {
        "table-app": "http://localhost:5002/assets/remoteEntry.js",
        "login-form-app": "http://localhost:5003/assets/remoteEntry.js",
      },
      shared: ["react", "react-dom"],
    }),
  ],
  build: {
    // lib: {
    //   entry: "./src/index.tsx",
    //   name: "mfa",
    //   fileName: (format) => `mfa.${format}.js`,
    //   formats:["es"]
    // },
    target: "esnext",
  },
  // define: {
  //   "process.env": {},
  // },
});
