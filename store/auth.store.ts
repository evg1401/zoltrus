import { defineStore } from 'pinia'

export interface AuthState {
  accessToken: string | null
}

export const useAuthStore = defineStore({
  id: 'authStore',
  state: () =>
    ({
      accessToken: null,
    } as AuthState),
  actions: {
    setToken(accessToken: string | null) {
      this.accessToken = accessToken
    },
  },
})
