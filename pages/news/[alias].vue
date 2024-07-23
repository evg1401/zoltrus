<script lang="ts" setup>
import { getContentElementByAlias } from '@/application/contentService'

const route = useRoute()

const currentRouteParams = route.params as { alias: string }
const url: Ref<string> = ref('')
const imageError = process.env.NO_IMAGE ?? ''

const { data: contentElement } = await useAsyncData('contentElement', async () => getContentElementByAlias(currentRouteParams.alias), { server: false })

const getImageError = () => {
  url.value = imageError
}

watchEffect(() => {
  url.value = contentElement.value?.detailPicture?.path ?? imageError
})
</script>

<template>
  <VContainer>
    <VCard
      v-if="contentElement"
      flat
    >
      <VCardTitle>
        <VBtn
          v-ripple.center
          variant="elevated"
          class="px-2"
          @click="navigateTo({ name: 'news' })"
        >
          <VIcon size="24">
            <Icon icon="heroicons:chevron-left" />
          </VIcon>
          назад
        </VBtn>

        <h1
          class="text-wrap mt-3"
          style="font-size: 1.25rem;"
        >
          {{ contentElement.name }}
        </h1>
      </VCardTitle>

      <VCardText>
        <VRow>
          <VCol
            xl="3"
            md="6"
            sm="12"
          >
            <VImg
              min-width="300"
              class="rounded"
              cover
              :src="url"
              :lazy-src="url"
              @error="getImageError"
            />
          </VCol>
          <VCol
            xl="9"
            sm="12"
          >
            <Markdown
              html
              :source="contentElement.detailText ?? ''"
            />
          </VCol>
        </VRow>
      </VCardText>
    </VCard>
  </VContainer>
</template>
