import type { CatalogCard } from '@/interfaces'

export const findCategoryByAlias = (categories: CatalogCard[], alias: string | undefined): CatalogCard | null => {
  if (!alias) {
    return null
  }

  for (const category of categories) {
    if (category.alias === alias) {
      return category
    }
    if (category.children.length > 0) {
      const foundInChild = findCategoryByAlias(category.children, alias)
      if (foundInChild) {
        return foundInChild
      }
    }
  }

  return null
}
