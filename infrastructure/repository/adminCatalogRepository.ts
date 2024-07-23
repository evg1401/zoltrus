import type { CatalogSection } from '@/interfaces'

export default {

  async getAdminCatalogCards(): Promise<CatalogSection[]> {
    const { $axios } = useNuxtApp()

    return (await $axios.get<CatalogSection[]>('admin/catalog/section')).data
  },

  async getAdminCatalogTree(): Promise<any[]> {
    const { $axios } = useNuxtApp()

    return (await $axios.get<any[]>('admin/catalog/section/tree')).data
  },

  async getSectionOfCatalogTreeById(id: number): Promise<CatalogSection> {
    const { $axios } = useNuxtApp()

    return (await $axios.get<CatalogSection>(`admin/catalog/section/${id}`)).data
  },

  async editAdminCatalogSection(id: number, ...params: FormData[]): Promise<CatalogSection> {
    const { $axios } = useNuxtApp()

    return (await $axios.put<CatalogSection>(`admin/catalog/section/${id}`, ...params)).data
  },

  async deleteAdminCatalogSection(id: number): Promise<boolean> {
    const { $axios } = useNuxtApp()

    return (await $axios.delete<boolean>(`admin/catalog/section/${id}`)).data
  },
}
