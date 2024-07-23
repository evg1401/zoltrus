import { actionRepository } from '@/infrastructure/repository'
import type { SortModel, Table, TableItems } from '@/interfaces'
import { useAppStore } from '@/store'
import type { RouteLocationNormalized } from '#vue-router'

export function getActionList(): Table<any> {
  const { setError } = useAppStore()

  const paginationPageSize = ref(8)
  const searchQuery: Ref<string> = ref('')
  const currentPage: Ref<number> = ref(1)
  const totalCount: Ref<number> = ref(0)
  const sortModel: Ref<SortModel[]> = ref([{ colId: 'id' }, { sort: 'asc' }])
  const dataItems: Ref<TableItems<any>> = ref({ items: [], count: 0 })
  const alias: Ref<string> = ref('')

  const getRows = async (): Promise<void> => {
    try {
      const { items, count }: TableItems<any> = await actionRepository.getActionList({
        query: searchQuery.value || '',
        page: currentPage.value,
        limit: paginationPageSize.value,
        sidx: sortModel.value[0].colId,
        sord: sortModel.value[0].sort,
        sectionAlias: alias.value,
      })

      totalCount.value = count
      dataItems.value = { items, count }
    }
    catch (err) {
      setError('Ошибка загрузки данных таблицы')
    }
  }

  const router = useRouter()

  const routing = (p: number): void => {
    router.replace({
      path: router.currentRoute.value.path,
      query: { p },
    })
  }

  const dataMeta = computed(() => {
    const startRow = (currentPage.value - 1) * paginationPageSize.value + 1

    return {
      from: startRow,
      to: Math.min(startRow + paginationPageSize.value - 1, totalCount.value),
      of: Math.ceil(totalCount.value / paginationPageSize.value),
      length: Math.ceil(totalCount.value / paginationPageSize.value),
    }
  })

  const refetchData = () => {
    getRows().then()
  }

  refetchData()

  watch([currentPage, searchQuery, sortModel.value[0]], () => {
    routing(currentPage.value)
    refetchData()
  })

  watch(router.currentRoute, (route: RouteLocationNormalized) => {
    const currentRouteQuery = route.query as unknown as { p: string | undefined }
    if (!currentRouteQuery.p) {
      return
    }
    const pageNumber = Number.parseInt(currentRouteQuery?.p, 10)

    if (pageNumber !== currentPage.value) {
      currentPage.value = pageNumber
      refetchData()
    }
  }, { immediate: true })

  return {
    searchQuery,
    currentPage,
    dataMeta,
    dataItems,
    sortModel,
  }
}
