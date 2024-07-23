<script lang="ts" setup>
import type { Ref } from 'vue'
import { ref, watch } from 'vue'

interface Emit {
  (e: 'update:dialogVisible', value: boolean): void
  (e: 'confirm', value: boolean): void
}
interface Props {
  dialogVisible: boolean
  prop: {
    titleButtomConfirm: string
    titleButtonCancel: string
    theme: string
  }
}

const props = defineProps<Props>()
const emit = defineEmits<Emit>()
const { dialogVisible, prop } = toRefs(props)
const { titleButtomConfirm, titleButtonCancel, theme } = toRefs(prop.value)
const iconColorClass: Ref<string> = ref('info')
const animateIconClass: Ref<string> = ref('icon-confirm-info')
const confirmButtonClass: Ref<string> = ref('info')
const iconType: Ref<string> = ref('fe:info')

const confirmed = () => {
  emit('confirm', true)
  emit('update:dialogVisible', false)
}

const applyStyleClass = () => {
  switch (theme.value) {
  case 'info':
    iconColorClass.value = 'info'
      animateIconClass.value = 'icon-confirm-info'
      confirmButtonClass.value = 'info'
      iconType.value = 'tabler-info-circle'
      break
    case 'success':
    iconColorClass.value = 'success'
      animateIconClass.value = 'icon-confirm-success'
      confirmButtonClass.value = 'success'
      iconType.value = 'tabler-circle-check'
      break
    case 'warning':
    iconColorClass.value = 'warning'
      animateIconClass.value = 'icon-confirm-default'
      confirmButtonClass.value = 'warning'
      iconType.value = 'tabler-info-circle'
      break
    case 'danger':
    iconColorClass.value = 'error'
      animateIconClass.value = 'icon-confirm-default'
      confirmButtonClass.value = 'error'
      iconType.value = 'tabler:circle-x'
      break
    default:
    iconColorClass.value = 'info'
      animateIconClass.value = 'icon-confirm-default'
      confirmButtonClass.value = 'info'
      iconType.value = 'tabler-info-circle'
      break
  }
}

watch(
  () => theme.value,
  () => {
    applyStyleClass()
  },
)

applyStyleClass()
</script>

<template>
  <VRow>
    <VDialog
      v-model="dialogVisible"
      max-width="500px"
      persistent
    >
      <VCard class="text-center py-2">
        <VCardTitle>
          <h2>
            <slot name="title" />
          </h2>
        </VCardTitle>
        <VCardText>
          <div class="text-center mb-3">
            <VIcon
              :color="iconColorClass"
              size="100"
              :icon="iconType"
              :class="animateIconClass"
            />
          </div>
          <p class="font-weight-bold">
            <slot name="text" />
          </p>
        </VCardText>
        <VCardActions class="d-flex justify-center">
          <VBtn
            v-ripple.center
            color="secondary"
            variant="outlined"
            @click="emit('update:dialogVisible', false)"
          >
            {{ titleButtonCancel }}
          </VBtn>
          <VBtn
            v-ripple.center
            variant="flat"
            :color="confirmButtonClass"
            class="ml-2"
            @click="confirmed"
          >
            {{ titleButtomConfirm }}
          </VBtn>
        </VCardActions>
      </VCard>
    </VDialog>
  </VRow>
</template>

<style lang="scss" scoped>
.icon-confirm-default {
  animation: scale-animation 1s;
}

@keyframes scale-animation {
  0% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.3);
  }
  100% {
    transform: scale(1);
  }
}

.icon-confirm-success {
  animation: clockwise-rotation 1s ease-in-out;
}

@keyframes clockwise-rotation {
  0% {
    transform: rotate(0deg);
    opacity: 0;
  }
  100% {
    transform: rotate(360deg);
    opacity: 1;
  }
}

.icon-confirm-info {
  animation: rotate-left-to-right 1s linear;
}

@keyframes rotate-left-to-right {
  0% {
    transform: rotateY(0deg);
  }
  100% {
    transform: rotateY(360deg);
  }
}
</style>
