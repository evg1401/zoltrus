<script lang="ts" setup>
interface Props {
  title?: string;
  height?: string | number;
  bgColor?: string;
}

defineProps<Props>();
</script>

<template>
  <div
    class="d-flex flex-wrap justify-space-between align-center bg-grey-200"
    :style="{
      height: !height ? 'auto' : height,
      minHeight: '64px',
      backgroundColor: !bgColor ? '#EEEEEE' : bgColor,
    }"
  >
    <div
      v-if="title"
      class="d-flex mx-4"
      style="color: #4b4953; font-size: 1.25rem"
    >
      {{ title }}
    </div>

    <div class="d-flex">
      <slot />
    </div>
  </div>
</template>
