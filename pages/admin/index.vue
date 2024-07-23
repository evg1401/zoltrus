<script lang="ts" setup>
import { useUserStore } from '@/store'

definePageMeta({
  layout: 'admin',
  middleware: 'auth',
  action: 'manage',
  subject: 'all',
})

const userStore = useUserStore()
const { userData } = storeToRefs(userStore)
</script>

<template>
  <div>
    <pre> user_data: </pre> {{ userData.firstName }} <br>
    {{ userData.email }}
  </div>
</template>
