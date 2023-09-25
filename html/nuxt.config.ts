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
        { name: 'description', content: 'Tuyển tập những truyện mới nhất | Truyenvui.online' },
        { name: 'format-detection', content: 'telephone=no' },
        { name: 'keywords', content: 'Truyenvui.online, Truyenvui luôn cập nhật 24/24' },
        { name: 'og:title', content: 'Tuyển tập những truyện mới nhất | Truyenvui.online' },
        { name: 'og:description', content: 'Truyện Mới hàng ngày!' },
        { name: 'og:image', content: 'https://s199.imacdn.com/tt24/2022/08/20/a1d6f1225feaed6f_3dcdf651b16b6157_78077166097978499674.jpg' },
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
        { rel: 'canonical', href: 'https://Truyenvui.online/' },
        { rel: 'stylesheet', href: '/css/main-body.css', crossorigin: 'anonymous' },
        { rel: 'stylesheet', href: '/css/apkpure.css', crossorigin: 'anonymous' },
        { rel: 'stylesheet', href: '/css/detail.css', crossorigin: 'anonymous' },
      ],
      script: [
        { src: 'https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js', crossorigin: 'anonymous' },
        { src: 'https://cdnjs.cloudflare.com/ajax/libs/jquery/3.7.1/jquery.min.js', integrity:"sha512-v2CJ7UaYy4JwqLDIrZUI/4hqeoQieOmAZNXBeQyjo21dadnwR+8ZaIJVT8EE2iyI61OV8e6M8PP2/4hpQINQ/g==", crossorigin:"anonymous", referrerpolicy:"no-referrer" },
        { src: '/js/main.js', crossorigin: 'anonymous' },

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
