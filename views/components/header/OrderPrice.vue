<script lang="ts" setup>
import { VForm } from "vuetify/lib/components/index.mjs";
import { createOrderPrice } from "@/application/appService";
import DialogCloseBtn from "@core/components/DialogCloseBtn.vue";
import type { OrderPrice } from "@/interfaces";

interface Emit {
  (e: "update:dialogVisible", value: boolean): void;
}

const emit = defineEmits<Emit>();

const refVForm = ref<VForm>();
const refSubmit = ref();

const orderPriceFields: Ref<OrderPrice> = ref({
  company: "",
  email: "",
  city: "",
});

const create = () => {
  orderPriceFields.value = {
    ...orderPriceFields.value,
  };

  createOrderPrice(orderPriceFields.value).then((res) => {
    if (res) {
      refVForm.value?.reset();
      emit("update:dialogVisible", false);
    }
  });
};

const onSubmit = () => {
  refVForm.value?.validate().then(({ valid: isValid }) => {
    if (isValid) {
      create();
    }
  });
};
</script>

<template>
  <VRow justify="center" align="center">
    <VCol class="d-flex justify-center">
      <VCard flat :width="400" class="mt-12 mt-sm-0 pa-3">
        <VCardTitle class="text-center py-0">Запрос прайс-листа</VCardTitle>

        <DialogCloseBtn
          @click="emit('update:dialogVisible', false)"
          class="mx-3 my-3"
        />
        <VCardText>
          <VForm ref="refVForm" @submit.prevent="onSubmit">
            <VRow>
              <VCol cols="12">
                <VTextField
                  v-model="orderPriceFields.company"
                  label="Компания"
                  :rules="[requiredValidator]"
                />
              </VCol>

              <VCol cols="12">
                <VTextField
                  v-model="orderPriceFields.city"
                  label="Город"
                  :rules="[requiredValidator]"
                />
              </VCol>

              <VCol cols="12">
                <VTextField
                  v-model="orderPriceFields.email"
                  :rules="[emailValidator, requiredValidator]"
                  label="Email"
                />
              </VCol>
            </VRow>

            <button ref="refSubmit" type="submit" style="display: none" />
          </VForm>
        </VCardText>

        <VCardActions>
          <VBtn block variant="flat" @click="refSubmit.click()">
            Запросить
          </VBtn>
        </VCardActions>
      </VCard>
    </VCol>
  </VRow>
</template>
