import { ProductType } from "../types";
import { createSlice } from "@reduxjs/toolkit";
import { FetchProductData } from "../services";

const initialProductState: ProductType = {
  productData: undefined,
  isLoading: false,
  error: "",
};

export const ProductSlice = createSlice({
  name: "Product",
  initialState: initialProductState,
  reducers: {
    setProductData: (state, action) => {
      state.productData = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(FetchProductData.pending, (state) => {
        state.isLoading = true;
        state.error = undefined;
      })
      .addCase(FetchProductData.fulfilled, (state, action) => {
        state.productData = action.payload;
        state.isLoading = false;
      })
      .addCase(FetchProductData.rejected, (state) => {
        state.isLoading = false;
        state.error = "An unknown error occurred while uploading product data";
      });
  },
});

export const { actions: productActions } = ProductSlice;
export const { reducer: productReducer } = ProductSlice;
