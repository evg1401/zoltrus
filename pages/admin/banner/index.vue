<script lang="ts" setup>
import { deleteAdminBanner, getAdminBannerList } from '@/application/bannerService'
import BuildBannerList from '@/views/pages/admin/banner/view/BuildBannerList.vue'

definePageMeta({
  layout: 'admin',
  middleware: 'auth',
})

const { width: windowWidth } = useWindowSize()
const { data: bannerList, refresh } = await useAsyncData('bannerList', async () => getAdminBannerList())
const dialogVisible: Ref<boolean> = ref(false)
const bannerId: Ref<number | undefined> = ref()

const onConfirm = async (confirmed: boolean) => {
  if (confirmed && bannerId.value) {
    await deleteAdminBanner(bannerId.value, refresh)
  }

  bannerId.value = undefined
}

const handleDelete = (id: number) => {
  bannerId.value = id
  dialogVisible.value = true
}
</script>

<template>
  <VCard>
    <VCardTitle>
      <h1>Список баннеров</h1>
    </VCardTitle>
    <VCardText>
      <template v-if="bannerList && bannerList.dataItems.count > 0">
        <BuildBannerList
          :banner-list="bannerList.dataItems"
          :sort-model="bannerList.sortModel"
          @delete="handleDelete"
        >
          <template #pagination>
            <div
              v-if="bannerList.dataMeta.length > 1"
              absolute
              :app="windowWidth > 960"
              class="d-flex justify-center"
              style="background-color: transparent"
            >
              <VPagination
                v-model="bannerList.currentPage"
                :length="bannerList.dataMeta.length"
                variant="flat"
                total-visible="5"
              />
            </div>
          </template>
        </BuildBannerList>
      </template>
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
          Удаление баннера
        </template>
        <template #text>
          Удалить?
        </template>
      </ConfirmAlert>
    </template>
  </VCard>
</template>
