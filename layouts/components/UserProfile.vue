<script setup lang="ts">
import { PerfectScrollbar } from 'vue3-perfect-scrollbar'
import { logout } from '@/application/authService'

// import { useUserStore } from '@/store'
// const router = useRouter()
// const userStore = useUserStore()
// const { userData } = storeToRefs(userStore)

async function onClickLogout() {
  logout()
  navigateTo({ name: 'admin-login', replace: true })
}

const userProfileList = [
  { type: 'divider' },

  // { type: 'navItem', icon: 'tabler-user', title: 'Profile', to: { name: 'user-view-id', params: { id: 21 } } },
  // { type: 'navItem', icon: 'tabler-settings', title: 'Settings', to: { name: 'account-settings-tab', params: { tab: 'account' } } },
  // { type: 'navItem', icon: 'tabler-credit-card', title: 'Billing', to: { name: 'account-settings-tab', params: { tab: 'billing-plans' } }, badgeProps: { color: 'error', content: '3' } },
  { type: 'divider' },
  { type: 'navItem', icon: 'tabler-logout', title: 'Выход', onClick: onClickLogout },
]
</script>

<template>
  <VBadge
    dot
    bordered
    location="bottom right"
    offset-x="3"
    offset-y="3"
    color="success"
  >
    <VAvatar
      class="cursor-pointer"
      color="primary"
      variant="tonal"
    >
      <VIcon icon="tabler-user" />

      <VMenu
        activator="parent"
        width="230"
        location="bottom end"
        offset="14px"
      >
        <VList>
          <PerfectScrollbar :options="{ wheelPropagation: false }">
            <template
              v-for="item in userProfileList"
              :key="item.title"
            >
              <VListItem
                v-if="item.type === 'navItem'"
                @click="item.onClick && item.onClick()"
              >
                <template #prepend>
                  <VIcon
                    class="me-2"
                    :icon="item.icon"
                    size="22"
                  />
                </template>

                <VListItemTitle>{{ item.title }}</VListItemTitle>
              </VListItem>
            </template>
          </PerfectScrollbar>
          <!--
            <VListItem>
            <template #prepend>
            <VListItemAction start>
            <VBadge
            dot
            location="bottom right"
            offset-x="3"
            offset-y="3"
            color="success"
            bordered
            >
            <VAvatar
            :color="!(userData && userData.avatar) ? 'primary' : undefined"
            :variant="!(userData && userData.avatar) ? 'tonal' : undefined"
            >
            <VImg
            v-if="userData && userData.avatar"
            :src="userData.avatar"
            />
            <VIcon
            v-else
            icon="tabler-user"
            />
            </VAvatar>
            </VBadge>
            </VListItemAction>
            </template>

            <VListItemTitle class="font-weight-medium">
            {{ userData.fullName || userData.username }}
            </VListItemTitle>
            <VListItemSubtitle>{{ userData.role }}</VListItemSubtitle>
            </VListItem>

            <PerfectScrollbar :options="{ wheelPropagation: false }">
            <template
            v-for="item in userProfileList"
            :key="item.title"
            >
            <VListItem
            v-if="item.type === 'navItem'"
            :to="item.to"
            @click="item.onClick && item.onClick()"
            >
            <template #prepend>
            <VIcon
            class="me-2"
            :icon="item.icon"
            size="22"
            />
            </template>

            <VListItemTitle>{{ item.title }}</VListItemTitle>

            <template
            v-if="item.badgeProps"
            #append
            >
            <VBadge v-bind="item.badgeProps" />
            </template>
            </VListItem>

            <VDivider
            v-else
            class="my-2"
            />
            </template>
            </PerfectScrollbar>
          -->
        </VList>
      </VMenu>
    </VAvatar>
  </VBadge>
</template>
