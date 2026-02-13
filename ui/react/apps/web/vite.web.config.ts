import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  define: {
    "process.env.NODE_ENV": JSON.stringify("production"),
    "process.env": JSON.stringify({ NODE_ENV: "production" }),
    process: JSON.stringify({ env: { NODE_ENV: "production" } })
  },
  build: {
    lib: {
      entry: "./src/web-component.ts",
      formats: ["es"],
      fileName: () => "web.js"
    },
    emptyOutDir: false
  }
});
