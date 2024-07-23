<script lang="ts" setup>
import ClassicEditor from '@ckeditor/ckeditor5-build-classic'
import '@ckeditor/ckeditor5-build-classic/build/translations/ru'

interface Emit {
  (e: 'change', value: any): void
}

interface Props {
  detailText: any
}

const props = defineProps<Props>()
const emit = defineEmits<Emit>()
const { detailText } = toRefs(props)

const editorConfig = ref({
  language: 'ru',
})
</script>

<template>
  <Ckeditor
    :model-value="detailText"
    :editor="ClassicEditor"
    :config="editorConfig"
    @update:model-value="emit('change', $event)"
  />
</template>
