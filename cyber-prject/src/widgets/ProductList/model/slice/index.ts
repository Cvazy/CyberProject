import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import {
  ProductList,
  FetchNewArrivalProducts,
  FetchBestsellerProducts,
  FetchFeaturedProducts,
  ProductSchema,
} from "../index";

const initialProductListState: ProductList = {
  productsData: [],
  isLoading: false,
  error: "",
};

export const ProductListSlice = createSlice({
  name: "ProductList",
  initialState: initialProductListState,
  reducers: {
    setFavoriteProduct(
      state,
      action: PayloadAction<{ productId: number; userId: number }>,
    ) {
      const { productId, userId } = action.payload;

      state.productsData = state.productsData.map((product) =>
        product.id === productId
          ? { ...product, favorite: !product.favorite }
          : product,
      );

      let favoriteProducts =
        JSON.parse(
          localStorage.getItem(`favoriteProducts-${userId}`) || "[]",
        ) || [];

      const changedProduct = state.productsData.find(
        (product) => product.id === productId,
      ) as ProductSchema;

      if (changedProduct?.favorite) {
        favoriteProducts.push(changedProduct);
      } else {
        favoriteProducts = favoriteProducts.filter(
          (product: ProductSchema) => product.id !== productId,
        );
      }

      localStorage.setItem(
        `favoriteProducts-${userId}`,
        JSON.stringify(favoriteProducts),
      );
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(FetchNewArrivalProducts.pending, (state) => {
        state.isLoading = true;
        state.error = undefined;
      })
      .addCase(FetchNewArrivalProducts.fulfilled, (state, action) => {
        state.productsData = action.payload;
        state.isLoading = false;
      })
      .addCase(FetchNewArrivalProducts.rejected, (state) => {
        state.isLoading = false;
        state.error = "An unknown error has occurred";
      })

      .addCase(FetchBestsellerProducts.pending, (state) => {
        state.isLoading = true;
        state.error = undefined;
      })
      .addCase(FetchBestsellerProducts.fulfilled, (state, action) => {
        state.productsData = action.payload;
        state.isLoading = false;
      })
      .addCase(FetchBestsellerProducts.rejected, (state) => {
        state.isLoading = false;
        state.error = "An unknown error has occurred";
      })

      .addCase(FetchFeaturedProducts.pending, (state) => {
        state.isLoading = true;
        state.error = undefined;
      })
      .addCase(FetchFeaturedProducts.fulfilled, (state, action) => {
        state.productsData = action.payload;
        state.isLoading = false;
      })
      .addCase(FetchFeaturedProducts.rejected, (state) => {
        state.isLoading = false;
        state.error = "An unknown error has occurred";
      });
  },
});

export const { actions: ProductListActions } = ProductListSlice;
export const { reducer: ProductListReducer } = ProductListSlice;
