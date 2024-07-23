import type { AxiosError } from 'axios'
import type { ApiError, GetRowsParams, OrderCall, OrderPrice, PaginationData, TableItems } from '@/interfaces'
import { useAppStore } from '@/store'
import { appRepository } from '@/infrastructure/repository'

export function createDeviceId() {
  if (process.client) {
    let deviceId = localStorage.getItem('device::sid')
    if (!deviceId) {
      deviceId = ''

      const possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'

      for (let i = 0; i < 16; i++) {
        deviceId += possible.charAt(Math.floor(Math.random() * possible.length))
      }
      localStorage.setItem('device::sid', deviceId)
    }
    const appStore = useAppStore()

    appStore.setDeviceId(deviceId)
  }
}

export async function createOrderCall(params: OrderCall): Promise<boolean | undefined> {
  const { setError, setSuccess } = useAppStore()
  try {
    const result = await appRepository.createOrderCall(params)

    if (result) {
      setSuccess('Запрос на звонок отправлен')

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

export async function createOrderPrice(params: OrderPrice): Promise<boolean | undefined> {
  const { setError, setSuccess } = useAppStore()
  try {
    const result = await appRepository.createOrderPrice(params)

    if (result) {
      setSuccess('Запрос прайс-листа отправлен')

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

export function getAdminOrdersCallList() {
  const { setError } = useAppStore()
  const searchQuery: Ref<string> = ref('')
  const paginationPageSize: Ref<number> = ref(100)
  const currentPage: Ref<number> = ref(1)
  const sortModel: Ref<any[]> = ref([{ colId: 'id' }, { sort: 'desc' }])
  const isLoading: Ref<boolean> = ref(true)
  const ordersCall: Ref<OrderCall[]> = ref([])

  const dataMeta: Ref<PaginationData> = ref({
    from: 0,
    to: 0,
    of: 0,
    length: 0,
  })

  const getRows = async (params: GetRowsParams): Promise<void> => {
    try {
      const { sortModel: sortModelProps, startRow, successCallback } = params
      const filter: any = {}

      const { items, count }: TableItems<OrderCall> = await appRepository.getAdminOrdersCallList({
        query: searchQuery.value ? searchQuery.value : null,
        page: startRow,
        limit: paginationPageSize.value || 100,
        sidx: ((sortModelProps) || []).length > 0 ? sortModelProps[0].colId : 'id',
        sord: ((sortModelProps) || []).length > 0 ? sortModelProps[0].sort : 'asc',
        ...filter,
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
    getRows({ startRow: currentPage.value, sortModel: sortModel.value, successCallback: (res: OrderCall[]) => (ordersCall.value = res) }).then()
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
    ordersCall,
    refetchData,

    getRows,
  }
}

export function getAdminOrdersPriceList() {
  const { setError } = useAppStore()
  const searchQuery: Ref<string> = ref('')
  const paginationPageSize: Ref<number> = ref(100)
  const currentPage: Ref<number> = ref(1)
  const sortModel: Ref<any[]> = ref([{ colId: 'id' }, { sort: 'desc' }])
  const isLoading: Ref<boolean> = ref(true)
  const ordersPrice: Ref<OrderCall[]> = ref([])

  const dataMeta: Ref<PaginationData> = ref({
    from: 0,
    to: 0,
    of: 0,
    length: 0,
  })

  const getRows = async (params: GetRowsParams): Promise<void> => {
    try {
      const { sortModel: sortModelProps, startRow, successCallback } = params
      const filter: any = {}

      const { items, count }: TableItems<OrderPrice> = await appRepository.getAdminOrdersPriceList({
        query: searchQuery.value ? searchQuery.value : null,
        page: startRow,
        limit: paginationPageSize.value || 100,
        sidx: ((sortModelProps) || []).length > 0 ? sortModelProps[0].colId : 'id',
        sord: ((sortModelProps) || []).length > 0 ? sortModelProps[0].sort : 'asc',
        ...filter,
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
    getRows({ startRow: currentPage.value, sortModel: sortModel.value, successCallback: (res: OrderCall[]) => (ordersPrice.value = res) }).then()
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
    ordersPrice,
    refetchData,

    getRows,
  }
}