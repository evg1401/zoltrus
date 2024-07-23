<script lang="ts" setup>
import type { CatalogCard, ChildSection, Section } from '@/interfaces'
import ViewCardIcon from '@/views/components/nav-icons/ViewCardIcon.vue'

interface Props {
  menuItems: CatalogCard[] | Section[] | ChildSection[]
  isSubCard?: boolean | undefined
}

const props = defineProps<Props>()
const { menuItems } = toRefs(props)

const iconStyle = { height: '48px', width: '48px' }

const commonCardStyle = {
  height: '100px',
  width: '100%',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
  border: 'none',
  backgroundColor: 'rgba(#fff, 0.9)',
  color: '#FFF',
  cursor: 'pointer',
}

const hoveringCardStyle = (isHovering: boolean | undefined) => ({
  ...commonCardStyle,
  ...(isHovering && {
    zIndex: '150',
    backgroundColor: '#FFF',
  }),
})
</script>

<template>
  <VRow>
    <VCol
      v-for="card in menuItems"
      :key="card.id"
      cols="12"
      xl="4"
      lg="6"
      md="6"
      sm="12"
    >
      <VHover>
        <template #default="{ isHovering, props: hoverProps }">
          <VCard
            v-bind="hoverProps"
            :style="hoveringCardStyle(isHovering)"
            :elevation="isHovering ? 24 : 0"
            flat
            @click="navigateTo({ name: 'catalog-alias', params: { alias: card.alias } })"
          >
            <VCardTitle>
              <div class="d-flex flex-row align-center">
                <span class="mt-2 mr-2">
                  <ViewCardIcon
                    :is-sub-card="!isSubCard ? isSubCard : true"
                    :name="card.alias"
                    :is-hovering="isHovering"
                    :style="iconStyle"
                  />
                </span>
                <span class="text-wrap">
                  {{ card.name }}
                </span>
              </div>
            </VCardTitle>
          </VCard>
        </template>
      </VHover>
    </VCol>
  </VRow>
</template>
