import { AxiosError } from 'axios'
import type { SignInRequest, SignInResponse } from '@/interfaces'

export default {
  async signIn(params: SignInRequest): Promise<SignInResponse> {
    try {
      const { $axios } = useNuxtApp()

      return (await $axios.post<SignInResponse>('/auth/signin/', params)).data
    }
    catch (error) {
      if (error instanceof AxiosError) {
        throw (error)?.response?.data.message
      }
      throw error
    }
  },

  async refresh(refreshToken: string): Promise<SignInResponse> {
    try {
      const { $axios } = useNuxtApp()
      const response = await $axios.post<SignInResponse>('/auth/refresh/', { refreshToken })
      if (!response?.data) {
        throw response?.data
      }

      return response?.data
    }
    catch (error) {
      if (error instanceof AxiosError) {
        throw (error)?.response?.data.message
      }
      throw error
    }
  },
}
