<script lang="ts" setup>
import type { Ref } from 'vue'
import { computed, ref, toRefs, watch } from 'vue'
import type { RouteLocationNormalizedLoaded } from 'vue-router'
import helper from '@/utils/helper'

interface Props {
  articleItems: ContentElementProduct
}

const props = defineProps<Props>()
const { articleItems } = toRefs(props)
const router = useRouter()

const pages: Ref<CatalogElement[][]> = ref([])
const currentPage: Ref<number> = ref(1)
const isPushNextPage: Ref<boolean> = ref(false)
const products: Ref<any[]> = ref([])
const url: Ref<{ [key: string]: string | undefined }> = ref({})
const imageError = process.env.NO_IMAGE
const paginationPageSize = ref(12)

pages.value = helper.paginateArray<CatalogElement>(
  articleItems.value.items,
  paginationPageSize.value,
)

const routing = (p: number): void => {
  router.replace({
    path: router.currentRoute.value.path,
    query: { p },
  })
}

const updateProductData = (value: number | null): void => {
  if (value !== null && value > pages.value.length) {
    routing(1)

    return
  }
  const currentPageIndex = typeof value === 'number' ? value - 1 : 0
  const currentPageElements = pages.value[currentPageIndex] || []

  if (currentPageElements.length > 0) {
    currentPageElements.forEach(element => {
      url.value[element?.xmlId] = element?.isPhoto
        ? `${process.env.IMAGE_URL}${Number.parseInt(element?.xmlId)}.jpg`
        : process.env.NO_IMAGE
    })

    products.value = isPushNextPage.value
      ? [...products.value, ...currentPageElements]
      : currentPageElements
  }
  if (!isPushNextPage.value) {
    window.scrollTo(0, 0)
  }

  routing(value ?? 1)
}

const setCurrentPageFromRequest = (
  newValue: RouteLocationNormalizedLoaded,
): void => {
  if (
    newValue.query?.p
    && (typeof newValue.query?.p === 'string'
      || typeof newValue.query?.p === 'number')
  ) {
    currentPage.value = !Number.isNaN(Number.parseInt(newValue.query.p, 10))
      ? Number.parseInt(newValue.query.p, 10)
      : 1
  }
}

const totalCount = computed(() => {
  return pages.value.length
})

const dataMeta = computed(() => {
  return {
    length: totalCount.value,
  }
})

watch(currentPage, updateProductData, { immediate: true })
watch(router.currentRoute, setCurrentPageFromRequest, { immediate: true })
</script>

<template>
  <VRow>
    <VCol
      v-for="product in products"
      :key="product.id"
      xl="3"
      lg="3"
      md="3"
      class="d-flex align-start"
      :class="{
        'justify-center':
          pages[currentPage - 1]?.length > 2
          && pages[currentPage - 1]?.length % 2 === 0,
      }"
    >
      <VCard
        border
        flat
        width="300"
      >
        <VImg
          height="200"
          :lazy-src="url[product?.xmlId]"
          :src="url[product?.xmlId]"
          :title="product.productName"
          @error="url[product?.xmlId] = imageError ?? ''"
        >
          <template #placeholder>
            <div class="d-flex align-center justify-center fill-height">
              <VProgressCircular
                color="grey-lighten-4"
                indeterminate
              />
            </div>
          </template>
        </VImg>
        <VCardTitle
          :title="product.productName"
          style="height: 100px"
        >
          <h5 class="text-wrap">
            {{ product.productName }}
          </h5>
        </VCardTitle>
        <VCardText class="d-flex flex-column">
          <div>
            <span>
              Кат.номер:
              <b>
                {{ product.article }}
              </b>
            </span>
          </div>
          <div>
            <span>
              Производитель:
              <b>
                {{ product.brand }}
              </b>
            </span>
          </div>
          <div>
            <span>
              Код:
              <b>
                {{ product.xmlId }}
              </b>
            </span>
          </div>
        </VCardText>
      </VCard>
    </VCol>
    <VCol
      v-if="dataMeta.length > 1"
      cols="12"
    >
      <VRow justify="center">
        <VCol cols="6">
          <VBtn
            v-if="dataMeta.length !== currentPage"
            v-ripple.center
            variant="outlined"
            color="secondary"
            class="w-100"
            @click="(currentPage += 1), (isPushNextPage = true)"
          >
            показать ещё
          </VBtn>

          <VBtn
            v-else
            v-ripple.center
            variant="outlined"
            color="secondary"
            class="w-100"
            @click="(currentPage = 1), (isPushNextPage = false)"
          >
            в начало
          </VBtn>
        </VCol>

        <VCol cols="12">
          <VPagination
            v-model="currentPage"
            :length="dataMeta.length"
            variant="flat"
            @update:model-value="isPushNextPage = false"
          />
        </VCol>
      </VRow>
    </VCol>
  </VRow>
</template>
