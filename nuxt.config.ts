// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    head: {
      charset: 'utf-8',
      viewport: 'width=device-width, initial-scale=1',
    }
  },
  css: [
    '~/assets/css/tailwind.css',
    '~/assets/css/main.css',
    '~/assets/scss/index.scss'
  ],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  modules: [
    'nuxt-icon', '@pinia/nuxt',
    '@nuxtjs/i18n',
    '@pinia-plugin-persistedstate/nuxt',
    '@element-plus/nuxt',
    '@nuxtjs/color-mode',
  ],
  colorMode: {
    preference: 'dark', // default value of $colorMode.preference
    fallback: 'dark', // fallback value if not system preference found
    hid: 'nuxt-color-mode-script',
    globalName: '__NUXT_COLOR_MODE__',
    componentName: 'ColorScheme',
    classPrefix: '',
    classSuffix: '-mode',
    storageKey: 'nuxt-color-mode'
  },
  i18n: {
    lazy: true,
    langDir: 'locales',
    strategy: 'no_prefix',
    locales: [
      {
        code: 'en-US',
        name: 'English(US)',
        iso: 'en-US',
        file: 'en-US.json',
      },
      {
        code: 'km-KH',
        name: 'ភាសាខ្មែរ',
        iso: 'km-KH',
        file: 'km-KH.json',
      },
    ],
    defaultLocale: 'en-US',
  },
  build: {},
});
