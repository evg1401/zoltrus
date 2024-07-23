import type { ComputedRef, Ref } from 'vue'

export interface ContentListItems<T1, T2> {
  items: T1[]
  count: number
  block: T2 | null
}

export type PartialBlock<T> = Partial<T> | null

export interface PaginationData {
  from: number
  to: number
  of: number
  length: number
}

export interface ContentListData<T1, T2> {
  searchQuery: Ref<string>
  currentPage: Ref<number>
  dataMeta: ComputedRef<PaginationData>
  dataItems: Ref<ContentListItems<T1, T2>>
  sortModel: Ref<any[]>
  isLoading?: Ref<boolean>
}
