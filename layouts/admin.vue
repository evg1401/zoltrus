<script lang="ts" setup>
import { switchToVerticalNavOnLtOverlayNavBreakpoint } from '@layouts/utils'
import SuccessMassegeGlobalApp from '@/components/SuccessMassegeGlobalApp.vue'
import ErrorMassegeGlobalApp from '@/components/ErrorMassegeGlobalApp.vue'

// import { useConfigStore } from '@core/stores/config'
// import { AppContentLayoutNav } from '@layouts/enums'

// const DefaultLayoutWithHorizontalNav = defineAsyncComponent(() => import('./components/DefaultLayoutWithHorizontalNav.vue'))
const DefaultLayoutWithVerticalNav = defineAsyncComponent(() => import('./components/DefaultLayoutWithVerticalNav.vue'))

// const configStore = useConfigStore()

// ℹ️ This will switch to vertical nav when define breakpoint is reached when in horizontal nav layout
// Remove below composable usage if you are not using horizontal nav layout in your app
switchToVerticalNavOnLtOverlayNavBreakpoint()

const { layoutAttrs, injectSkinClasses } = useSkins()

injectSkinClasses()
</script>

<template>
  <Component
    v-bind="layoutAttrs"
    :is="DefaultLayoutWithVerticalNav"
  >
    <slot />
  </Component>
  <SuccessMassegeGlobalApp />
  <ErrorMassegeGlobalApp />
</template>

<style lang="scss">
// As we are using `layouts` plugin we need its styles to be imported
@use "@layouts/styles/default-layout";
</style>
