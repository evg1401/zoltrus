<script lang="ts" setup>
import type { BannerData } from "@/interfaces";
import ImageFormInput from "@/views/components/tools/ImageFormInput.vue";

interface Props {
  bannerFields: BannerData | null | undefined;
  isEdit?: boolean;
}

interface Emit {
  (e: "update", value: any): void;
  (e: "recoveryImage"): void;
}

const props = defineProps<Props>();
const emit = defineEmits<Emit>();
const { bannerFields } = toRefs(props);

const options = reactive({
  mask: "https://A",

  tokens: {
    A: {
      pattern: /[a-zA-Z0-9-_.-/]/,
      multiple: true,
    },
  },
});
</script>

<template>
  <VRow v-if="bannerFields">
    <VCol cols="12">
      <div class="d-flex">
        <VSwitch
          :model-value="bannerFields.active"
          @update:model-value="emit('update', { active: $event })"
        >
          <template #label>
            <span class="mr-1">Статус публикации:</span>
            <b>{{ bannerFields.active ? "активен" : "не активен" }}</b>
          </template>
        </VSwitch>
      </div>
    </VCol>
    <VCol cols="12">
      <VRow>
        <VCol cols="12" lg="6" xl="6">
          <VTextField
            v-maska:[options]
            dirty
            clearable
            :model-value="bannerFields.url"
            label="Адрес ссылки баннера"
            class="w-100"
            @update:model-value="emit('update', { url: $event })"
          />
        </VCol>

        <VCol>
          <VTextField
            dirty
            clearable
            :rules="[integerValidator]"
            :model-value="bannerFields.sort"
            label="Сортировка"
            class="w-100"
            @update:model-value="emit('update', { sort: $event })"
          />
        </VCol>
      </VRow>
    </VCol>
    <VCol cols="12" lg="6" xl="6">
      <VTextField
        :model-value="
          !bannerFields.activeFrom
            ? null
            : new Date(bannerFields.activeFrom).toISOString().split('T')[0]
        "
        label="Дата начала публикации"
        class="mr-3 w-100"
        type="date"
        clearable
        @update:model-value="emit('update', { activeFrom: $event })"
      />
    </VCol>
    <VCol>
      <VTextField
        :model-value="
          !bannerFields.activeTo
            ? null
            : new Date(bannerFields.activeTo).toISOString().split('T')[0]
        "
        label="Дата завершения публикации"
        class="w-100"
        type="date"
        clearable
        @update:model-value="emit('update', { activeTo: $event })"
      />
    </VCol>
    <VCol cols="12">
      <ImageFormInput
        :file-id="bannerFields.file?.id"
        :image="bannerFields.file"
        class="border"
        @update="emit('update', { file: $event })"
        @recovery-image="emit('recoveryImage')"
      />
    </VCol>
  </VRow>
</template>
