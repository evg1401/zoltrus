<script lang="ts" setup>
import HeaderFullWidth from "./header/full-ver/HeaderFullWidth.vue";
import HeaderMobileWidth from "./header/mob-ver/HeaderMobileWidth.vue";
import OrderCall from "@/views/components/header/OrderCall.vue";
import OrderPrice from "@/views/components/header/OrderPrice.vue";
import type { Link } from "@/interfaces";
import type { Component } from "vue";

const { isDesktop } = useDevice();
const dialogVisible = ref(false);

const orderComponent: Ref<Component | null> = ref(null);

const handleClickLink = (e: Link) => {
  switch (e.title) {
    case "Заказать звонок":
      orderComponent.value = OrderCall;
      dialogVisible.value = true;
      break;

    case "Запросить прайс":
      orderComponent.value = OrderPrice;
      dialogVisible.value = true;
      break;

    default:
      break;
  }
};

const orderComponentComputed = computed(() => orderComponent.value);
</script>

<template>
  <VMain class="main">
    <template v-if="isDesktop">
      <HeaderFullWidth @click-upper-links="handleClickLink" />
    </template>

    <template v-else>
      <HeaderMobileWidth @click-upper-links="handleClickLink" />
    </template>
  </VMain>

  <template v-if="dialogVisible && orderComponent">
    <VDialog
      v-model="dialogVisible"
      persistent
      transition="dialog-bottom-transition"
    >
      <component
        v-model:dialog-visible="dialogVisible"
        :is="orderComponentComputed"
      />
    </VDialog>
  </template>
</template>

<style lang="scss">
.v-input .v-input__control {
  block-size: 40px;
}
.main {
  background-color: #fff;
}
</style>
