<script lang="ts" setup>
import ViewTree from '../section/ViewTree.vue'
import {
  fetchAdminCatalogTree,
  getSectionOfCatalogTreeById,
} from '@/application/catalogService'
import type { CatalogSection } from '@/interfaces'
import { useCatalogStore } from '@/store'

interface Emit {
  (e: 'change', value: { sectionId: number }): void
}

interface Props {
  inputData: { section: { id: number }; sectionId: number }
}

const props = defineProps<Props>()
const emit = defineEmits<Emit>()
const catalogStore = useCatalogStore()
const { getCategoryTree } = storeToRefs(catalogStore)
const parentSection: Ref<CatalogSection | undefined> = ref()
const targetUsedSectionId: Ref<{ id: number; name: string }[]> = ref([])

const { data: section, refresh } = await useAsyncData('section', async () => {
  const [tree] = await Promise.all([
    getSectionOfCatalogTreeById(props.inputData.section.id),
    fetchAdminCatalogTree({ forceRefresh: true }),
  ])

  return tree
})

const onClickItem = (e: CatalogSection) => {
  parentSection.value = e
  emit('change', { sectionId: e.id })
}

const init = () => {
  if (!section.value) {
    return
  }

  targetUsedSectionId.value = helper.findParentsIdOfSectionTreeById(
    getCategoryTree.value,
    props.inputData.section.id,
  )
  targetUsedSectionId.value.push({
    id: props.inputData.section.id,
    name: section.value.name,
  })
}

init()

watch(
  () => props.inputData.section.id, () => refresh())
watch(section, init)
</script>

<template>
  <VRow>
    <VCol class="d-flex flex-column">
      <VCard
        flat
        border
      >
        <VCardTitle>
          <div>Категории</div>
        </VCardTitle>

        <VCardText>
          <div class="d-flex align-center">
            <b class="mr-2">Текущая категория:</b>
            <template
              v-for="(usedSection, i) in targetUsedSectionId"
              :key="i"
            >
              <VIcon
                v-if="i > 0"
                size="small"
                icon="tabler-chevron-right"
              />
              <span>
                <VIcon>
                  <Icon :icon="i > 0 ? 'tabler:folder' : 'tabler:folder-open'" />
                </VIcon>
                {{ usedSection.name.toLowerCase() }}
              </span>
            </template>
          </div>
          <div class="d-flex align-center my-3">
            <template v-if="!parentSection">
              <b>Выберите категорию для перемещения товара</b>
            </template>
            <template v-else>
              <b class="mr-2">Переместить в:</b>
              <span>
                <VIcon>
                  <Icon icon="tabler:folder" />
                </VIcon>
                {{ parentSection.name.toLowerCase() }}
              </span>
            </template>
          </div>
        </VCardText>
      </VCard>
    </VCol>

    <VCol
      xl="4"
      lg="4"
      md="4"
      cols="12"
    >
      <VCard
        flat
        border
      >
        <VCardText>
          <div style="overflow-y: auto; max-height: 72vh">
            <ViewTree
              :tree="getCategoryTree"
              :target-tree-id="targetUsedSectionId.map((x) => x.id)"
              :item-id-highlight="inputData.sectionId"
              parent-item-icon="tabler:folder"
              child-item-icon="tabler:folder-open"
              @click-item="onClickItem"
            />
          </div>
        </VCardText>
      </VCard>
    </VCol>
  </VRow>
</template>
