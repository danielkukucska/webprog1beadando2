import { defineConfig } from "vitest/config";
import path from "path";
import tsconfigPaths from "vite-tsconfig-paths";

export default defineConfig({
    base: "/webprog1beadando2/",
    plugins: [tsconfigPaths()],
    resolve: {
        alias: {
            "@App": path.resolve(__dirname, "./src/App"),
            "@Test": path.resolve(__dirname, "./src/Test"),
            "@ITest": path.resolve(__dirname, "./src/ITest"),
        },
    },
    test: {
        environment: "jsdom",
        globals: true,
        setupFiles: ["./src/Test/setup.ts"],
    },
});
