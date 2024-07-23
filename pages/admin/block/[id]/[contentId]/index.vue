<script lang="ts" setup>
import { editAdminContentElement, getAdminContentElement } from '@/application/contentService'
import ContentElementFormData from '@/views/pages/admin/common/ContentElementFormData.vue'

definePageMeta({
  layout: 'admin',
  middleware: 'auth',
})

const router = useRouter()
const currentRouteParams = router.currentRoute.value.params as { contentId: number; id: number }
const { data: contentElement } = await useAsyncData('contentElement', async () => getAdminContentElement(currentRouteParams.contentId))

const submit = async (e: any) => {
  if (!contentElement.value) {
    return
  }
  const data = helper.compareAndDeleteUnusedPictureProperties(e, contentElement.value)
  const formData = new FormData()

  Object.keys(data).forEach(key => {
    if (String(data[key]) !== 'undefined') {
      formData.append(key, data[key])
    }
  })

  const result = await editAdminContentElement(currentRouteParams.contentId, formData)
  if (result) {
    navigateTo({ name: 'admin-block-id', params: { id: currentRouteParams.id } })
  }
}
</script>

<template>
  <ContentElementFormData
    v-if="contentElement"
    :content-element-data="contentElement"
    @change="submit"
  >
    <template #title>
      Редактировать страницу
    </template>
  </ContentElementFormData>
</template>
