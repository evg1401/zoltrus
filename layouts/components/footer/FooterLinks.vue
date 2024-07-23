<script lang="ts" setup>
import { toRefs } from 'vue'
import type { Link } from '@/interfaces'

interface Props {
  links: Link[]
}

const props = defineProps<Props>()
const { links } = toRefs(props)

const linkStyle = (isHovering: boolean | undefined) => ({
  fontWeight: isHovering ? 800 : 400,
  cursor: 'pointer',
  fontSize: '0.85rem',
  lineHeight: '1.55rem',
})
</script>

<template>
  <div>
    <span class="text-white mb-2 d-block">
      <h2 class="text-white">
        <slot name="title" />
      </h2>
    </span>
    <NuxtLink
      v-for="(link, index) in links"
      :key="index"
      :to="{ path: link.page ?? '/' }"
      class="d-flex"
    >
      <VHover>
        <template #default="{ isHovering, props: hoverProps }">
          <span
            v-bind="hoverProps"
            class="text-white"
            :style="linkStyle(isHovering)"
          >
            {{ link.title }}
          </span>
        </template>
      </VHover>
    </nuxtlink>
  </div>
</template>
