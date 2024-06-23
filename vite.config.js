// vite.config.js

import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: [
      { find: "@", replacement: "/src" },
      { find: "@assets", replacement: "/src/assets" },
      { find: "@components", replacement: "/src/components" },

      { find: "@constants", replacement: "/src/constants" },
      { find: "@context", replacement: "/src/context" },
      { find: "@mocks", replacement: "/src/mocks" },
      { find: "@utils", replacement: "/src/utils" },
    ],
  },
  server: {
    watch: {
      usePolling: true, // 이 설정은 파일 변경 감지를 위한 폴링 방식을 사용하도록 합니다. (필요한 경우)
    },
  },
});
