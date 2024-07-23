<script lang="ts" setup>
import type { FileItem } from '@/interfaces'

interface Props {
  image: FileItem | null | undefined
  fileId?: number | null
}

interface Emit {
  (e: 'update', value: any): void
  (e: 'recoveryImage'): void
}

const props = defineProps<Props>()
const emit = defineEmits<Emit>()
const { image, fileId } = toRefs(props)
const imageTmp = ref(image.value?.path ?? '')
const refInput = ref()
const noImage = process.env.NO_IMAGE ?? ''

const resetImage = async () => {
  imageTmp.value = ''
  emit('update', '')
}

const changeImage = (file: Event) => {
  const fileReader = new FileReader()
  const { files } = file.target as HTMLInputElement

  if (files && files.length) {
    fileReader.readAsDataURL(files[0])
    fileReader.onload = () => {
      if (typeof fileReader.result === 'string') {
        imageTmp.value = fileReader.result
      }
    }
  }
}

watch(() => image.value?.path, newValue => {
  imageTmp.value = newValue ?? ''
})
</script>

<template>
  <div>
    <div>
      <VFileInput
        ref="refInput"
        label="Загрузить изображение"
        style="display: none;"
        @update:model-value="emit('update', $event)"
        @input="changeImage"
      />
    </div>
    <VCol>
      <VRow>
        <VCol cols="12">
          <VCard flat>
            <VBtn
              v-if="fileId && imageTmp.length === 0"
              size="small"
              variant="flat"
              @click="emit('recoveryImage')"
            >
              восстановить
            </VBtn>
            <VBtn
              size="small"
              variant="flat"
              class="mx-3"
              @click="refInput.click()"
            >
              загрузить
            </VBtn>
            <VBtn
              v-if="imageTmp"
              size="small"
              variant="flat"
              class="mr-3"
              @click="resetImage"
            >
              сбросить
            </VBtn>
          </VCard>
        </VCol>
        <VCol class="d-flex justify-start w-100">
          <div
            v-if="imageTmp"
            class="border cursor-pointer"
            @click="refInput.click()"
          >
            <VImg
              width="auto"
              max-width="30rem"
              max-height="30rem"
              :src="imageTmp"
            />
          </div>
          <div
            v-else
            class="d-flex border cursor-pointer"
            @click="refInput.click()"
          >
            <VImg
              width="auto"
              max-width="300px"
              :src="noImage"
            />
          </div>
        </VCol>
      </VRow>
    </VCol>
  </div>
</template>
