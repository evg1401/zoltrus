import type { Distributor, FormDistributor, TableItems } from "@/interfaces";

export default {
  async getDistributortList(): Promise<{ items: Distributor[] }> {
    const { $axios } = useNuxtApp();

    return (await $axios.get<TableItems<Distributor>>("/distributor/")).data;
  },

  async createAdminDistributor(data: FormDistributor): Promise<Distributor> {
    const { $axios } = useNuxtApp();

    return (await $axios.post<Distributor>("/admin/distributor", data)).data;
  },

  async editAdminDistributor(
    id: number,
    data: FormDistributor
  ): Promise<Distributor> {
    const { $axios } = useNuxtApp();

    return (await $axios.put<Distributor>(`/admin/distributor/${id}`, data))
      .data;
  },

  async getAdminDistributorById(id: number): Promise<Distributor> {
    const { $axios } = useNuxtApp();

    return (await $axios.get<Distributor>(`/admin/distributor/${id}`)).data;
  },
};
