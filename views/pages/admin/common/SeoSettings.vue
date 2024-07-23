<script lang="ts" setup>
import type { SeoFields } from '@/interfaces'

defineProps<Props>()

const emit = defineEmits<Emit>()

interface Emit {
  (e: 'change', value: any): void
}

interface Props {
  inputData: SeoFields
}

const labels: { [key: string]: string } = {
  metaTitle: 'Мета-тег: заголовок',
  metaKeywords: 'Мета-тег: ключи',
  metaDescription: 'Мета-тег: описание',
}

const textToolTips: { [key: string]: string } = {
  metaTitle: 'Заголовок веб-страницы',
  metaKeywords: 'Ключевые слова контента веб-страницы',
  metaDescription: 'Краткий "анонс" веб-страницы',
}
</script>

<template>
  <VCard
    flat
    border
  >
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
            dirty
            :model-value="inputData[key]"
            :label="label"
            @update:model-value="emit('change', { [key]: $event })"
          >
            <template #append-inner>
              <VTooltip :text="textToolTips[key]">
                <template #activator="{ props: tooltipProp }">
                  <VIcon v-bind="tooltipProp">
                    <Icon icon="ph-question" />
                  </VIcon>
                </template>
              </VTooltip>
            </template>
          </VTextField>
        </VCol>
      </VRow>
    </VCardText>
  </VCard>
</template>
