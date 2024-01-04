// https://nuxt.com/docs/api/configuration/nuxt-config

export default defineNuxtConfig({
  devtools: {
    enabled: true,
  },
  ssr: false,
  css: ['@/scss/main.scss'],
 
  // auth: {
  //   provider: {
  //     type: 'authjs',
  //   }
  // },
  app: {
    baseURL: '/evisalud/', // baseURL: '/<repository>/'
    buildAssetsDir: '/assets',

  },
  runtimeConfig: {
    public: {
      APP_BACKEND_URL: process.env.APP_BACKEND_URL,
      // SUPABASE_URL: process.env.SUPABASE_URL,
      // SUPABASE_KEY: process.env.SUPABASE_KEY,
    }
  },
  // imports: {
  //   dirs: [
  //     'composables',
  //     'handler',
  //   ]
  // }

})