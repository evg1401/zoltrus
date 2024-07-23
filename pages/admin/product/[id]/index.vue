<script lang="ts" setup>
import { editAdminProduct, getAdminProductById } from '@/application/productService'
import type { Product } from '@/interfaces'
import ProductFormData from '@/views/pages/admin/common/ProductFormData.vue'

definePageMeta({
  layout: 'admin',
  middleware: 'auth',
})

const router = useRouter()

const currentRouteParams = router.currentRoute.value.params as {
  id: number
}

const { data: product, refresh } = await useAsyncData('product', async () =>
  getAdminProductById(currentRouteParams.id),
)

const submit = async (e: Partial<Product>) => {
  if (!product.value) {
    return
  }
  const data = helper.compareAndDeleteUnusedPictureProperties(e, product.value)
  const formData = new FormData()

  Object.keys(data).forEach(key => {
    if (String(data[key]) !== 'undefined') {
      formData.append(key, data[key])
    }
  })

  const result = await editAdminProduct(
    currentRouteParams.id,
    formData,
  )

  if (result) {
    refresh()

    navigateTo({
      name: 'admin-product',
    })
  }
}
</script>

<template>
  <ProductFormData
    v-if="product"
    :product-data="product"
    @change="submit"
  >
    <template #title>
      Редактировать товар
    </template>
  </ProductFormData>
</template>
