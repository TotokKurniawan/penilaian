import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  base: "/penilaian/", // <- sesuaikan dgn nama repo GitHub kamu
});
