<script lang="ts" setup>
import HeaderContactLine from "./HeaderContactLine.vue";
import CatalogMenu from "@/layouts/components/header/CatalogMenu.vue";
import SearchField from "@/views/components/search/SearchField.vue";
import { menuLinks } from "@/navigation/default";
import downCatalog from "@images/icons/header/down-catalog.svg";
import downPhotoBase from "@images/icons/header/down-photo-base.svg";
import type { Link } from "@/interfaces";

interface Emit {
  (e: "clickUpperLinks", value: Link): void;
}

const emit = defineEmits<Emit>();

const path = "/files";
const pathToCatalog = `${path}/catalog/Каталог_ZOLT.pdf`;
const pathToPhotoArchive = `${path}/photo-archive/фотобаза_ZOLT.zip`;

const { width: winWidth } = useWindowSize();
const isLimitWidthComputed = computed(() => winWidth.value > 1290);
</script>

<template>
  <VContainer>
    <VRow v-if="isLimitWidthComputed">
      <VCol
        v-for="(item, i) in menuLinks"
        :key="i"
        class="d-flex justify-space-around"
      >
        <VHover>
          <template #default="{ isHovering, props }">
            <NuxtLink
              :to="{ path: item.page ?? '' }"
              @click="emit('clickUpperLinks', item)"
            >
              <span
                v-bind="props"
                :class="isHovering ? 'text-primary' : 'text-def-text-color'"
                style="font-size: 0.85rem"
              >
                {{ item.title }}
              </span>
            </NuxtLink>
          </template>
        </VHover>
      </VCol>
    </VRow>
    <HeaderContactLine />
    <VRow align="center">
      <VCol xl="2" lg="2" md="4" sm="6">
        <CatalogMenu />
      </VCol>

      <VCol xl="7" lg="7" md="5" sm="6">
        <SearchField />
      </VCol>

      <VCol
        xl="3"
        lg="3"
        md="3"
        sm="6"
        class="d-flex align-center justify-space-between"
      >
        <div class="d-flex mr-1">
          <VImg width="18" height="18" :src="downPhotoBase" class="mr-1" />

          <small class="cursor-pointer">
            <a :href="pathToPhotoArchive" download class="link-down">
              <b>Скачать фотобазу</b>
            </a>
          </small>
        </div>

        <div class="d-flex">
          <VImg width="18" height="18" :src="downCatalog" class="mr-1" />

          <small class="cursor-pointer">
            <a :href="pathToCatalog" target="_blank" class="link-down">
              <b>Скачать каталог</b>
            </a>
          </small>
        </div>
      </VCol>
    </VRow>
  </VContainer>
</template>

<style lang="scss" scoped>
.link-down {
  color: inherit;
}
</style>
