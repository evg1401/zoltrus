<script lang="ts" setup>
import type { ContentElement, TableItems } from '@/interfaces'

interface Props {
  articleList: TableItems<ContentElement>
  sortModel: any[]
}

const props = defineProps<Props>()
const route = useRoute()
const router = useRouter()
const { articleList } = toRefs(props)

const url: Ref<{ [key: string]: string }> = ref({})
const imageError = process.env.NO_IMAGE ?? ''

watch(
  articleList,
  (newValue: { items: any[] }) => {
    if (newValue.items.length > 0) {
      newValue.items.forEach(element => {
        url.value[element.alias] = element.previewPicture?.path ?? imageError
      })
    }
  },
  { deep: true, immediate: true },
)
</script>

<template>
  <VCard
    flat
    class="card-height-full overflow-y-auto"
  >
    <VCardText>
      <VRow>
        <VCol
          v-for="item in articleList.items"
          :key="item.alias"
          xl="3"
          lg="3"
          md="3"
          class="d-flex align-start"
          :class="{
            'justify-center': articleList.items.length > 2,
          }"
        >
          <VCard
            border
            flat
            width="280"
            class="h-100"
          >
            <VImg
              min-height="115"
              :lazy-src="url[item.alias]"
              :src="url[item.alias]"
              :title="item.previewText"
              class="cursor-pointer"
              @error="url[item.alias] = imageError"
              @click="
                router.push({
                  name: `${String(route.name)}-alias`,
                  params: { alias: item.alias },
                })
              "
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
              :title="item.name"
              class="card-title-height"
            >
              <div class="text-wrap">
                {{ item.name }}
              </div>
            </VCardTitle>

            <VCardActions>
              <slot
                name="actions"
                :item="item"
              />
            </VCardActions>
          </VCard>
        </VCol>
      </VRow>
    </VCardText>
    <slot name="pagination" />
  </VCard>
</template>

<style lang="scss" scoped>
.card-title-height {
  padding: 8px;
  font-size: 16px;
  line-height: 21px;
  height: 5.7rem;
}
</style>
