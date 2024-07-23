<script lang="ts" setup>
import ProductList from "@/views/pages/catalog/alias/ProductList.vue";
import ViewCardMenuList from "@/views/pages/catalog/menu/ViewCardMenuList.vue";
import { getCatalogList } from "@/application/catalogService";
import { useNavStore } from "@/store";

const router = useRouter();

definePageMeta({
  layout: "default",
  name: "catalog-alias",
});

const navStore = useNavStore();

const { getSection } = storeToRefs(navStore);

const currentRouteParams = router.currentRoute.value.params as {
  alias: string;
};

const { currentPage, dataMeta, dataItems, sort, getRows } = getCatalogList();

const { pending } = await useAsyncData(
  async () =>
    getRows({
      sectionAlias: currentRouteParams.alias,
      currentPage: currentPage.value,
      sort: sort.value,
    }),
  {
    watch: [sort, currentPage],
  }
);

useHead({
  title: getSection.value?.metaTitle,
});

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
    <VRow>
      <VCol
        v-if="getSection?.name"
        class="d-flex justify-space-between pb-0"
        cols="12"
      >
        <h1 class="w-100">
          {{ getSection.name }}
        </h1>

        <div
          v-if="getSection.childSections.length === 0"
          class="d-flex justify-end w-100"
        >
          <VSelect
            style="max-width: 180px"
            label="Сортировать"
            variant="outlined"
            :items="[
              { title: 'последние поступления', value: 'asc' },
              { title: 'ранние поступления', value: 'desc' },
            ]"
            item-value="value"
            item-title="title"
            class="ml-4"
            clearable
            @update:model-value="sort = $event === 'asc' ? 'desc' : 'asc'"
          />
        </div>
      </VCol>

      <!-- список карт -->
      <VCol
        v-if="getSection?.childSections && getSection.childSections.length > 0"
      >
        <ViewCardMenuList :menu-items="getSection.childSections" is-sub-card />
      </VCol>
      <!-- список товаров -->
      <VCol v-else>
        <ProductList
          :catalog-list-data="{ currentPage, dataMeta, dataItems, sort }"
          :is-loading="pending"
          @paginate="currentPage = $event"
        />
      </VCol>
    </VRow>
  </VContainer>
</template>

<!-- меню слева -->
<!--
        <VCol
        v-if="fetchedData?.menuCardItems && winWidth > 875"
        xl="3"
        lg="3"
        md="5"
        sm="5"
        xs="12"
        >
        <SideMenu :menu-card-items="fetchedData.menuCardItems">
        <template #prepend="{ menuItem, isSelectedMenuItem }">
        <ViewCardIcon
        :name="menuItem.alias"
        :is-hovering="isSelectedMenuItem"
        :style="iconStyle"
        />
        </template>
        </SideMenu>
        </VCol>
      -->
