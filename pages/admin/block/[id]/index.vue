<script lang="ts" setup>
import type { DeepReadonly } from 'vue'
import { deleteAdminContentElement, getAdminContentElementList } from '@/application/contentService'

definePageMeta({
  layout: 'admin',
  middleware: 'auth',
})

const dialogVisible: Ref<boolean> = ref(false)

const headers: DeepReadonly<any[]> = [
  {
    title: 'ID',
    align: 'start',
    key: 'id',
  },
  {
    title: 'Активность',
    align: 'start',
    key: 'active',
  },
  {
    title: 'Название категории контент-блока',
    align: 'start',
    key: 'name',
    sortable: false,
  },
  {
    title: 'Внешний код',
    align: 'start',
    key: 'xmlId',
    sortable: false,
  },
  {
    title: 'Начало публикации',
    align: 'start',
    key: 'activeFrom',
  },
  {
    title: 'Завершение публикации',
    align: 'start',
    key: 'activeTo',
  },
  {
    title: '',
    align: 'start',
    key: 'actions',
    sortable: false,
  },
]

const contentId: Ref<number | undefined> = ref()
const router = useRouter()
const currentRouteParams = router.currentRoute.value.params as { id: number }
const { data: content, pending, refresh } = await useAsyncData('content', async () => getAdminContentElementList(currentRouteParams.id))

const onConfirm = async (confirmed: boolean) => {
  if (confirmed && contentId.value) {
    await deleteAdminContentElement(contentId.value, refresh)
  }

  contentId.value = undefined
}

const handleDelete = (id: number) => {
  contentId.value = id
  dialogVisible.value = true
}
</script>

<template>
  <VCard flat>
    <VCardText>
      <VDataTableVirtual
        fixed-header
        :headers="headers"
        :items="content?.contentBlocks"
        :loading="pending"
        item-value="id"
        no-data-text="список пуст"
        hover
      >
        <template #top>
          <h1>Список страниц контент-блока</h1>
          <div class="d-flex justify-end">
            <VBtn
              prepend-icon="tabler-edit"
              size="small"
              class="mr-2"
              @click="navigateTo({ name: 'admin-block-id-edit', params: currentRouteParams })"
            >
              редактировать
            </VBtn>
            <VBtn
              prepend-icon="tabler-brand-pagekit"
              size="small"
              @click="navigateTo({ name: 'admin-block-id-create', params: currentRouteParams })"
            >
              создать страницу
            </VBtn>
          </div>
        </template>

        <template #item.active="{ item }">
          {{ item.active ? 'Активно' : 'Не активно' }}
        </template>

        <template #item.activeFrom="{ item }">
          {{ helper.formatDate(item.activeFrom) }}
        </template>

        <template #item.activeTo="{ item }">
          {{ helper.formatDate(item.activeTo) }}
        </template>

        <template #item.actions="{ item }">
          <div class="d-flex">
            <VBtn
              rounded
              icon="tabler-edit"
              size="small"
              class="mr-2"
              variant="tonal"
              @click="navigateTo({ name: 'admin-block-id-contentId', params: { id: item.blockId, contentId: item.id } })"
            />
            <VBtn
              rounded
              icon="tabler-x"
              size="small"
              variant="tonal"
              @click="handleDelete(item.id)"
            />
          </div>
        </template>
      </VDataTableVirtual>
    </VCardText>

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
          Удаление страницы контент-блока
        </template>
        <template #text>
          Удалить?
        </template>
      </ConfirmAlert>
    </template>
  </VCard>
</template>
