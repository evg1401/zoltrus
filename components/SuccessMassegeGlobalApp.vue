<script setup lang="ts">
import { useAppStore } from '@/store'

const isSnackbarTopEndVisible = ref(false)
const appStore = useAppStore()
const { success } = storeToRefs(appStore)

watch(success, () => {
  if (success.value) {
    isSnackbarTopEndVisible.value = true
  }
})

const updateModelValue = () => {
  appStore.setSuccess(null)
}
</script>

<template>
  <VSnackbar
    v-model="isSnackbarTopEndVisible"
    transition="scale-transition"
    location="top end"
    :timeout="3000"
    color="success"
    @update:modelValue="updateModelValue"
  >
    {{ success }}
  </VSnackbar>
</template>
