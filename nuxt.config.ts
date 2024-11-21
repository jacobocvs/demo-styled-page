// https://nuxt.com/docs/api/configuration/nuxt-config
// nuxt.config.ts
export default defineNuxtConfig({
  ssr: false,
  compatibilityDate: '2024-04-03',
  devtools: {enabled: true},

  css: [
    '~/assets/scss/main.scss'
  ],

  modules: [
    ['@nuxtjs/google-fonts', {
      families: {
        'Noto+Sans': '200..800',
        'Source+Code+Pro': '200..800'
      },
      display: 'swap',
      prefetch: true,
      preconnect: true,
      download: true,
      outputDir: 'assets',
      stylePath: 'scss/base/_fonts.scss',
      fontsPath: 'assets/fonts'
    }]
  ]
})
