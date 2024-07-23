import type { FileItem, User } from './index'

export interface Banner {
  id: number
  active: boolean
  sort: number
  fileId: number
  activeTo: Date
  activeFrom: Date
  url: string
  type: string
  created: User
  updated: User
  file: FileItem
}

export type BannerData = Omit<Banner, 'id' | 'created' | 'updated' | 'fileId'> & { file: FileItem | null }
