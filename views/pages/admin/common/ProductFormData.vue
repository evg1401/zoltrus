<script lang="ts" setup>
import { useTheme } from "vuetify/lib/framework.mjs";
import ProductGeneral from "@/views/components/admin-product/ProductGeneral.vue";
import ProductСharacteristic from "@/views/components/admin-product/ProductСharacteristic.vue";
import ProductDescription from "@/views/components/admin-product/ProductDescription.vue";
import ProductCategory from "@/views/components/admin-product/ProductCategory.vue";
import ProductPreview from "@/views/components/admin-product/ProductPreview.vue";
import SeoSettings from "@/views/pages/admin/common/SeoSettings.vue";
import type { Product } from "@/interfaces";

interface Emit {
  (e: "change", value: any): void;
}
interface Props {
  productData?: Product;
}

const props = defineProps<Props>();
const emit = defineEmits<Emit>();
const { isDesktop } = useDevice();
const router = useRouter();

const { productData } = toRefs(props);
const dialogVisible: Ref<boolean> = ref(false);

const initData: Omit<Product, "id"> = {
  active: false,
  sectionId: null,
  name: "",
  alias: "",
  xmlId: "",
  brand: "",
  quantity: "",
  article: "",
  previewText: null,
  detailText: null,
  metaTitle: null,
  metaKeywords: null,
  metaDescription: null,
  previewPicture: null,
  previewPictureId: null,
  detailPicture: null,
  detailPictureId: null,
  properties: [],
  prices: [],
  section: null,
};

const formData: Ref = ref({
  ...initData,
  ...productData.value,
});

const { name: theme } = useTheme();

const Tabs = {
  General: ProductGeneral,
  Preview: ProductPreview,
  Description: ProductDescription,
  Category: ProductCategory,
  Сharacteristic: ProductСharacteristic,
  Seo: SeoSettings,
};

const tabs = [
  { title: "Основное", tab: Tabs.General, tabName: "general" },
  { title: "Анонс", tab: Tabs.Preview, tabName: "preview" },
  { title: "Описание", tab: Tabs.Description, tabName: "description" },
  { title: "Категории", tab: Tabs.Category, tabName: "category" },
  {
    title: "Характеристики",
    tab: Tabs.Сharacteristic,
    tabName: "characteristic",
  },
  { title: "Настройки SEO", tab: Tabs.Seo, tabName: "seo-settings" },
];

const btnStyle = computed(() => ({ height: isDesktop ? "45px" : "35px" }));

const activeTab = computed(
  () =>
    tabs.find((x) => router.currentRoute.value.query?.tab === x.tabName)?.tab ??
    Tabs.General
);

const onConfirm = (confirmed: boolean) => {
  if (confirmed) {
    emit("change", formData.value);
  }
};

const submit = async () => {
  if (!productData.value) {
    onConfirm(true);

    return;
  }
  dialogVisible.value = true;
};

watch(productData, () => Object.assign(formData.value, productData.value));
</script>

<template>
  <div>
    <VCard flat :color="theme !== 'dark' ? '#FFF' : '#2F3349'">
      <VRow justify="space-between">
        <VCol>
          <VTabs v-model="activeTab" show-arrows :style="btnStyle">
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
            style="margin-right: 7px"
            :style="btnStyle"
            @click="navigateTo({ name: 'admin-product' })"
          >
            отмена
          </VBtn>
          <VBtn variant="flat" :style="btnStyle" @click="submit">
            сохранить
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
          :input-data="formData"
          @change="Object.assign(formData, $event)"
          @recovery-image="formData[$event] = productData[$event]"
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
        <template #title> Редактирование товара </template>
        <template #text> Сохранить изменения? </template>
      </ConfirmAlert>
    </template>
  </div>
</template>
