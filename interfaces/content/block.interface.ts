import type { FileItem } from '../file.interface'
import type { User } from '../user.interface'
import type { SeoFields } from './seo.interface'

export interface BlockItem extends BlockItemFields, SeoFields {
  id: number
  showCounter: number | null
  showCounterStart: number | null
  icon: string | null

  detailTextType: string | null
  created: User
  updated: User
  createdId: number
  updatedId: number
}

export interface BlockItemFields {
  active: boolean
  name: string
  alias: string
  title: string | null
  xmlId: string | null
  sort: number | null
  detailPicture: FileItem | null
  detailPictureId: number | null
  detailText: string | null
  elementsName: string | null
  elementName: string | null
  elementCreate: string | null
  elementUpdate: string | null
  elementDelete: string | null
  selectionProducts: boolean | undefined
  sectionChooser: boolean
}

export type BlockFormData = BlockItemFields & SeoFields

export interface BlockProperty {
  id: number
  active: boolean
  blockId: number
  name: string
  alias: string
  sort: number
  type: number
  isMultiple: boolean
  isRequired: boolean
  isFilter: boolean
  isSearch: boolean
  createdId: number
  updatedId: number
}

export interface BlockPropertyType {
  id: number
  sort: number
  type: string
  name: string
}

export interface BlockPropertyEnum {
  id: number
  active: boolean
  propertyId: number
  sort: number
  value: string
  createdId: number
  updatedId: number
}
