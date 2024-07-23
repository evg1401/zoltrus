<script lang="ts" setup>
import calling from "@images/icons/header/calling.svg";
import downCatalog from "@images/icons/header/down-catalog.svg";
import downPhotoBase from "@images/icons/header/down-photo-base.svg";
import clock from "@images/icons/header/clock.svg";
import type { Link } from "@/interfaces";

interface Emit {
  (e: "update:dialogVisible", value: boolean): void;
  (e: "clickUpperLinks", value: Link): void;
}
const emit = defineEmits<Emit>();

const path = "/files";
const pathToCatalog = `${path}/catalog/Каталог_ZOLT.pdf`;
const pathToPhotoArchive = `${path}/photo-archive/фотобаза_ZOLT.zip`;
</script>

<template>
  <VRow align="center">
    <VCol class="d-flex">
      <div
        class="d-flex align-center mr-3 cursor-pointer text-primary"
        @click="emit('update:dialogVisible', true)"
      >
        <VIcon icon="tabler-menu-2" size="x-large" />
      </div>

      <div>
        <VImg
          width="132"
          height="43"
          src="/logo.png"
          class="cursor-pointer"
          @click="navigateTo('/')"
        />
      </div>
      <small style="inline-size: 140px" class="ml-2">
        Разумное решение в автозапчастях
      </small>
    </VCol>

    <VCol cols="12" class="d-flex justify-center pt-0 pb-1">
      <VBtn
        size="x-small"
        variant="outlined"
        class="text-nowrap font-weight-bold"
        @click="emit('clickUpperLinks', { title: 'Заказать звонок', page: '' })"
      >
        закакзать звонок
      </VBtn>

      <VBtn
        size="x-small"
        variant="outlined"
        class="text-nowrap font-weight-bold ml-2"
        @click="emit('clickUpperLinks', { title: 'Запросить прайс', page: '' })"
      >
        Запросить прайс
      </VBtn>
    </VCol>

    <VCol class="d-flex justify-space-between pt-1">
      <div class="d-flex">
        <VImg width="24" height="24" :src="calling" />

        <a class="ml-1" href="tel:+78312808323">
          <span class="text-nowrap font-weight-bold text-def-text-color">
            +7 (831) 280-83-23
          </span>
        </a>
      </div>
    </VCol>

    <VCol cols="12" class="d-flex align-center justify-space-between pt-1">
      <div class="d-flex mr-2">
        <VImg width="24" height="24" :src="clock" />
        <div style="font-size: 12px" class="ml-1 font-weight-bold">
          Пн-чт: 8.00—17.00; пт: 8.00—16.00, <br />
          сб, вс: — выходной
        </div>
      </div>

      <div class="d-flex justify-end">
        <div class="pr-2">
          <a :href="pathToPhotoArchive" download>
            <VImg width="24" height="24" :src="downPhotoBase" />
          </a>
        </div>
        <div class="pr-2">
          <a :href="pathToCatalog" target="_blank">
            <VImg width="24" height="24" :src="downCatalog" />
          </a>
        </div>
      </div>
    </VCol>
  </VRow>
</template>
