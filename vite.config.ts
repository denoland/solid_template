import solid from "solid-start/vite";
import { defineConfig } from "vite";
import deno from "solid-start-deno";

export default defineConfig({
  plugins: [solid({
    adapter: deno(),
  })],
});
