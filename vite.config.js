import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  // 站台部署在 https://brianYuDesign.github.io/szu-yu-project/ 子路徑下，
  // base 沒設好的話 build 出來的 asset 會打到 github.io 根目錄而全部 404。
  base: "/szu-yu-project/",
  plugins: [react(), tailwindcss()],
  build: {
    // 沿用 CRA 的輸出資料夾名稱，deploy.yml 的 publish_dir 與
    // package.json 的 `gh-pages -d build` 才不用跟著改。
    outDir: "build",
    sourcemap: false,
  },
  server: {
    port: 3000,
    open: true,
  },
});
