import markdown from 'vue3-markdown-it'

export default defineNuxtPlugin(nuxtApp => {
  nuxtApp.vueApp.component('Markdown', markdown)
})
