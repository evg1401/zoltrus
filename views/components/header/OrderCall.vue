<script lang="ts" setup>
import { VForm } from "vuetify/lib/components/index.mjs";
import { createOrderCall } from "@/application/appService";
import DialogCloseBtn from "@core/components/DialogCloseBtn.vue";
import type { OrderCall } from "@/interfaces";

interface Emit {
  (e: "update:dialogVisible", value: boolean): void;
}

const emit = defineEmits<Emit>();

const refVForm = ref<VForm>();
const refSubmit = ref();

const orderCallFields: Ref<OrderCall> = ref({
  firstName: "",
  phone: "",
});

const options = reactive({
  mask: "+7(###) ###-##-##",
  eager: true,
});

const create = () => {
  orderCallFields.value = {
    ...orderCallFields.value,
    phone: orderCallFields.value.phone.replace(/\+|\(|\)|\s|-/g, ""),
  };

  createOrderCall(orderCallFields.value).then((res) => {
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
        <VCardTitle class="text-center py-0">
          Заказ обратного звонка
        </VCardTitle>

        <DialogCloseBtn
          @click="emit('update:dialogVisible', false)"
          class="mx-3 my-3"
        />

        <VCardText>
          <VForm ref="refVForm" @submit.prevent="onSubmit">
            <VRow>
              <VCol cols="12">
                <VTextField
                  v-model="orderCallFields.firstName"
                  label="Имя"
                  :rules="[requiredValidator]"
                />
              </VCol>

              <VCol cols="12">
                <VTextField
                  v-model="orderCallFields.phone"
                  v-maska:[options]
                  :rules="[requiredValidator]"
                  label="Телефон"
                />
              </VCol>
            </VRow>

            <button ref="refSubmit" type="submit" style="display: none" />
          </VForm>
        </VCardText>

        <VCardActions>
          <VBtn block variant="flat" @click="refSubmit.click()">
            Заказать
          </VBtn>
        </VCardActions>
      </VCard>
    </VCol>
  </VRow>
</template>
