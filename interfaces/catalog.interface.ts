import type { FileItem } from "@/interfaces";

export interface CatalogMeta {
  detailText: string | null;
  metaTitle: string;
  metaKeywords: string | null;
  metaDescription: string | null;
  detailPicture: FileItem | null;
}

export type PartialBlock<T> = Partial<T> | null;

interface CatalogBase {
  id: number;
  name: string;
  alias: string;
  xmlId: string;
  brand: string;
  quantity: number;
  article: string;
}

export interface Catalog extends CatalogBase {
  previewText: string | null;
  previewPicture: FileItem | null;
  prices: CatalogPrices[];
  section: ProductSection;
}

export interface CatalogDetail extends CatalogBase {
  detailText: string | null;
  metaTitle: string | null;
  metaKeywords: string | null;
  metaDescription: string | null;
  detailPicture: FileItem | null;
  properties: CatalogProperties[];
  prices: CatalogPrices[];
}

export interface CatalogPrices {
  id: number;
  title: string;
  alias: string;
  value: number;
}

export interface Breadcrumb {
  id?: number;
  name: string;
  alias: string;
}

export interface CatalogProperties {
  id: number;
  active: boolean;
  title: string;
  alias: string;
  isFilter: boolean;
  sort: number;
  type: string;
  multiple: boolean;
}

export interface CatalogSection {
  id: number;
  parentId: number;
  active: boolean;
  alias: string;
  name: string;
  xmlId: string | null;
  sort: number;
  previewPictureId: number | null;
  previewPicture: FileItem;
  previewText: string | null;
  detailText: string | null;
  detailPictureId: number | null;
  detailPicture: FileItem;
  metaTitle: string | null;
  metaKeywords: string | null;
  metaDescription: string | null;
  children: CatalogSection[];
}

export interface ProductSection {
  id: number;
  name: string;
  alias: string;
  title: string;
  metaTitle: string;
  metaKeywords: string;
  metaDescription: string;
}
