<script lang="ts" setup>
import { fetchMenuItems } from '@/application/catalogService'
import ViewCardIcon from '@/views/components/nav-icons/ViewCardIcon.vue'

const { isMobile } = useDevice()

const commonCardStyle = {
  height: '100%',
  width: '100%',
  minHeight: '12rem',
  minWidth: '20rem',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',

  border: 'none',
  backgroundColor: 'rgba(#fff, 0.9)',
  color: '#FFF',
}

const hoveringCardStyle = (isHovering: boolean | undefined) => ({
  ...commonCardStyle,
  ...(isHovering && {
    zIndex: '150',
    backgroundColor: '#FFF',
  }),
})

const hoveringBtnStyle = (isHovering: boolean | undefined) => ({
  backgroundColor: isHovering ? '#FF6D04' : 'inherit',
})

const { data: menuCardItems } = await useAsyncData('menuCardItems', fetchMenuItems)

const linkStyle = {
  cursor: 'pointer',
  fontSize: '0.85rem',
  lineHeight: '2rem',
}
</script>

<template>
  <VContainer>
    <VRow v-if="menuCardItems">
      <VCol
        v-for="card in menuCardItems"
        :key="card.id"
        xl="4"
        lg="4"
        md="12"
        style="padding-inline: 2px; padding-block: 2px;"
      >
        <VHover>
          <template #default="{ isHovering, props }">
            <VCard
              v-bind="props"
              :style="hoveringCardStyle(isHovering)"
              :elevation="isHovering ? 24 : 0"
              flat
            >
              <VCardTitle>
                <div class="font-weight-bold">
                  {{ card.name }}
                </div>
              </VCardTitle>
              <VCardText class="d-flex">
                <VRow>
                  <VCol
                    v-if="card.children.length > 0"
                    md="6"
                  >
                    <NuxtLink
                      v-for="(subItem, i) in card.children"
                      :key="i"
                      :to="{ name: 'catalog-alias', params: { alias: subItem.alias } }"
                      :style="linkStyle"
                      class="d-flex text-def-text-color px-5"
                    >
                      <span
                        style="font-size: 0.85rem"
                        class="style-title"
                      >
                        {{ subItem.name }}
                      </span>
                    </NuxtLink>
                  </VCol>
                  <VCol
                    cols="12"
                    align-self="end"
                    class="d-flex justify-space-between"
                  >
                    <NuxtLink
                      :to="{ name: 'catalog-alias', params: { alias: card.alias } }"
                      :style="linkStyle"
                      class="d-flex text-def-text-color"
                    >
                      <VBtn
                        v-ripple.center
                        variant="outlined"
                        :color="isHovering ? '#FFF' : 'secondary'"
                        :style="hoveringBtnStyle(isHovering)"
                      >
                        <span class="mr-1">перейти</span>
                        <VIcon size="24">
                          <Icon icon="heroicons:arrow-long-right-20-solid" />
                        </VIcon>
                      </VBtn>
                    </NuxtLink>

                    <div
                      v-if="!isMobile"
                      class="d-flex"
                    >
                      <ViewCardIcon
                        :name="card.alias"
                        :style="{ position: 'relative', bottom: '40px', right: '40px' }"
                        :is-hovering="isHovering"
                      />
                    </div>
                  </VCol>
                </VRow>
              </VCardText>
            </VCard>
          </template>
        </VHover>
      </VCol>
    </VRow>
  </VContainer>
</template>

<style lang="scss">
.style-title {
  &:hover {
    color: #ff6d04;
    cursor: pointer;
  }
}
</style>
