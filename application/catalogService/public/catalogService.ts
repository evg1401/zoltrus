import type { AxiosError } from "axios";
import { catalogRepository } from "@/infrastructure/repository";
import type {
  ApiError,
  Breadcrumb,
  Catalog,
  CatalogCard,
  CatalogDetail,
  CatalogMeta,
  GetRows,
  Section,
  Table,
  TableItems,
} from "@/interfaces";
import { useAppStore, useMenuStore } from "@/store";

export async function getCatalogCards() {
  const { setError } = useAppStore();
  try {
    return await catalogRepository.getCatalogCards();
  } catch (e) {
    if (e instanceof Error) {
      const axiosError = e as AxiosError<ApiError>;
      if (axiosError.response) {
        setError(axiosError.response.data?.message);
      } else {
        setError(e.message);
      }
    }

    return [];
  }
}

export async function uploadCatalogSectionToStore(
  alias: string
): Promise<Section | undefined> {
  const { setError } = useAppStore();
  try {
    return await catalogRepository.getCatalogCardSection(alias);
  } catch (e) {
    if (e instanceof Error) {
      const axiosError = e as AxiosError<ApiError>;
      if (axiosError.response) {
        setError(axiosError.response.data?.message);
      } else {
        setError(e.message);
      }
    }
  }
}

export async function uploadCatalogBreadCrumbsToStore(
  alias: string
): Promise<Breadcrumb[] | undefined> {
  const { setError } = useAppStore();
  try {
    return await catalogRepository.getCatalogBredCrumbsByAlias({ alias });
  } catch (e) {
    if (e instanceof Error) {
      const axiosError = e as AxiosError<ApiError>;
      if (axiosError.response) {
        setError(axiosError.response.data?.message);
      } else {
        setError(e.message);
      }
    }
  }
}

export async function fetchMenuItems(): Promise<CatalogCard[]> {
  const menuStore = useMenuStore();
  const { getMenuItems } = storeToRefs(menuStore);

  if (getMenuItems.value.length === 0) {
    const catalogMenuItems = await catalogRepository.getCatalogCards();

    menuStore.setMenuItems(
      catalogMenuItems.sort(
        (a: { children: string | any[] }, b: { children: string | any[] }) =>
          a.children.length < b.children.length ? 1 : -1
      )
    );
  }

  return getMenuItems.value;
}

export async function getCatalogMeta(): Promise<CatalogMeta | undefined> {
  const { setError } = useAppStore();
  try {
    return await catalogRepository.getCatalogMeta();
  } catch (e) {
    if (e instanceof Error) {
      const axiosError = e as AxiosError<ApiError>;
      if (axiosError.response) {
        setError(axiosError.response.data?.message);
      } else {
        setError(e.message);
      }
    }
  }
}

export function getCatalogList(): Table<Catalog> & {
  getRows: GetRows<{
    currentPage: number;
    sectionAlias: string;
    sort: string;
  }>;
} {
  const { setError } = useAppStore();
  const router = useRouter();

  const paginationPageSize = ref(8);
  const currentPage: Ref<number> = ref(1);
  const totalCount: Ref<number> = ref(0);
  const sort: Ref<string> = ref("asc");
  const dataItems: Ref<TableItems<Catalog>> = ref({ items: [], count: 0 });

  const getRows = async ({
    currentPage,
    sectionAlias,
    sort,
  }: {
    currentPage: number;
    sectionAlias: string;
    sort: string;
  }): Promise<void> => {
    try {
      const { items, count }: TableItems<Catalog> =
        await catalogRepository.getCatalogList({
          page: currentPage,
          limit: paginationPageSize.value,
          sidx: "id",
          sord: sort,
          sectionAlias,
        });

      totalCount.value = count;
      dataItems.value = { items, count };
    } catch (err) {
      setError("Ошибка загрузки данных таблицы");
    }
  };

  const routing = (p: number): void => {
    currentPage.value = p;

    router.replace({
      path: router.currentRoute.value.path,
      query: { ...router.currentRoute.value.query, p },
    });
  };

  watch(currentPage, routing);

  const dataMeta = computed(() => {
    const startRow = (currentPage.value - 1) * paginationPageSize.value + 1;

    return {
      from: startRow,
      to: Math.min(startRow + paginationPageSize.value - 1, totalCount.value),
      of: Math.ceil(totalCount.value / paginationPageSize.value),
      length: Math.ceil(totalCount.value / paginationPageSize.value),
    };
  });

  return {
    currentPage,
    dataMeta,
    dataItems,
    sort,
    getRows,
  };
}

export function getCatalogSearchList(): Table<Catalog> & {
  getRows: GetRows<{ searchQuery: string; currentPage: number }>;
} {
  const { setError } = useAppStore();

  const paginationPageSize = ref(8);
  const currentPage: Ref<number> = ref(1);
  const totalCount: Ref<number> = ref(0);
  const dataItems: Ref<TableItems<Catalog>> = ref({ items: [], count: 0 });
  const sort: Ref<string> = ref("asc");

  const getRows = async ({
    searchQuery,
    currentPage,
  }: {
    searchQuery: string;
    currentPage: number;
  }): Promise<void> => {
    try {
      const { items, count }: TableItems<Catalog> =
        await catalogRepository.getCatalogSearchList({
          searchQuery,
          page: currentPage,
          limit: paginationPageSize.value,
          sidx: "id",
          sord: "asc",
        });

      totalCount.value = count;
      dataItems.value = { items, count };
    } catch (err) {
      setError("Ошибка загрузки данных таблицы");
    }
  };
  const router = useRouter();

  const routing = (p: number): void => {
    currentPage.value = p;

    router.replace({
      path: router.currentRoute.value.path,
      query: { ...router.currentRoute.value.query, p },
    });
  };

  watch(currentPage, routing);

  const dataMeta = computed(() => {
    const startRow = (currentPage.value - 1) * paginationPageSize.value + 1;

    return {
      from: startRow,
      to: Math.min(startRow + paginationPageSize.value - 1, totalCount.value),
      of: Math.ceil(totalCount.value / paginationPageSize.value),
      length: Math.ceil(totalCount.value / paginationPageSize.value),
    };
  });

  return {
    currentPage,
    dataMeta,
    dataItems,
    sort,
    getRows,
  };
}

export async function getCatalogByCode(
  alias: string
): Promise<CatalogDetail | undefined> {
  const { setError } = useAppStore();
  try {
    return await catalogRepository.getCatalogByCode(alias);
  } catch (e) {
    if (e instanceof Error) {
      const axiosError = e as AxiosError<ApiError>;
      if (axiosError.response) {
        setError(axiosError.response.data?.message);
      } else {
        setError(e.message);
      }
    }
  }
}
