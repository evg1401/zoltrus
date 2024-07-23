<script lang="ts" setup>
import { ref } from 'vue'
import { fetchMenuItems } from '@/application/catalogService'
import ViewCardIcon from '@/views/components/nav-icons/ViewCardIcon.vue'

interface Emit {
  (e: 'update:dialogVisible', value: boolean): void
}

const emit = defineEmits<Emit>()
const { data: catalogCards } = await useAsyncData('catalogCards', fetchMenuItems)

const selectedIdMenuItem: Ref<number | null> = ref(null)
const iconStyle = { height: '35px', width: '35px' }

const selectMenuItem = (e: number | null) => {
  selectedIdMenuItem.value = e
}

const isSelectedMenuItem = (e: number) => selectedIdMenuItem.value === e
const closeDialog = () => emit('update:dialogVisible', false)

const handleClick = (e: string | null) => {
  if (!e) {
    return
  }

  navigateTo({ name: 'catalog-alias', params: { alias: e } })
  closeDialog()
}
</script>

<template>
  <VCard
    v-if="catalogCards"
    flat
  >
    <VCardTitle>
      Каталог
    </VCardTitle>
    <VList
      v-for="card in catalogCards"
      :key="card.id"
      density="compact"
      class="py-0"
    >
      <VHover>
        <template #default="{ isHovering, props }">
          <VListItem
            v-bind="props"
            variant="plain"
            @click="selectMenuItem(card.id), card.children.length === 0 ? handleClick(card.alias) : null"
          >
            <template #prepend>
              <div>
                <ViewCardIcon
                  :name="card.alias"
                  :style="iconStyle"
                  :is-hovering="isHovering"
                />
              </div>
            </template>

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
                    :is-selected-menu-item="isSelectedMenuItem(card.id)"
                  />
                </span>

                <span class="text-black">
                  {{ card.name }}
                </span>
              </div>
              <span
                v-if="card.children.length > 0 && isSelectedMenuItem(card.id)"
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

            <VExpandTransition v-if="card.children.length > 0">
              <div v-show="isSelectedMenuItem(card.id)">
                <VListItem
                  v-for="(subItem, i) in card.children"
                  :key="i"
                  variant="flat"
                  @click="handleClick(subItem.alias)"
                >
                  <div class="mt-1 style-title">
                    {{ subItem.name }}
                  </div>
                </VListItem>
              </div>
            </VExpandTransition>
          </VListItem>
        </template>
      </VHover>
    </VList>

    <VBtn
      size="x-small"
      variant="outlined"
      @click="closeDialog"
    >
      закрыть
    </VBtn>
  </VCard>
</template>
