<script lang="ts" setup>
import ViewCardMenuList from '@/views/pages/catalog/menu/ViewCardMenuList.vue'
import { fetchMenuItems, getCatalogMeta } from '@/application/catalogService'

const { data: fetchedData } = await useAsyncData('fetchedData', async () => {
  const [menuCardItems, catalogMeta] = await Promise.all([fetchMenuItems(), getCatalogMeta()])

  return { menuCardItems, catalogMeta }
})

useHead({
  title: fetchedData.value?.catalogMeta?.metaTitle,
})
</script>

<template>
  <VContainer>
    <VRow>
      <VCol>
        <h1>
          Каталог
        </h1>
      </VCol>
    </VRow>
    <VRow v-if="fetchedData?.menuCardItems">
      <!--
        <VCol :class="columnStyleComputed">
        <SideMenu
        :menu-card-items="menuCardItems"
        @update-selected-nav-menu-id="selectMenuItem"
        >
        <template #prepend="{ menuItem, isSelectedMenuItem }">
        <IconCard
        :id="menuItem.alias"
        :is-hovering="isSelectedMenuItem"
        :style="iconStyle"
        />
        </template>
        </SideMenu>
        </VCol>
        <VCol cols="9">
      -->
      <VCol>
        <ViewCardMenuList :menu-items="fetchedData.menuCardItems" />
      </VCol>
    </VRow>
  </VContainer>
</template>

<style lang="scss" scoped>
.compact-width {
  max-width: 100px;
}
</style>
