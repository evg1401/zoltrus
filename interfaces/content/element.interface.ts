// import type { Section } from './section.interface'
import type { FileItem } from '../file.interface'
import type { SeoFields } from './seo.interface'

export interface ContentBlock {
  id: number
  name: 'Новости'
  title: 'Новости'
  icon: string | null
  alias: 'news'
  detailText: string | null
  metaTitle: string | null
  metaKeywords: string | null
  metaDescription: string | null
  detailPicture: string | null
}

export interface ContentElementItem extends ContentElement, SeoFields {
  id: number
  sectionId: number
  blockId: number
  showCounter: number | null
  showCounterStart: number | null
  previewPictureId: number
  detailPictureId: number
  searchableContent: string
  createdId: number
  updatedId: number
}
export interface ContentElement {
  active: boolean

  blockId?: number

  // sectionId: number
  activeTo: Date | null
  activeFrom: Date | null
  name: string
  alias: string
  xmlId: string | null

  previewPictureId: number | null
  previewText: string
  previewTextType: string
  previewPicture: FileItem | null

  detailPictureId: number | null
  detailText: string
  detailTextType: string
  detailPicture: FileItem | null

  // searchableContent: string
  inSection: boolean
}

export type ContentElementFormData = ContentElement & SeoFields

// export interface ContentElementProperty {
//   elementId: number
//   propertyId: number
//   value: string
//   value_enum: number
//   createdId: number
//   updatedId: number
// }

// export interface ContentElementSection {
//   elementId: Element[]
//   sectionId: Section[]
//   createdId: number
//   updatedId: number
// }
