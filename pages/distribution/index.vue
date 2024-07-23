<script lang="ts" setup>
import type { DeepReadonly } from "vue";
import { getDistributortList } from "@/application/distributorService";
import TableToolbar from "@/views/components/common/TableToolbar.vue";
import type { Distributor } from "@/interfaces";

definePageMeta({
  layout: "default",
});

const { isDesktop } = useDevice();
const { height: windowHeight } = useWindowSize();
const searchField: Ref<string> = ref("");

const headers: DeepReadonly<any[]> = [
  {
    title: "Наименование",
    align: "start",
    key: "name",
  },
  {
    title: "Почтовый индекс",
    align: "start",
    key: "index",
    sortable: false,
  },
  {
    title: "Регион",
    align: "start",
    key: "region",
    sortable: false,
  },
  {
    title: "Город",
    align: "start",
    key: "city",
    sortable: false,
  },
  {
    title: "Улица",
    align: "start",
    key: "street",
    sortable: false,
  },
  {
    title: "Телефон",
    align: "start",
    key: "phone",
    sortable: false,
  },
  {
    title: "Email",
    align: "start",
    key: "email",
    sortable: false,
  },
  {
    title: "Сайт",
    align: "start",
    key: "website",
    sortable: false,
  },
];

const tableStyle = {
  "--form-search-min-width": isDesktop ? "350px" : "250px",
  minHeight: isDesktop ? "550px" : "311px",
};

const { data: distributorList, pending } = await useAsyncData(
  "distributorList",
  async () => await getDistributortList(),
  { server: false }
);
</script>

<template>
  <VContainer>
    <VCard flat>
      <VCardText>
        <VDataTableVirtual
          id="distributor-table"
          items-per-page-text="Элементов на странице:"
          fixed-header
          :headers="headers"
          :items="(distributorList ?? []) as Distributor[]"
          :loading="pending"
          loading-text="загрузка..."
          no-data-text="список пуст"
          hover
          :search="searchField"
          :height="`calc(${windowHeight}px - 30rem)`"
          :style="tableStyle"
          class="border"
        >
          <template #top>
            <TableToolbar title="Дистрибьюторы">
              <template #default>
                <VTextField
                  v-model="searchField"
                  placeholder="поиск"
                  class="form-width"
                />
              </template>
            </TableToolbar>
          </template>
        </VDataTableVirtual>
      </VCardText>
    </VCard>
  </VContainer>
</template>

<style lang="scss">
#distributor-table {
  --form-search-min-width: 350px;

  .v-data-table-header__content {
    font-size: 11px;
    font-weight: 600;
    width: 100%;
  }

  .form-width {
    min-width: var(--form-search-min-width);
    padding: 8px 0 8px 0;
    margin: 0 8px 0 8px;
  }
}
</style>
