<script lang="ts" setup>
import caller from '@images/icons/contact/caller.svg'
import msg from '@images/icons/contact/msg.svg'
import placePoint from '@images/icons/contact/place-point.svg'

definePageMeta({
  layout: 'default',
})
</script>

<template>
  <VContainer>
    <VCard flat>
      <VCardTitle>
        <h1>Контакты</h1>
      </VCardTitle>

      <VCardText>
        <VRow>
          <VCol class="d-flex justify-start align-center">
            <div class="mr-2">
              <VImg
                width="48"
                height="48"
                :src="caller"
              />
            </div>
            <div class="d-flex flex-column">
              <div> Телефон</div>
              <div>
                8 (831) 262-11-62
              </div>
            </div>
          </VCol>
        </VRow>
        <VRow>
          <VCol class="d-flex justify-start align-center">
            <div class="mr-2">
              <VImg
                width="48"
                height="48"
                :src="placePoint"
              />
            </div>
            <div class="d-flex flex-column">
              <div>Наш адрес</div>
              <div>
                г. Н. Новгород , ул. Героя Овчинникова, 1А, 12 офис
              </div>
            </div>
          </VCol>
        </VRow>
        <VRow>
          <VCol class="d-flex justify-start align-center">
            <div class="mr-2">
              <VImg
                width="48"
                height="48"
                :src="msg"
              />
            </div>
            <div class="d-flex flex-column">
              <div>Почта</div>
              <div>
                info@prodetail.su
              </div>
            </div>
          </VCol>
        </VRow>
      </VCardText>
    </VCard>
  </VContainer>
</template>

<!-- geoPos: 'https://yandex.ru/maps/-/CDQDV2Z3' -->
