import jwtDecode from 'jwt-decode'

import { getUserDataForStore } from './userService'
import { authRepository } from '@/infrastructure/repository'
import { useAppStore, useAuthStore, useUserStore } from '@/store'
import { ability, initialAbility } from '@/plugins/casl/ability'

export function getToken(): string | null {
  const authStore = useAuthStore()

  return authStore.accessToken
}

export function setToken(value: string) {
  const authStore = useAuthStore()

  authStore.setToken(value)

  const userId = decodedToken(value)
  const userStore = useUserStore()

  userStore.setUserId(userId)
}

export function decodedToken(token: string): number | null {
  if (!token) {
    return null
  }
  const payload = jwtDecode(token) as { [key: string]: any }

  return payload && !!payload['userId'] ? Number.parseInt(payload['userId'], 10) : null
}

export function getRefreshToken() {
  if (process.client) {
    return localStorage.getItem('refreshToken')
  }
}

export function setRefreshToken(value: string) {
  if (process.client) {
    localStorage.setItem('refreshToken', value)
  }
}

export function deleteRefreshToken() {
  if (process.client) {
    localStorage.removeItem('refreshToken')
  }
}

export function logout(): void {
  const authStore = useAuthStore()

  authStore.setToken(null)

  const userStore = useUserStore()

  userStore.setUserId(null)

  deleteRefreshToken()

  ability.update([...initialAbility])
}

export async function signIn(login: string, password: string): Promise<boolean> {
  const appStore = useAppStore()
  try {
    const { accessToken, refreshToken } = await authRepository.signIn({ login, password })

    setToken(accessToken)
    setRefreshToken(refreshToken)

    await getUserDataForStore()

    return true
  }
  catch (error) {
    appStore.setError(`${error}`)

    return false
  }
}

export async function refresh(): Promise<boolean> {
  const appStore = useAppStore()
  try {
    const token = getRefreshToken()
    if (!token) {
      throw new Error('Токен не найден')
    }

    const { accessToken, refreshToken } = await authRepository.refresh(token)

    setToken(accessToken)
    setRefreshToken(refreshToken)

    return true
  }
  catch (error) {
    appStore.setError(`${error}`)
    deleteRefreshToken()

    return false
  }
}
