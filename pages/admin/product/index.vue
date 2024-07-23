<script lang="ts" setup>
import type { DeepReadonly } from "vue";
import TableToolbar from "@/views/components/common/TableToolbar.vue";
import TablePageInfo from "@/views/components/common/TablePageInfo.vue";
import { getAdminProductList } from "@/application/productService";

definePageMeta({
  layout: "admin",
  middleware: "auth",
});

const { height: windowHeight } = useWindowSize();

const headers: DeepReadonly<any[]> = [
  {
    title: "ID",
    align: "start",
    key: "id",
  },
  {
    title: "Активность",
    align: "start",
    key: "active",
  },
  {
    title: "Категория",
    align: "start",
    key: "section.name",
    sortable: false,
  },
  {
    title: "Наименование",
    align: "start",
    key: "name",
    sortable: false,
  },
  {
    title: "Код товара",
    align: "start",
    key: "xmlId",
    sortable: false,
  },
  {
    title: "Остаток",
    align: "start",
    key: "quantity",
  },
  {
    title: "Артикул",
    align: "start",
    key: "article",
    sortable: false,
  },
  {
    title: "",
    align: "start",
    key: "actions",
    sortable: false,
  },
];

const { data: productList, pending } = await useAsyncData(
  "productList",
  async () => getAdminProductList()
);
</script>

<template>
  <VCard>
    <VCardText v-if="productList">
      <VDataTable
        v-model:items-per-page="productList.paginationPageSize"
        items-per-page-text="Элементов на странице:"
        fixed-header
        :headers="headers"
        :items="productList.products"
        :loading="pending"
        loading-text="загрузка..."
        item-value="id"
        no-data-text="список товаров пуст"
        hover
        :height="`calc(${windowHeight}px - 18.5rem)`"
      >
        <template #top>
          <TableToolbar title="Список товаров">
            <template #default>
              <div class="d-flex align-center justify-end mx-3">
                <VTextField
                  v-model="productList.searchQuery"
                  clearable
                  placeholder="поиск"
                  class="form-width"
                  style="min-width: 300px"
                />
              </div>
            </template>
          </TableToolbar>
        </template>

        <template #bottom>
          <VDivider />

          <TablePageInfo
            v-if="productList.dataMeta"
            :data-meta="productList.dataMeta"
            :current-page="productList.currentPage"
            :pagination-page-size="productList.paginationPageSize"
            :pagesize="[50, 100]"
            class="py-3 px-3"
            @change="Object.assign(productList, $event)"
          />
        </template>

        <template #item.active="{ item }">
          {{ item.active ? "активно" : "не активно" }}
        </template>

        <template #item.actions="{ item }">
          <div class="d-flex">
            <VBtn
              rounded
              icon="tabler-edit"
              size="small"
              class="mr-2"
              variant="tonal"
              @click="
                navigateTo({
                  name: 'admin-product-id',
                  params: { id: item.id },
                })
              "
            />
          </div>
        </template>
      </VDataTable>
    </VCardText>
  </VCard>
</template>
