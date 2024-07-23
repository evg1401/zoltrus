import { defineStore } from 'pinia'

// import type { Breadcrumb } from '@/interfaces/catalog.interface'
import type { Breadcrumb, Section } from '@/interfaces'

export interface BreadcrumbsState {
  breadcrumbs: Breadcrumb[]
  section: Section | null
}

export const useNavStore = defineStore({
  id: 'navigation',
  state: () =>
    ({
      breadcrumbs: [],
      section: null,
    } as BreadcrumbsState),
  getters: {
    getBreadcrumbs: state => {
      return state.breadcrumbs
    },

    getSection: state => {
      return state.section
    },
  },
  actions: {
    setBreadcrumbs(breadcrumb: Breadcrumb[]) {
      this.breadcrumbs = breadcrumb
    },

    setSection(section: Section | null) {
      this.section = section
    },
  },
})
