<script lang="ts" setup>
import type { Catalog, TableItems } from "@/interfaces";

interface Props {
  products: TableItems<Catalog>;
}

const props = defineProps<Props>();
const { products } = toRefs(props);
const imageError = process.env.NO_IMAGE ?? "";
</script>

<template>
  <VCard flat class="card-height-full overflow-y-auto">
    <VCardText>
      <VRow>
        <VCol
          v-for="item in products.items"
          :key="item.id"
          xl="3"
          lg="3"
          md="3"
          class="d-flex align-start"
          :class="{
            'justify-center': products.items.length > 2,
          }"
        >
          <VHover>
            <template #default="{ isHovering, props: hoverProps }">
              <VCard
                v-bind="hoverProps"
                border
                flat
                width="280"
                class="h-100 d-flex flex-column"
                :elevation="isHovering ? 24 : 0"
                @click="
                  navigateTo({
                    name: 'catalog-alias-code',
                    params: { alias: item.section.alias, code: item.alias },
                  })
                "
              >
                <VImg
                  min-height="115"
                  :lazy-src="
                    !item.previewPicture?.path
                      ? imageError
                      : item.previewPicture?.path
                  "
                  :src="
                    !item.previewPicture?.path
                      ? imageError
                      : item.previewPicture?.path
                  "
                  :title="item.previewText"
                  class="cursor-pointer"
                />

                <VCardTitle :title="item.name">
                  <div class="text-wrap">
                    {{ item.name }}
                  </div>
                </VCardTitle>

                <VCardText class="d-flex flex-column justify-end">
                  <div>
                    <span>
                      Код товара:
                      <b>
                        {{ item.xmlId }}
                      </b>
                    </span>
                  </div>

                  <div>
                    <span>
                      Артикул:
                      <b>
                        {{ item.article }}
                      </b>
                    </span>
                  </div>
                </VCardText>

                <VCardActions>
                  <div
                    class="text-primary font-weight-bold"
                    style="font-size: 1.5rem"
                  >
                    <div class="d-flex align-center">
                      {{ item.prices[0].value }}
                      <Icon icon="icons8:rouble" />
                    </div>
                  </div>
                </VCardActions>
              </VCard>
              <!--
                <VCard
                v-bind="hoverProps"
                border
                flat
                width="280"
                class="h-100"
                :elevation="isHovering ? 24 : 0"
                :style="hoveringCardStyle(isHovering)"
                @click="navigateTo({ name: 'catalog-alias-code', params: { alias: currentRouteParams.alias, code: item.alias } })"
                >
                <VImg
                min-height="115"
                :lazy-src="!item.previewPicture?.path ? imageError : item.previewPicture?.path"
                :src="!item.previewPicture?.path ? imageError : item.previewPicture?.path"
                :title="item.previewText"
                class="cursor-pointer"
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

                <VCardTitle :title="item.name">
                <div class="text-wrap">
                {{ item.name }}
                </div>
                </VCardTitle>
                </VCard>
              -->
            </template>
          </VHover>
        </VCol>
      </VRow>
    </VCardText>
    <slot name="pagination" />
  </VCard>
</template>
