<script lang="ts" setup>
import FormDistribution from "@/views/pages/admin/distribution/FormDistribution.vue";
import {
  getAdminDistributor,
  editAdminDistributor,
} from "@/application/distributorService";
import type { FormDistributor, Validate } from "@/interfaces";

definePageMeta({
  layout: "admin",
  middleware: "auth",
});

const router = useRouter();
const currentRouteParams = router.currentRoute.value.params as { id: string };

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

const { data: distributor, refresh } = await useAsyncData(
  "distributor",
  async () => getAdminDistributor(Number.parseInt(currentRouteParams.id, 10))
);

Object.assign(inputData.value, distributor.value);

const onSubmit = async (validate: (() => Promise<Validate>) | undefined) => {
  if (validate) {
    const reValidate = await validate();
    if (!reValidate.valid) {
      return;
    }
  }

  await editAdminDistributor(
    Number.parseInt(currentRouteParams.id, 10),
    inputData.value
  );
};
</script>

<template>
  <VCard flat border>
    <VCardTitle>
      <div>Редактировать дистрибьютора</div>

      <VBtn
        v-ripple.center
        variant="elevated"
        class="px-2 my-3"
        @click="navigateTo({ name: 'admin-distribution' })"
      >
        <VIcon size="24">
          <Icon icon="heroicons:chevron-left" />
        </VIcon>
        назад
      </VBtn>
    </VCardTitle>

    <VCardText>
      <FormDistribution
        :input-data="inputData"
        @change="Object.assign(inputData, $event)"
      >
        <template #actions="{ validate }">
          <VBtn variant="flat" @click="onSubmit(validate)">редактировать</VBtn>
        </template>
      </FormDistribution>
    </VCardText>
  </VCard>
</template>
