import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { serverUrl } from "app/constants";

export const FetchNewArrivalProducts = createAsyncThunk(
  "ProductCategoriesOnIndex/FetchNewArrivalProducts",
  async (_, { dispatch, rejectWithValue }) => {
    try {
      const response = await axios.get(
        `${serverUrl}/products?state=New%20Arrival`,
      );

      return response.data;
    } catch (error: any) {
      return rejectWithValue(error.response.data.message);
    }
  },
);
