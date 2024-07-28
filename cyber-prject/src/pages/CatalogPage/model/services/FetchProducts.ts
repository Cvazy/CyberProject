import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { serverUrl } from "app/constants";
import mergeFavoriteProducts from "widgets/ProductList/model/utils/mergeFavoriteProducts";

interface FetchPaginationProductsProps {
  userId: number;
  currentPage: string;
}

export const FetchPaginationProducts = createAsyncThunk(
  "Catalog/FetchPaginationProducts",
  async (
    { userId, currentPage }: FetchPaginationProductsProps,
    { dispatch, rejectWithValue },
  ) => {
    try {
      const response = await axios.get(
        `${serverUrl}/products?_page=${currentPage}&_limit=9`,
      );

      return mergeFavoriteProducts(response.data, userId);
    } catch (error: any) {
      return rejectWithValue(error.response.data.message);
    }
  },
);
