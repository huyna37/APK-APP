// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  app: {
    head: {
      title: 'APK',
      htmlAttrs: {
        lang: 'en'
      },
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { name: 'description', content: 'APK APP' },
        { name: 'format-detection', content: 'telephone=no' },
        { name: 'keywords', content: 'apk, apk luôn cập nhật 24/24' },
        { name: 'og:title', content: 'APK APP' },
        { name: 'og:description', content: 'Truyện Mới hàng ngày!' },
        { name: 'og:image', content: 'https://apkpure.com/static/imgs/website_screen_v1.jpg' },
        { name: 'og:image:width', content: '512' },
        { name: 'og:image:height', content: '512' },
        { name: 'robots', content: 'index,follow' },
        { name: 'revisit-after', content: '1 days' },
        { name: 'ROBOTS', content: 'index,follow,noodp' },
        { name: 'googlebot', content: 'index,follow' },
        { name: 'BingBOT', content: 'index,follow' },
        { name: 'yahooBOT', content: 'index,follow' },
        { name: 'slurp', content: 'index,follow' },
        { name: 'msnbot', content: 'index,follow' },
        { name: 'monetag', content: 'b09f338d34fa492356d6fc35ad3657d5' },
      ],
      link: [
        { rel: 'canonical', href: 'https://apk.Truyenvui.online/' },
        { rel: 'stylesheet', href: '/css/main-body.css', crossorigin: 'anonymous' },
        { rel: 'stylesheet', href: '/css/apkpure.css', crossorigin: 'anonymous' },
        { rel: 'stylesheet', href: '/css/detail.css', crossorigin: 'anonymous' },
      ]
    },
  },
  modules: [
    '@nuxtjs/tailwindcss',
    ['@nuxtjs/robots', { configPath: './robots.js' }],
    "nuxt-csurf"
  ],
  runtimeConfig: {
    public: {
      BASE_URL: process.env.BASEAPI,
    },
  },
  csurf: { // optional
    https: false, // default true if in production
    cookieKey: 'j', // "__Host-csrf" if https is true otherwise just "csrf"
    cookie: { // CookieSerializeOptions from unjs/cookie-es
      path: '/',
      httpOnly: true,
      sameSite: 'strict'
    },
    methodsToProtect: ['POST', 'PUT', 'PATCH'], // the request methods we want CSRF protection for
    excludedUrls: ['/nocsrf1', ['/nocsrf2/.*', 'i']], // any URLs we want to exclude from CSRF protection
    encryptSecret: "123456789iamasecret987654321look", // only for non serverless runtime, random bytes by default
  },
  ssr: false
})
