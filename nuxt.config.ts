// nuxt.config.ts
export default defineNuxtConfig({
  modules: [
    '@nuxtjs/apollo'
  ],
  runtimeConfig: {
    isProd: process.env.NETLIFY_ENV === 'production',
    datoToken: process.env.NUXT_DATO_TOKEN,

    public: {
      isProd: process.env.NETLIFY_ENV === 'production',
      datoToken: process.env.NUXT_DATO_TOKEN
    }
  },
  apollo: {
    clients: {
      default: './config/apollo.ts'
    }
  },
  // css: [
  //   '@/assets/css/styles.css'
  // ]
})
