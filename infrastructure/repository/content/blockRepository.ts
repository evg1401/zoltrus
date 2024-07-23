import type { BlockItem, ContentBlock, ContentElement, ContentElementItem, ContentListItems, TableItems } from '@/interfaces'

export default {
  async getAdminBlockList(params = {}): Promise<TableItems<BlockItem>> {
    const { $axios } = useNuxtApp()

    return (await $axios.get<TableItems<BlockItem>>('/admin/content-block/', params)).data
  },

  async getAdminContentBlock(id: number): Promise<BlockItem> {
    const { $axios } = useNuxtApp()

    return (await $axios.get<BlockItem>(`admin/content-block/${id}`)).data
  },

  async getAdminContentElement(id: number): Promise<ContentElementItem> {
    const { $axios } = useNuxtApp()

    return (await $axios.get<ContentElementItem>(`admin/content-element/${id}`)).data
  },

  async createAdminContentBlock(params: BlockItem): Promise<BlockItem> {
    const { $axios } = useNuxtApp()

    return (await $axios.post<BlockItem>('/admin/content-block', params)).data
  },

  async createAdminContentElement(params: ContentElementItem): Promise<ContentElementItem> {
    const { $axios } = useNuxtApp()

    return (await $axios.post<ContentElementItem>('/admin/content-element', params)).data
  },

  async editAdminContentBlock(id: number, ...params: FormData[]): Promise<BlockItem> {
    const { $axios } = useNuxtApp()

    return (await $axios.put<BlockItem>(`/admin/content-block/${id}`, ...params)).data
  },

  async editAdminContentElement(id: number, ...params: FormData[]): Promise<BlockItem> {
    const { $axios } = useNuxtApp()

    return (await $axios.put<BlockItem>(`/admin/content-element/${id}`, ...params)).data
  },

  async updateAdminBlock(id: number): Promise<BlockItem> {
    const { $axios } = useNuxtApp()

    return (await $axios.put<BlockItem>(`/admin/block/${id}`)).data
  },

  async deleteAdminBlock(id: number): Promise<boolean> {
    const { $axios } = useNuxtApp()

    return (await $axios.delete<boolean>(`/admin/block/${id}`)).data
  },

  async deleteAdminContentElement(id: number): Promise<boolean> {
    const { $axios } = useNuxtApp()

    return (await $axios.delete<boolean>(`/admin/content-element/${id}`)).data
  },

  async getAdminContentElementList(params = {}): Promise<TableItems<BlockItem>> {
    const { $axios } = useNuxtApp()

    return (await $axios.get<TableItems<BlockItem>>('/admin/content-element/', { params })).data
  },

  async getContentElementList(params = {}): Promise<ContentListItems<ContentElement, ContentElementItem>> {
    const { $axios } = useNuxtApp()

    return (await $axios.get<ContentListItems<ContentElement, ContentElementItem>>('/content/element/', { params })).data
  },

  async getContentElementByAlias(alias: string): Promise<any> {
    const { $axios } = useNuxtApp()

    return (await $axios.get<any>(`/content/element/${alias}`)).data
  },

  async getContentBlockByAlias(alias: string): Promise<ContentBlock> {
    const { $axios } = useNuxtApp()

    return (await $axios.get<ContentBlock>(`/content/block/${alias}`)).data
  },
}
