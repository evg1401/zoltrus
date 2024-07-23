import type { CatalogPrices, CatalogProperties, CatalogSection, FileItem } from './index'

export interface Product {
  id: number
  sectionId: number | null
  active: boolean
  name: string
  alias: string
  xmlId: string
  brand: string
  quantity: string
  article: string
  previewText: string | null
  detailText: string | null
  metaTitle: null
  metaKeywords: null
  metaDescription: null
  previewPicture: FileItem | null
  previewPictureId?: number | null
  detailPicture: FileItem | null
  detailPictureId?: number | null
  properties: CatalogProperties[]
  prices: CatalogPrices[]
  section: CatalogSection | null
}

export type ProductItem = Omit<Product, 'previewPicture' | 'detailPicture' | 'prices' | 'properties' | 'section'>

export type ProductData = Omit<Product, 'id' | 'created' | 'updated' | 'fileId'> & { file: FileItem | null }
