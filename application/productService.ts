import type { AxiosError } from 'axios'
import { productRepository } from '@/infrastructure/repository'
import type { ApiError, GetRowsParams, PaginationData, Product, TableItems } from '@/interfaces'
import { useAppStore } from '@/store'

export function getAdminProductList() {
  const { setError } = useAppStore()
  const searchQuery: Ref<string> = ref('')
  const paginationPageSize: Ref<number> = ref(50)
  const currentPage: Ref<number> = ref(1)
  const sortModel: Ref<any[]> = ref([{ colId: 'id' }, { sort: 'asc' }])
  const isLoading: Ref<boolean> = ref(true)
  const products: Ref<Product[]> = ref([])

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

      const { items, count }: TableItems<Product> = await productRepository.getAdminProductList({
        page: startRow,
        limit: paginationPageSize.value || 100,
        sidx: ((sortModelProps) || []).length > 0 ? sortModelProps[0].colId : 'id',
        sord: ((sortModelProps) || []).length > 0 ? sortModelProps[0].sort : 'asc',
        searchQuery: searchQuery.value ? searchQuery.value : null,
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
    getRows({ startRow: currentPage.value, sortModel: sortModel.value, successCallback: (res: Product[]) => (products.value = res) }).then()
  }

  refetchData()

  watch([currentPage, searchQuery, paginationPageSize, sortModel.value[0]], () => {
    refetchData()
  })

  return {
    searchQuery,
    paginationPageSize,
    isLoading,
    dataMeta,
    currentPage,
    sortModel,
    products,
    refetchData,

    getRows,
  }
}

export async function getAdminProductById(id: number): Promise<Product | undefined> {
  const { setError } = useAppStore()
  try {
    return productRepository.getAdminProductById(id)
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

export async function editAdminProduct(id: number, params: FormData): Promise<boolean | undefined> {
  const { setError, setSuccess } = useAppStore()
  try {
    const result = await productRepository.editAdminProduct(id, params)

    if (result) {
      setSuccess('Изменения сохранены')

      return true
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

    return false
  }
}

export async function createAdminProduct(params: FormData): Promise<Product | undefined> {
  const { setError, setSuccess } = useAppStore()
  try {
    const result = await productRepository.createAdminProduct(params)

    if (result) {
      setSuccess('Товар успешно сохранен')

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
