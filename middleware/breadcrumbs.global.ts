import navDef from '@/navigation/default/header'
import { uploadCatalogBreadCrumbsToStore, uploadCatalogSectionToStore } from '@/application/catalogService'
import { useNavStore } from '@/store'
import type { Breadcrumb } from '@/interfaces'
import { createDeviceId } from '@/application/appService'

export default defineNuxtRouteMiddleware(async to => {
  const navStore = useNavStore()
  const isCatalog = to.path.split('/')[1] === 'catalog'
  if (isCatalog) {
    const params = to.params as { alias: string }

    const [section, breadcrumbs] = await Promise.all([
      uploadCatalogSectionToStore(params.alias),
      uploadCatalogBreadCrumbsToStore(params.alias),
    ])

    navStore.setBreadcrumbs([{ name: 'Главная', alias: '' }, { name: 'Каталог', alias: 'catalog' }, ...breadcrumbs ?? []])
    navStore.setSection(section ?? null)
  }

  else {
    const chUrl = to.matched[0]?.path.split('/')
    if (!chUrl) {
      return
    }
    const breadcrumbs: Omit<Breadcrumb, 'id'>[] = []

    chUrl.forEach(x => {
      const navItem = navDef.find(y => y.page === `/${x}`)
      if (navItem) {
        breadcrumbs.push({ name: navItem.title, alias: x })
      }
    })

    navStore.setBreadcrumbs([{ name: 'Главная', alias: '' }, ...breadcrumbs ?? []])
  }

  createDeviceId()

  // const bredCrumbs: Omit<Breadcrumb, 'id'>[] = []
  // const chUrl = to.matched[0].path.split('/')

  // // const params = to.params as { code?: string; alias?: string }

  // chUrl.forEach(x => {
  //   const navItem = navDef.find(y => y.page === `/${x}`)
  //   if (navItem) {
  //     bredCrumbs.push({ name: navItem.title, alias: x })
  //   }

  // else if (x === '') {
  //   bredCrumbs.push({ title: 'Главная' })
  // }
  // else if (x === 'catalog') {
  //   bredCrumbs.push({ title: 'Каталог', alias: x })
  // }

  // else if (x === ':code()') {
  //   bredCrumbs.push({ title: 'code', href: `/${params?.code}` })
  // }
  // else {
  //   const rs = findCategoryByAlias(getMenuItems.value, params?.alias)
  //   if (!rs) {
  //     return
  //   }

  //   bredCrumbs.push({ title: rs?.name, href: `/catalog/${params?.alias}` })
  // }
  // })

  // navStore.setBreadcrumbs(bredCrumbs)
})
