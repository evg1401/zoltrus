import type { OrderCall, OrderPrice, TableItems } from '@/interfaces'

export default {
  async createOrderCall(params: OrderCall): Promise<boolean> {
    const { $axios } = useNuxtApp()

    return (await $axios.post<boolean>('/forms-callback', params)).data
  },

  async createOrderPrice(params: OrderPrice): Promise<boolean> {
    const { $axios } = useNuxtApp()

    return (await $axios.post<boolean>('/forms-order-price', params)).data
  },

  async getAdminOrdersCallList(params = {}): Promise<TableItems<OrderCall>> {
    const { $axios } = useNuxtApp()

    return (await $axios.get<TableItems<OrderCall>>('/admin/forms-callback/', { params })).data
  },

  async getAdminOrdersPriceList(params = {}): Promise<TableItems<OrderPrice>> {
    const { $axios } = useNuxtApp()

    return (await $axios.get<TableItems<OrderPrice>>('/admin/forms-order-price/', { params })).data
  },
}
