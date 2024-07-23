import { defineStore } from 'pinia'
import type { CatalogCard } from '@/interfaces'

export interface DynamicMenuState {
  mainMenu: any[]
  menuItems: CatalogCard[]
}

export const useMenuStore = defineStore({
  id: 'menuStore',
  state: () =>
    ({
      mainMenu: [],
      menuItems: [],
    } as DynamicMenuState),
  getters: {
    getMenuItems: state => {
      return state.menuItems
    },
    getDynamicMainMenu: state => {
      return state.mainMenu
    },
  },
  actions: {
    setMenuItems(items: CatalogCard[]) {
      this.menuItems = items
    },
    setDynamicMainMenu(mainMenu: any) {
      this.mainMenu = mainMenu
    },
  },
})
