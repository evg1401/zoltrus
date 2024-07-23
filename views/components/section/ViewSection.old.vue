<script lang="ts" setup>
import type { CatalogSection } from '@/interfaces'

interface Emit {
  (e: 'edit', value: CatalogSection): void
  (e: 'delete', value: { id: number; parentId?: number }): void
}

const props = defineProps<{ item: CatalogSection }>()
const emit = defineEmits<Emit>()

const toggleStateId: Ref<{ [key: number]: number | undefined }> = ref({})
const isHasChildElement = computed(() => props.item.children.length > 0)
</script>

<template>
  <div class="li">
    <div class="d-flex align-center">
      <div
        :class="{ 'cursor-pointer': isHasChildElement }"
        class="summary"
        @click="
          !toggleStateId[item.id]
            ? (toggleStateId[item.id] = item.id)
            : (toggleStateId[item.id] = undefined)
        "
      >
        <VIcon
          :icon="
            isHasChildElement && toggleStateId[item.id] !== item.id
              ? 'tabler-plus'
              : 'tabler-minus'
          "
        />
        <VHover>
          <template #default="{ isHovering, props: hoverProps }">
            <span
              v-bind="hoverProps"
              :class="{
                'text-primary':
                  isHasChildElement
                  && (isHovering || toggleStateId[item.id] === item.id),
              }"
            >
              {{ item.name }}
            </span>
          </template>
        </VHover>
      </div>

      <!--
        <VIcon
        icon="tabler-edit"
        color="primary"
        class="ml-2"
        @click.stop="emit('edit', item)"
        />
        <VIcon
        icon="tabler-x"
        color="primary"
        class="ml-2"
        @click.stop="emit('delete', { id: item.id })"
        />
      -->
    </div>

    <VSlideYTransition>
      <div
        v-if="isHasChildElement && toggleStateId[item.id] === item.id"
        class="ul"
      >
        <ViewSection
          v-for="children in item.children"
          :key="children.alias"
          :item="children"
          @delete="emit('delete', $event)"
          @edit="emit('edit', $event)"
        />
      </div>
    </VSlideYTransition>
  </div>
</template>
