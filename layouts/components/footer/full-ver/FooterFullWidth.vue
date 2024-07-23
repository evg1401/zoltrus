<script lang="ts" setup>
import FooterLinks from '../FooterLinks.vue'
import type { Link } from '@/interfaces'
import { companyLinks, infoLinks } from '@/navigation/default'
import callingBlackWhite from '@images/icons/footer/calling-black-white.svg'
import logoBlackWhite from '@images/icons/footer/logo-black-white.svg'
import placePoint from '@images/icons/footer/place-point.svg'

defineProps<{ contactInfoLink: { address: string }; footerLinks: Link[] }>()
</script>

<template>
  <div>
    <VRow align="start">
      <VCol
        xl="2"
        lg="2"
        md="2"
        sm="4"
        xs="12"
        class="d-flex justify-center"
      >
        <div>
          <VImg
            width="130"
            height="45"
            :src="logoBlackWhite"
          />
          <div style="max-width: 12.5rem;">
            <small class="text-white">Разумное решение в автозапчастях</small>
          </div>
        </div>
      </VCol>

      <VCol class="d-flex flex-column justify-center">
        <FooterLinks :links="companyLinks">
          <template #title>
            Компания
          </template>
        </FooterLinks>
      </VCol>

      <VCol class="d-flex flex-column justify-center">
        <FooterLinks :links="footerLinks">
          <template #title>
            Каталоги
          </template>
        </FooterLinks>
      </VCol>

      <VCol class="d-flex flex-column justify-center">
        <FooterLinks :links="infoLinks">
          <template #title>
            Информация
          </template>
        </FooterLinks>
      </VCol>

      <VCol class="d-flex flex-column justify-center">
        <span class="text-white mb-4 d-block">
          <h2 class="text-white">Контакты</h2>
        </span>

        <div class="text-white d-flex">
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

        <div class="d-flex align-center mt-2">
          <div>
            <VImg
              width="24"
              height="24"
              :src="callingBlackWhite"
              class="mr-1"
            />
          </div>
          <a
            class="ml-1 text-white"
            href="tel:+78312808323"
          >
            <small>+7 (831) 280-83-23</small>
          </a>
        </div>
      </VCol>
    </VRow>

    <VRow justify="center">
      <VCol cols="10">
        <VDivider
          color="white"
          thickness="2"
          class="mt-8"
        />
      </VCol>
    </VRow>

    <VRow class="mt-4">
      <VCol class="text-center">
        <small class="text-white">Все права защищены</small>
      </VCol>
      <VCol class="text-center">
        <small class="text-white">Политика безопасности</small>
      </VCol>
    </VRow>
  </div>
</template>
