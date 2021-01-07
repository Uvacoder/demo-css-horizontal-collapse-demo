const title = 'Vue Lazy CSS - Horizontal';
const description = 'How lazy loaded CSS can affect your horizontal scroll components and etc.'

export default {
  target: 'static',
  head: {
    title: title,
    meta: [
      {charset: 'utf-8'},
      {name: 'viewport', content: 'width=device-width, initial-scale=1'},
      {hid: 'og:title', name: 'og:title', content: title},
      {hid: 'description', name: 'description', content: description},
      {hid: 'og:description', name: 'og:description', content: description},
      {name: 'og:locale', content: 'en_us'},
    ],
    link: [
      {rel: 'icon', type: 'image/png', href: '/logo.png'}
    ]
  },
  css: [],
  plugins: [
    '~/plugins/gtag.client',
    '~/plugins/smoothscroll.client'
  ],
  components: true,
  buildModules: [
    '@nuxt/typescript-build',
    '@nuxtjs/tailwindcss',
  ],
  modules: [
    '@nuxt/content',
  ],
  build: {}
}