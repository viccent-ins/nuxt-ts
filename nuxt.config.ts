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
        flag: 'https://wal-marting.com/public/assets/img/flags/en.png'
      },
      {
        code: 'in-HN',
        name: 'India',
        iso: 'in-HN',
        file: 'in-HN.json',
      },
      {
        code: 'bn-BN',
        name: 'Bangla',
        iso: 'bn-BN',
        file: 'bn-BN.json',
      },
      {
        code: 'sa-AR',
        name: 'Arabic',
        iso: 'sa-AR',
        file: 'sa-AR.json',
      },
      {
        code: 'ch-ZH',
        name: '中文',
        iso: 'ch-ZH',
        file: 'ch-ZH.json',
      },

      {
        code: 'ja-JA',
        name: '日本語',
        iso: 'ja-JA',
        file: 'ja-JA.json',
      },
      {
        code: 'kr-KO',
        name: '한국',
        iso: 'kr-KO',
        file: 'kr-KO.json',
      },
      {
        code: 'hk-HK',
        name: '中文繁体',
        iso: 'hk-HK',
        file: 'hk-HK.json',
      },
      {
        code: 'tr-TR',
        name: 'Turkish',
        iso: 'tr-TR',
        file: 'tr-TR.json',
      },
      {
        code: 'ma-MS',
        name: 'Malay',
        iso: 'ma-MS',
        file: 'ma-MS.json',
      },

      {
        code: 'pt-PT',
        name: 'Portuguese',
        iso: 'pt-PT',
        file: 'pt-PT.json',
      },
    ],
    defaultLocale: 'en-US',
  },
  build: {},
});
