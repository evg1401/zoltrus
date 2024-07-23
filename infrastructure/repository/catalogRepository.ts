import type { Breadcrumb, Catalog, CatalogCard, CatalogDetail, CatalogMeta, Section, TableItems } from '@/interfaces'

export default {
  async getCatalogCards(): Promise<CatalogCard[]> {
    const { $axios } = useNuxtApp()

    return (await $axios.get<CatalogCard[]>('/catalog/section')).data
  },

  async getCatalogCardSection(section: string): Promise<Section> {
    const { $axios } = useNuxtApp()

    return (await $axios.get<Section>(`/catalog/section/${section}`)).data
  },

  async getCatalogBredCrumbsByAlias(params = {}): Promise<Breadcrumb[]> {
    const { $axios } = useNuxtApp()

    return (await $axios.get<Breadcrumb[]>('/catalog/section/breadcrumbs', { params })).data
  },

  async getCatalogMeta(): Promise<CatalogMeta> {
    const { $axios } = useNuxtApp()

    return (await $axios.get<CatalogMeta>('/catalog/')).data
  },

  async getCatalogList(params = {}): Promise<TableItems<Catalog>> {
    const { $axios } = useNuxtApp()

    return (await $axios.get<TableItems<Catalog>>('/catalog/element', { params })).data
  },

  async getCatalogSearchList(params = {}): Promise<TableItems<Catalog>> {
    const { $axios } = useNuxtApp()

    return (await $axios.get<TableItems<Catalog>>('/catalog/search', { params })).data
  },

  async getCatalogByCode(alias: string): Promise<CatalogDetail> {
    const { $axios } = useNuxtApp()

    return (await $axios.get<CatalogDetail>(`/catalog/element/${alias}`)).data
  },
}
