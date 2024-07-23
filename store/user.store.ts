import { defineStore } from 'pinia'
import type { User } from '@/interfaces'

export interface UserState {
  userId: number | null
  userData: User
}

export const useUserStore = defineStore({
  id: 'userStore',
  state: () =>
    ({
      userId: null,
      userData: {
        id: null,
        firstName: null,
        lastName: null,
        abilities: [],
        email: '',
      },
    } as unknown as UserState),
  actions: {
    setUserId(userId: number | null) {
      this.userId = userId
    },
    setUserData({ id, firstName, lastName, abilities, email }: User) {
      Object.assign(this.userData, { id, firstName, lastName, abilities, email })
    },
    clearUserData() {
      Object.assign(this.userData, { id: null, firstName: null, lastName: null, abilities: [], email: '' })
    },
  },
})
