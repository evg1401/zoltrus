<script lang="ts" setup>
import { VCardText } from 'vuetify/lib/components/index.mjs'
import bpsPlant from '@images/pages/bps_plant.png'
import warehouse from '@images/pages/warehouse.png'
import evolution from '@images/icons/about/evolution.svg'
import warehouseArea from '@images/icons/about/warehouse-area.svg'
import brakeDisc from '@images/icons/about/brake-disc.svg'
import pad from '@images/icons/about/pad.svg'
import check from '@images/icons/about/check.svg'

definePageMeta({
  layout: 'default',
})

const items = [
  {
    title: '20 лет',
    text: 'на рынке автозапчастей',
    icon: evolution,
  },
  {
    title: '26 000 кв.м.',
    text: 'общая площадь производства',
    icon: warehouseArea,
  },
  {
    title: '1 400',
    text: 'тормозных дисков',
    icon: brakeDisc,
  },
  {
    title: '2 500',
    text: 'тормозных колодок',
    icon: pad,
  },
]

const profit = [
  {
    title: 'Высочайшее качество автозапчастей по самой конкурентоспособной цене',
    icon: check,
  },
  {
    title: 'Прорывное совершенствование процессов производства',
    icon: check,
  },
  {
    title: 'Стабильный контроль качества продукции',
    icon: check,
  },
  {
    title: 'Сертификация: IATF 16949:2016, ECE R90(E4, E11), АМЕРИКА, сертификация NSF, ISO14001',
    icon: check,
  },
  {
    title: 'Консультация с менеджерами по ассортименту и технологиям производства',
    icon: check,
  },
]

const { width: windowWidth } = useWindowSize()
</script>

<template>
  <VMain class="main">
    <VContainer>
      <h1>
        О компании
      </h1>

      <VRow>
        <VCol
          xl="6"
          lg="6"
          md="6"
          :class="{ 'v-col-12': windowWidth < 600 }"
        >
          <div class="my-2">
            <VImg
              width="132"
              height="43"
              src="/logo.png"
            />
          </div>

          <p>
            Автозапчасти бренда ZOLT - это настоящее заводское качество! Произведены на крупном заводе
            Wuhu braxen automotive co. Ltd. в Китае, площадью 26 000 кв.м.
          </p>
          <p class="text-wrap">
            BRAXEN является надежным ведущим производителем высококачественных тормозных компонентов
            с широчайшим ассортиментом, который включает более 1400 видов тормозных колодок, охватывающих
            основные области применения в легковых автомобилях и коммерческих транспортных средствах, а также
            2500 видов тормозных дисков и тормозных барабанов. <br>
            <strong>Сертификация:</strong> IATF 16949:2016, ECE R90(E4, E11), АМЕРИКА, сертификация NSF, ISO14001
          </p>
        </VCol>
        <VCol
          align="center"
          xl="6"
          lg="6"
          md="6"
        >
          <div>
            <VImg
              max-width="500"
              max-height="360"
              :src="bpsPlant"
            />
          </div>
        </VCol>
      </VRow>
      <VRow>
        <VCol>
          <h2
            class="text-center font-weight-bold"
            style="color: #000;"
          >
            О нас в цифрах
          </h2>
        </VCol>
      </VRow>

      <VRow justify="center">
        <VCol
          v-for="(item, i) in items"
          :key="i"
          class="d-flex justify-center"
          xl="3"
          lg="3"
        >
          <VCard
            flat
            class="mx-3"
            width="200px"
          >
            <VCardTitle class="d-flex">
              <VImg
                height="60"
                width="65"
                color="black"
                :src="item.icon"
              />
            </VCardTitle>

            <VCardText class="d-flex align-center flex-column">
              <div>
                <small>
                  <b>{{ item.title }}</b>
                </small>
              </div>
              <div class="text-center">
                <small>
                  {{ item.text }}
                </small>
              </div>
            </VCardText>
          </VCard>
        </VCol>
      </VRow>

      <VRow>
        <VCol class="d-flex justify-center">
          <h3>Наша польза для клиента</h3>
        </VCol>
      </VRow>

      <VRow>
        <VCol
          class="d-flex justify-space-between justify-end px-0"
          xl="6"
          lg="6"
          md="12"
          sm="12"
        >
          <div class="w-100">
            <VImg
              height="340"
              max-width="450"
              min-width="350"
              color="black"
              :src="warehouse"
            />
          </div>
        </VCol>
        <VCol
          class="d-flex flex-column justify-center px-0"
          xl="6"
          lg="6"
          md="12"
          sm="12"
        >
          <VListItem
            v-for="(text, i) in profit"
            :key="i"
          >
            <template #prepend>
              <VImg
                height="38"
                width="38"
                color="black"
                :src="text.icon"
                class="mr-2"
              />
            </template>

            <template #title>
              <div class="my-3 text-wrap">
                {{ text.title }}
              </div>
            </template>
          </VListItem>
        </VCol>
      </VRow>
    </VContainer>
  </VMain>
</template>

<style lang="scss" scoped>
.main {
  background-color: #F9F9F9;
}
</style>
