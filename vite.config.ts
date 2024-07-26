import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  base: "/Gallery/",
  plugins: [react()],
  define: {
    "process.env": {
      VITE_BASE_URL: "/Gallery/",
    },
  },
});
