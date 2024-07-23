<script lang="ts" setup>
import type { FormDistributor } from "@/interfaces";
import type { VForm } from "vuetify/lib/components/index.mjs";

interface Props {
  inputData: FormDistributor | any;
}
interface Emit {
  (e: "change", value: { [key: string]: string }): void;
}

defineProps<Props>();
const emit = defineEmits<Emit>();

const refVForm = ref<VForm>();
const labels: FormDistributor = {
  name: "ИП/Компания",
  index: "Почтовый индекс",
  region: "Регион",
  city: "Город",
  street: "Улица",
  phone: "Телефон",
  email: "E-mail",
  website: "Сайт",
};

const valid = (key: keyof FormDistributor, value: string) => {
  if (
    key === "name" ||
    key === "region" ||
    key === "city" ||
    key === "street"
  ) {
    return [requiredValidator(value)];
  } else if (key === "email") {
    return [emailValidator];
  }
};
</script>

<template>
  <div>
    <VForm ref="refVForm">
      <VRow>
        <VCol v-for="(label, key) in labels" :key="key" cols="12" xl="6" lg="6">
          <VTextField
            :model-value="inputData[key]"
            dirty
            :label="label"
            :rules="valid(key, inputData[key])"
            @update:model-value="emit('change', { [key]: $event })"
          />
        </VCol>
        <VCol cols="12">
          <slot name="actions" :validate="refVForm?.validate"></slot>
        </VCol>
      </VRow>
    </VForm>
  </div>
</template>
