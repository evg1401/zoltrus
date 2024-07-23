<script lang="ts" setup>
const router = useRouter();

const { name } = router.currentRoute.value;
const query = computed(() => router.currentRoute.value.query);

const clear = () => {
  navigateTo({ name: "search", replace: true });
};

const setQuerySearch = (e: string) => {
  if (e.trim().length === 0) {
    clear();
    return;
  }

  if (name !== "search") {
    navigateTo({ name: "search", query: { s: e } });
  }

  navigateTo({ name: "search", query: { s: e }, replace: true });
};
</script>

<template>
  <VTextField
    :model-value="query.s"
    clearable
    placeholder="введите запрос..."
    @update:model-value="setQuerySearch"
    @click:clear="clear"
  >
    <template #append-inner>
      <VIcon color="primary">
        <Icon icon="iconamoon:search" />
      </VIcon>
    </template>
  </VTextField>
</template>
