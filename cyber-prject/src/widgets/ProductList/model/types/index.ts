export interface ProductSchema {
  id: number;
  name: string;
  imageUrl: string;
  price: number;
  sale?: number;
  state?: string;
  favorite?: boolean;
}

export interface ProductList {
  productsData: ProductSchema[];
  isLoading: boolean;
  error?: string;
}
