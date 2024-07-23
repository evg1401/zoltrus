import type { PartnerRequest, TableItems } from '@/interfaces'

export default {
  async getAdminPartnershipRequestsList(params = {}): Promise<TableItems<PartnerRequest>> {
    const { $axios } = useNuxtApp()

    return (await $axios.get<TableItems<PartnerRequest>>('/admin/forms-partnership/', { params })).data
  },

  async createPartnershipRequest(params: PartnerRequest): Promise<boolean> {
    const { $axios } = useNuxtApp()

    return (await $axios.post<boolean>('/forms-partnership', params)).data
  },
}
