import type { AxiosError } from 'axios'
import { partnershipRepository } from '@/infrastructure/repository'
import type { ApiError, GetRowsParams, PaginationData, PartnerRequest, TableItems } from '@/interfaces'
import { useAppStore } from '@/store'

export function getAdminPartnershipRequestsList() {
  const { setError } = useAppStore()
  const searchQuery: Ref<string> = ref('')
  const paginationPageSize: Ref<number> = ref(100)
  const currentPage: Ref<number> = ref(1)
  const sortModel: Ref<any[]> = ref([{ colId: 'id' }, { sort: 'desc' }])
  const isLoading: Ref<boolean> = ref(true)
  const partnerships: Ref<PartnerRequest[]> = ref([])

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

      const { items, count }: TableItems<PartnerRequest> = await partnershipRepository.getAdminPartnershipRequestsList({
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
    getRows({ startRow: currentPage.value, sortModel: sortModel.value, successCallback: (res: PartnerRequest[]) => (partnerships.value = res) }).then()
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
    partnerships,
    refetchData,

    getRows,
  }
}

export async function createPartnershipRequest(params: PartnerRequest): Promise<boolean | undefined> {
  const { setError, setSuccess } = useAppStore()
  try {
    const result = await partnershipRepository.createPartnershipRequest(params)

    if (result) {
      setSuccess('Ваша заявка успешно сохранена')

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
