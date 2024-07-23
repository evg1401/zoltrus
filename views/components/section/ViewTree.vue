<script lang="ts" setup>
import type { CatalogSection } from '@/interfaces'
import ViewSection from '@/views/components/section/ViewSection.vue'

/**
 * @component
 * ViewTree
 *
 * @prop {CatalogSection[]} tree - Древовидная структура
 * @prop {number} itemIdHighlight - динамический Id (при равенстве с id категории выделяет ее как выбранную)
 * @prop {number[]} targetTreeId - id для выделения ветвей дерева особым цветом
 * @prop {string} parentItemIcon - иконка для обозначения родительских категорий (исп. VIcon)
 * @prop {string} childItemIcon - иконка для обозначения дочерних категорий (исп. VIcon)
 * @prop {string} appendItemIcon - иконка после названия категории (исп. VIcon)
 *
 * @event {object} clickItem
 * Событие, генерируемое при нажатии на категорию
 * @property {CatalogSection} item - возвращает объект выбранной категории
 *
 * @event {object} clickIconTrash
 * Событие, генерируемое при нажатии на иконку appendItemIcon
 * @property {CatalogSection} value - возвращает объект выбранной категории
 */

interface Emit {
  (e: 'clickItem', value: CatalogSection): void
  (e: 'clickIconTrash', value: CatalogSection): void
}

defineProps<{
  tree: CatalogSection[]
  itemIdHighlight?: number
  targetTreeId?: number[]
  parentItemIcon?: string
  childItemIcon?: string
  appendItemIcon?: string
}>()

const emit = defineEmits<Emit>()
</script>

<template>
  <div
    v-for="item in tree"
    :key="item.id"
    class="tree"
    :style="{ '--border-color': targetTreeId?.includes(item.id) ? '#FF6D04' : '#ddd' }"
  >
    <ViewSection
      :item="item"
      :item-id-highlight="itemIdHighlight"
      :parent-item-icon="parentItemIcon"
      :child-item-icon="childItemIcon"
      :append-item-icon="appendItemIcon"
      @click-item="emit('clickItem', $event)"
      @click-icon-trash="emit('clickIconTrash', $event)"
    />
  </div>
</template>

<style lang="scss">
.tree {
  --spacing: 1rem;
  --radius: 10px;
  display: flex;
}

.tree .li {
  display: block;
  position: relative;
  padding-left: calc(2 * var(--spacing) - var(--radius) - 2px);
}

.tree .ul {
  margin-left: calc(var(--radius) - var(--spacing));
  padding-left: 0;
}

.tree .section {
  font-size: 1rem;
  padding: 1px 0 1px 0;
  cursor: pointer;
}

.tree .ul .li {
  border-left: 2px solid var(--border-color);
}

.tree .ul .li:last-child {
  border-color: transparent;
}

.tree .ul .li::before {
  content: "";
  display: block;
  position: absolute;
  top: calc(var(--spacing) / -6);
  left: -2px;
  width: calc(var(--spacing) + 2px);
  height: calc(var(--spacing) + 3px);
  border: solid var(--border-color);
  border-width: 0 0 2px 2px;
}
</style>
