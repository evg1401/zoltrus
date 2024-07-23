import { defineStore } from 'pinia'
import type { CatalogSection } from '@/interfaces'

export interface CatalogState {
  categoryTree: CatalogSection[]
  selectedCategory: CatalogSection | null
}

export const useCatalogStore = defineStore({
  id: 'catalogStore',
  state: () =>
    ({
      categoryTree: [],
      selectedCategory: null,
    } as unknown as CatalogState),
  getters: {
    getCategoryTree: state => {
      return state.categoryTree
    },
  },
  actions: {
    setCategoryTree(categoryTree: CatalogSection[]) {
      this.categoryTree = categoryTree
    },
    setCategory(selectedCategory: CatalogSection) {
      this.selectedCategory = selectedCategory
    },
  },
})
