import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import {
  ProductList,
  FetchNewArrivalProducts,
  FetchBestsellerProducts,
  FetchFeaturedProducts,
  ProductSchema,
} from "../index";
import { FetchPaginationProducts } from "pages/CatalogPage/model";
import mergeFavoriteProducts from "../utils/mergeFavoriteProducts";

const initialProductListState: ProductList = {
  productsData: [],
  isLoading: false,
  error: "",
  sorted: undefined,
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

    setSortedValue(state, action: PayloadAction<string>) {
      state.sorted = action.payload;
    },

    setSortedProductList(
      state,
      action: PayloadAction<{
        sortedValue?: string;
        currentPage: string;
        userId: number;
        productsList: ProductSchema[];
      }>,
    ) {
      const limit = 9;
      let sortedProducts = [...action.payload.productsList];

      if (action.payload.sortedValue === "A-Z") {
        sortedProducts.sort((a: ProductSchema, b: ProductSchema) =>
          a.name.localeCompare(b.name),
        );
      } else if (action.payload.sortedValue === "Z-A") {
        sortedProducts.sort((a: ProductSchema, b: ProductSchema) =>
          b.name.localeCompare(a.name),
        );
      }

      const start = (+action.payload.currentPage - 1) * limit;
      const paginatedProducts = sortedProducts.slice(start, start + limit);

      state.productsData = mergeFavoriteProducts(
        paginatedProducts,
        action.payload.userId,
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
      })

      .addCase(FetchPaginationProducts.pending, (state) => {
        state.isLoading = true;
        state.error = undefined;
      })
      .addCase(FetchPaginationProducts.fulfilled, (state, action) => {
        state.productsData = action.payload;
        state.isLoading = false;
      })
      .addCase(FetchPaginationProducts.rejected, (state) => {
        state.isLoading = false;
        state.error = "An error occurred while loading the goods";
      });
  },
});

export const { actions: ProductListActions } = ProductListSlice;
export const { reducer: ProductListReducer } = ProductListSlice;
