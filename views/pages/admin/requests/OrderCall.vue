<script lang="ts" setup>
import type { DeepReadonly } from "vue";
import { getAdminOrdersCallList } from "@/application/appService";
import TableToolbar from "@/views/components/common/TableToolbar.vue";
import TablePageInfo from "@/views/components/common/TablePageInfo.vue";

definePageMeta({
  layout: "admin",
  middleware: "auth",
});

const { height: windowHeight } = useWindowSize();

const headers: DeepReadonly<any[]> = [
  {
    title: "ФИО",
    align: "start",
    key: "firstName",
  },
  {
    title: "Номер телефона",
    align: "start",
    key: "phone",
    sortable: false,
  },
  {
    title: "Дата создания",
    align: "start",
    key: "createdAt",
  },
];

const { data: ordersCallList, pending } = await useAsyncData(
  "ordersCallList",
  async () => getAdminOrdersCallList()
);
</script>

<template>
  <VCard>
    <VCardText v-if="ordersCallList">
      <VDataTable
        v-model:items-per-page="ordersCallList.paginationPageSize"
        items-per-page-text="Элементов на странице:"
        fixed-header
        :headers="headers"
        :items="ordersCallList.ordersCall"
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
                v-model="ordersCallList.searchQuery"
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
            v-if="ordersCallList.dataMeta"
            :data-meta="ordersCallList.dataMeta"
            :current-page="ordersCallList.currentPage"
            :pagination-page-size="ordersCallList.paginationPageSize"
            :pagesize="[50, 100]"
            class="py-3 px-3"
            @change="Object.assign(ordersCallList, $event)"
          />
        </template>

        <template #item.createdAt="{ item }">
          {{ helper.formatDate(item.createdAt) }}
        </template>
      </VDataTable>
    </VCardText>
  </VCard>
</template>
