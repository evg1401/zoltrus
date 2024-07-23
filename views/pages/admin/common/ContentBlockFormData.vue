<script lang="ts" setup>
import { useTheme } from "vuetify/lib/framework.mjs";
import GeneralSettings from "@/views/pages/admin/block/GeneralSettings.vue";
import SeoSettings from "@/views/pages/admin/common/SeoSettings.vue";
import type { BlockFormData, BlockItem } from "@/interfaces";
import { useAppStore } from "@/store";

interface Emit {
  (e: "change", value: any): void;
}

interface Props {
  blockData?: BlockItem;
}

const props = defineProps<Props>();
const emit = defineEmits<Emit>();
const router = useRouter();

const { blockData } = toRefs(props);
const dialogVisible: Ref<boolean> = ref(false);
const isError: Ref<boolean> = ref(false);

const initData: BlockFormData = {
  active: false,
  sectionChooser: false,
  selectionProducts: false,
  name: "",
  alias: "",
  xmlId: null,
  sort: null,
  title: null,

  detailPicture: null,
  detailText: "",

  metaTitle: null,
  metaKeywords: null,
  metaDescription: null,

  elementsName: null,
  elementName: null,
  elementCreate: null,
  elementUpdate: null,
  elementDelete: null,
};

const formData: Ref = ref({
  ...initData,
  ...blockData.value,
});

const { name: theme } = useTheme();

const Tabs = {
  General: GeneralSettings,
  Seo: SeoSettings,
};

const tabs = [
  { title: "Характеристики", tab: Tabs.General, tabName: "general-settings" },
  { title: "Настройки SEO", tab: Tabs.Seo, tabName: "seo-settings" },
];

const activeTab = computed(
  () =>
    tabs.find((x) => router.currentRoute.value.query?.tab === x.tabName)?.tab ??
    Tabs.General
);

const checkErrorFields = computed(() => {
  const fieldsToCheck = ["name", "title", "alias"];

  return fieldsToCheck.some(
    (field) => (formData.value[field] || []).length === 0
  );
});

const onConfirm = (confirmed: boolean) => {
  if (confirmed) {
    if (checkErrorFields.value) {
      const { setError } = useAppStore();

      isError.value = true;
      setError("Нужно заполнить поля, обязательные для заполнения");

      return;
    }
    isError.value = false;
    emit("change", formData.value);
  }
};

const submit = async () => {
  if (!blockData.value) {
    onConfirm(true);

    return;
  }
  dialogVisible.value = true;
};

const currentRouteParams = router.currentRoute.value.params as { id?: number };
const pathToNavigate: any = currentRouteParams?.id
  ? { name: "admin-block-id", params: currentRouteParams }
  : { name: "admin" };
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
            @click="navigateTo(pathToNavigate)"
          >
            отмена
          </VBtn>
          <VBtn variant="flat" style="height: 45px" @click="submit">
            <slot name="buttonSave"> сохранить </slot>
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
          :info-block-creator="{
            created: formData.created ?? null,
            updated: formData.updated ?? null,
          }"
          @change="Object.assign(formData, $event)"
          @recovery-image="formData.detailPicture = blockData?.detailPicture"
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
        <template #title> Редактирование контент-блока </template>
        <template #text> Сохранить изменения? </template>
      </ConfirmAlert>
    </template>
  </div>
</template>
