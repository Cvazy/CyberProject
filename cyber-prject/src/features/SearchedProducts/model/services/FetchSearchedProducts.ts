import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { serverUrl } from "app/constants";

export const FetchSearchedProducts = createAsyncThunk(
  "SearchedProducts/FetchSearchedProducts",
  async (searchedValue: string, { dispatch, rejectWithValue }) => {
    try {
      const response = await axios.get(
        `${serverUrl}/products?name_like=${searchedValue}`,
      );

      return response.data;
    } catch (error: any) {
      return rejectWithValue(error.response.data.message);
    }
  },
);
