<script lang="ts" setup>
import type { Product } from '@/interfaces'

const props = defineProps<Props>()
const emit = defineEmits<Emit>()

const { inputData } = toRefs(props)

interface Emit {
  (e: 'change', value: any): void
}

interface Props {
  inputData: Product
}

const labels: { [key: string]: string } = {
  alias: 'Алиас',
  title: 'Заголовок',
  type: 'Тип',
  value: 'Значение',
}

// const properties = computed(() => {
//   const result = {}
//   if (inputData.value.properties.length === 0) {
//     return result
//   }

//   inputData.value.properties.forEach(property => {
//     Object.assign(result, property)
//   })

//   return result
// })
</script>

<template>
  <div>
    <!-- {{ inputData }} -->
    <VRow>
      <VCol>
        <VCard
          flat
          border
        >
          <VCardText>
            <!--
              <VSwitch
              :model-value="properties.active"
              label="Активность"
              @update:model-value="emit('change', { properties: { active: $event } })"
              />
              <VSwitch
              :model-value="properties.isFilter"
              label="Участвует в фильтрации"
              @update:model-value="emit('change', { properties: { isFilter: $event } })"
              />
            -->
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
            <div>Характеристики товара</div>
          </VCardTitle>

          <VCardText>
            <VRow>
              <VCol
                v-for="(prop, i) in inputData.properties"
                :key="i"
                cols="12"
              >
                <div
                  v-for="(label, key) in labels"
                  :key="key"
                >
                <!-- {{ prop }} <br> {{ key }} -->
                  <!--
                    <VTextField
                    :model-value="prop[key]"
                    dirty
                    :label="label"
                    @update:model-value="emit('change', { properties: { [key]: $event } })"
                    />
                  -->
                </div>
              </VCol>
              <!--
                <VCol
                v-for="(label, key) in labels"
                :key="key"
                cols="12"
                xl="3"
                lg="3"
                >
                <VTextField
                :model-value="properties[key]"
                dirty
                :label="label"
                @update:model-value="emit('change', { properties: { [key]: $event } })"
                />
                </VCol>
              -->
            </VRow>
          </VCardText>
        </VCard>
      </VCol>
    </VRow>
  </div>
</template>
