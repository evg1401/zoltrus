import { userRepository } from '@/infrastructure/repository'
import { type Rule, ability, initialAbility } from '@/plugins/casl/ability'
import { useUserStore } from '@/store'

export async function getUserDataForStore(): Promise<void> {
  const userStore = useUserStore()
  const user = await userRepository.fetchCurrentAuthUserData()

  if (!user) {
    throw new Error('Пользователь не не найден')
  }
  userStore.setUserData(user)
  useCookie<Rule[]>('userAbilityRules', { sameSite: 'strict' }).value = [...initialAbility, ...user.abilities]
  ability.update([...initialAbility, ...user.abilities])
}
