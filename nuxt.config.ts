// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: {
    enabled: true,
  },
  css: ['@/scss/main.scss'],
  modules: [
    '@pinia/nuxt',]

})
