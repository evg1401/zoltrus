export interface Section {
  id: number
  name: string
  title: string
  alias: string
  detailText: string
  metaTitle: string
  metaKeywords: string
  metaDescription: string
  detailPicture: string
  childSections: ChildSection[]
}

export interface ChildSection extends Omit<Section, 'childSections' | 'detailPicture'> {}
