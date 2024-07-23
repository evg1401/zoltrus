<script lang="ts" setup>
import BuildProductList from "./list/BuildProductList.vue";
import type { Catalog, Table } from "@/interfaces";

interface Props {
  catalogListData: Table<Catalog>;
  isLoading: boolean;
}

interface Emit {
  (e: "paginate", value: any): void;
}

const props = defineProps<Props>();
const emit = defineEmits<Emit>();
const { catalogListData } = toRefs(props);
const { width: windowWidth } = useWindowSize();
</script>

<template>
  <div>
    <template v-if="catalogListData && catalogListData.dataItems.count > 0">
      <BuildProductList :products="catalogListData.dataItems">
        <template #pagination>
          <div
            v-if="catalogListData.dataMeta.length > 1"
            absolute
            :app="windowWidth > 960"
            class="d-flex justify-center my-2"
            style="background-color: transparent"
          >
            <VPagination
              :model-value="catalogListData.currentPage"
              :length="catalogListData.dataMeta.length"
              variant="flat"
              total-visible="5"
              @update:model-value="emit('paginate', $event)"
            />
          </div>
        </template>
      </BuildProductList>
    </template>

    <template v-else>
      <div class="text-center">В категории нет товаров</div>
    </template>

    <template v-if="isLoading">
      <VOverlay :model-value="isLoading" class="align-center justify-center">
        <VProgressCircular indeterminate color="primary" size="64" />
      </VOverlay>
    </template>
  </div>
</template>
