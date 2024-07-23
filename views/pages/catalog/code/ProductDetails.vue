<script lang="ts" setup>
import type { CatalogDetail, Product } from '@/interfaces'

defineProps<{ productDetail: CatalogDetail | Product; fieldsToDisplay: { [key: string]: string } }>()

const imageError = process.env.NO_IMAGE ?? ''
</script>

<template>
  <VRow>
    <VCol class="d-flex align-center justify-center">
      <div class="border">
        <VImg
          width="30rem"
          min-height="18.5rem"
          max-height="25rem"
          :lazy-src="!productDetail.detailPicture?.path ? imageError : productDetail.detailPicture?.path"
          :src="!productDetail.detailPicture?.path ? imageError : productDetail.detailPicture?.path"
        />
      </div>
    </VCol>
    <VCol
      xl="6"
      lg="6"
      md="12"
      sm="12"
    >
      <VRow class="h-100">
        <VCol cols="12">
          <h1 class="text-wrap">
            {{ productDetail.name }}
          </h1>
        </VCol>
        <VCol class="d-flex justify-start flex-column flex-wrap">
          <div>
            <ul class="specifi">
              <li
                v-for="(value, i) in productDetail"
                :key="i"
                class="my-1 text-subtitle-1"
              >
                <template v-if="fieldsToDisplay[i]">
                  <div class="specifi-left">
                    <b>{{ fieldsToDisplay[i] }}</b>
                  </div>

                  <div class="specifi-right">
                    {{ value }}
                  </div>
                </template>
              </li>
            </ul>

            <div
              class="text-primary font-weight-bold"
              style="font-size: 1.5rem"
            >
              <div
                v-if="Array.isArray(productDetail.prices)"
                class="d-flex align-center"
              >
                {{ productDetail.prices[0].value }}
                <Icon icon="icons8:rouble" />
              </div>
            </div>
          </div>
        </VCol>
      </VRow>
    </VCol>
  </VRow>
</template>

<style lang="scss" scoped>
.specifi {
  display: block;
  margin: 0;
  padding: 0;
}

.specifi li {
  display: block;
  letter-spacing: -1ex;
  margin: 5px 0;
}

.specifi-left {
  margin-right: -49%;
  width: 65%;
  vertical-align: top;
  overflow: hidden;
  display: inline-block;
  letter-spacing: normal;
}

.specifi-left:after {
  content: '';
  display: inline-block;
  width: 100%;
  margin: 0 -99% 0 4px;
  vertical-align: baseline;
  border-bottom: 1px dashed #888;
}

.specifi-right {
  display: inline-block;
  letter-spacing: normal;
  padding-left: 3px;
  margin-left: 50%;
  width: 30%;
  vertical-align: bottom;
}
</style>
