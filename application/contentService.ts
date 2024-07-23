import type { AxiosError } from 'axios'
import { blockRepository } from '@/infrastructure/repository'
import type { ApiError, BlockItem, ContentBlock, ContentElement, ContentElementItem, GetRowsParams, PaginationData, TableItems } from '@/interfaces'
import { useAppStore, useMenuStore } from '@/store'
import type { ContentListData, ContentListItems } from '@/interfaces/content/content-list.interface'

export async function getAdminBlockList({ isReload = false }: { isReload?: boolean } = {}) {
  const { setError } = useAppStore()
  const menuStore = useMenuStore()
  const { getDynamicMainMenu } = storeToRefs(menuStore)

  try {
    const mappingMenuItems = (x: BlockItem) => ({ title: x.title, to: { name: 'admin-block-id', params: { id: x.id }, icon: x.icon, action: 'manage', subject: 'all' } })
    if (getDynamicMainMenu.value.length === 0 || isReload) {
      const blockList = await blockRepository.getAdminBlockList()

      menuStore.setDynamicMainMenu(blockList.items.map(mappingMenuItems))
    }
  }
  catch (e) {
    if (e instanceof Error) {
      const axiosError = e as AxiosError<ApiError>
      if (axiosError.response) {
        setError(axiosError.response.data?.message)
      }
      else {
        setError(e.message)
      }
    }

    return []
  }
}

export async function getAdminContentElementList(blockId: number | undefined) {
  const { setError } = useAppStore()
  const searchQuery: Ref<string> = ref('')
  const paginationPageSize: Ref<number> = ref(50)
  const currentPage: Ref<number> = ref(1)
  const sortModel: Ref<any[]> = ref([{ colId: 'id' }, { sort: 'asc' }])
  const isLoading: Ref<boolean> = ref(true)
  const contentBlocks: Ref<BlockItem[]> = ref([])

  const dataMeta: Ref<PaginationData> = ref({
    from: 0,
    to: 0,
    of: 0,
    length: 0,
  })

  const getRows = async (params: GetRowsParams): Promise<void> => {
    try {
      const { sortModel: sortModelProps, startRow, successCallback } = params

      const { items, count }: TableItems<BlockItem> = await blockRepository.getAdminContentElementList({
        query: searchQuery.value ? searchQuery.value : null,
        page: startRow,
        limit: paginationPageSize.value || 100,
        sidx: ((sortModelProps) || []).length > 0 ? sortModelProps[0].colId : 'id',
        sord: ((sortModelProps) || []).length > 0 ? sortModelProps[0].sort : 'asc',
        blockId,
      })

      const from = computed(() => (currentPage.value - 1) * paginationPageSize.value + 1)

      dataMeta.value = {
        from: from.value,
        to: from.value + paginationPageSize.value - 1,
        of: (count ?? 0),
        length: Math.ceil(count / paginationPageSize.value),
      }

      successCallback(items || [], count || 0)
      isLoading.value = false
    }
    catch (err) {
      const { successCallback } = params

      successCallback([], 0)
      setError('Ошибка загрузки данных таблицы')
      isLoading.value = false
    }
  }

  const refetchData = () => {
    isLoading.value = true
    getRows({ startRow: currentPage.value, sortModel: sortModel.value, successCallback: (res: BlockItem[]) => (contentBlocks.value = res) }).then()
  }

  refetchData()

  watch([currentPage, searchQuery, sortModel.value[0]], () => {
    refetchData()
  })

  return {
    searchQuery,
    paginationPageSize,
    isLoading,
    dataMeta,
    currentPage,
    sortModel,
    contentBlocks,
    refetchData,

    getRows,
  }
}

export async function createAdminContentBlock(params: any) {
  const { setError, setSuccess } = useAppStore()
  try {
    const result = await blockRepository.createAdminContentBlock(params)
    if (result) {
      setSuccess('Контент-блок успешно создан')

      return result
    }
  }
  catch (e) {
    if (e instanceof Error) {
      const axiosError = e as AxiosError<ApiError>
      if (axiosError.response) {
        setError(axiosError.response.data?.message)
      }
      else {
        setError(e.message)
      }
    }
  }
}

export async function createAdminContentElement(params: any) {
  const { setError, setSuccess } = useAppStore()
  try {
    const result = await blockRepository.createAdminContentElement(params)
    if (result) {
      setSuccess('Контент-элемент успешно создан')

      return result
    }
  }
  catch (e) {
    if (e instanceof Error) {
      const axiosError = e as AxiosError<ApiError>
      if (axiosError.response) {
        setError(axiosError.response.data?.message)
      }
      else {
        setError(e.message)
      }
    }
  }
}

export async function editAdminContentBlock(id: number, params: FormData): Promise<boolean> {
  const { setError, setSuccess } = useAppStore()
  try {
    await blockRepository.editAdminContentBlock(id, params)
    setSuccess('Изменения сохранены')

    return true
  }
  catch (e) {
    if (e instanceof Error) {
      const axiosError = e as AxiosError<ApiError>
      if (axiosError.response) {
        setError(axiosError.response.data?.message)
      }
      else {
        setError(e.message)
      }
    }

    return false
  }
}

export async function deleteAdminContentElement(id: number, callback?: () => Promise<any>): Promise<boolean | undefined> {
  const { setError, setSuccess } = useAppStore()
  try {
    const result = await blockRepository.deleteAdminContentElement(id)

    if (result) {
      setSuccess('Удаление выполнено успешно')

      if (callback) {
        await callback()
      }

      return result
    }
  }
  catch (e) {
    if (e instanceof Error) {
      const axiosError = e as AxiosError<ApiError>
      if (axiosError.response) {
        setError(axiosError.response.data?.message)
      }
      else {
        setError(e.message)
      }
    }
  }
}

export async function editAdminContentElement(id: number, params: FormData): Promise<boolean> {
  const { setError, setSuccess } = useAppStore()
  try {
    await blockRepository.editAdminContentElement(id, params)
    setSuccess('Изменения сохранены')

    return true
  }
  catch (e) {
    if (e instanceof Error) {
      const axiosError = e as AxiosError<ApiError>
      if (axiosError.response) {
        setError(axiosError.response.data?.message)
      }
      else {
        setError(e.message)
      }
    }

    return false
  }
}

export async function getAdminContentBlock(id: number): Promise<BlockItem | undefined> {
  const { setError } = useAppStore()
  try {
    return await blockRepository.getAdminContentBlock(id)
  }
  catch (e) {
    if (e instanceof Error) {
      const axiosError = e as AxiosError<ApiError>
      if (axiosError.response) {
        setError(axiosError.response.data?.message)
      }
      else {
        setError(e.message)
      }
    }
  }
}

export async function getAdminContentElement(id: number): Promise<ContentElementItem | undefined> {
  const { setError } = useAppStore()
  try {
    return await blockRepository.getAdminContentElement(id)
  }
  catch (e) {
    if (e instanceof Error) {
      const axiosError = e as AxiosError<ApiError>
      if (axiosError.response) {
        setError(axiosError.response.data?.message)
      }
      else {
        setError(e.message)
      }
    }
  }
}

export function getContentElementList(initialAlias: string | undefined): ContentListData<ContentElement, ContentElementItem> {
  const { setError } = useAppStore()

  const paginationPageSize = ref(8)
  const searchQuery: Ref<string> = ref('')
  const currentPage: Ref<number> = ref(1)
  const totalCount: Ref<number> = ref(0)
  const isLoading: Ref<boolean> = ref(true)
  const sortModel: Ref<any[]> = ref([{ colId: 'id' }, { sort: 'desc' }])
  const dataItems: Ref<ContentListItems<ContentElement, ContentElementItem>> = ref({ items: [], count: 0, block: null })
  const alias: Ref<string> = ref('')

  if (initialAlias) {
    alias.value = initialAlias
  }

  const getRows = async (): Promise<void> => {
    try {
      const { items, count, block }: ContentListItems<ContentElement, ContentElementItem> = await blockRepository.getContentElementList({
        query: searchQuery.value || null,
        page: currentPage.value,
        limit: paginationPageSize.value,
        sidx: sortModel.value[0]?.colId,
        sord: sortModel.value[0]?.sort,
        contentBlockAlias: alias.value,
      })

      totalCount.value = count
      dataItems.value = { items, count, block }

      isLoading.value = false
    }
    catch (err) {
      setError('Ошибка загрузки данных таблицы')
      isLoading.value = false
    }
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
    isLoading.value = true
    getRows().then()
  }

  watch([currentPage, searchQuery, sortModel.value[0]], () => {
    refetchData()
  }, { immediate: true })

  return {
    searchQuery,
    currentPage,
    dataMeta,
    dataItems,
    sortModel,
    isLoading,
  }
}

export async function getContentElementByAlias(alias: string): Promise<ContentElementItem | undefined> {
  const { setError } = useAppStore()
  try {
    return await blockRepository.getContentElementByAlias(alias)
  }
  catch (e) {
    if (e instanceof Error) {
      const axiosError = e as AxiosError<ApiError>
      if (axiosError.response) {
        setError(axiosError.response.data?.message)
      }
      else {
        setError(e.message)
      }
    }
  }
}

export async function getContentBlockByAlias(alias: string): Promise<ContentBlock | undefined> {
  const { setError } = useAppStore()
  try {
    return await blockRepository.getContentBlockByAlias(alias)
  }
  catch (e) {
    if (e instanceof Error) {
      const axiosError = e as AxiosError<ApiError>
      if (axiosError.response) {
        setError(axiosError.response.data?.message)
      }
      else {
        setError(e.message)
      }
    }
  }
}
