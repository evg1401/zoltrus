<script lang="ts" setup>
import ProductList from "@/views/pages/catalog/alias/ProductList.vue";
import { getCatalogSearchList } from "@/application/catalogService/index";

definePageMeta({
  layout: "default",
});

const router = useRouter();
const searchQuery = computed(() => router.currentRoute.value.query.s ?? "");

const { getRows, currentPage, dataMeta, dataItems, sort } =
  getCatalogSearchList();

const { pending } = await useAsyncData(
  async () =>
    getRows({ searchQuery: searchQuery.value, currentPage: currentPage.value }),
  {
    watch: [searchQuery, currentPage],
    immediate: true,
  }
);

onBeforeMount(async () => {
  if (router.currentRoute.value.query?.p) {
    currentPage.value = parseInt(
      router.currentRoute.value.query.p.toString(),
      10
    );
  }
});
</script>

<template>
  <VContainer>
    <VCard flat>
      <VCardTitle>
        <h2>Поиск</h2>
      </VCardTitle>

      <template v-if="dataItems.count > 0 && searchQuery?.length > 0">
        <VCardSubtitle> Найдено: {{ dataItems.count }} </VCardSubtitle>

        <VCardText>
          <ProductList
            :catalog-list-data="{ currentPage, dataMeta, dataItems, sort }"
            :is-loading="pending"
            @paginate="currentPage = $event"
          />
        </VCardText>
      </template>

      <template v-else>
        <VCardText> поиск не дал результатов </VCardText>
      </template>
    </VCard>
  </VContainer>
</template>
