import { fileURLToPath, URL } from "node:url";

import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import tailwindcss from "@tailwindcss/vite";
import VueIconsPlugin from "@kalimahapps/vue-icons/vite";

// https://vite.dev/config/
export default defineConfig({
  plugins: [vue(), tailwindcss(), VueIconsPlugin()],
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)),
    },
  },
});
