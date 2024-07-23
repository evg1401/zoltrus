<script lang="ts" setup>
import { editAdminContentBlock, getAdminBlockList, getAdminContentBlock } from '@/application/contentService'
import type { BlockFormData } from '@/interfaces'
import ContentBlockFormData from '@/views/pages/admin/common/ContentBlockFormData.vue'

definePageMeta({
  layout: 'admin',
  middleware: 'auth',
})

const router = useRouter()
const currentRouteParams = router.currentRoute.value.params as { id: number }
const { data: contentBlock } = await useAsyncData('contentBlock', async () => getAdminContentBlock(currentRouteParams.id))

const submit = async (e: BlockFormData) => {
  if (!contentBlock.value) {
    return
  }
  const data = helper.compareAndDeleteUnusedPictureProperties(e, contentBlock.value)
  const formData = new FormData()

  Object.keys(data).forEach(key => {
    if (String(data[key]) !== 'undefined') {
      formData.append(key, data[key])
    }
  })


  const result = await editAdminContentBlock(currentRouteParams.id, formData)
  if (result) {
    await getAdminBlockList({ isReload: true })

    navigateTo({ name: 'admin-block-id', params: { id: currentRouteParams.id } })
  }
}
</script>

<template>
  <ContentBlockFormData
    v-if="contentBlock"
    :block-data="contentBlock"
    @change="submit"
  >
    <template #title>
      Редактировать контент-блок
    </template>
  </ContentBlockFormData>
</template>
