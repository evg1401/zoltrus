<script lang="ts" setup>
import { createAdminBanner } from '@/application/bannerService'
import AdminBannerFormData from '@/views/components/admin-banner/AdminBannerFormData.vue'

definePageMeta({
  layout: 'admin',
  middleware: 'auth',
})

const bannerFields: Ref = ref({
  active: false,
  sort: 0,
  activeFrom: null,
  activeTo: null,
  url: null,
  type: 'main',

  file: null,
})

const submit = async () => {
  const formData = new FormData()

  Object.keys(bannerFields.value).forEach(key => {
    if (String(bannerFields.value[key]) !== 'undefined') {
      formData.append(key, bannerFields.value[key])
    }
  })

  const result = await createAdminBanner(formData)
  if (result) {
    navigateTo({ name: 'admin-banner' })
  }
}
</script>

<template>
  <div>
    <VCard>
      <VRow>
        <VCol class="d-flex justify-end">
          <VBtn
            variant="outlined"
            style="height: 45px; margin-right: 7px;"
            @click="navigateTo({ name: 'admin-banner' })"
          >
            <span>отмена</span>
          </VBtn>
          <VBtn
            variant="flat"
            style="height: 45px;"
            @click="submit"
          >
            <span>сохранить</span>
          </VBtn>
        </VCol>
      </VRow>
    </VCard>

    <h1 class="mt-4 mb-2">
      Создать баннер
    </h1>

    <VCard border>
      <VCardText>
        <AdminBannerFormData
          :banner-fields="bannerFields"
          @update="Object.assign(bannerFields, $event)"
        />
      </VCardText>
    </VCard>
  </div>
</template>
