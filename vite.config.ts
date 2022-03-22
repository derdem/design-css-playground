import * as path from "path";
import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import pkg from "./package.json";
import { baseUrl } from "./src/common/baseUrl";

process.env.VITE_APP_VERSION = pkg.version;
if (process.env.NODE_ENV === "production") {
  process.env.VITE_APP_BUILD_EPOCH = new Date().getTime().toString();
}
const options = {
  base: baseUrl,
  plugins: [
    vue({
      script: {
        reactivityTransform: true,
      },
    }),
  ],
  server: {
    port: 4000,
    host: "0.0.0.0",
    hmr: {
      host: "0.0.0.0",
      port: 4000,
    },
  },

  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
};

export default defineConfig(options);
