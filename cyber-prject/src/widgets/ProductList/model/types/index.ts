import { ShortPropertiesProps } from "pages/ProductPage/model";

export interface ProductSchema {
  id: number;
  name: string;
  imageUrl: string;
  price: number;
  sale?: number;
  state?: string;
  favorite?: boolean;
  shortProperties?: ShortPropertiesProps[];
}

export interface FilterItem {
  title: string;
  values: string[];
}

export interface ProductList {
  productsData: ProductSchema[];
  productFilters?: FilterItem[];
  isLoading: boolean;
  error?: string;
  sorted?: string;
  selectedFilterSettings?: FilterItem[];
  productsCount?: number;
}
