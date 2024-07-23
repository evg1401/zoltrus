// export type GetRows = ({ sortModel, startRow, successCallback }: GetRowsParams) => Promise<void>
export type GetRows<T> = (params: T) => Promise<void>;
export interface SortModelItem {
  colId: string;
  sort: "asc" | "desc";
}

export interface GetRowsParams {
  sortModel: SortModelItem[];
  startRow: number;
  successCallback: (rowsThisPage: any[], lastRow?: number) => void;
  filterModel?: any;
}

export interface TableItems<T> {
  items: T[];
  count: number;
}

export interface SortModel {
  colId?: string;
  sort?: string;
}

export interface PaginationData {
  from: number;
  to: number;
  of: number;
  length: number;
}
export interface Table<T> {
  searchQuery?: string;
  currentPage: number;
  dataMeta: PaginationData;
  dataItems: TableItems<T>;
  sort: string;
}
