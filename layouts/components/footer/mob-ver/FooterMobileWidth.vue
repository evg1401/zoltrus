<script lang="ts" setup>
import FooterLinks from '../FooterLinks.vue'
import type { Link } from '@/interfaces'
import { companyLinks, infoLinks } from '@/navigation/default'
import placePoint from '@images/icons/footer/place-point.svg'

defineProps<{ contactInfoLink: { address: string }; footerLinks: Link[] }>()

const open = ref([])
</script>

<template>
  <VList
    v-model:opened="open"
    variant="text"
    base-color="#FFF"
    class="list-default"
  >
    <VListGroup value="company">
      <template #activator="{ props }">
        <VListItem
          v-bind="props"
          title="Компания"
        />
      </template>
      <div class="line-height d-flex justify-center">
        <FooterLinks :links="companyLinks" />
      </div>
    </VListGroup>
    <VListGroup value="catalogs">
      <template #activator="{ props }">
        <VListItem
          v-bind="props"
          title="Каталоги"
        />
      </template>
      <div class="line-height d-flex justify-center">
        <FooterLinks :links="footerLinks" />
      </div>
    </VListGroup>
    <VListGroup value="info">
      <template #activator="{ props }">
        <VListItem
          v-bind="props"
          title="Информация"
        />
      </template>
      <div class="line-height d-flex justify-center">
        <FooterLinks :links="infoLinks" />
      </div>
    </VListGroup>
    <VListGroup value="contacts">
      <template #activator="{ props }">
        <VListItem
          v-bind="props"
          title="Контакты"
        />
      </template>
      <div class="line-height d-flex justify-center">
        <div class="d-flex">
          <VImg
            width="24"
            height="24"
            :src="placePoint"
            class="mr-1"
          />

          <small class="text-white">
            {{ contactInfoLink.address }}
          </small>
        </div>
      </div>
    </VListGroup>
  </VList>
</template>

<style lang="scss" scoped>
.line-height {
  line-height: 25px
}

.list-default {
  background-color: inherit;
  color: #FFF;
}
</style>
