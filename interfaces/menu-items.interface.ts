import type { FileItem } from './file.interface'

export interface Link {
  title: string
  page: string
}

export interface CatalogCard {
  [x: string]: any
  id: number
  parentId: number
  active: boolean
  alias: string
  name: string
  title?: string
  sort: number
  previewPicture?: FileItem | null
  children: Cardchildren[]
}

export interface Cardchildren extends CatalogCard {}
