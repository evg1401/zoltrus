<script lang="ts" setup>
import {
  getContentBlockByAlias,
  getContentElementList,
} from '@/application/contentService'
import type { ContentBlock } from '@/interfaces'
import BuildArticleList from '@/views/components/article/BuildArticleList.vue'

definePageMeta({
  layout: 'default',
})

const { width: windowWidth } = useWindowSize()

const { data: contentData, pending } = await useAsyncData(
  'contentData',
  async (): Promise<{ block: ContentBlock | undefined; element: any }> => {
    const [element, block] = await Promise.all([
      getContentElementList('news'),
      getContentBlockByAlias('news'),
    ])

    return { block, element }
  },
)

const icon = ['tabler:sort-ascending', 'tabler:sort-descending']

useHead({
  title: contentData.value?.block?.metaTitle,
})
</script>

<template>
  <VContainer>
    <VCard>
      <VCardTitle class="d-flex align-center justify-space-between">
        <h1>{{ contentData?.block?.title }}</h1>
        <VBtn
          v-if="contentData?.element?.sortModel.length > 0"
          variant="plain"
          :ripple="false"
          @click="
            Object.assign(contentData?.element.sortModel[0], {
              sort:
                contentData?.element.sortModel[0].sort === 'asc'
                  ? 'desc'
                  : 'asc',
            })
          "
        >
          <VIcon size="24">
            <Icon
              :icon="
                contentData?.element.sortModel[0].sort === 'asc'
                  ? icon[0]
                  : icon[1]
              "
            />
          </VIcon>
        </VBtn>
      </VCardTitle>
      <VCardText>
        <template v-if="contentData?.element && contentData.element.dataItems.count > 0">
          <BuildArticleList
            :article-list="contentData.element.dataItems"
            :sort-model="contentData.element.sortModel"
            @sort="
              Object.assign(contentData.element.sortModel[0], { sort: $event })
            "
          >
            <template #pagination>
              <div
                v-if="contentData.element.dataMeta.length > 1"
                absolute
                :app="windowWidth > 960"
                class="d-flex justify-center"
                style="background-color: transparent"
              >
                <VPagination
                  v-model="contentData.element.currentPage"
                  :length="contentData.element.dataMeta.length"
                  variant="flat"
                  total-visible="5"
                />
              </div>
            </template>

            <template #actions="{ item }">
              <VBtn
                v-ripple.center
                color="primary"
                size="small"
                variant="elevated"
                @click="
                  navigateTo({
                    name: 'news-alias',
                    params: { alias: item.alias },
                  })
                "
              >
                Читать дальше
              </VBtn>
            </template>
          </BuildArticleList>
        </template>
      </VCardText>
    </VCard>

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
  </VContainer>
</template>
