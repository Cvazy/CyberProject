import { ProductSchema } from "../types";

export default function mergeFavoriteProducts(data: any) {
  const localStorageData = localStorage.getItem("favoriteProducts");

  if (localStorageData) {
    const favoriteProducts = JSON.parse(localStorageData);

    return data.map((product: ProductSchema) => {
      const favoriteProduct = favoriteProducts.find(
        (favProduct: ProductSchema) => favProduct.id === product.id,
      );
      return favoriteProduct ? favoriteProduct : product;
    });
  }

  return data;
}
