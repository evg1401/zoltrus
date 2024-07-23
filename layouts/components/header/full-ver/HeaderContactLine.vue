<script lang="ts" setup>
import calling from '@images/icons/header/calling.svg'
import clock from '@images/icons/header/clock.svg'
</script>

<template>
  <VRow align="center">
    <VCol class="d-flex">
      <div>
        <VImg
          width="132"
          height="43"
          src="/logo.png"
          class="cursor-pointer"
          @click="navigateTo('/')"
        />
      </div>
      <small
        style="inline-size: 140px"
        class="ml-2"
      >
        Разумное решение в автозапчастях
      </small>
    </VCol>

    <VCol class="d-flex justify-center">
      <div class="d-flex">
        <VImg
          width="24"
          height="24"
          :src="calling"
        />

        <a
          class="ml-1"
          href="tel:+78312808323"
        >
          <span class="text-nowrap font-weight-bold text-def-text-color">
            +7 (831) 280-83-23
          </span>
        </a>
      </div>
    </VCol>

    <VCol class="d-flex align-center justify-end">
      <div>
        <VImg
          width="24"
          height="24"
          :src="clock"
        />
      </div>
      <span
        style="inline-size: 17rem"
        class="ml-1 text-nowrap font-weight-bold"
      >
        Пн-чт: 8.00—17.00; пт: 8.00—16.00, сб, вс: — выходной
      </span>
    </VCol>
  </VRow>
</template>
