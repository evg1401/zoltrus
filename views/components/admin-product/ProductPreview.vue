<script lang="ts" setup>
import ImageFormInput from '../tools/ImageFormInput.vue'
import VisualTextEditor from '../tools/VisualTextEditor.vue'
import type { Product } from '@/interfaces'

defineProps<Props>()

const emit = defineEmits<Emit>()

interface Emit {
  (e: 'change', value: any): void
  (e: 'recoveryImage', value: string): void
}

interface Props {
  inputData: Product
}
</script>

<template>
  <VRow>
    <VCol>
      <VCard
        flat
        border
      >
        <VCardTitle>
          <div>Превью товара</div>
        </VCardTitle>

        <VCardText>
          <VRow>
            <VCol>
              <VisualTextEditor
                :detail-text="inputData.previewText ?? ''"
                @change="emit('change', { previewText: $event })"
              />
            </VCol>
          </VRow>
          <VRow>
            <VCol>
              <ImageFormInput
                :image="inputData.previewPicture"
                :file-id="inputData.previewPictureId"
                @update="emit('change', { previewPicture: $event })"
                @recovery-image="emit('recoveryImage', 'previewPicture')"
              />
            </VCol>
          </VRow>
        </VCardText>
      </VCard>
    </VCol>
  </VRow>
</template>
