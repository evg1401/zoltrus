<script lang="ts" setup>
import FooterFullWidth from './full-ver/FooterFullWidth.vue'
import FooterMobileWidth from './mob-ver/FooterMobileWidth.vue'
import { fetchMenuItems } from '@/application/catalogService'

const { isDesktop } = useDevice()
const contactInfoLink = { address: ' г. Н. Новгород, ул. Героя Овчинникова, 1А' }

const { data: menuCardItems } = await useAsyncData('menuCardItems', fetchMenuItems)
const footerLinksComputed = computed(() => menuCardItems.value?.map(x => ({ page: `/catalog/${x.alias}`, title: x.name })))
</script>

<template>
  <VContainer>
    <template v-if="isDesktop">
      <FooterFullWidth
        :contact-info-link="contactInfoLink"
        :footer-links="footerLinksComputed ?? []"
      />
    </template>

    <template v-else>
      <FooterMobileWidth
        :contact-info-link="contactInfoLink"
        :footer-links="footerLinksComputed ?? []"
      />
    </template>
  </VContainer>
</template>
