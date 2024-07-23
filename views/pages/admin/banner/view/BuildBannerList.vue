<script lang="ts" setup>
import type { Banner, TableItems } from "@/interfaces";

interface Props {
  bannerList: TableItems<Banner>;
  sortModel: any[];
}

interface Emit {
  (e: "delete", value: number): void;
}

const props = defineProps<Props>();
const emit = defineEmits<Emit>();
const { bannerList } = toRefs(props);

// const currentRouteParams = router.currentRoute.value.params as { alias: string }
const imageError = process.env.NO_IMAGE ?? "";

const handleClick = (id: number) => {
  navigateTo({ name: "admin-banner" });

  emit("delete", id);
};
</script>

<template>
  <VCard variant="flat">
    <VCardText>
      <VRow>
        <VCol
          v-for="item in bannerList.items"
          :key="item.id"
          xl="4"
          lg="4"
          md="6"
          class="d-flex align-start"
          :class="{
            'justify-center': bannerList.items.length > 2,
          }"
        >
          <VCard flat border class="w-100 h-100 d-flex flex-column">
            <VImg
              max-height="150"
              :lazy-src="!item.file.path ? imageError : item.file.path"
              :src="!item.file.path ? imageError : item.file.path"
            />

            <VCardText class="d-flex flex-column justify-start">
              <div>
                <b>ID</b>
                {{ item.id }}
              </div>
              <div>
                <b>Сортировка:</b>
                {{ item.sort }}
              </div>
              <div>
                <b>Статус:</b>
                {{ item.active ? "опубликован" : "снят с публикации" }}
              </div>
              <div>
                <b>Срок публикации:</b>
                <div v-if="item.activeFrom">
                  {{ ` начало: ${helper.formatDate(item.activeFrom, false)}` }}
                </div>
                <div v-if="item.activeTo">
                  {{
                    ` завершение: ${helper.formatDate(item.activeTo, false)}`
                  }}
                </div>
              </div>
              <div>
                <b>Адрес ссылки баннера:</b>
                {{ item.url }}
              </div>
              <div>
                <b>Создал:</b>
                {{ item.created.firstName }}
              </div>
            </VCardText>

            <VCardActions>
              <VCol class="d-flex justify-center">
                <VBtn
                  variant="flat"
                  size="small"
                  @click="
                    navigateTo({
                      name: 'admin-banner-id',
                      params: { id: item.id },
                    })
                  "
                >
                  редактировать
                </VBtn>
              </VCol>
              <VCol class="d-flex justify-center">
                <VBtn
                  variant="outlined"
                  size="small"
                  @click="handleClick(item.id)"
                >
                  удалить
                </VBtn>
              </VCol>
            </VCardActions>
          </VCard>
        </VCol>
      </VRow>
    </VCardText>
    <slot name="pagination" />
  </VCard>
</template>
