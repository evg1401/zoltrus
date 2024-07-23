import type { InternalAxiosRequestConfig } from 'axios'
import axios from 'axios'
import { storeToRefs } from 'pinia'
import { useAppStore, useAuthStore } from '@/store'
import { getToken, refresh } from '@/application/authService'

export default defineNuxtPlugin(() => {
  const runtimeConfig = useRuntimeConfig()

  const axiosIns = axios.create({
    baseURL: runtimeConfig.public.apiBaseUrl,
  })

  axiosIns.interceptors.request.use(onFulfilled, error => Promise.reject(error))

  axiosIns.interceptors.response.use(response => response, onRejected)

  let subscribers: any[] = []
  let isAlreadyFetchingAccessToken: boolean = false

  function onAccessTokenFetched(accessToken: string) {
    subscribers = subscribers.filter(callback => callback(accessToken))
  }

  function addSubscriber(callback: any) {
    subscribers.push(callback)
  }

  function onFulfilled(config: InternalAxiosRequestConfig): InternalAxiosRequestConfig<any> | Promise<InternalAxiosRequestConfig<any>> {
    const authStore = useAuthStore()
    const { accessToken } = storeToRefs(authStore)
    if (accessToken.value) {
      config.headers['Authorization'] = `Bearer ${accessToken.value}`
    }

    const appStore = useAppStore()
    const { deviceId } = storeToRefs(appStore)

    config.headers['Application-sid'] = deviceId.value ?? ''

    return config
  }

  async function onRejected(error: any) {
    const { config: originalRequest, response } = error

    if (response && response.status === 401) {
      if (!isAlreadyFetchingAccessToken) {
        isAlreadyFetchingAccessToken = true

        await refresh()
        isAlreadyFetchingAccessToken = false

        const accessToken = getToken()
        if (accessToken) {
          onAccessTokenFetched(accessToken)
        }
      }

      return new Promise((resolve, reject) => {
        addSubscriber((accessToken: string) => {
          originalRequest.headers.Authorization = `Bearer ${accessToken}`
          resolve(axiosIns(originalRequest))
        })

        reject(error)
      })
    }

    return Promise.reject(error)
  }

  return {
    provide: {
      axios: axiosIns,
    },
  }
})
