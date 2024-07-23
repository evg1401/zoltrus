import type { Banner, TableItems } from '@/interfaces'

export default {
  async getAdminBannerList(params = {}): Promise<TableItems<Banner>> {
    const { $axios } = useNuxtApp()

    return (await $axios.get<TableItems<Banner>>('/admin/baner/', params)).data
  },

  async getBannerList(params = {}): Promise<Banner[]> {
    const { $axios } = useNuxtApp()

    return (await $axios.get<Banner[]>('/baner/', params)).data
  },

  async getAdminBannerById(id: number): Promise<Banner> {
    const { $axios } = useNuxtApp()

    return (await $axios.get<Banner>(`/admin/baner/${id}`)).data
  },

  async editAdminBanner(id: number, ...params: FormData[]): Promise<Banner> {
    const { $axios } = useNuxtApp()

    return (await $axios.put<Banner>(`/admin/baner/${id}`, ...params)).data
  },

  async createAdminBanner(params: FormData): Promise<Banner> {
    const { $axios } = useNuxtApp()

    return (await $axios.post<Banner>('/admin/baner', params)).data
  },

  async deleteAdminBanner(id: number): Promise<boolean> {
    const { $axios } = useNuxtApp()

    return (await $axios.delete<boolean>(`/admin/baner/${id}`)).data
  },
}
