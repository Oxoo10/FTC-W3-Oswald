// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from "@tailwindcss/vite";

import react from "@astrojs/react";

export default defineConfig({
  vite: {
    plugins: [tailwindcss()],
  },

  experimental: {
    fonts: [{
      provider: "local",
      name: "Gilroy",
      cssVariable: "--font-gilroy",
      fallbacks: ["sans-serif"],
      variants: [
        {
          weight: 400,
          style: "normal",
          src: [
            "./src/assets/fonts/Gilroy-Regular.woff2"
          ]
        },
        {
          weight: 500,
          style: "normal",
          src: [
            "./src/assets/fonts/Gilroy-Medium.woff2"
          ]
        },
        {
          weight: 600,
          style: "normal",
          src: [
            "./src/assets/fonts/Gilroy-Semibold.woff2"
          ]
        },
        {
          weight: 700,
          style: "normal",
          src: [
            "./src/assets/fonts/Gilroy-Bold.woff2"
          ]
        }
      ]
    }]
  },

  integrations: [react()]
});