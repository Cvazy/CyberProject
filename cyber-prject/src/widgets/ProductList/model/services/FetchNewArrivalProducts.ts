import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { serverUrl } from "app/constants";
import mergeFavoriteProducts from "../utils/mergeFavoriteProducts";

export const FetchNewArrivalProducts = createAsyncThunk(
  "ProductList/FetchNewArrivalProducts",
  async (userId: number, { dispatch, rejectWithValue }) => {
    try {
      const response = await axios.get(
        `${serverUrl}/products?state=New%20Arrival`,
      );

      return mergeFavoriteProducts(response.data, userId);
    } catch (error: any) {
      return rejectWithValue(error.response.data.message);
    }
  },
);
