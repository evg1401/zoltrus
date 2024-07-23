<script lang="ts" setup>
import type { CatalogSection } from '@/interfaces'

interface Emit {
  (e: 'clickItem', value: CatalogSection): void
  (e: 'clickIconTrash', value: CatalogSection): void
}

const props = defineProps<{
  item: CatalogSection
  itemIdHighlight?: number
  parentItemIcon?: string
  childItemIcon?: string
  appendItemIcon?: string
}>()

const emit = defineEmits<Emit>()
const { item, itemIdHighlight } = toRefs(props)
const isHasChildElement = computed(() => item.value.children.length > 0)
const itemSectionIcon = computed(() => isHasChildElement.value ? props.childItemIcon : props.parentItemIcon)

const folderIconColor = computed(() => {
  if (item.value.active) {
    return 'success'
  }
  else if (itemIdHighlight.value === item.value.id && !item.value.active) {
    return 'primary'
  }

  return undefined
})
</script>

<template>
  <div class="li">
    <div class="d-flex align-center">
      <div class="section">
        <VIcon
          v-if="childItemIcon || parentItemIcon"
          size="24"
          class="mr-1"
          :color="folderIconColor"
        >
          <Icon :icon="itemSectionIcon" />
        </VIcon>

        <VHover>
          <template #default="{ isHovering, props: hoverProps }">
            <span
              :id="`tree-${item.id}`"
              v-bind="hoverProps"
              :class="{
                'text-primary': isHovering || itemIdHighlight === item.id,
              }"
              @click="emit('clickItem', item)"
            >
              {{ item.name }}
            </span>
          </template>
        </VHover>

        <VIcon
          v-if="appendItemIcon"
          class="ml-2"
          :icon="appendItemIcon"
          size="18"
          @click="emit('clickIconTrash', item)"
        />
      </div>
    </div>

    <div class="ul">
      <ViewSection
        v-for="children in item.children"
        :key="children.id"
        :item="children"
        :item-id-highlight="itemIdHighlight"
        :parent-item-icon="parentItemIcon"
        :child-item-icon="childItemIcon"
        :append-item-icon="appendItemIcon"
        @click-item="emit('clickItem', $event)"
        @click-icon-trash="emit('clickIconTrash', $event)"
      />
    </div>
  </div>
</template>
