import type { Rule } from '@/plugins/casl/ability'

export interface User {
  id: number
  firstName: string
  lastName: string
  email: string
  abilities: Rule[]
};
