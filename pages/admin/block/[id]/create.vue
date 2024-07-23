<script lang="ts" setup>
import ContentElementFormData from '@/views/pages/admin/common/ContentElementFormData.vue'
import { createAdminContentElement } from '@/application/contentService'

definePageMeta({
  layout: 'admin',
  middleware: 'auth',
})

const router = useRouter()
const currentRouteParams = router.currentRoute.value.params as { id: string }

const submit = async (e: any) => {
  const formData = new FormData()

  Object.keys(e).forEach(key => {
    if (String(e[key]) !== 'undefined') {
      formData.append(key, e[key])
    }
  })
  formData.append('blockId', currentRouteParams.id)

  const result = await createAdminContentElement(formData)
  if (result) {
    navigateTo({ name: 'admin-block-id', params: currentRouteParams })
  }
}
</script>

<template>
  <ContentElementFormData @change="submit">
    <template #title>
      Создать страницу
    </template>
    <template #save>
      создать
    </template>
  </ContentElementFormData>
</template>
