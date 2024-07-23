<script lang="ts" setup>
import { useTheme } from "vuetify/lib/framework.mjs";
import GeneralSettings from "@/views/pages/admin/content-element/GeneralSettings.vue";
import Preview from "@/views/pages/admin/content-element/Preview.vue";
import Description from "@/views/pages/admin/content-element/Description.vue";
import SeoSettings from "@/views/pages/admin/common/SeoSettings.vue";
import type { ContentElementFormData } from "@/interfaces";
import { useAppStore } from "@/store";

interface Emit {
  (e: "change", value: any): void;
}

interface Props {
  contentElementData?: ContentElementFormData;
}

const props = defineProps<Props>();
const emit = defineEmits<Emit>();
const router = useRouter();

const { contentElementData } = toRefs(props);
const dialogVisible: Ref<boolean> = ref(false);
const currentRouteParams = router.currentRoute.value.params as { id: string };

const isError: Ref<boolean> = ref(false);

const initData: ContentElementFormData = {
  active: false,
  inSection: false,
  activeTo: null,
  activeFrom: null,
  name: "",
  alias: "",
  xmlId: null,

  previewText: "",
  previewTextType: "html",
  previewPicture: null,
  previewPictureId: null,

  detailText: "",
  detailPicture: null,
  detailPictureId: null,
  detailTextType: "html",

  // detailTextType: 'XTML',

  metaTitle: null,
  metaKeywords: null,
  metaDescription: null,
};

const formData: Ref = ref({
  ...initData,
  ...contentElementData.value,
});

const { name: theme } = useTheme();

const Tabs = {
  General: GeneralSettings,
  Prev: Preview,
  Desc: Description,
  Seo: SeoSettings,
};

const tabs = [
  { title: "Характеристики", tab: Tabs.General, tabName: "general-settings" },
  { title: "Анонс", tab: Tabs.Prev, tabName: "preview" },
  { title: "Описание", tab: Tabs.Desc, tabName: "description" },
  { title: "Настройки SEO", tab: Tabs.Seo, tabName: "seo-settings" },
];

const activeTab = computed(
  () =>
    tabs.find((x) => router.currentRoute.value.query?.tab === x.tabName)?.tab ??
    Tabs.General
);

const checkErrorFields = computed(() => {
  const fieldsToCheck = ["name", "alias"];

  return (
    fieldsToCheck.some((field) => (formData.value[field] || []).length === 0) ||
    typeof withoutSpacesAlphaValidator(formData.value["alias"]) === "string"
  );
});

const onConfirm = (confirmed: boolean) => {
  if (confirmed) {
    if (checkErrorFields.value) {
      const { setError } = useAppStore();

      isError.value = true;
      setError("Некорректно заполнены поля");

      return;
    }
    isError.value = false;
    emit("change", formData.value);
  }
};

const submit = async () => {
  if (!contentElementData.value) {
    onConfirm(true);

    return;
  }
  dialogVisible.value = true;
};
</script>

<template>
  <div>
    <VCard flat :color="theme !== 'dark' ? '#FFF' : '#2F3349'">
      <VRow justify="space-between">
        <VCol>
          <VTabs v-model="activeTab" show-arrows :height="45">
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
          <VBtn
            variant="outlined"
            style="height: 45px; margin-right: 7px"
            @click="
              navigateTo({ name: 'admin-block-id', params: currentRouteParams })
            "
          >
            отмена
          </VBtn>
          <VBtn variant="flat" style="height: 45px" @click="submit">
            <slot name="save"> сохранить </slot>
          </VBtn>
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
          :is-error="isError"
          :input-data="formData"
          @change="Object.assign(formData, $event)"
          @recovery-image="formData[$event] = contentElementData[$event]"
        />
      </VWindowItem>
    </VWindow>

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
        <template #title> Редактирование контент-элемента </template>
        <template #text> Сохранить изменения? </template>
      </ConfirmAlert>
    </template>
  </div>
</template>
