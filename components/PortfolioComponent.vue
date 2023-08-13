<script setup lang="ts">
import { useHead } from "#imports";
const props = defineProps({
  appName: {
    type: String,
    default: "Nuxt"
  },
  version: {
    type: String,
    default: ""
  },
  title: {
    type: String,
    default: "San John's portfolio"
  },
  readDocs: {
    type: String,
    default: "We highly recommend you take a look at the Nuxt documentation, whether you are new or have previous experience with the framework."
  },
  followTwitter: {
    type: String,
    default: "Follow the Nuxt Twitter account to get latest news about releases, new modules, tutorials and tips."
  },
  starGitHub: {
    type: String,
    default: "Nuxt is open source and the code is available on GitHub, feel free to star it, participate in discussions or dive into the source."
  }
});
useHead({
  title: `${props.title}`,
  script: [],
  style: [
    {
      children: `@property --gradient-angle{syntax:'<angle>';inherits:false;initial-value:180deg}@keyframes gradient-rotate{0%{--gradient-angle:0deg}100%{--gradient-angle:360deg}}*,:before,:after{-webkit-box-sizing:border-box;box-sizing:border-box;border-width:0;border-style:solid;border-color:#e0e0e0}*{--tw-ring-inset:var(--tw-empty, );--tw-ring-offset-width:0px;--tw-ring-offset-color:#fff;--tw-ring-color:rgba(14, 165, 233, .5);--tw-ring-offset-shadow:0 0 #0000;--tw-ring-shadow:0 0 #0000;--tw-shadow:0 0 #0000}:root{-moz-tab-size:4;-o-tab-size:4;tab-size:4}a{color:inherit;text-decoration:inherit}body{margin:0;font-family:inherit;line-height:inherit}html{-webkit-text-size-adjust:100%;font-family:ui-sans-serif,system-ui,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,Noto Sans,sans-serif,"Apple Color Emoji","Segoe UI Emoji",Segoe UI Symbol,"Noto Color Emoji";line-height:1.5}h1,p,h2,h3{margin:0}h1,h2,h3{font-size:inherit;font-weight:inherit}img{border-style:solid;max-width:100%;height:auto}svg,img{display:block;vertical-align:middle}ul{list-style:none;margin:0;padding:0}`
    }
  ],
});

const colorMode = useColorMode()
const { locales, locale, setLocale } = useI18n();
const selectedLocale = computed({
  get: () => locale.value, set: (value) => {
    setLocale(value);
  },
});
const downloadMe = () => {
  const link = document.createElement('a')
  link.href = '/Resumé-min.pdf'
  link.download = 'Resumé-min.pdf'
  link.target = '_blank'
  link.click()
};
</script>
<template>
  <div
    class="antialiased  min-h-screen place-content-center flex flex-col items-center justify-center text-sm sm:text-base">

    <div class="flex-1 flex flex-col gap-y-10 pb-14 pt-2">
      <div class="flex justify-end gap-4 items-center px-4">
        <el-select v-model="selectedLocale" class="md:w-28 sm:w-28 w-20 select-box" size="small">
          <el-option v-for="(lang, index) in locales" :key="index" :label="lang.name" :value="lang.code"/>
        </el-select>
        <el-switch
          v-model="colorMode.preference"
          inline-prompt
          style="--el-switch-on-color: #00DC82; --el-switch-off-color: #b9b4b4"
          :active-text="$t('light')"
          :inactive-text="$t('dark')"
          active-value="light"
          inactive-value="dark"
          size="large"
        />
      </div>
      <div class="flex flex-col gap-y-4 items-center justify-center">
        <h1 class="text-xl sm:text-5xl font-semibold text-center mb-10">{{$t('simple_about_me')}}</h1>
      </div>
      <div class="grid grid-cols-2 lg:grid-cols-10 gap-6 max-w-[960px]  px-4">
        <div class="col-span-2 lg:col-span-10 relative get-started-gradient-border border-2 border-gray-200 ">
          <div
            class="get-started-gradient-left absolute left-0 inset-y-0 w-[20%] bg-gradient-to-r to-transparent from-green-400 rounded-xl z-1 transition-opacity duration-300"></div>
          <div class="get-started-gradient-right absolute right-0 inset-y-0 w-[20%] bg-gradient-to-l to-transparent from-blue-400 rounded-xl z-1 transition-opacity duration-300"></div>
          <div class="w-full absolute inset-x-0 flex justify-center -top-[58px]">
            <img :src="colorMode.preference === 'dark' ? '/portfolios/profile-dark.png' : '/portfolios/profile-light.png'" width="110">
          </div>
          <div class="flex flex-col rounded-xl items-center gap-y-4 pt-[58px] px-4 sm:px-28 pb-6 z-10"><h2
            class="font-semibold text-2xl ">{{$t('san_john')}}</h2>
            <p class="mb-2 text-center dark:text-gray-300">{{$t('below_are_my_website')}} <a
              class="dark:bg-white/10 rounded font-mono p-1 font-bold">{{$t('coder')}}</a> {{$t('to_show_you')}}</p>
          </div>
        </div>
        <div
          class="lg:min-h-min sm:min-h-[220px] md:min-h-[180px] col-span-2 sm:col-span-1 lg:col-span-6  rounded-xl modules-container  relative items-center justify-center border border-gray-200 border-2 border-gray-200">
          <div
            class=" modules-gradient-right absolute right-0 inset-y-0 w-[20%] bg-gradient-to-l to-transparent from-yellow-400 rounded-xl z-1 transition-opacity duration-300"></div>
          <a href="https://24poipet.com" target="_blank"
             class="py-6 px-5 rounded-xl flex items-center justify-center gap-x-4 dark:border-none sm:min-h-[220px] md:min-h-[180px] lg:min-h-min">
            <img width="53"
            src="/portfolios/module-active.png"
            alt="modules icon" class="modules-image-color-dark">
            <img
            src="/portfolios/module.png" width="53"
            alt="modules icon" class="modules-image-dark">
            <div class="flex flex-col space-y "><h3 class="font-semibold text-xl">24Poipet.com</h3>
              <p class="text-gray-700 dark:text-gray-300">{{$t('24poipet')}}</p></div>
          </a></div>
        <div
          class="row-span-2 col-span-2 order-last lg:order-none lg:col-span-4 documentation-container rounded-xl relative items-center justify-center border border-gray-200 ">
          <a @click="downloadMe" target="_blank"
             class="rounded-xl flex lg:flex-col items-center justify-center gap-y-4" download>
            <div
              class="py-6 lg:py-7 px-5 rounded-xl flex flex-col sm:flex-row lg:flex-col items-center justify-center gap-y-2 ">
              <div class="flex flex-col space-y cursor-pointer">
                <h3 class="font-semibold text-xl">{{$t('resume')}}</h3>
                <p class="dark:text-gray-300">{{$t('please_have_alook')}}</p>
              </div>
              <img
              src="/portfolios/document-active.png"
              alt="documentation icon" class="documentation-image-color-dark h-32 sm:h-34 cursor-pointer">
              <img
              src="/portfolios/document.png"
              alt="documentation icon" class="documentation-image-dark h-32 sm:h-34 cursor-pointer">
            </div>
          </a>
        </div>
        <div
          class="lg:min-h-min sm:min-h-[220px] md:min-h-[180px] col-span-2 sm:col-span-1 lg:col-span-6  rounded-xl examples-container relative items-center justify-center border border-gray-200">
          <div
            class="examples-gradient-right absolute right-0 inset-y-0 w-[20%] bg-gradient-to-l to-transparent from-blue-400 rounded-xl z-1 transition-opacity duration-300"></div>
          <a href="https://24pos.server-kh.com" target="_blank"
             class="py-6 px-5 rounded-xl flex items-center justify-center gap-x-4 sm:min-h-[220px] md:min-h-[180px] lg:min-h-min">
            <img
            src="/portfolios/example-active.png" width="53"
            alt="examples icon" class="examples-image-color-dark">
            <img
            src="/portfolios/example.png" width="53"
            alt="examples icon" class="examples-image-dark">
            <div class="flex flex-col space-y "><h3 class="font-semibold text-xl">24pos.server-kh.com</h3>
              <p class="text-gray-700 dark:text-gray-300">
                {{$t('24pos')}}</p>
              <p>demo: admin@gmail.com, 12345678</p>
            </div>
          </a>
        </div>
        <div
          class="lg:min-h-min sm:min-h-[220px] md:min-h-[180px] col-span-2 sm:col-span-1 lg:col-span-6  rounded-xl examples-container relative items-center justify-center border border-gray-200">
          <div
            class="examples-gradient-right absolute right-0 inset-y-0 w-[20%] bg-gradient-to-l to-transparent from-green-400 rounded-xl z-1 transition-opacity duration-300"></div>
          <a href="https://edenfarmcambodia.com" target="_blank"
             class="py-6 px-5 rounded-xl flex items-center justify-center gap-x-4 sm:min-h-[220px] md:min-h-[180px] lg:min-h-min">
            <img
              src="/portfolios/edenarm-active.png" width="53"
              alt="examples icon" class="examples-image-color-dark">
            <img
              src="/portfolios/edenfarm.png" width="53"
              alt="examples icon" class="examples-image-dark">
            <div class="flex flex-col space-y "><h3 class="font-semibold text-xl">Edenfarmcambodia.com</h3>
              <p class="text-gray-700 dark:text-gray-300">{{ $t('edenfarmcambodia') }}</p></div>
          </a>
        </div>
      </div>
    </div>
    <footer
      class="relative border-t  border-gray-200 w-full h-[70px] flex items-center mt-5">
      <div class="mx-auto sm:px-6 lg:px-8 px-4 w-full">
        <div class="flex flex-col items-center gap-3 sm:flex-row sm:justify-between">
          <div class="flex flex-col-reverse items-center gap-3 sm:flex-row"><span
            class="text-sm text-gray-700 dark:text-gray-300 flex items-center gap-3">© 2022-{{ new Date().getFullYear()
            }} My social link </span> <Icon name="icon-park-twotone:hand-right" class="text-lg text-gray-700 md:visible invisible"/></div>
          <ul class="flex items-center justify-end gap-3">
            <li><a href="https://www.linkedin.com/in/san-john-00a18b1b6/" target="_blank"
                   class="focus-visible:ring-2 hover:text-gray-400">
              <Icon name="mdi:linkedin" size="20"/>
            </a>
            </li>
            <li><a href="https://web.facebook.com/SanJohn.In" target="_blank"
                   class="focus-visible:ring-2 hover:text-gray-400">
              <Icon name="ic:baseline-facebook" size="20"/>
            </a>
            </li>
            <li><a href="https://twitter.com/SanjohnIn" target="_blank"
                   class="focus-visible:ring-2 hover:text-gray-400">
              <Icon name="mdi:twitter" size="20"/>
            </a>
            </li>
            <li><a href="https://gitlab.com/sanjohn" target="_blank"
                   class="focus-visible:ring-2 hover:text-gray-400">
               <Icon name="ph:gitlab-logo-simple-fill" size="20"/>
            </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  </div>
</template>

<style scoped>
@media (prefers-color-scheme: light) {
  .get-started-gradient-border {
    /*background: linear-gradient(to right, #ffffff, #ffffff), linear-gradient(to right, #00DC82, #1DE0B1, #36E4DA)*/
  }

  .gradient-border-modules {
    background: linear-gradient(var(--gradient-angle), rgba(247, 209, 76), rgba(247, 209, 76, 0.6), rgba(255, 255, 255, 0.8), rgba(247, 209, 76))
  }

  .gradient-border-examples {
    background: linear-gradient(var(--gradient-angle), rgba(141, 234, 255), rgba(141, 234, 255, 0.6), rgba(255, 255, 255, 0.8), rgba(141, 234, 255))
  }

  .gradient-border-documentation {
    background: linear-gradient(var(--gradient-angle), rgba(0, 220, 130), rgba(0, 220, 130, 0.6), rgba(255, 255, 255, 0.8), rgba(0, 220, 130))
  }
}

@media (prefers-color-scheme: dark) {
  .get-started-gradient-border {
    /*background: linear-gradient(to right, #18181B, #18181B), linear-gradient(to right, #00DC82, #1DE0B1, #36E4DA)*/
    @apply border-4;
  }

  .gradient-border-modules {
    background: linear-gradient(var(--gradient-angle), rgba(247, 209, 76), rgba(163, 129, 8), rgba(255, 255, 255, 0.3), rgba(163, 129, 8))
  }

  .gradient-border-examples {
    background: linear-gradient(var(--gradient-angle), rgba(141, 234, 255), rgba(0, 138, 169), rgba(255, 255, 255, 0.3), rgba(0, 138, 169))
  }

  .gradient-border-documentation {
    background: linear-gradient(var(--gradient-angle), rgba(0, 220, 130), rgba(0, 63, 37), rgba(255, 255, 255, 0.2), rgba(0, 63, 37))
  }
}

.get-started-gradient-border {
  background-clip: padding-box, border-box;
  background-origin: padding-box, border-box;
  /*border-color: transparent;*/
  border-radius: 12px;
  border-width: 1px
}

.get-started-gradient-border:hover > :is(.get-started-gradient-left, .get-started-gradient-right) {
  opacity: 0.2
}

.get-started-gradient-left, .get-started-gradient-right {
  opacity: 0
}

.gradient-border {
  opacity: 0;
  position: absolute;
  top: 0;
  left: 0;
  width: calc(100% + 2px);
  border-radius: 12px;
  z-index: -1;
  transform: translate(-1px, -1px)
}

.gradient-border-rect {
  height: calc(100% + 2px)
}

@media (min-width: 1024px) {
  .gradient-border-rect {
    height: calc(100% + 1px)
  }
}

.gradient-border-square {
  height: calc(100% + 2px)
}

.modules-gradient-right {
  opacity: 0
}

.modules-container:hover > .gradient-border, .examples-container:hover > .gradient-border, .documentation-container:hover > .gradient-border {
  opacity: 1;
  animation: gradient-rotate 5s cubic-bezier(0, 0, 1, 1) 0s infinite reverse;
  transition: all 0.3s linear
}

.modules-container:hover > .modules-gradient-right {
  opacity: 0.2
}

.examples-container:hover > .examples-gradient-right {
  opacity: 0.2
}

.examples-gradient-right {
  opacity: 0
}

.documentation-image-color-light, .documentation-image-color-dark {
  display: none
}

.modules-image-color-light, .modules-image-color-dark {
  display: none
}

.examples-image-color-light, .examples-image-color-dark {
  display: none
}

@media (prefers-color-scheme: light) {
  .modules-image-light {
    display: block
  }

  .modules-image-dark {
    /*display: none*/
  }

  .modules-container:hover > a > .modules-image-light {
    display: none
  }

  .modules-container:hover > a > .modules-image-color-light {
    display: block
  }

  .examples-image-light {
    display: block
  }

  .examples-image-dark {
    /*display: none*/
  }

  .examples-container:hover > a > .examples-image-light {
    /*display: none*/
  }

  .examples-container:hover > a > .examples-image-color-light {
    display: block
  }

  .documentation-image-light {
    display: block
  }

  .documentation-image-dark {
    /*display: none*/
  }

  .documentation-container:hover > a > div > .documentation-image-light {
    /*display: none*/
  }

  .documentation-container:hover > a > div > .documentation-image-color-light {
    display: block
  }
}

@media (prefers-color-scheme: dark) {
  .modules-image-dark {
    display: block
  }

  .modules-image-light {
    /*display: none*/
  }

  .modules-container:hover > a > .modules-image-color-dark {
    display: block
  }

  .modules-container:hover > a > .modules-image-dark {
    display: none
  }

  .examples-image-dark {
    display: block
  }

  .examples-image-light {
    display: none
  }

  .examples-container:hover > a > .examples-image-color-dark {
    display: block
  }

  .examples-container:hover > a > .examples-image-dark {
    display: none
  }

  .documentation-image-dark {
    display: block
  }

  .documentation-image-light {
    display: none
  }

  .documentation-container:hover > a > div > .documentation-image-color-dark {
    display: block
  }

  .documentation-container:hover > a > div > .documentation-image-dark {
    display: none
  }
}

.bg-white {
  --tw-bg-opacity: 1;
  background-color: rgba(255, 255, 255, var(--tw-bg-opacity))
}

.bg-gray-100 {
  --tw-bg-opacity: 1;
  background-color: rgba(238, 238, 238, var(--tw-bg-opacity))
}

.bg-gradient-to-r {
  background-image: -o-linear-gradient(left, var(--tw-gradient-stops));
  background-image: -webkit-gradient(linear, left top, right top, from(var(--tw-gradient-stops)));
  background-image: linear-gradient(to right, var(--tw-gradient-stops))
}

.bg-gradient-to-l {
  background-image: -o-linear-gradient(right, var(--tw-gradient-stops));
  background-image: -webkit-gradient(linear, right top, left top, from(var(--tw-gradient-stops)));
  background-image: linear-gradient(to left, var(--tw-gradient-stops))
}

.from-green-400 {
  --tw-gradient-from: rgba(55, 233, 144, var(--tw-from-opacity, 1));
  --tw-gradient-stops: var(--tw-gradient-from), var(--tw-gradient-to, rgba(255, 255, 255, 0))
}

.from-blue-400 {
  --tw-gradient-from: rgba(56, 189, 248, var(--tw-from-opacity, 1));
  --tw-gradient-stops: var(--tw-gradient-from), var(--tw-gradient-to, rgba(255, 255, 255, 0))
}

.from-yellow-400 {
  --tw-gradient-from: rgba(251, 191, 36, var(--tw-from-opacity, 1));
  --tw-gradient-stops: var(--tw-gradient-from), var(--tw-gradient-to, rgba(255, 255, 255, 0))
}

.to-transparent {
  --tw-gradient-to: transparent
}

.border-gray-200 {
  --tw-border-opacity: 1;
  border-color: rgba(224, 224, 224, var(--tw-border-opacity))
}

.hover\:border-transparent:hover {
  border-color: transparent
}

.rounded-xl {
  border-radius: .75rem
}

.rounded {
  border-radius: .25rem
}

.border {
  border-width: 1px
}

.border-t {
  border-top-width: 1px
}

.flex {
  display: -webkit-box;
  display: -ms-flexbox;
  display: -webkit-flex;
  display: flex
}

.grid {
  display: -ms-grid;
  display: grid
}

.hidden {
  display: none
}

.flex-col {
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  -ms-flex-direction: column;
  -webkit-flex-direction: column;
  flex-direction: column
}

.flex-col-reverse {
  -webkit-box-orient: vertical;
  -webkit-box-direction: reverse;
  -ms-flex-direction: column-reverse;
  -webkit-flex-direction: column-reverse;
  flex-direction: column-reverse
}

.place-content-center {
  place-content: center
}

.items-center {
  -webkit-box-align: center;
  -ms-flex-align: center;
  -webkit-align-items: center;
  align-items: center
}

.justify-end {
  -webkit-box-pack: end;
  -ms-flex-pack: end;
  -webkit-justify-content: flex-end;
  justify-content: flex-end
}

.justify-center {
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  -webkit-justify-content: center;
  justify-content: center
}

.flex-1 {
  -webkit-box-flex: 1;
  -ms-flex: 1 1 0%;
  -webkit-flex: 1 1 0%;
  flex: 1 1 0%
}

.order-last {
  -webkit-box-ordinal-group: 10000;
  -webkit-order: 9999;
  -ms-flex-order: 9999;
  order: 9999
}

.font-mono {
  font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, Liberation Mono, Courier New, monospace
}

.font-semibold {
  font-weight: 600
}

.font-bold {
  font-weight: 700
}

.h-32 {
  height: 8rem
}

.h-\[70px\] {
  height: 70px
}

.text-4xl {
  font-size: 2.25rem;
  line-height: 2.5rem
}

.text-xl {
  font-size: 1.25rem;
  line-height: 1.75rem
}

.text-sm {
  font-size: .875rem;
  line-height: 1.25rem
}

.text-2xl {
  font-size: 1.5rem;
  line-height: 2rem
}

.mx-auto {
  margin-left: auto;
  margin-right: auto
}

.mb-2 {
  margin-bottom: .5rem
}

.max-w-\[960px\] {
  max-width: 960px
}

.min-h-screen {
  min-height: 100vh
}

.p-1 {
  padding: .25rem
}

.px-4 {
  padding-left: 1rem;
  padding-right: 1rem
}

.py-14 {
  padding-top: 3.5rem;
  padding-bottom: 3.5rem
}

.py-6 {
  padding-top: 1.5rem;
  padding-bottom: 1.5rem
}

.px-5 {
  padding-left: 1.25rem;
  padding-right: 1.25rem
}

.pt-\[58px\] {
  padding-top: 58px
}

.pb-6 {
  padding-bottom: 1.5rem
}

.absolute {
  position: absolute
}

.relative {
  position: relative
}

.inset-y-0 {
  top: 0px;
  bottom: 0px
}

.inset-x-0 {
  right: 0px;
  left: 0px
}

.left-0 {
  left: 0px
}

.right-0 {
  right: 0px
}

.-top-\[58px\] {
  top: -58px
}

.-top-3 {
  top: -.75rem
}

.focus-visible\:ring-2:focus-visible {
  --tw-ring-offset-shadow: var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color);
  --tw-ring-shadow: var(--tw-ring-inset) 0 0 0 calc(2px + var(--tw-ring-offset-width)) var(--tw-ring-color);
  -webkit-box-shadow: var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow, 0 0 #0000);
  box-shadow: var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow, 0 0 #0000)
}

.text-center {
  text-align: center
}

.text-black {
  --tw-text-opacity: 1;
  color: rgba(0, 0, 0, var(--tw-text-opacity))
}

.text-gray-700 {
  --tw-text-opacity: 1;
  color: rgba(66, 66, 66, var(--tw-text-opacity))
}

.hover\:text-black:hover {
  --tw-text-opacity: 1;
  color: rgba(0, 0, 0, var(--tw-text-opacity))
}

.antialiased {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale
}

.w-full {
  width: 100%
}

.w-\[20\%\] {
  width: 20%
}

.z-10 {
  z-index: 10
}

.z-1 {
  z-index: 1
}

.gap-6 {
  grid-gap: 1.5rem;
  gap: 1.5rem
}

.gap-3 {
  grid-gap: .75rem;
  gap: .75rem
}

.gap-x-4 {
  -webkit-column-gap: 1rem;
  -moz-column-gap: 1rem;
  grid-column-gap: 1rem;
  column-gap: 1rem
}

.gap-y-16 {
  -webkit-row-gap: 4rem;
  -moz-row-gap: 4rem;
  grid-row-gap: 4rem;
  row-gap: 4rem
}

.gap-y-4 {
  -webkit-row-gap: 1rem;
  -moz-row-gap: 1rem;
  grid-row-gap: 1rem;
  row-gap: 1rem
}

.gap-y-2 {
  -webkit-row-gap: .5rem;
  -moz-row-gap: .5rem;
  grid-row-gap: .5rem;
  row-gap: .5rem
}

.grid-cols-2 {
  grid-template-columns:repeat(2, minmax(0, 1fr))
}

.col-span-2 {
  -ms-grid-column-span: span 2 / span 2;
  grid-column: span 2 / span 2
}

.row-span-2 {
  -ms-grid-row-span: span 2 / span 2;
  grid-row: span 2 / span 2
}

.transition-opacity {
  -webkit-transition-property: opacity;
  -o-transition-property: opacity;
  transition-property: opacity;
  -webkit-transition-timing-function: cubic-bezier(.4, 0, .2, 1);
  -o-transition-timing-function: cubic-bezier(.4, 0, .2, 1);
  transition-timing-function: cubic-bezier(.4, 0, .2, 1);
  -webkit-transition-duration: .15s;
  -o-transition-duration: .15s;
  transition-duration: .15s
}

.duration-300 {
  -webkit-transition-duration: .3s;
  -o-transition-duration: .3s;
  transition-duration: .3s
}

@media (min-width: 640px) {
  .sm\:flex-row {
    -webkit-box-orient: horizontal;
    -webkit-box-direction: normal;
    -ms-flex-direction: row;
    -webkit-flex-direction: row;
    flex-direction: row
  }

  .sm\:justify-between {
    -webkit-box-pack: justify;
    -ms-flex-pack: justify;
    -webkit-justify-content: space-between;
    justify-content: space-between
  }

  .sm\:h-34 {
    height: 8.5rem
  }

  .sm\:text-base {
    font-size: 1rem;
    line-height: 1.5rem
  }

  .sm\:text-5xl {
    font-size: 2.3rem;
    line-height: 1
  }

  .sm\:min-h-\[220px\] {
    min-height: 220px
  }

  .sm\:px-6 {
    padding-left: 1.5rem;
    padding-right: 1.5rem
  }

  .sm\:px-28 {
    padding-left: 7rem;
    padding-right: 7rem
  }

  .sm\:col-span-1 {
    -ms-grid-column-span: span 1 / span 1;
    grid-column: span 1 / span 1
  }
}

@media (min-width: 768px) {
  .md\:min-h-\[180px\] {
    min-height: 180px
  }
}

@media (min-width: 1024px) {
  .lg\:flex-col {
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    -ms-flex-direction: column;
    -webkit-flex-direction: column;
    flex-direction: column
  }

  .lg\:order-none {
    -webkit-box-ordinal-group: 1;
    -webkit-order: 0;
    -ms-flex-order: 0;
    order: 0
  }

  .lg\:min-h-min {
    min-height: -webkit-min-content;
    min-height: -moz-min-content;
    min-height: min-content
  }

  .lg\:py-7 {
    padding-top: 1.75rem;
    padding-bottom: 1.75rem
  }

  .lg\:px-8 {
    padding-left: 2rem;
    padding-right: 2rem
  }

  .lg\:grid-cols-10 {
    grid-template-columns:repeat(10, minmax(0, 1fr))
  }

  .lg\:col-span-10 {
    -ms-grid-column-span: span 10 / span 10;
    grid-column: span 10 / span 10
  }

  .lg\:col-span-6 {
    -ms-grid-column-span: span 6 / span 6;
    grid-column: span 6 / span 6
  }

  .lg\:col-span-4 {
    -ms-grid-column-span: span 4 / span 4;
    grid-column: span 4 / span 4
  }
}

@media (prefers-color-scheme: dark) {
  .dark\:bg-black {
    --tw-bg-opacity: 1;
    background-color: rgba(0, 0, 0, var(--tw-bg-opacity))
  }

  .dark\:bg-white\/10 {
    --tw-bg-opacity: .1;
    background-color: rgba(255, 255, 255, var(--tw-bg-opacity))
  }

  .dark\:bg-gray-900 {
    --tw-bg-opacity: 1;
    background-color: rgba(24, 24, 27, var(--tw-bg-opacity))
  }

  .dark\:border-transparent {
    border-color: transparent
  }

  .dark\:border-gray-900 {
    --tw-border-opacity: 1;
    border-color: rgba(24, 24, 27, var(--tw-border-opacity))
  }

  .dark\:border-none {
    border-style: none
  }

  .dark\:block {
    display: block
  }

  .dark\:hidden {
    display: none
  }

  .dark\:text-white {
    --tw-text-opacity: 1;
    color: rgba(255, 255, 255, var(--tw-text-opacity))
  }

  .dark\:text-gray-300 {
    --tw-text-opacity: 1;
    color: rgba(189, 189, 189, var(--tw-text-opacity))
  }

  .dark\:hover\:text-white:hover {
    --tw-text-opacity: 1;
    color: rgba(255, 255, 255, var(--tw-text-opacity))
  }
}
</style>