<script lang="ts" setup>
import type { DeepReadonly } from "vue";
import { getAdminOrdersPriceList } from "@/application/appService";
import TableToolbar from "@/views/components/common/TableToolbar.vue";
import TablePageInfo from "@/views/components/common/TablePageInfo.vue";

definePageMeta({
  layout: "admin",
  middleware: "auth",
});

const { height: windowHeight } = useWindowSize();

const headers: DeepReadonly<any[]> = [
  {
    title: "Компания",
    align: "start",
    key: "company",
  },
  {
    title: "Город",
    align: "start",
    key: "city",
  },
  {
    title: "Email",
    align: "start",
    key: "email",
    sortable: false,
  },
  {
    title: "Дата создания",
    align: "start",
    key: "createdAt",
  },
];

const { data: ordersPriceList, pending } = await useAsyncData(
  "ordersPriceList",
  async () => getAdminOrdersPriceList()
);
</script>

<template>
  <VCard>
    <VCardText v-if="ordersPriceList">
      <VDataTable
        v-model:items-per-page="ordersPriceList.paginationPageSize"
        items-per-page-text="Элементов на странице:"
        fixed-header
        :headers="headers"
        :items="ordersPriceList.ordersPrice"
        :loading="pending"
        loading-text="загрузка..."
        no-data-text="список пуст"
        hover
        :height="`calc(${windowHeight}px - 19rem)`"
      >
        <template #top>
          <TableToolbar>
            <template #default>
              <VTextField
                v-model="ordersPriceList.searchQuery"
                placeholder="поиск"
                class="form-width mx-2 my-2"
                style="min-width: 300px"
              />
            </template>
          </TableToolbar>
        </template>

        <template #bottom>
          <VDivider />

          <TablePageInfo
            v-if="ordersPriceList.dataMeta"
            :data-meta="ordersPriceList.dataMeta"
            :current-page="ordersPriceList.currentPage"
            :pagination-page-size="ordersPriceList.paginationPageSize"
            :pagesize="[50, 100]"
            class="py-3 px-3"
            @change="Object.assign(ordersPriceList, $event)"
          />
        </template>

        <template #item.createdAt="{ item }">
          {{ helper.formatDate(item.createdAt) }}
        </template>
      </VDataTable>
    </VCardText>
  </VCard>
</template>
