import { defineConfig } from "@lovable.dev/vite-tanstack-config";

export default defineConfig({
  plugins: [],
  nitro: true, 
  tanstackStart: {
    server: { entry: "server" },
  },
});