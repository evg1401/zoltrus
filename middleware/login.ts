import { getToken, refresh } from '@/application/authService'
import { getUserDataForStore } from '@/application/userService'

export default defineNuxtRouteMiddleware(async () => {
  const isLoggedIn = getToken()

  if (!isLoggedIn) {
    await refresh()

    if (getToken()) {
      await getUserDataForStore()

      return navigateTo({ name: 'admin' }, { replace: true })
    }
  }
})
