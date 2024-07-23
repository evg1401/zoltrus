<script lang="ts" setup>
import type { ContentElement } from '@/interfaces'

interface Emit {
  (e: 'change', value: any): void
  (e: 'recoveryImage'): void
}

interface Props {
  inputData: ContentElement
  isError?: boolean
}

const props = defineProps<Props>()
const emit = defineEmits<Emit>()
const { inputData, isError } = toRefs(props)
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
            Управление страницей
          </VCardTitle>

          <VCardText>
            <VSwitch
              :model-value="inputData.active"
              label="Активность"
              @update:model-value="emit('change', { active: $event })"
            />
            <VSwitch
              :model-value="inputData.inSection"
              label="Состоит в нескольких категориях"
              @update:model-value="emit('change', { inSection: $event })"
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
            Заголовки и дата публикации
          </VCardTitle>

          <VCardText>
            <VRow>
              <VCol
                cols="12"
                xl="3"
                lg="3"
                md="12"
              >
                <VTextField
                  :model-value="inputData.xmlId"
                  label="Внешний код (1С)"
                  dirty
                  @update:model-value="emit('change', { xmlId: $event })"
                />
              </VCol>

              <VCol
                cols="12"
                xl="3"
                lg="3"
                md="12"
              >
                <VTextField
                  :model-value="inputData.name"
                  dirty
                  label="Название категории"
                  :rules="[requiredValidator]"
                  :error="!inputData.name ? isError : false"
                  @update:model-value="emit('change', { name: $event })"
                />
              </VCol>
              <VCol
                cols="12"
                xl="3"
                lg="3"
                md="12"
              >
                <VTextField
                  :model-value="inputData.alias"
                  dirty
                  label="Псевдоним (алиас)"
                  :rules="[requiredValidator, withoutSpacesAlphaValidator]"
                  :error="!inputData.alias ? isError : false"
                  @update:model-value="emit('change', { alias: $event })"
                />
              </VCol>
              <VCol
                cols="12"
                xl="6"
                lg="6"
                md="12"
              >
                <VTextField
                  :model-value="!inputData.activeFrom ? null : new Date(inputData.activeFrom).toISOString().split('T')[0]"
                  dirty
                  clearable
                  label="Дата начала публикации"
                  class="mr-3 w-100"
                  type="date"
                  @update:model-value="emit('change', { activeFrom: $event })"
                />
              </VCol>
              <VCol
                cols="12"
                xl="6"
                lg="6"
                md="12"
              >
                <VTextField
                  :model-value="!inputData.activeTo ? null : new Date(inputData.activeTo).toISOString().split('T')[0]"
                  dirty
                  clearable
                  label="Дата завершения публикации"
                  class="w-100"
                  type="date"
                  @update:model-value="emit('change', { activeTo: $event })"
                />
              </VCol>
            </VRow>
          </VCardText>
        </VCard>
      </VCol>
    </VRow>
  </div>
</template>

<style lang="scss" scoped>
.block {
  padding: 1rem;
}
</style>
