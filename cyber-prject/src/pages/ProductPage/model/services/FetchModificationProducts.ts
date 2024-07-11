import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { serverUrl } from "app/constants";

interface FetchModificationProductsProps {
  deviceFamily: string;
}

export const FetchModificationProducts = createAsyncThunk(
  "Product/FetchModificationProducts",
  async (
    { deviceFamily }: FetchModificationProductsProps,
    { rejectWithValue },
  ) => {
    try {
      const response = await axios.get(
        `${serverUrl}/products?deviceFamily=${deviceFamily}`,
      );

      return response.data;
    } catch (error: any) {
      return rejectWithValue(error.response.data.message);
    }
  },
);
