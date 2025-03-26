import tailwindcss from "@tailwindcss/vite";
// @ts-ignore
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
    "@nuxtjs/mdc",
  ],
  vite: {
    plugins: [tailwindcss()],
  },
  css: ["~/assets/css/main.css"],
  ssr: false,
  nitro: {
    preset: "github-pages",
  },
  app: {
    baseURL: "/",
  },
  content: {
    build: {
      markdown: {
        highlight: {
          langs: [
            "dart",
            "json",
            "js",
            "ts",
            "html",
            "css",
            "vue",
            "shell",
            "mdc",
            "md",
            "yaml",
          ],
          theme: {
            default: "nord",
            dark: "nord",
            sepia: "monokai",
          },
        },
      },
    },
  },
});
