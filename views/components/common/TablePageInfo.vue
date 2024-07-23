<script lang="ts" setup>
import type { PaginationData } from "@/interfaces";

type PageInfo = { currentPage: number } | { paginationPageSize: number };

interface Props {
  currentPage: number;
  paginationPageSize: number;
  dataMeta: PaginationData;
  pagesize?: number[];
}
interface Emit {
  (e: "change", value: PageInfo): void;
}

defineProps<Props>();
const emit = defineEmits<Emit>();

const update = (value: PageInfo) => emit("change", value);
</script>

<template>
  <VRow v-if="dataMeta.of > 0" align="center">
    <VCol class="d-flex align-center">
      <span class="mr-2">Элементов на странице:</span>
      <VSelect
        :model-value="
          paginationPageSize >= dataMeta.length
            ? paginationPageSize
            : dataMeta.length
        "
        :items="pagesize ?? [10]"
        :max-width="90"
        density="compact"
        @update:model-value="update({ paginationPageSize: $event })"
      />
    </VCol>

    <VCol>
      <VPagination
        :model-value="currentPage"
        :length="dataMeta.length"
        variant="flat"
        total-visible="8"
        @update:model-value="update({ currentPage: $event })"
      />
    </VCol>

    <VCol class="d-flex justify-end">
      <span>
        Показано с {{ dataMeta.from }} по
        {{ dataMeta.to > dataMeta.of ? dataMeta.of : dataMeta.to }}
        из {{ dataMeta.of }}
        элементов
      </span>
    </VCol>
  </VRow>
</template>
