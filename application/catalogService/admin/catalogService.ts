import type { AxiosError } from 'axios'
import { adminCatalogRepository } from '@/infrastructure/repository'
import type { ApiError, CatalogSection } from '@/interfaces'
import { useAppStore, useCatalogStore } from '@/store'

export async function getAdminCatalogCards(): Promise<CatalogSection[] | undefined> {
  const { setError } = useAppStore()
  try {
    return await adminCatalogRepository.getAdminCatalogCards()
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

export async function getAdminCatalogTree(): Promise<CatalogSection[]> {
  const { setError } = useAppStore()
  try {
    return await adminCatalogRepository.getAdminCatalogTree()
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

export async function fetchAdminCatalogTree({ forceRefresh = false }: { forceRefresh?: boolean } = {}): Promise<void> {
  const catalogStore = useCatalogStore()
  const { getCategoryTree } = storeToRefs(catalogStore)

  if (getCategoryTree.value.length === 0 || forceRefresh) {
    const tree = await getAdminCatalogTree()

    catalogStore.setCategoryTree(tree)
  }
}

export async function getSectionOfCatalogTreeById(id: number): Promise<CatalogSection | undefined> {
  const { setError } = useAppStore()
  try {
    return await adminCatalogRepository.getSectionOfCatalogTreeById(id)
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

export async function editAdminCatalogSection(id: number, params: FormData): Promise<boolean> {
  const { setError, setSuccess } = useAppStore()
  try {
    await adminCatalogRepository.editAdminCatalogSection(id, params)
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

export async function deleteAdminCatalogSection(id: number, callback?: () => Promise<any>): Promise<boolean | undefined> {
  const { setError, setSuccess } = useAppStore()
  try {
    const result = await adminCatalogRepository.deleteAdminCatalogSection(id)

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
