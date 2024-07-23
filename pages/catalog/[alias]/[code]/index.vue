<script lang="ts" setup>
import ProductDetails from '@/views/pages/catalog/code/ProductDetails.vue'
// import ProductInfoTabs from '@/views/pages/catalog/code/ProductInfoTabs.vue'
import { getCatalogByCode } from '@/application/catalogService'
import { useNavStore } from '@/store'

definePageMeta({
  layout: 'default',
})

const navStore = useNavStore()
const router = useRouter()
const { getBreadcrumbs } = storeToRefs(navStore)
const currentRouteParams = router.currentRoute.value.params as { code: string }

const { data: product } = await useAsyncData('product', async () => await getCatalogByCode(currentRouteParams.code))

if (product.value) {
  navStore.setBreadcrumbs([...getBreadcrumbs.value ?? [], { name: product.value?.name, alias: product.value?.alias }])
}

useHead({
  title: product.value?.name,
})

const fields = {
  article: 'Артикул',
  xmlId: 'Код товара',
  quantity: 'Остаток',
}
</script>

<template>
  <VContainer>
    <VRow>
      <VCol>
        <VCard flat>
          <VCardItem v-if="product">
            <ProductDetails
              :product-detail="product"
              :fields-to-display="fields"
            />
          </VCardItem>

          <VCardText>
            <!-- таблица -->
            <!--
              <VRow>
              <VCol>
              <VDataTableVirtual
              :headers="headers"
              loading-text="загрузка..."
              no-data-text="нет данных"
              >
              <template #loader="{ isActive }">
              <VOverlay
              :model-value="isActive"
              class="align-center justify-center"
              >
              <VProgressCircular
              indeterminate
              color="primary"
              size="64"
              />
              </VOverlay>
              </template>
              </VDataTableVirtual>
              </VCol>
              </VRow>
            -->

            <!-- <ProductInfoTabs /> -->
          </VCardText>
        </VCard>
      </VCol>
    </VRow>
  </VContainer>
</template>
