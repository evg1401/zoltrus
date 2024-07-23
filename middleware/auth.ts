import { canNavigate } from '@/@layouts/plugins/casl'
import { deleteRefreshToken, getRefreshToken, getToken, refresh } from '@/application/authService'
import { getAdminBlockList } from '@/application/contentService'
import { getUserDataForStore } from '@/application/userService'

export default defineNuxtRouteMiddleware(async to => {
  try {
    const isLoggedIn = getToken()
    const refreshToken = getRefreshToken()

    if (!isLoggedIn && !refreshToken) {
      return navigateTo({ name: 'admin-login' }, { replace: true })
    }

    if (isLoggedIn) {
      if (!canNavigate(to)) {
        return navigateTo({ name: 'not-authorized' })
      }

      // подгрузка контент-блоков в меню
      await getAdminBlockList()
    }
    else {
      await refresh()

      if (getToken()) {
        await getUserDataForStore()

        if (!canNavigate(to)) {
          return navigateTo({ name: 'not-authorized' })
        }

        // подгрузка контент-блоков в меню (если страница была перезагружена)
        await getAdminBlockList()
      }
      else {
        return navigateTo({ name: 'admin-login' }, { replace: true })
      }

      // if (!refreshToken) {
      //   return router.replace({ name: 'admin-login' })
      // }
    }
  }
  catch (e) {
    deleteRefreshToken()

    return navigateTo({ name: 'admin-login', query: { to: to.name !== 'admin' ? to.fullPath : undefined } }, { replace: true })
  }
})
