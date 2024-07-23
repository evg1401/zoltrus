<script lang="ts" setup>
import type { DeepReadonly } from "vue";
import { getAdminPartnershipRequestsList } from "@/application/partnershipService";
import TableToolbar from "@/views/components/common/TableToolbar.vue";
import TablePageInfo from "@/views/components/common/TablePageInfo.vue";

definePageMeta({
  layout: "admin",
  middleware: "auth",
});

const { height: windowHeight } = useWindowSize();

const headers: DeepReadonly<any[]> = [
  {
    title: "Организация",
    align: "start",
    key: "company",
  },
  {
    title: "ФИО",
    align: "start",
    key: "firstName",
  },
  {
    title: "Город",
    align: "start",
    key: "city",
  },
  {
    title: "Номер телефона",
    align: "start",
    key: "phone",
    sortable: false,
  },
  {
    title: "e-mail",
    align: "start",
    key: "email",
    sortable: false,
  },
  {
    title: "Доп. информация",
    align: "start",
    key: "additional",
    sortable: false,
  },
  {
    title: "Дата создания",
    align: "start",
    key: "createdAt",
  },
];

const { data: partnershipList, pending } = await useAsyncData(
  "partnershipList",
  async () => getAdminPartnershipRequestsList()
);
</script>

<template>
  <VCard>
    <VCardText v-if="partnershipList">
      <VDataTable
        v-model:items-per-page="partnershipList.paginationPageSize"
        items-per-page-text="Элементов на странице:"
        fixed-header
        :headers="headers"
        :items="partnershipList.partnerships"
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
                v-model="partnershipList.searchQuery"
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
            v-if="partnershipList.dataMeta"
            :data-meta="partnershipList.dataMeta"
            :current-page="partnershipList.currentPage"
            :pagination-page-size="partnershipList.paginationPageSize"
            :pagesize="[50, 100]"
            class="py-3 px-3"
            @change="Object.assign(partnershipList, $event)"
          />
        </template>

        <template #item.createdAt="{ item }">
          {{ helper.formatDate(item.createdAt) }}
        </template>
      </VDataTable>
    </VCardText>
  </VCard>
</template>
