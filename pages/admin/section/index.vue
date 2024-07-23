<script lang="ts" setup>
import { fetchAdminCatalogTree } from '@/application/catalogService'
import { useCatalogStore } from '@/store'
import ViewTree from '@/views/components/section/ViewTree.vue'

const { isDesktop } = useDevice()
const router = useRouter()
const catalogStore = useCatalogStore()
const { getCategoryTree } = storeToRefs(catalogStore)

definePageMeta({
  layout: 'admin',
  middleware: 'auth',
})

await useAsyncData(async () => fetchAdminCatalogTree())
</script>

<template>
  <VRow justify="end">
    <VCol
      v-if="isDesktop"
      md="8"
    >
      <h1 class="mt-4">
        Дерево категорий
      </h1>
      <b style="position: absolute; left: 40%; top: 50%">Выберите категорию</b>
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
          <div style="overflow-y: auto; max-height: 83vh;">
            <ViewTree
              :tree="getCategoryTree"
              parent-item-icon="tabler:folder"
              child-item-icon="tabler:folder-open"
              @click-item="
                router.push({
                  name: 'admin-section-id',
                  params: { id: $event.id },
                })
              "
            />
          </div>
        </VCardText>
      </VCard>
    </VCol>
  </VRow>
</template>
