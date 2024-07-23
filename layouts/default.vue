<script lang="ts" setup>
import Header from '@/layouts/components/Header.vue'
import Footer from '@/layouts/components/Footer.vue'
import BreadCrumbs from '@/layouts/components/header/BreadCrumbs.vue'
import SuccessMassegeGlobalApp from '@/components/SuccessMassegeGlobalApp.vue'

const { injectSkinClasses } = useSkins()

// ℹ️ This will inject classes in body tag for accurate styling
injectSkinClasses()
</script>

<template>
  <div class="layout-default">
    <Header />
    <BreadCrumbs v-if="$router.currentRoute.value.name !== 'index'" />
    <div class="content">
      <slot />
    </div>

    <Footer />
  </div>

  <SuccessMassegeGlobalApp />
</template>

<style>
.layout-default {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

.content {
  min-height: 30rem;
  height: 100%;
}
</style>
