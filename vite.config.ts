import { defineConfig } from "vite";
import path from "path";
import tsconfigPaths from "vite-tsconfig-paths";

export default defineConfig({
    base: "/webprog1beadando2/",
    plugins: [tsconfigPaths()],
    resolve: {
        alias: {
            "@App": path.resolve(__dirname, "./src/App"),
        },
    },
    root: "./src/App"
});