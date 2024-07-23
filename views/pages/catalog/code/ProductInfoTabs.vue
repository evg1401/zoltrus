<script lang="ts" setup>
const tab = ref(null)
</script>

<template>
  <VRow>
    <VCol>
      <VCard flat>
        <VTabs v-model="tab">
          <VTab value="detail">
            Обзор
          </VTab>
          <VTab value="info">
            Характеристики
          </VTab>
        </VTabs>

        <VCardText>
          <VWindow v-model="tab">
            <VWindowItem value="detail" />

            <VWindowItem value="info" />
          </VWindow>
        </VCardText>
      </VCard>
    </VCol>
  </VRow>
</template>
