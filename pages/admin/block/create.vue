<script lang="ts" setup>
import ContentBlockFormData from '@/views/pages/admin/common/ContentBlockFormData.vue'
import { createAdminContentBlock, getAdminBlockList } from '@/application/contentService'

definePageMeta({
  layout: 'admin',
  middleware: 'auth',
})

const submit = async (e: any) => {
  const formData = new FormData()

  Object.keys(e).forEach(key => {
    if (String(e[key]) !== 'undefined') {
      formData.append(key, e[key])
    }
  })

  const result = await createAdminContentBlock(formData)
  if (result) {
    await getAdminBlockList({ isReload: true })

    navigateTo({ name: 'admin-block-id', params: { id: result.id } })
  }
}
</script>

<template>
  <ContentBlockFormData @change="submit">
    <template #title>
      Создать контент-блок
    </template>
    <template #buttonSave>
      создать
    </template>
  </ContentBlockFormData>
</template>
