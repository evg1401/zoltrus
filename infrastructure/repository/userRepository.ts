import { AxiosError } from 'axios'
import type { User } from '@/interfaces'

export default {
  async fetchCurrentAuthUserData(): Promise<User> {
    try {
      const { $axios } = useNuxtApp()

      return (await $axios.get<User>('/user')).data
    }
    catch (error) {
      if (error instanceof AxiosError) {
        throw new TypeError(error?.response?.data.message)
      }
      throw error
    }
  },

  // async сreatePassword(params: CreatePasswordRequest): Promise<User> {
  //   try {
  //     const response = await axiosIns.post<DataResponse<User>>('/users/create-password/', params)
  //     if (response?.data?.error)
  //       throw response?.data?.error

  //     return response?.data?.result
  //   } catch (error) {
  //     if (error instanceof axios.AxiosError) {
  //       throw (error)?.response?.data.message
  //     }
  //     throw `${error}`
  //   }
  // },

  // async сhangePassword(params: CreatePasswordRequest): Promise<User> {
  //   const { error, result } = (await axiosIns.put<DataResponse<User>>('/users/password/', { ...params })).data

  //   if (error) throw error
  //   return result
  // },

  // async сhangeUserData(params: User): Promise<User> {
  //   const { error, result } = (await axiosIns.put<DataResponse<User>>('/users/', { ...params })).data

  //   if (error) throw error
  //   return result
  // },
}
