<script lang="ts" setup>
import { useNavStore } from '@/store'

const route = useRoute()
const navStore = useNavStore()
const { getBreadcrumbs } = storeToRefs(navStore)
const basePath = 'catalog'
const isCatalog = computed(() => route.path.split('/')[1] === basePath)

const resolvePath = (href: string, lastElement: boolean) => {
  if (lastElement) {
    return
  }

  if (href.length === 0) {
    return '/'
  }

  return isCatalog.value ? href !== basePath ? `/${basePath}/${href}` : `/${href}` : `/${href}`
}
</script>

<template>
  <VContainer>
    <div class="d-flex flex-wrap">
      <NuxtLink
        v-for="(link, i) in getBreadcrumbs"
        :key="i"
        :to="resolvePath(link.alias, getBreadcrumbs.length === i + 1)"
        class="mr-1"
      >
        <VIcon
          v-if="i > 0"
          size="small"
          icon="tabler-chevron-right"
        />
        <span :class="getBreadcrumbs.length !== i + 1 ? 'cursor-pointer' : 'text-def-text-color'">
          {{ link.name }}
        </span>
      </NuxtLink>
    </div>
  </VContainer>
</template>
