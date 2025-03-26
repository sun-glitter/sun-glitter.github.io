import tailwindcss from "@tailwindcss/vite";

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2024-11-01",
  devtools: { enabled: true },

  modules: [
    "@nuxt/content",
    "@nuxt/fonts",
    "@nuxt/icon",
    "@nuxt/image",
    "@nuxt/scripts",
  ],
  vite: {
    plugins: [tailwindcss()],
  },
  ssr: false,
  nitro: {
    preset: "github-pages",
  },
  app: {
    baseURL: "//sun-glitter.github.io/",
  },
});
