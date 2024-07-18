import { createSlice } from "@reduxjs/toolkit";
import { ISearchedProducts } from "../types";
import { FetchSearchedProducts } from "../services";

const SearchedProductsState: ISearchedProducts = {
  searchedProducts: [],
  error: undefined,
  isLoading: false,
};

export const SearchedProductsSlice = createSlice({
  name: "SearchedProductsSlice",
  initialState: SearchedProductsState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(FetchSearchedProducts.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(FetchSearchedProducts.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = "";
        state.searchedProducts = action.payload;
      })
      .addCase(FetchSearchedProducts.rejected, (state) => {
        state.isLoading = false;
        state.error = "An unknown error has occurred";
      });
  },
});

export default SearchedProductsSlice.reducer;
