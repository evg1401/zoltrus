<script lang="ts" setup>
import { createPartnershipRequest } from "@/application/partnershipService";
import type { PartnerRequest } from "@/interfaces";
import { requiredValidator } from "@core/utils/validators";
import brakePads from "@images/pages/brake-pads.png";

const { width: windowWidth } = useWindowSize();

const options = reactive({
  mask: "+7(###) ###-##-##",
  eager: true,
});
const refVForm = ref();
const refSubmit = ref();
const partnership: Ref<Pick<PartnerRequest, "email" | "phone">> = ref({
  email: "",
  phone: "",
});

const onSubmit = () => {
  partnership.value = {
    ...partnership.value,
    phone: partnership.value.phone.replace(/\+|\(|\)|\s|-/g, ""),
  };

  createPartnershipRequest(partnership.value).then(async (res) => {
    if (res) {
      refVForm.value.reset();
    }
  });
};
</script>

<template>
  <VMain class="main">
    <VContainer>
      <VRow class="mt-6">
        <VCol xl="8" lg="8" md="8" sm="12">
          <div class="mb-4">
            <div class="font-weight-bold">
              Хотите стать представителем в вашем регионе?
            </div>
            <div class="font-weight-bold">Оставьте заявку!</div>
          </div>
          <div class="d-flex">
            <VForm
              ref="refVForm"
              class="d-flex w-100"
              @submit.prevent="onSubmit"
            >
              <VTextField
                v-model="partnership.phone"
                v-maska:[options]
                bg-color="#FFF"
                placeholder="телефон"
                class="mr-3 w-100"
              />
              <VTextField
                v-model="partnership.email"
                :rules="[requiredValidator]"
                bg-color="#FFF"
                placeholder="e-mail"
                class="w-100"
              />

              <button ref="refSubmit" type="submit" style="display: none" />
            </VForm>
          </div>
          <div class="d-flex flex-column mt-4">
            <VBtn style="max-inline-size: 200px" @click="refSubmit.click()">
              оставить заявку
            </VBtn>

            <small
              style="line-height: 15px; max-inline-size: 460px"
              class="text-wrap d-block mt-2"
            >
              Нажимая стрелку «Далее», я даю согласие на получение рекламной
              рассылки и обработку персональных данных
            </small>
          </div>
        </VCol>
        <VCol v-if="windowWidth > 960" class="d-flex justify-end">
          <div class="d-flex">
            <VImg width="250" height="250" :src="brakePads" />
          </div>
        </VCol>
      </VRow>
    </VContainer>
  </VMain>
</template>

<style lang="scss" scoped>
.main {
  background-color: #f9f9f9;
}
</style>
