import { ProductSchema } from "widgets/ProductList/model";

export interface ISearchedProducts {
  searchedProducts?: ProductSchema[];
  error?: string;
  isLoading?: boolean;
}
