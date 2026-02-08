import { fileURLToPath, URL } from "node:url";

import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import vueDevTools from "vite-plugin-vue-devtools";
const server = "http://localhost:3000";
// https://vite.dev/config/
export default defineConfig({
  plugins: [vue(), vueDevTools()],
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)),
    },
  },
  // 개발용 임시 서버
  server: {
    port: 8090,
    // CORS(Cross Origin Resource Sharing) => proxy setting
    proxy: {
      "^/api": {
        // 변경할 Origin
        target: server,
        // Origin 변경 : http://localhost:8099 -> http://localhost:3000
        changeOrigin: true,
        // URL 중 일부분을 다시 작성 : /api/books -> /books
        rewrite: (path) => path.replace(/^\/api/, "/"),
      },
    },
  },
});
