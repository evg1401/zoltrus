<script lang="ts" setup>
import CatalogMenuMob from "./CatalogMenuMob.vue";
import HeaderContactLine from "./HeaderContactLine.vue";
import SearchField from "@/views/components/search/SearchField.vue";
import type { Link } from "@/interfaces";

interface Emit {
  (e: "clickUpperLinks", value: Link): void;
}
const emit = defineEmits<Emit>();

const dialogVisible = ref(false);
</script>

<template>
  <VContainer>
    <VRow>
      <VCol>
        <HeaderContactLine
          v-model:dialog-visible="dialogVisible"
          @click-upper-links="emit('clickUpperLinks', $event)"
        />
      </VCol>

      <VCol cols="12">
        <SearchField />
      </VCol>
    </VRow>
    <VDialog
      v-model="dialogVisible"
      fullscreen
      :scrim="false"
      transition="dialog-bottom-transition"
    >
      <CatalogMenuMob v-model:dialog-visible="dialogVisible" />
    </VDialog>
  </VContainer>
</template>
