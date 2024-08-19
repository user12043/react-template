import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tsconfigPaths from "vite-tsconfig-paths";
// import vitePluginSass from "vite-plugin-sass";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), tsconfigPaths()]
});
