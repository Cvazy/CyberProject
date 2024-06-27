import { createSlice } from "@reduxjs/toolkit";
import {
  ProductList,
  FetchNewArrivalProducts,
  FetchBestsellerProducts,
  FetchFeaturedProducts,
} from "../index";

const initialProductCategoriesOnIndexState: ProductList = {
  productsData: [],
  isLoading: false,
  error: "",
};

export const ProductCategoriesOnIndexSlice = createSlice({
  name: "ProductCategoriesOnIndex",
  initialState: initialProductCategoriesOnIndexState,
  reducers: {},
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

export const { reducer: ProductCategoriesOnIndexReducer } =
  ProductCategoriesOnIndexSlice;
