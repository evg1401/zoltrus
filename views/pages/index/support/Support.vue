<script lang="ts" setup>
import assortment from '@images/icons/request/assortment.svg'
import delivery from '@images/icons/request/delivery.svg'
import marketing from '@images/icons/request/marketing.svg'
import shipment from '@images/icons/request/shipment.svg'

const items = [
  {
    title: 'Ассортимент',
    text: 'Уникальный ассортимент втозапчастей по спец.ценам всегда в наличие',
    icon: assortment,
  },
  {
    title: 'Маркетинговая поддержка',
    text: 'POS-материалы для оформления торговых точек. Акции и сувенирная продукция для ваших клиентов',
    icon: marketing,
  },
  {
    title: 'Доставка',
    text: 'Бесплатная доставка заказа точно по адресу в любой регион России',
    icon: delivery,
  },
  {
    title: 'Единый канал поставки',
    text: 'Автозапчасти напрямую от заводов без наценок и посредников',
    icon: shipment,
  },
]
</script>

<template>
  <VMain class="main">
    <VContainer>
      <VCard flat>
        <VRow>
          <VCol
            v-for="(item, i) in items"
            :key="i"
            md="6"
            sm="12"
            class="d-flex"
          >
            <VRow>
              <VCol class="d-flex justify-start align-center">
                <div class="mr-4">
                  <VImg
                    width="85"
                    height="75"
                    :src="item.icon"
                  />
                </div>
                <div class="d-flex flex-column">
                  <h2 class="text-wrap">
                    {{ item.title }}
                  </h2>
                  <div class="text-wrap">
                    {{ item.text }}
                  </div>
                </div>
              </VCol>
            </VRow>
          </VCol>
        </VRow>
      </VCard>
    </VContainer>
  </VMain>
</template>

<style lang="scss" scoped>
.main {
  background-color: #FFF;
}
</style>
