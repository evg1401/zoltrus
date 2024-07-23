<script setup lang="ts">
import { useAppStore } from '@/store'

const isSnackbarTopEndVisible = ref(false)
const appStore = useAppStore()
const { error } = storeToRefs(appStore)

// проброс показа ошибки в снек баре
watch(error, () => {
  if (error.value) {
    isSnackbarTopEndVisible.value = true
  }
})

// очишаем ошибку
const updateModelValue = () => {
  appStore.setError(null)
}
</script>

<template>
  <VSnackbar
    v-model="isSnackbarTopEndVisible"
    transition="scale-transition"
    location="top end"
    :timeout="5000"
    color="error"
    @update:modelValue="updateModelValue"
  >
    {{ error }}
  </VSnackbar>
</template>
