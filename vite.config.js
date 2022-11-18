import { defineConfig } from "vite";
import path from "path";
import tsconfigPaths from 'vite-tsconfig-paths'

export default defineConfig({
base: '/webprog1beadando2/',
plugins: [tsconfigPaths()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
});