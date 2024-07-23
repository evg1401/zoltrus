import type { Product, ProductItem, TableItems } from "@/interfaces";

export default {
  async getAdminProductList(params = {}): Promise<TableItems<Product>> {
    const { $axios } = useNuxtApp();

    return (
      await $axios.get<TableItems<Product>>("/admin/catalog-element/", {
        params,
      })
    ).data;
  },

  async getAdminProductById(id: number): Promise<Product> {
    const { $axios } = useNuxtApp();

    return (await $axios.get<Product>(`/admin/catalog-element/${id}`)).data;
  },

  async editAdminProduct(
    id: number,
    ...params: FormData[]
  ): Promise<ProductItem> {
    const { $axios } = useNuxtApp();

    return (
      await $axios.put<ProductItem>(`/admin/catalog-element/${id}`, ...params)
    ).data;
  },

  async createAdminProduct(params: FormData): Promise<ProductItem> {
    const { $axios } = useNuxtApp();

    return (await $axios.post<ProductItem>("/admin/catalog-element", params))
      .data;
  },
};
