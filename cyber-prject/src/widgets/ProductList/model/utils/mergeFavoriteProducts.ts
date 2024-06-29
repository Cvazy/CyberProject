import { ProductSchema } from "../types";

export default function mergeFavoriteProducts(
  data: any,
  userId: number | null,
) {
  if (userId) {
    const localStorageData = localStorage.getItem(`favoriteProducts-${userId}`);

    if (localStorageData) {
      const favoriteProducts = JSON.parse(localStorageData);

      return data.map((product: ProductSchema) => {
        const favoriteProduct = favoriteProducts.find(
          (favProduct: ProductSchema) => favProduct.id === product.id,
        );
        return favoriteProduct ? favoriteProduct : product;
      });
    }
  }

  return data;
}
