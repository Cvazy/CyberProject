import { ProductSchema } from "widgets/ProductList/model";

export interface ProductType {
  productData?: ProductSchema;
  isLoading: boolean;
  error?: string;
}
