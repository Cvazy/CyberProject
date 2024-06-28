import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { serverUrl } from "app/constants";
import mergeFavoriteProducts from "../utils/mergeFavoriteProducts";

export const FetchBestsellerProducts = createAsyncThunk(
  "ProductList/FetchBestsellerProducts",
  async (_, { dispatch, rejectWithValue }) => {
    try {
      const response = await axios.get(
        `${serverUrl}/products?state=Bestseller`,
      );

      return mergeFavoriteProducts(response.data);
    } catch (error: any) {
      return rejectWithValue(error.response.data.message);
    }
  },
);
