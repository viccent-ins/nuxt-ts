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
    '@nuxt/image',
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
        flag: '/images/icon/en-flag.png'
      },
      {
        code: 'in-HN',
        name: 'India',
        iso: 'in-HN',
        file: 'in-HN.json',
        flag: '/images/icon/in.png'
      },
      {
        code: 'bn-BN',
        name: 'Bangla',
        iso: 'bn-BN',
        file: 'bn-BN.json',
         flag: '/images/icon/bd.png'
      },
      {
        code: 'sa-AR',
        name: 'Arabic',
        iso: 'sa-AR',
        file: 'sa-AR.json',
         flag: '/images/icon/sa.png'
      },
      {
        code: 'ch-ZH',
        name: '中文',
        iso: 'ch-ZH',
        file: 'ch-ZH.json',
         flag: '/images/icon/cn.png'
      },

      {
        code: 'ja-JA',
        name: '日本語',
        iso: 'ja-JA',
        file: 'ja-JA.json',
         flag: '/images/icon/jp.png'
      },
      {
        code: 'kr-KO',
        name: '한국',
        iso: 'kr-KO',
        file: 'kr-KO.json',
         flag: '/images/icon/kr.png'
      },
      {
        code: 'tr-TR',
        name: 'Turkish',
        iso: 'tr-TR',
        file: 'tr-TR.json',
         flag: '/images/icon/tr.png'
      },
      {
        code: 'ma-MS',
        name: 'Malay',
        iso: 'ma-MS',
        file: 'ma-MS.json',
         flag: '/images/icon/ma.png'
      },

      {
        code: 'pt-PT',
        name: 'Portuguese',
        iso: 'pt-PT',
        file: 'pt-PT.json',
        flag: '/images/icon/pt.png'
      },
    ],
    defaultLocale: 'en-US',
  },
  build: {},
});
