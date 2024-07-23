<script lang="ts" setup>
import { editAdminBanner, getAdminBannerById } from '@/application/bannerService'
import AdminBannerFormData from '@/views/components/admin-banner/AdminBannerFormData.vue'

definePageMeta({
  layout: 'admin',
  middleware: 'auth',
})

const router = useRouter()
const currentRouteParams = router.currentRoute.value.params as { id: number }
const { data: banner, pending } = await useAsyncData('banner', async () => getAdminBannerById(currentRouteParams.id))

const bannerFields: Ref = ref({
  active: false,
  sort: 0,
  activeTo: null,
  activeFrom: null,
  url: null,
  type: 'main',

  file: null,
})

for (const key in bannerFields.value) {
  // eslint-disable-next-line no-prototype-builtins
  if (bannerFields.value.hasOwnProperty(key) && banner.value?.hasOwnProperty(key)) {
    bannerFields.value[key] = banner.value[key]
  }
}

const submit = async () => {
  const formData = new FormData()

  Object.keys(bannerFields.value).forEach(key => {
    if (key === 'file' && bannerFields.value.file?.id === banner.value?.file.id) {
      return
    }
    if (String(bannerFields.value[key]) !== 'undefined') {
      formData.append(key, bannerFields.value[key])
    }
  })

  const result = await editAdminBanner(currentRouteParams.id, formData)
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
      Редактировать баннер
    </h1>

    <VCard border>
      <VCardText>
        <AdminBannerFormData
          :is-edit="!isNaN(parseInt(String(banner?.file?.id), 10))"
          :banner-fields="bannerFields"
          @update="Object.assign(bannerFields, $event)"
          @recovery-image="bannerFields.file = banner?.file"
        />
      </VCardText>

      <template v-if="pending">
        <VOverlay
          :model-value="pending"
          class="align-center justify-center"
        >
          <VProgressCircular
            indeterminate
            color="primary"
            size="64"
          />
        </VOverlay>
      </template>
    </VCard>
  </div>
</template>
