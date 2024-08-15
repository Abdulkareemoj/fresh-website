import { defineConfig } from "$fresh/server.ts";
import tailwind from "$fresh/plugins/tailwind.ts";
import { freshSEOPlugin } from "https://deno.land/x/fresh_seo@1.0.1/mod.ts";
import manifest from "./fresh.gen.ts";
export default defineConfig({
  plugins: [
    tailwind(),
    freshSEOPlugin(manifest, {
      include: [
        "/blog/index",
        "/blog/[slug]",
        "/blog/404",

        "/projects",
        "/contact",
        "/uses",
        "/404",
        "/index",
      ],
    }),
  ],
});
