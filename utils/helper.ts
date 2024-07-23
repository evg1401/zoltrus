import type { CatalogCard, CatalogSection, FileItem } from '@/interfaces'

interface СontainingImageType { previewPicture?: FileItem | null; previewPictureId?: number | null; detailPicture?: FileItem | null; detailPictureId?: number | null }

export default {
  // разбивает массив элементов на чанки (страницы)
  paginateArray<T>(array: T[], pageSize: number): T[][] {
    if (!array ?? array.length === 0) {
      return []
    }
    const pageCount = Math.ceil(array.length / pageSize)
    const pages = []

    for (let pageNum = 1; pageNum <= pageCount; pageNum++) {
      const startIndex = (pageNum - 1) * pageSize
      const endIndex = startIndex + pageSize
      const pageItems = array.slice(startIndex, endIndex)

      pages.push(pageItems)
    }

    return pages
  },

  normalizeCatalogSections(sections: CatalogCard[]): any {
    const result: any = {}

    for (let index = 0; index < sections.length; index++) {
      const { children, ...etc } = sections[index]

      result[etc.id] = {
        ...etc,
        ...children,
      }
    }

    return result
  },

  formatDate(strData: string | number | Date, enableMinutes: boolean = true) {
    if (!strData) {
      return ''
    }
    const date = new Date(strData)

    const [dt, tm] = date.toLocaleDateString('ru', {
      day: '2-digit', month: '2-digit', year: 'numeric', hour: '2-digit', minute: '2-digit',
    }).split(' ')

    if (!enableMinutes) {
      return `${dt.split('-').reverse().join('.')}`
    }

    return `${dt.split('-').reverse().join('.')} ${tm}`
  },

  findParentsIdOfSectionTreeById(tree: CatalogSection[], targetId: number, parents: ({ id: number; name: string } | CatalogSection)[] = []): any[] {
    for (const item of tree) {
      if (item.id === targetId) {
        return parents
      }
      if (item.children && item.children.length > 0) {
        const result: { id: number; name: string }[] = this.findParentsIdOfSectionTreeById(item.children, targetId, [...parents, { id: item.id, name: item.name }])
        if (result.length > 0) {
          return result
        }
      }
    }

    return []
  },

  compareAndDeleteUnusedPictureProperties(itemContainingImage: СontainingImageType, itemCompared: СontainingImageType) {
    let result = { ...itemContainingImage }

    if (JSON.stringify(result?.previewPicture) === JSON.stringify(itemCompared?.previewPicture) && result.previewPictureId) {
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      const { previewPicture, ...etc } = result

      result = etc
    }
    else if (JSON.stringify(result?.previewPicture) !== JSON.stringify(itemCompared?.previewPicture) && result.previewPictureId) {
      result.previewPictureId = null
      result.previewPicture = null
    }
    if (JSON.stringify(result?.detailPicture) === JSON.stringify(itemCompared?.detailPicture) && result.detailPictureId) {
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      const { detailPicture, ...etc } = result

      result = etc
    }
    else if (JSON.stringify(result?.detailPicture) !== JSON.stringify(itemCompared?.detailPicture) && result.detailPictureId) {
      result.detailPictureId = null
      result.detailPicture = null
    }

    return result
  },

  // findSectionWithChildrenById(tree: CatalogSection[], targetId: number) {
  //   const result = {}

  //   const startRecoursivechildrenSearch = (children: CatalogSection[], parentId: number) => {
  //     if (children.length === 0) {
  //       return
  //     }

  //     for (const child of children) {
  //       if (child.parentId === parentId) {
  //         Object.assign(result, child)
  //         startRecoursivechildrenSearch(child.children, parentId)
  //       }
  //     }
  //   }

  //   const startRecoursiveSearch = (targetTree: CatalogSection[], id: number) => {
  //     if (targetTree.length === 0) {
  //       return
  //     }
  //     for (const item of targetTree) {
  //       if (item.id === id) {
  //         Object.assign(result, item)
  //         startRecoursivechildrenSearch(item.children, item.id)
  //       }

  //       startRecoursiveSearch(item.children, id)
  //     }
  //   }

  //   startRecoursiveSearch(tree, targetId)

  //   return result
  // },
}
