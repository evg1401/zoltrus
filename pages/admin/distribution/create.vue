<script lang="ts" setup>
import FormDistribution from "@/views/pages/admin/distribution/FormDistribution.vue";
import { createAdminDistributor } from "@/application/distributorService";
import type { FormDistributor, Validate } from "@/interfaces";

definePageMeta({
  layout: "admin",
  middleware: "auth",
});

const inputData: Ref<FormDistributor> = ref({
  name: "",
  index: "",
  region: "",
  city: "",
  street: "",
  phone: "",
  email: "",
  website: "",
});

const onSubmit = async (validate: (() => Promise<Validate>) | undefined) => {
  if (validate) {
    const reValidate = await validate();
    if (!reValidate.valid) {
      return;
    }
  }

  const result = await createAdminDistributor(inputData.value);
  if (result) navigateTo({ name: "admin-distribution" });
};
</script>

<template>
  <VCard flat border>
    <VCardTitle>Создать дистрибьютора</VCardTitle>

    <VCardText>
      <FormDistribution
        :input-data="inputData"
        @change="Object.assign(inputData, $event)"
      >
        <template #actions="{ validate }">
          <VBtn variant="flat" @click="onSubmit(validate)">создать</VBtn>
        </template>
      </FormDistribution>
    </VCardText>
  </VCard>
</template>
