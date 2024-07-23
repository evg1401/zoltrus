<script lang="ts" setup>
import type { Ref } from "vue";
import { ref } from "vue";
import { fetchMenuItems } from "@/application/catalogService";
import type { CatalogCard } from "@/interfaces";
import ViewCardIcon from "@/views/components/nav-icons/ViewCardIcon.vue";

const menu: Ref<boolean> = ref(false);
const tab: Ref<CatalogCard | null> = ref(null);

const icons = ["tdesign:menu-application", "clarity:applications-solid"];

const { data: catalogCards, pending } = await useAsyncData(
  "catalogCards",
  fetchMenuItems
);

const handleOnClickSubmenu = (alias: string) => {
  navigateTo({ name: "catalog-alias", params: { alias } });
  menu.value = false;
};

const handleOnClickIfHasNotCh = (card: CatalogCard) => {
  if ((card.children || []).length === 0) {
    navigateTo({ name: "catalog-alias", params: { alias: card.alias } });
    menu.value = false;
  }
};
</script>

<template>
  <VMenu
    v-model="menu"
    :close-on-content-click="false"
    transition="scale-transition"
    scroll-strategy="block"
    offset="14px"
  >
    <template #activator="{ props }">
      <VBtn class="w-100" v-bind="props" style="text-transform: inherit">
        <VIcon class="mr-4" size="22">
          <Icon :icon="menu ? icons[1] : icons[0]" />
        </VIcon>
        <b>Каталог</b>
      </VBtn>
    </template>

    <VCard>
      <VCardText>
        <VRow>
          <VCol>
            <VTabs v-model="tab" direction="vertical">
              <VTab
                v-for="item in catalogCards"
                :key="item.alias"
                :value="item"
                :ripple="false"
                variant="text"
                height="35"
                stacked
                class="px-0"
                style="text-transform: inherit"
                @click="handleOnClickIfHasNotCh(item)"
              >
                <VListItem>
                  <template #prepend>
                    <div class="mr-2">
                      <ViewCardIcon
                        :name="item.alias"
                        :style="{ width: '30px', height: '30px' }"
                      />
                    </div>
                  </template>

                  <template #default>
                    <div class="font-weight-bold">
                      {{ item.name }}
                    </div>
                  </template>
                </VListItem>
              </VTab>
            </VTabs>
          </VCol>
          <VCol v-if="tab && tab.children?.length > 0" style="width: 400px">
            <VListItem
              v-for="(subItem, i) in tab.children"
              :key="i"
              variant="flat"
              :link="false"
              @click="handleOnClickSubmenu(subItem.alias)"
            >
              <template #prepend>
                <div class="mr-2">
                  <ViewCardIcon
                    is-sub-card
                    :name="subItem.alias"
                    :style="{ width: '30px', height: '30px' }"
                  />
                </div>
              </template>

              <template #default>
                <small class="font-weight-bold cursor-pointer">
                  {{ subItem.name }}
                </small>
              </template>
            </VListItem>
          </VCol>
        </VRow>

        <template v-if="pending">
          <VOverlay
            :model-value="pending"
            class="align-center justify-center"
            attach
          >
            <VProgressCircular color="primary" indeterminate size="24" />
          </VOverlay>
        </template>
      </VCardText>
    </VCard>
  </VMenu>
</template>

<style lang="scss" scoped>
.style-title {
  &:hover {
    color: #ff6d04;
    cursor: pointer;
  }
}
</style>
