<script lang="ts" setup>
import { useTheme } from "vuetify/lib/framework.mjs";
import Partnership from "@/views/pages/admin/requests/Partnership.vue";
import OrderCall from "@/views/pages/admin/requests/OrderCall.vue";
import OrderPrice from "@/views/pages/admin/requests/OrderPrice.vue";

definePageMeta({
  layout: "admin",
  middleware: "auth",
});

const { isDesktop } = useDevice();
const router = useRouter();

const { name: theme } = useTheme();

const Tabs = {
  RequestPartnership: Partnership,
  RequestOrderCall: OrderCall,
  RequestOrderPrice: OrderPrice,
};

const tabs = [
  {
    title: "Заявки новых партнеров",
    tab: Tabs.RequestPartnership,
    tabName: "partnerships",
  },
  {
    title: "Заявки на обратный звонок",
    tab: Tabs.RequestOrderCall,
    tabName: "call-orders",
  },
  {
    title: "Заявки на прайс-лист",
    tab: Tabs.RequestOrderPrice,
    tabName: "price-orders",
  },
];

const btnStyle = computed(() => ({ height: isDesktop ? "45px" : "35px" }));

const activeTab = computed(
  () =>
    tabs.find((x) => router.currentRoute.value.query?.tab === x.tabName)?.tab ??
    Tabs.RequestPartnership
);
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
      </VRow>
    </VCard>

    <VWindow v-model="activeTab" class="mt-4">
      <VWindowItem :value="activeTab">
        <component :is="activeTab" />
      </VWindowItem>
    </VWindow>
  </div>
</template>
