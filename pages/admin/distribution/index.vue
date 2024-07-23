<script lang="ts" setup>
import { getDistributortList } from "@/application/distributorService";
import type { DeepReadonly } from "vue";
import TableToolbar from "@/views/components/common/TableToolbar.vue";

definePageMeta({
  layout: "admin",
  middleware: "auth",
});

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

  {
    title: "",
    align: "start",
    key: "actions",
    sortable: false,
  },
];

const router = useRouter();
const currentRouteParams = router.currentRoute.value.params as { id: number };
const { data: distributorList, pending } = await useAsyncData(
  "distributorList",
  async () => await getDistributortList(),
  { server: false }
);
</script>

<template>
  <VCard flat border>
    <VCardText>
      <VDataTableVirtual
        items-per-page-text="Элементов на странице:"
        fixed-header
        :headers="headers"
        :items="distributorList ?? []"
        :loading="pending"
        loading-text="загрузка..."
        no-data-text="список пуст"
        hover
        :search="searchField"
        :height="`calc(${windowHeight}px - 15rem)`"
        class="border"
      >
        <template #top>
          <TableToolbar title="Список дистрибьюторов">
            <template #default>
              <div class="d-flex align-center justify-end mx-3">
                <VBtn
                  prepend-icon="tabler-user-pin"
                  size="small"
                  class="mr-2"
                  @click="
                    navigateTo({
                      name: 'admin-distribution-create',
                      params: currentRouteParams,
                    })
                  "
                >
                  создать дистрибьютора
                </VBtn>

                <VTextField
                  v-model="searchField"
                  clearable
                  placeholder="поиск"
                  class="form-width"
                  style="min-width: 300px"
                />
              </div>
            </template>
          </TableToolbar>
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
                  name: 'admin-distribution-id',
                  params: { id: item.id },
                })
              "
            />
          </div>
        </template>
      </VDataTableVirtual>
    </VCardText>
  </VCard>
</template>
