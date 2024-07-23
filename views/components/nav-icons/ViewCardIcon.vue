<script lang="ts" setup>
import type { StyleValue } from 'vue'
import IconCard from '@/views/components/nav-icons/IconCard.vue'
import IconSubCard from '@/views/components/nav-icons/IconSubCard.vue'

interface Props {
  name: string
  isSubCard?: boolean | undefined
  isHovering?: boolean | undefined
  style?: StyleValue | undefined
  color?: string | undefined
}

const props = defineProps<Props>()
const { name, isHovering, style, color } = toRefs(props)
const defColor: Ref<string> = ref(color.value || '#3D4143')
const components = [IconCard, IconSubCard]

const hover = () => {
  const svgElement = document.getElementById(name.value)
  const paths = svgElement?.querySelectorAll('path')

  if (!paths) {
    return
  }

  for (const path of paths) {
    path.setAttribute('stroke', isHovering.value ? '#FF6D04' : defColor.value)
  }
}

onMounted(hover)
watch(isHovering, hover)
</script>

<template>
  <component
    :is="components[!isSubCard ? 0 : 1]"
    :id="name"
    :is-hovering="isHovering"
    :style="style"
  />
</template>
