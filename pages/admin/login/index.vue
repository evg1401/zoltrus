<script lang="ts" setup>
import { VForm } from 'vuetify/lib/components/index.mjs'
import { VNodeRenderer } from '@layouts/components/VNodeRenderer'
import { themeConfig } from '@themeConfig'
import { signIn } from '@/application/authService'
import type { SignInRequest } from '@/interfaces'

definePageMeta({
  layout: 'auth',
  middleware: 'login',
})

const isPasswordVisible = ref(false)

const errors = ref<Record<string, string | undefined>>({
  email: undefined,
  password: undefined,
})

errors.value = {}

const refVForm = ref<VForm>()

const credentials: Ref<SignInRequest> = ref({
  login: '',
  password: '',
})

const login = () => {
  signIn(credentials.value.login, credentials.value.password).then(res => {
    if (res) {
      navigateTo({ name: 'admin' }, { replace: true })
    }
  })
}

const onSubmit = () => {
  refVForm.value?.validate()
    .then(({ valid: isValid }) => {
      if (isValid) {
        login()
      }
    })
}
</script>

<template>
  <VRow
    justify="center"
    align="center"
  >
    <VCol class="d-flex justify-center">
      <VCard
        flat
        :width="400"
        class="mt-12 mt-sm-0 pa-4"
      >
        <VCardText>
          <div class="d-flex align-end">
            <VNodeRenderer
              :nodes="themeConfig.app.logo"
              class="mr-2"
            />

            <h4 class="text-h4">
              <span>Вход в панель управления</span>
            </h4>
          </div>
        </VCardText>
        <VCardText>
          <VForm
            ref="refVForm"
            @submit.prevent="onSubmit"
          >
            <VRow>
              <!-- email -->
              <VCol cols="12">
                <AppTextField
                  v-model="credentials.login"
                  label="Логин"
                  autofocus
                  :rules="[requiredValidator]"
                  :error-messages="errors.email"
                />
              </VCol>

              <!-- password -->
              <VCol cols="12">
                <AppTextField
                  v-model="credentials.password"
                  label="Пароль"
                  :rules="[requiredValidator]"
                  :type="isPasswordVisible ? 'text' : 'password'"
                  :error-messages="errors.password"
                  :append-inner-icon="
                    isPasswordVisible ? 'tabler-eye-off' : 'tabler-eye'
                  "
                  @click:append-inner="isPasswordVisible = !isPasswordVisible"
                />

                <VBtn
                  block
                  type="submit"
                  class="mt-3"
                >
                  вход
                </VBtn>
              </VCol>
            </VRow>
          </VForm>
        </VCardText>
      </VCard>
    </VCol>
  </VRow>
</template>

<style lang="scss">
@use "@core/scss/template/pages/page-auth.scss";
</style>
