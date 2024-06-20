import { CategoriesTypes } from "../types";
import { createSlice } from "@reduxjs/toolkit";
import { GetCategories } from "../../api/GetCategories";

interface CategoriesState {
  categories: CategoriesTypes[];
  isLoading: boolean;
  error: string;
}

const initialCategoriesState: CategoriesState = {
  categories: [],
  isLoading: false,
  error: "",
};

export const CategoriesSlice = createSlice({
  name: "Categories",
  initialState: initialCategoriesState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(GetCategories.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(GetCategories.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = "";
        state.categories = action.payload;
      })
      .addCase(GetCategories.rejected, (state) => {
        state.isLoading = false;
        state.error = "An unknown error has occurred";
      });
  },
});

export default CategoriesSlice.reducer;
