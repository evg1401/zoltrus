<script lang="ts" setup>
defineProps<Props>()

const emit = defineEmits<Emit>()

interface Emit {
  (e: 'change', value: any): void
}

interface Props {
  inputData: any
}

const labels: { [key: string]: string } = {
  alias: 'Алиас',
  name: 'Название',
  sort: 'Сортировка',
  searchableContent: 'Ключевое поисковое слово',
}
</script>

<template>
  <div>
    <VRow>
      <VCol>
        <VCard
          flat
          border
        >
          <VCardTitle>
            <div>Управление категорией</div>
          </VCardTitle>

          <VCardText>
            <VSwitch
              :model-value="inputData.active"
              label="Активность"
              @update:model-value="emit('change', { active: $event })"
            />
          </VCardText>
        </VCard>
      </VCol>
    </VRow>

    <VRow>
      <VCol>
        <VCard
          flat
          border
        >
          <VCardTitle>
            <div>Основное</div>
          </VCardTitle>

          <VCardText>
            <VRow>
              <VCol
                v-for="(label, key) in labels"
                :key="key"
                cols="12"
                xl="6"
                lg="6"
              >
                <VTextField
                  :model-value="inputData[key]"
                  dirty
                  :label="label"
                  @update:model-value="emit('change', { [key]: $event })"
                />
              </VCol>
            </VRow>
          </VCardText>
        </VCard>
      </VCol>
    </VRow>
  </div>
</template>
