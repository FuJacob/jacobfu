import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";
import jsconfigPaths from "vite-jsconfig-paths"; // Correct plugin import

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), jsconfigPaths()], // Corrected the plugin call
});
