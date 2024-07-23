<script lang="ts" setup>
import {
  deleteAdminCatalogSection,
  editAdminCatalogSection,
  fetchAdminCatalogTree,
  getSectionOfCatalogTreeById,
} from '@/application/catalogService'
import type { CatalogSection } from '@/interfaces'
import { useAppStore, useCatalogStore } from '@/store'
import AdminSectionFormData from '@/views/pages/admin/common/AdminSectionFormData.vue'
import ViewTree from '@/views/components/section/ViewTree.vue'

definePageMeta({
  layout: 'admin',
  middleware: 'auth',
})

const catalogStore = useCatalogStore()
const { getCategoryTree, selectedCategory } = storeToRefs(catalogStore)
const router = useRouter()
const currentRouteParams = router.currentRoute.value.params as { id: string }

const { data: section, refresh: refreshSections } = await useAsyncData(
  'section',
  async () =>
    getSectionOfCatalogTreeById(Number.parseInt(currentRouteParams.id, 10)),
)

const { refresh: refreshTree } = await useAsyncData(async () =>
  fetchAdminCatalogTree({ forceRefresh: true }),
)

const dialogVisible: Ref<boolean> = ref(false)
const sectionId: Ref<number | undefined> = ref()
const hasParentElement: Ref<boolean> = ref(false)

const { isDesktop } = useDevice()
const expandTree: Ref<boolean> = ref(false)

const save = async (e: CatalogSection) => {
  if (!section.value) {
    return
  }
  const data = helper.compareAndDeleteUnusedPictureProperties(e, section.value)
  const formData = new FormData()

  Object.keys(data).forEach(key => {
    if (String(data[key]) !== 'undefined') {
      formData.append(key, data[key])
    }
  })

  await editAdminCatalogSection(
    Number.parseInt(currentRouteParams.id, 10),
    formData,
  )
  refreshSections()
  refreshTree()
}

const handleDelete = ({ id, parentId, active }: CatalogSection) => {
  if (active) {
    const { setError } = useAppStore()

    setError('Нельзя удалить активную категорию')

    return
  }

  dialogVisible.value = true
  hasParentElement.value = !parentId
  sectionId.value = id
}

const onConfirm = async (confirmed: boolean) => {
  if (confirmed && sectionId.value) {
    await deleteAdminCatalogSection(sectionId.value, refreshTree)
  }
}

const selectCategory = (e: CatalogSection) => {
  catalogStore.setCategory(e)
  router.push({
    name: 'admin-section-id',
    params: { id: e.id },
    query: router.currentRoute.value.query,
  })
}

const shouldShowAdminSection = computed(
  () => isDesktop || (!isDesktop && !expandTree.value),
)

const shouldShowTreeView = computed(
  () => isDesktop || (!isDesktop && expandTree.value),
)

onMounted(() => {
  const targetElement = document.getElementById(
    `tree-${currentRouteParams.id}`,
  )

  if (targetElement) {
    // переход к элементу в прокручиваемом списке после закрузки страницы
    targetElement.scrollIntoView({ behavior: 'auto', block: 'center' })
  }
})
</script>

<template>
  <VRow>
    <VCol md="8">
      <VBtn
        v-if="!isDesktop"
        variant="outlined"
        color="secondary"
        class="w-100 text-truncate mb-3"
        size="small"
        @click="expandTree = !expandTree"
      >
        <template #append>
          <VIcon :icon="expandTree ? 'tabler-chevron-up' : 'tabler-chevron-down'" />
        </template>
        <template #prepend>
          <span>{{
            !selectedCategory ? "Выбрать категорию" : selectedCategory.name
          }}</span>
        </template>
      </VBtn>

      <AdminSectionFormData
        v-if="shouldShowAdminSection && section"
        :section-fields="section"
        @save="save"
      >
        <template #title>
          Редактировать категорию
        </template>
      </AdminSectionFormData>
    </VCol>

    <VCol
      v-if="shouldShowTreeView"
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
          <div style="overflow-y: auto; max-height: 83vh;">
            <ViewTree
              :tree="getCategoryTree"
              :item-id-highlight="Number.parseInt(currentRouteParams.id, 10)"
              parent-item-icon="tabler:folder"
              child-item-icon="tabler:folder-open"
              append-item-icon="tabler-trash"
              @click-item="selectCategory"
              @click-icon-trash="handleDelete($event)"
            />
          </div>
        </VCardText>
      </VCard>
    </VCol>
  </VRow>

  <template v-if="dialogVisible">
    <ConfirmAlert
      v-model:dialogVisible="dialogVisible"
      :prop="{
        titleButtomConfirm: 'да',
        titleButtonCancel: 'нет',
        theme: 'warning',
      }"
      @confirm="onConfirm"
    >
      <template #title>
        Удаление категории
      </template>
      <template #text>
        {{
          !hasParentElement
            ? "Удалить категорию?"
            : "Удалить категорию со всеми вложенными категориями?"
        }}
      </template>
    </ConfirmAlert>
  </template>
</template>
