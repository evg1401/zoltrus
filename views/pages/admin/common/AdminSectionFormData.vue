<script lang="ts" setup>
import { useTheme } from "vuetify/lib/framework.mjs";
import AdminSectionDescription from "@/views/components/admin-section/AdminSectionDescription.vue";
import AdminSectionPreview from "@/views/components/admin-section/AdminSectionPreview.vue";
import AdminSectionGeneral from "@/views/components/admin-section/AdminSectionGeneral.vue";
import type { CatalogSection } from "@/interfaces";
import SeoSettings from "@/views/pages/admin/common/SeoSettings.vue";

interface Emit {
  (e: "change", value: { [key: string]: any }): void;
  (e: "save", value: void): void;
}

const props = defineProps<{ sectionFields: CatalogSection }>();
const emit = defineEmits<Emit>();

const { sectionFields } = toRefs(props);

const router = useRouter();
const { name: theme } = useTheme();

const initData = {
  active: false,
  sort: 500,
  name: null,
  alias: null,
  xmlId: null,
  metaTitle: null,
  metaKeywords: null,
  metaDescription: null,
  previewPicture: null,
  previewPictureId: null,
  previewText: null,
  detailText: "",
  detailPicture: null,
  detailPictureId: null,
};

const formData: Ref = ref({
  ...initData,
  ...sectionFields.value,
});

const Tabs = {
  General: AdminSectionGeneral,
  Preview: AdminSectionPreview,
  Description: AdminSectionDescription,
  Seo: SeoSettings,
};

const tabs = [
  { title: "Основное", tab: Tabs.General, tabName: "general-settings" },
  { title: "Анонс", tab: Tabs.Preview, tabName: "preview" },
  { title: "Описание", tab: Tabs.Description, tabName: "description" },
  { title: "Настройки SEO", tab: Tabs.Seo, tabName: "seo-settings" },
];

const activeTab = computed(
  () =>
    tabs.find((x) => router.currentRoute.value.query?.tab === x.tabName)?.tab ??
    Tabs.General
);

watch(sectionFields, () => Object.assign(formData.value, sectionFields.value));
</script>

<template>
  <VCard flat :color="theme !== 'dark' ? '#FFF' : '#2F3349'">
    <VRow justify="space-between">
      <VCol>
        <VTabs v-model="activeTab" show-arrows>
          <VTab
            v-for="item in tabs"
            :key="item.tabName"
            v-ripple.center
            :value="item.tab"
            :to="{
              path: $router.currentRoute.value.path,
              query: { tab: item.tabName },
            }"
          >
            {{ item.title }}
          </VTab>
        </VTabs>
      </VCol>
      <VCol class="d-flex justify-end">
        <VBtn @click="emit('save', formData)"> Сохранить </VBtn>
      </VCol>
    </VRow>
  </VCard>

  <VWindow v-model="activeTab" class="mt-4">
    <h1 class="mb-2">
      <slot name="title" />
    </h1>

    <VWindowItem :value="activeTab">
      <component
        :is="activeTab"
        :input-data="formData"
        :info-block-creator="{
          created: formData.created ?? null,
          updated: formData.updated ?? null,
        }"
        @change="Object.assign(formData, $event)"
        @recovery-image="formData[$event] = sectionFields[$event]"
      />
    </VWindowItem>
  </VWindow>
</template>
