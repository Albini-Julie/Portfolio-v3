// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  components: true,
  css: ['@/scss/main.scss'],
  modules: ['@nuxtjs/prismic'],
  prismic: { endpoint: 'https://portfolio-albini-v2.cdn.prismic.io/api/v2' },
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: `@import "@/scss/foundations/_variables.scss";
          @import "@/scss/foundations/_mixins.scss";`
        }
      }
    }
  },
})
