<script lang="ts" setup>
import type { CatalogCard } from '@/interfaces'

/**
 * Компонент "боковое меню"
 * @prop {CatalogCard[]} menuCardItems - список меню
 * @emit {number} updateSelectedNavMenuId - Событие выбранного пункта меню
 * @slot - место для вставки контента перед пунктом меню
 */

// interface Emit {
//   (e: 'updateSelectedNavMenuAlias', val: string | null): void
// }
interface Props {
  menuCardItems: CatalogCard[]
}

const props = defineProps<Props>()

// const emit = defineEmits<Emit>()
const router = useRouter()
const { width: windowWidth } = useWindowSize()
const { menuCardItems } = toRefs(props)
const isFullCurrentWidth = computed(() => windowWidth.value > 890)

const currentRouteParams = router.currentRoute.value.params as { alias: string }
const selectedIdMenuItem: Ref<string | null> = ref(currentRouteParams.alias ?? null)

const selectMenuItem = (e: string | null) => {
  selectedIdMenuItem.value = e

  // emit('updateSelectedNavMenuAlias', e)
}

const isSelectedMenuItem = (e: string) => selectedIdMenuItem.value === e
</script>

<template>
  <VCard v-if="menuCardItems">
    <VList
      v-for="card in menuCardItems"
      :key="card.alias"
    >
      <VListItem
        variant="plain"
        @click="selectMenuItem(card.alias)"
      >
        <div class="d-flex flex-row align-center justify-space-between">
          <div class="d-flex flex-row align-center">
            <span
              class="mr-2"
              :title="card.name"
            >
              <slot
                name="prepend"
                :menu-item="card"
                :card-id="card.id"
                :is-selected-menu-item="isSelectedMenuItem(card.alias)"
              />
            </span>
            <span
              v-if="isFullCurrentWidth"
              class="text-black"
            >
              {{ card.name }}
            </span>
          </div>
          <span
            v-if="card.children.length > 0 && isSelectedMenuItem(card.alias) && isFullCurrentWidth"
            @click.stop="selectMenuItem(null)"
          >
            <VIcon
              size="20"
              color="black"
            >
              <Icon icon="iconamoon:close" />
            </VIcon>
          </span>
        </div>

        <VExpandTransition v-if="card.children.length > 0 && isFullCurrentWidth">
          <div v-show="isSelectedMenuItem(card.alias)">
            <VListItem
              v-for="(subItem, i) in card.children"
              :key="i"
              variant="flat"
            >
              <div class="mt-1 style-title">
                {{ subItem.name }}
              </div>
            </VListItem>
          </div>
        </VExpandTransition>
      </VListItem>
    </VList>
  </VCard>
</template>
