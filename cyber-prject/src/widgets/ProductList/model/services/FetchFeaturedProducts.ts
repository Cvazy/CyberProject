import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { serverUrl } from "app/constants";
import mergeFavoriteProducts from "../utils/mergeFavoriteProducts";

export const FetchFeaturedProducts = createAsyncThunk(
  "ProductList/FetchFeaturedProducts",
  async (userId: number, { dispatch, rejectWithValue }) => {
    try {
      const response = await axios.get(
        `${serverUrl}/products?state=Featured%20Products`,
      );

      return mergeFavoriteProducts(response.data, userId);
    } catch (error: any) {
      return rejectWithValue(error.response.data.message);
    }
  },
);
