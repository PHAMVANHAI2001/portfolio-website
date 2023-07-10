import { Link } from "./.nuxt/components.d";
// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ["@nuxtjs/tailwindcss", "@nuxtjs/color-mode"],
  css: [
    "animate.css",
    "~/assets/fontawesome/css/all.min.css",
    "~/assets/scss/main.scss",
  ],
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: '@use "@/assets/scss/_variables.scss" as *;',
        },
      },
    },
  },
  colorMode: {
    classSuffix: "",
  },
  app: {
    pageTransition: { name: "page", mode: "out-in" },
  },
});
