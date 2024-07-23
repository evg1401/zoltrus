<script lang="ts" setup>
import type { BlockItemFields, User } from '@/interfaces'
import ImageFormInput from '@/views/components/tools/ImageFormInput.vue'
import VisualTextEditor from '@/views/components/tools/VisualTextEditor.vue'

interface Emit {
  (e: 'change', value: any): void
  (e: 'recoveryImage'): void
}

interface Props {
  inputData: BlockItemFields
  isError?: boolean
  infoBlockCreator: { created: User; updated: User }
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
            <div class="d-flex justify-space-between">
              <div>Управление блоком</div>
              <div
                v-if="infoBlockCreator.created && infoBlockCreator.updated"
                class="d-flex flex-column text-body-2"
              >
                <pre>Создал: {{ `${infoBlockCreator.created.firstName ?? ""} ${infoBlockCreator.created.lastName ?? ""}` }}</pre>
                <pre>Обновил: {{ `${infoBlockCreator.updated.firstName ?? ""} ${infoBlockCreator.updated.lastName ?? ""}` }}</pre>
              </div>
            </div>
          </VCardTitle>

          <VCardText>
            <VSwitch
              :model-value="inputData.active"
              label="Активность"
              @update:model-value="emit('change', { active: $event })"
            />
            <VSwitch
              :model-value="inputData.sectionChooser"
              label="Разрешить категории в статьях"
              @update:model-value="emit('change', { sectionChooser: $event })"
            />
            <VSwitch
              :model-value="inputData.selectionProducts"
              label="Разрешить добавление товаров в статью"
              @update:model-value="emit('change', { selectionProducts: $event })"
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
            Заголовки
          </VCardTitle>

          <VCardText>
            <VRow>
              <VCol
                cols="12"
                xl="3"
                lg="3"
                md="12"
                sm="12"
              >
                <VTextField
                  :model-value="inputData.xmlId"
                  dirty
                  label="Внешний код (1С)"
                  @update:model-value="emit('change', { xmlId: $event })"
                />
              </VCol>

              <VCol
                cols="12"
                xl="3"
                lg="3"
                md="12"
                sm="12"
              >
                <VTextField
                  :model-value="inputData.name"
                  dirty
                  label="Название контент-блока (короткий)"
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
                sm="12"
              >
                <VTextField
                  :model-value="inputData.alias"
                  dirty
                  label="Псевдоним (алиас)"
                  :rules="[requiredValidator]"
                  :error="!inputData.alias ? isError : false"
                  @update:model-value="emit('change', { alias: $event })"
                />
              </VCol>
              <VCol
                cols="12"
                xl="3"
                lg="3"
                md="12"
                sm="12"
              >
                <VTextField
                  :model-value="inputData.title"
                  dirty
                  label="Заголовок контент-блока"
                  :rules="[requiredValidator]"
                  :error="!inputData.title ? isError : false"
                  @update:model-value="emit('change', { title: $event })"
                />
              </VCol>
            </VRow>
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
            Описание
          </VCardTitle>

          <VCardText>
            <VRow>
              <VCol>
                <VisualTextEditor
                  :detail-text="inputData.detailText ?? ''"
                  @change="emit('change', { detailText: $event })"
                />
              </VCol>
            </VRow>
            <VRow>
              <VCol>
                <ImageFormInput
                  :image="inputData.detailPicture"
                  :file-id="inputData.detailPictureId"
                  @update="emit('change', { detailPicture: $event })"
                  @recovery-image="emit('recoveryImage')"
                />
              </VCol>
            </VRow>
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
            Заголовки для элементов блока и кнопок управления блоком
          </VCardTitle>

          <VCardText>
            <VRow>
              <VCol>
                <VRow>
                  <VCol
                    xl="3"
                    lg="3"
                    md="12"
                  >
                    <VTextField
                      dirty
                      :model-value="inputData.elementsName"
                      label="Элементы"
                      @update:model-value="emit('change', { elementsName: $event })"
                    >
                      <template #append-inner>
                        <VTooltip text="Заголовок блока в мн.ч.">
                          <template #activator="{ props: tooltipProp }">
                            <VIcon v-bind="tooltipProp">
                              <Icon icon="ph-question" />
                            </VIcon>
                          </template>
                        </VTooltip>
                      </template>
                    </VTextField>
                  </VCol>

                  <VCol
                    xl="3"
                    lg="3"
                    md="12"
                  >
                    <VTextField
                      dirty
                      :model-value="inputData.elementName"
                      label="Элемент"
                      @update:model-value="emit('change', { elementName: $event })"
                    >
                      <template #append-inner>
                        <VTooltip text="Заголовок блока">
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

                <VRow>
                  <VCol
                    xl="3"
                    lg="3"
                    md="12"
                  >
                    <VTextField
                      dirty
                      :model-value="inputData.elementCreate"
                      label="Добавить элемент"
                      @update:model-value="emit('change', { elementCreate: $event })"
                    >
                      <template #append-inner>
                        <VTooltip text="Заголовок кнопки для добавления элемента блока">
                          <template #activator="{ props: tooltipProp }">
                            <VIcon v-bind="tooltipProp">
                              <Icon icon="ph-question" />
                            </VIcon>
                          </template>
                        </VTooltip>
                      </template>
                    </VTextField>
                  </VCol>
                  <VCol
                    xl="3"
                    lg="3"
                    md="12"
                  >
                    <VTextField
                      dirty
                      :model-value="inputData.elementUpdate"
                      label="Изменить элемент"
                      @update:model-value="emit('change', { elementUpdate: $event })"
                    >
                      <template #append-inner>
                        <VTooltip text="Заголовок кнопки для редактирования элемента блока">
                          <template #activator="{ props: tooltipProp }">
                            <VIcon v-bind="tooltipProp">
                              <Icon icon="ph-question" />
                            </VIcon>
                          </template>
                        </VTooltip>
                      </template>
                    </VTextField>
                  </VCol>
                  <VCol
                    xl="3"
                    lg="3"
                    md="12"
                  >
                    <VTextField
                      dirty
                      :model-value="inputData.elementDelete"
                      label="Удалить элемент"
                      @update:model-value="emit('change', { elementDelete: $event })"
                    >
                      <template #append-inner>
                        <VTooltip text="Заголовок кнопки для удаления элемента блока">
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
