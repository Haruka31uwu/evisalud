// https://nuxt.com/docs/api/configuration/nuxt-config
export default {
  devtools: {
    enabled: true,
  },
  css: ['@/scss/main.scss'],
  modules: [
    '@pinia/nuxt',
  ],
  publicPath: process.env.NODE_ENV === "production" ? "/evisalud/" : "/",

}
