<script lang="ts" setup>
import ImageFormInput from '@/views/components/tools/ImageFormInput.vue'
import VisualTextEditor from '@/views/components/tools/VisualTextEditor.vue'

const props = defineProps<Props>()
const emit = defineEmits<Emit>()

interface Emit {
  (e: 'change', value: any): void
  (e: 'recoveryImage', value: string): void
}

interface Props {
  inputData: any
  isPictureEdit?: boolean
}

const { inputData } = toRefs(props)
</script>

<template>
  <VRow>
    <VCol>
      <VCard
        flat
        border
      >
        <VCardTitle>
          Основной текст описания
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
                @recovery-image="emit('recoveryImage', 'detailPicture')"
              />
            </VCol>
          </VRow>
        </VCardText>
      </VCard>
    </VCol>
  </VRow>
</template>
