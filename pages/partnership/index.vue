<script lang="ts" setup>
import { VForm } from 'vuetify/lib/components/index.mjs'
import { emailValidator, requiredValidator } from '@core/utils/validators'
import { createPartnershipRequest } from '@/application/partnershipService'
import type { PartnerRequest } from '@/interfaces'

definePageMeta({
  layout: 'default',
})

const options = reactive({
  mask: '+7(###) ###-##-##',
  eager: true,
})

const refVForm = ref<VForm>()

const partnership: Ref<PartnerRequest> = ref({
  company: '',
  firstName: '',
  email: '',
  city: '',
  phone: '',
  additional: '',
})

const create = () => {
  partnership.value = {
    ...partnership.value,
    phone: partnership.value.phone.replace(/\+|\(|\)|\s|-/g, ''),
  }
  createPartnershipRequest(partnership.value).then(res => {
    if (res) {
      refVForm.value?.reset()
    }
  })
}

const onSubmit = () => {
  refVForm.value?.validate().then(({ valid: isValid }) => {
    if (isValid) {
      create()
    }
  })
}
</script>

<template>
  <VContainer>
    <VCard flat>
      <VCardTitle>
        <h1>Cтать партнером</h1>
      </VCardTitle>

      <VCardText>
        <div>Для этого достаточно заполнить анкету и отправить ее нам.</div>
        <div>Наши менеджеры свяжутся с Вами.</div>

        <VRow>
          <VForm
            ref="refVForm"
            class="d-flex flex-wrap w-100"
            @submit.prevent="onSubmit"
          >
            <VCol
              cols="12"
              xl="6"
              lg="6"
              md="6"
            >
              <div class="my-3">
                <VTextField
                  v-model="partnership.company"
                  :rules="[requiredValidator]"
                  placeholder="Название компании"
                />
              </div>
              <div class="my-3">
                <VTextField
                  v-model="partnership.firstName"
                  :rules="[requiredValidator]"
                  placeholder="Ваше имя"
                />
              </div>

              <div class="my-3">
                <VTextField
                  v-model="partnership.phone"
                  v-maska:[options]
                  :rules="[requiredValidator]"
                  placeholder="Телефон"
                />
              </div>
            </VCol>

            <VCol
              cols="12"
              xl="6"
              lg="6"
              md="6"
            >
              <div class="my-3">
                <VTextField
                  v-model="partnership.city"
                  :rules="[requiredValidator]"
                  placeholder="Город"
                />
              </div>
              <div class="my-3">
                <VTextField
                  v-model="partnership.email"
                  :rules="[emailValidator, requiredValidator]"
                  placeholder="Email"
                />
              </div>

              <div class="my-3">
                <VTextarea
                  v-model="partnership.additional"
                  auto-grow
                  dirty
                  placeholder="Дополнительная информация"
                />
              </div>
            </VCol>

            <VCol>
              <VBtn type="submit">
                Отправить
              </VBtn>
            </VCol>
          </VForm>
        </VRow>
      </VCardText>
    </VCard>
  </VContainer>
</template>
